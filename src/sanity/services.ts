import {sanityClient} from './client'
import {articlesQuery, eventsQuery, galleryAlbumsQuery, leadersQuery, membersQuery} from './queries'
import type {SanityArticle, SanityEvent, SanityGalleryAlbum, SanityLeader, SanityMember} from './types'

export function fetchEvents() {
  return sanityClient.fetch<SanityEvent[]>(eventsQuery)
}

export function fetchGalleryAlbums() {
  return sanityClient.fetch<SanityGalleryAlbum[]>(galleryAlbumsQuery)
}

export function fetchLeaders() {
  return sanityClient.fetch<SanityLeader[]>(leadersQuery)
}

export function fetchMembers() {
  return sanityClient.fetch<SanityMember[]>(membersQuery)
}

export function fetchArticles() {
  return sanityClient.fetch<SanityArticle[]>(articlesQuery)
}
