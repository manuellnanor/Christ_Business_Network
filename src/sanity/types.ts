export interface SanityEvent {
  _id: string
  title: string
  slug?: string
  image?: string
  imageAlt?: string
  excerpt?: string
  details?: Array<{_type: string; _key?: string; [key: string]: unknown}>
  startDate: string
  endDate?: string
  location?: string
  organizer?: string
  registrationLink?: string
  category?: string
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
}

export interface SanityGalleryImage {
  _key: string
  image: string
  caption?: string
  alt?: string
  displayOrder?: number
}

export interface SanityGalleryAlbum {
  _id: string
  title: string
  slug?: string
  coverImage: string
  coverImageAlt?: string
  description?: string
  albumDate?: string
  category?: string
  images?: SanityGalleryImage[]
}

export interface SanityLeader {
  _id: string
  name: string
  title?: string
  role: string
  qualification?: string
  employment?: string
  assembly?: string
  image?: string
  imageAlt?: string
  bio?: Array<{_type: string; _key?: string; [key: string]: unknown}>
  displayOrder?: number
}
