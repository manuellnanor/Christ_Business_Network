import {createClient} from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity configuration. Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.',
  )
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-07-12',
  // Publishing should be reflected immediately instead of waiting for the CDN.
  useCdn: false,
})
