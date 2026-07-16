import {ArrowUpRight, Calendar} from 'lucide-react'
import {motion} from 'motion/react'
import type {SanityArticle} from '../sanity/types'

interface ArticlesProps {
  articles: SanityArticle[]
  loading: boolean
  error: string | null
  onArticleClick: (slug: string) => void
}

const formatDate = (date?: string) => {
  if (!date) return 'CBN Article'
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return 'CBN Article'
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parsed)
}

export default function Articles({articles, loading, error, onArticleClick}: ArticlesProps) {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block rounded-full bg-brand-accent px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-red">
              Articles
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Insights, stories and Kingdom-minded resources
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-gray-600">
            Read news, practical insights and stories from the Christ Business Network community.
          </p>
        </div>

        {loading && <p className="text-gray-500">Loading articles...</p>}
        {error && <p role="alert" className="text-brand-red">{error}</p>}
        {!loading && !error && articles.length === 0 && (
          <p className="text-gray-500">There are no published articles yet.</p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <motion.article
              key={article._id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-brand-red/15 hover:shadow-lg"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-brand-dark">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-display text-5xl font-bold text-white/25">CBN</div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 font-sans text-xs font-bold text-white">
                    {article.category || 'Article'}
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-2 font-sans text-xs font-semibold text-gray-500">
                    <Calendar className="h-4 w-4 text-brand-red" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-brand-dark transition-colors group-hover:text-brand-red">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="line-clamp-3 font-sans text-xs leading-relaxed text-gray-600">{article.excerpt}</p>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onArticleClick(article.slug)}
                  className="group/btn flex w-full items-center justify-between border-t border-gray-50 pt-4 font-sans text-xs font-semibold uppercase tracking-wider text-brand-dark hover:text-brand-red"
                >
                  Read Article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
