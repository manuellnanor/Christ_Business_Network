import fs from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'
import {albums, asset, events, slugify, sourceAssetId} from './legacyContent.mjs'

const execute = process.argv.includes('--execute')
const client = getCliClient({apiVersion: '2026-07-12'}).withConfig({useCdn: false})

const retry = async (operation, label, attempts = 5) => {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation()
    } catch (error) {
      if (attempt === attempts) throw error
      const delay = attempt * 1500
      console.warn(`${label} failed (${error.code || error.message}); retrying in ${delay}ms`)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
}

const imageFilesFor = (album) => {
  if (album.imagePaths) return album.imagePaths
  const directory = asset('gallery', album.folder)
  return fs.readdirSync(directory)
    .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, {numeric: true}))
    .map((name) => path.join(directory, name))
}

const expandedAlbums = albums.map((album) => {
  const imagePaths = imageFilesFor(album)
  const coverPath = album.coverPath || (album.coverFile
    ? asset('gallery', album.folder, album.coverFile)
    : imagePaths[0])
  return {...album, imagePaths, coverPath}
})

const uniqueFiles = [...new Set([
  ...events.map((event) => event.imagePath),
  ...expandedAlbums.flatMap((album) => [album.coverPath, ...album.imagePaths]),
])]

console.log(`Events: ${events.length}`)
console.log(`Albums: ${expandedAlbums.length}`)
console.log(`Gallery entries: ${expandedAlbums.reduce((sum, album) => sum + album.imagePaths.length, 0)}`)
console.log(`Unique assets: ${uniqueFiles.length}`)

for (const filePath of uniqueFiles) {
  if (!fs.existsSync(filePath)) throw new Error(`Missing source asset: ${filePath}`)
}

if (!execute) {
  console.log('Dry run complete. Re-run with --execute to upload and create documents.')
  process.exit(0)
}

const uploaded = new Map()
for (const [index, filePath] of uniqueFiles.entries()) {
  const sourceId = sourceAssetId(filePath)
  const existing = await retry(() => client.fetch(
      '*[_type == "sanity.imageAsset" && source.id == $sourceId][0]._id',
      {sourceId},
    ), `Looking up ${path.basename(filePath)}`)
  const document = existing
    ? {_id: existing}
    : await retry(
        () => client.assets.upload('image', fs.createReadStream(filePath), {
          filename: path.basename(filePath),
          source: {id: sourceId, name: 'Legacy website'},
        }),
        `Uploading ${path.basename(filePath)}`,
      )
  uploaded.set(filePath, document._id)
  console.log(`[${index + 1}/${uniqueFiles.length}] ${existing ? 'Reused' : 'Uploaded'} ${path.basename(filePath)}`)
}

const imageValue = (filePath, alt) => ({
  _type: 'image',
  ...(alt ? {alt} : {}),
  asset: {_type: 'reference', _ref: uploaded.get(filePath)},
})

for (const event of events) {
  await retry(() => client.createOrReplace({
    _id: `legacy-event-${event.sourceId}`,
    _type: 'event',
    title: event.title,
    slug: {_type: 'slug', current: slugify(event.title)},
    featuredImage: imageValue(event.imagePath, event.title),
    excerpt: event.excerpt,
    startDate: event.startDate,
    ...(event.endDate ? {endDate: event.endDate} : {}),
    category: event.category,
    status: 'completed',
    isPublished: true,
  }), `Writing event ${event.title}`)
}

for (const [albumIndex, album] of expandedAlbums.entries()) {
  await retry(() => client.createOrReplace({
    _id: `legacy-gallery-${album.sourceId}`,
    _type: 'galleryAlbum',
    title: album.title,
    slug: {_type: 'slug', current: slugify(album.title)},
    coverImage: imageValue(album.coverPath, `${album.title} cover`),
    images: album.imagePaths.map((filePath, index) => ({
      _key: `image-${String(index + 1).padStart(3, '0')}`,
      _type: 'galleryImage',
      image: imageValue(filePath),
      caption: `${album.title} ${index + 1}`,
      alt: `${album.title} photo ${index + 1}`,
      displayOrder: index,
    })),
    displayOrder: albumIndex,
    isPublished: true,
  }), `Writing album ${album.title}`)
}

console.log(`Created or replaced ${events.length} events and ${expandedAlbums.length} albums.`)
