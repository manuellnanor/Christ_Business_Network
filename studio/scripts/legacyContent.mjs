import path from 'node:path'
import {fileURLToPath} from 'node:url'

const studioDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const rootDir = path.resolve(studioDir, '..')
export const asset = (...parts) => path.join(rootDir, 'assets', ...parts)

export const events = [
  {sourceId: 'prog-1', title: 'Annual Dinner', category: 'Dinner', excerpt: 'A special evening of fellowship, celebration, and networking for Christ Business Network members and invited guests.', startDate: '2026-02-28T12:00:00.000Z', imagePath: asset('event-annual-dinner.jpg')},
  {sourceId: 'prog-2', title: '9th Annual Congress', category: 'Congress', excerpt: 'A gathering for CBN members to arise, build, and occupy the Kingdom of God through fellowship, learning, and shared purpose.', startDate: '2025-12-05T12:00:00.000Z', imagePath: asset('event-annual-congress.jpg')},
  {sourceId: 'prog-3', title: 'Career Mentorship Seminar', category: 'Mentorship', excerpt: 'A career-focused mentorship session designed to guide, equip, and inspire young professionals for purposeful growth.', startDate: '2025-09-11T12:00:00.000Z', endDate: '2025-09-13T12:00:00.000Z', imagePath: asset('event-career-mentorship.jpg')},
]

export const albums = [
  {sourceId: 'annual-dinner', title: 'CBN Annual Dinner', folder: 'annual-dinner', coverFile: 'annual-dinner-32.jpg'},
  {sourceId: 'ninth-congress', title: 'CBN 9th Congress', folder: 'cbn-9th-congress', coverPath: asset('event-annual-congress.jpg')},
  {sourceId: 'career-mentorship', title: 'Career Mentorship Session with Accra West T. Youth Ministry', folder: 'career-mentorship', coverPath: asset('event-career-mentorship.jpg')},
  {sourceId: 'end-of-year-dinner', title: 'End of Year Dinner 2024', folder: 'end-of-year-dinner'},
  {sourceId: 'eighth-congress', title: 'CBN 8th Annual Congress 2024', folder: 'cbn-8th-congress'},
  {sourceId: 'thanksgiving-service', title: 'Thanksgiving Service 2022', folder: 'thanksgiving'},
  {sourceId: 'convofeast', title: 'ConvoFeast 2022', imagePaths: [asset('about-networking.jpeg')]},
  {sourceId: 'mentoring-casa', title: 'Mentoring Session - CASA Congress 2021', imagePaths: [asset('hero-networking.jpeg')]},
]

export const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
export const sourceAssetId = (filePath) => `legacy-site:${path.relative(rootDir, filePath).replaceAll('\\', '/')}`
