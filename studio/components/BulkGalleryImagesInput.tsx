import UploadIcon from '@sanity/icons/Upload'
import {Box, Button, Card, Flex, Stack, Text} from '@sanity/ui'
import {useRef, useState} from 'react'
import {type ArrayOfObjectsInputProps, type InputProps, useClient} from 'sanity'

type GalleryImageItem = {
  _key: string
  _type: 'galleryImage'
  image: {
    _type: 'image'
    asset: {_type: 'reference'; _ref: string}
  }
  caption: string
  alt: string
  displayOrder: number
}

const labelFromFilename = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const createKey = () => crypto.randomUUID().replaceAll('-', '').slice(0, 12)

export function BulkGalleryImagesInput(props: InputProps) {
  const arrayProps = props as ArrayOfObjectsInputProps
  const client = useClient({apiVersion: '2026-07-13'})
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState({current: 0, total: 0})
  const [error, setError] = useState<string | null>(null)

  const uploadFiles = async (fileList: FileList | null) => {
    const files = Array.from(fileList || []).filter((file) => file.type.startsWith('image/'))
    if (!files.length) return

    setUploading(true)
    setError(null)
    setProgress({current: 0, total: files.length})

    const startingOrder = arrayProps.value?.length || 0
    const failed: string[] = []
    let uploadedCount = 0

    for (const [index, file] of files.entries()) {
      try {
        const asset = await client.assets.upload('image', file, {filename: file.name})
        const label = labelFromFilename(file.name) || `Gallery image ${startingOrder + index + 1}`

        const item: GalleryImageItem = {
          _key: createKey(),
          _type: 'galleryImage',
          image: {
            _type: 'image',
            asset: {_type: 'reference', _ref: asset._id},
          },
          caption: label,
          alt: label,
          displayOrder: startingOrder + uploadedCount,
        }
        arrayProps.onItemAppend(item)
        uploadedCount += 1
      } catch (uploadError) {
        console.error(`Failed to upload ${file.name}`, uploadError)
        failed.push(file.name)
      } finally {
        setProgress({current: index + 1, total: files.length})
      }
    }

    if (failed.length) {
      setError(`${failed.length} image${failed.length === 1 ? '' : 's'} could not be uploaded: ${failed.join(', ')}`)
    }

    if (inputRef.current) inputRef.current.value = ''
    setUploading(false)
  }

  return (
    <Stack space={3}>
      <Card border padding={3} radius={2} tone="primary">
        <Flex align="center" gap={3} wrap="wrap">
          <Box flex={1}>
            <Stack space={2}>
              <Text size={1} weight="semibold">
                Bulk upload album images
              </Text>
              <Text muted size={1}>
                Select several images and they will be added as editable gallery items.
              </Text>
            </Stack>
          </Box>
          <Button
            disabled={arrayProps.readOnly || uploading}
            icon={UploadIcon}
            loading={uploading}
            mode="ghost"
            onClick={() => inputRef.current?.click()}
            text={
              uploading
                ? `Uploading ${progress.current} of ${progress.total}`
                : 'Select multiple images'
            }
            tone="primary"
          />
          <input
            ref={inputRef}
            accept="image/*"
            aria-label="Select multiple gallery images"
            disabled={arrayProps.readOnly || uploading}
            hidden
            multiple
            onChange={(event) => void uploadFiles(event.currentTarget.files)}
            type="file"
          />
        </Flex>
      </Card>

      {error && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>{error}</Text>
        </Card>
      )}

      {props.renderDefault(props)}
    </Stack>
  )
}
