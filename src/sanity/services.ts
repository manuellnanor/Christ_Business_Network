import {sanityClient} from './client'
import {eventsQuery, galleryAlbumsQuery} from './queries'
import type {SanityEvent, SanityGalleryAlbum} from './types'

export function fetchEvents() {
  return sanityClient.fetch<SanityEvent[]>(eventsQuery)
}

export function fetchGalleryAlbums() {
  return sanityClient.fetch<SanityGalleryAlbum[]>(galleryAlbumsQuery)
}
