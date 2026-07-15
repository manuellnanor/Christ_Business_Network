import {defineQuery} from 'groq'

export const eventsQuery = defineQuery(`
  *[
    _type == "event" &&
    isPublished != false &&
    status != "cancelled"
  ] | order(startDate asc) {
    _id,
    title,
    "slug": slug.current,
    "image": featuredImage.asset->url,
    "imageAlt": featuredImage.alt,
    excerpt,
    details,
    startDate,
    endDate,
    location,
    organizer,
    registrationLink,
    category,
    status
  }
`)

export const galleryAlbumsQuery = defineQuery(`
  *[
    _type == "galleryAlbum" &&
    isPublished != false
  ] | order(displayOrder asc, albumDate desc) {
    _id,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    "coverImageAlt": coverImage.alt,
    description,
    albumDate,
    category,
    images[] | order(displayOrder asc) {
      _key,
      "image": image.asset->url,
      caption,
      alt,
      displayOrder
    }
  }
`)

export const leadersQuery = defineQuery(`
  *[
    _type == "leader" &&
    isPublished != false
  ] | order(displayOrder asc, name asc) {
    _id,
    name,
    title,
    role,
    qualification,
    employment,
    assembly,
    "image": portrait.asset->url,
    "imageAlt": portrait.alt,
    bio,
    displayOrder
  }
`)
