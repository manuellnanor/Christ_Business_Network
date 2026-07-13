import {getCliClient} from 'sanity/cli'
import {albums, events} from './legacyContent.mjs'

const client = getCliClient({apiVersion: '2026-07-12'}).withConfig({useCdn: false})
const result = await client.fetch(`{
  "events": *[_id in $eventIds]{_id, title, "hasImage": defined(featuredImage.asset->_id)},
  "albums": *[_id in $albumIds]{
    _id,
    title,
    "imageCount": count(images),
    "brokenImages": count(images[!defined(image.asset->_id)]),
    "hasCover": defined(coverImage.asset->_id)
  }
}`, {
  eventIds: events.map((event) => `legacy-event-${event.sourceId}`),
  albumIds: albums.map((album) => `legacy-gallery-${album.sourceId}`),
})

console.log(JSON.stringify(result, null, 2))
const valid = result.events.length === events.length
  && result.events.every((event) => event.hasImage)
  && result.albums.length === albums.length
  && result.albums.every((album) => album.hasCover && album.brokenImages === 0)

if (!valid) {
  console.error('Migration validation failed.')
  process.exit(1)
}
console.log('Migration validation passed.')
