# Legacy Events and Gallery Migration

## Inventory

- 3 events from `src/data.ts`
- 8 gallery albums
- 258 gallery entries backed by 256 album images and 2 standalone images
- 3 event featured images
- No locales, references, redirects, drafts, or rich-text source content

The two oldest albums only have one local image each, although their old cards claimed
45 and 24 items. The migration imports the files that exist rather than broken placeholders.

## Mapping

| Legacy source | Sanity target |
| --- | --- |
| `PROGRAMS[]` | `event` document |
| title/description/date | title, slug, excerpt, start/end date |
| local event image | uploaded `featuredImage` asset |
| `GALLERY_ALBUMS[]` | `galleryAlbum` document |
| album image arrays | `images[]` objects with stable keys |
| local album files | uploaded Sanity image assets |

Run from `studio/`:

```powershell
npm run migrate:legacy:dry
npm run migrate:legacy
npm run migrate:legacy:validate
```

The write command uses stable IDs, asset source IDs, and `createOrReplace`, so reruns
update the migrated records instead of duplicating them.
