import {PortableText} from '@portabletext/react'
import {ArrowUpRight, X} from 'lucide-react'
import {useEffect, useState} from 'react'
import {fetchLeaders} from '../sanity/services'
import type {SanityLeader} from '../sanity/types'

export default function Leaders() {
  const [leaders, setLeaders] = useState<SanityLeader[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLeader, setSelectedLeader] = useState<SanityLeader | null>(null)

  useEffect(() => {
    let active = true

    fetchLeaders()
      .then((sanityLeaders) => {
        if (active) setLeaders(sanityLeaders)
      })
      .catch((fetchError) => {
        console.error('Unable to load Sanity leaders', fetchError)
        if (active) setError('Leadership profiles could not be loaded. Please try again shortly.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!selectedLeader) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedLeader(null)
    }
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedLeader])

  return (
    <section className="bg-brand-gray py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-sans text-sm font-semibold text-brand-dark shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Our Leadership
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
            Meet the people serving our community
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-gray-600">
            Our leaders bring together faith, professional excellence and a shared commitment to advancing Christ-centred business.
          </p>
        </div>

        {loading && <p className="text-center text-gray-600">Loading leadership profiles...</p>}
        {error && <p className="text-center text-brand-red">{error}</p>}
        {!loading && !error && leaders.length === 0 && (
          <p className="text-center text-gray-600">Leadership profiles will be published soon.</p>
        )}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <button
              key={leader._id}
              type="button"
              onClick={() => setSelectedLeader(leader)}
              aria-label={`View ${leader.name} profile`}
              className="group relative h-[430px] overflow-hidden rounded-3xl bg-brand-dark text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/35"
            >
              {leader.image ? (
                <img
                  src={leader.image}
                  alt={leader.imageAlt || leader.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-navy font-display text-7xl font-bold text-white/25">
                  {leader.name.charAt(0)}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="font-display text-2xl font-bold leading-tight">{leader.name}</p>
                <div className="my-4 h-px bg-white/20" />
                <p className="font-sans text-sm leading-relaxed text-white/90">{leader.role}</p>
              </div>
              <span className="absolute right-6 top-6 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-brand-dark opacity-0 shadow-sm transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedLeader && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-dark/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-profile-title"
          onMouseDown={() => setSelectedLeader(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-2xl md:grid-cols-[0.92fr_1.08fr]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[260px] bg-brand-dark md:min-h-[570px]">
              {selectedLeader.image ? (
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.imageAlt || selectedLeader.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center font-display text-8xl font-bold text-white/25">
                  {selectedLeader.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="min-h-0 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-brand-accent px-3 py-1 font-sans text-xs font-semibold text-brand-red">
                    Leadership Profile
                  </span>
                  <h3 id="leader-profile-title" className="mt-4 font-display text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
                    {selectedLeader.title ? `${selectedLeader.title} ` : ''}{selectedLeader.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-wide text-brand-red">
                    {selectedLeader.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  aria-label="Close leadership profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gray text-brand-dark transition-colors hover:bg-brand-dark hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/35"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-6 h-px bg-gray-200" />
              <div className="grid gap-4 font-sans text-sm text-gray-600">
                {selectedLeader.qualification && <ProfileDetail label="Professional qualification" value={selectedLeader.qualification} />}
                {selectedLeader.employment && <ProfileDetail label="Current employment" value={selectedLeader.employment} />}
                {selectedLeader.assembly && <ProfileDetail label="Local assembly" value={selectedLeader.assembly} />}
              </div>

              <div className="mt-7 font-sans text-base leading-relaxed text-gray-600 [&_p]:mb-4">
                {selectedLeader.bio?.length ? (
                  <PortableText value={selectedLeader.bio} />
                ) : (
                  <p>This leader's full profile will be added soon.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ProfileDetail({label, value}: {label: string; value: string}) {
  return (
    <div>
      <span className="block font-semibold text-brand-dark">{label}</span>
      <span>{value}</span>
    </div>
  )
}
