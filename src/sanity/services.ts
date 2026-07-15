import {sanityClient} from './client'
import {eventsQuery, galleryAlbumsQuery, leadersQuery} from './queries'
import type {SanityEvent, SanityGalleryAlbum, SanityLeader} from './types'

export function fetchEvents() {
  return sanityClient.fetch<SanityEvent[]>(eventsQuery)
}

export function fetchGalleryAlbums() {
  return sanityClient.fetch<SanityGalleryAlbum[]>(galleryAlbumsQuery)
}

export function fetchLeaders() {
  return sanityClient.fetch<SanityLeader[]>(leadersQuery)
}
