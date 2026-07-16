import {PortableText, type PortableTextComponents} from '@portabletext/react'
import {ArrowLeft, Calendar, UserRound} from 'lucide-react'
import type {SanityArticle} from '../sanity/types'

interface ArticleDetailProps {
  article?: SanityArticle
  loading: boolean
  error: string | null
  onBack: () => void
}

interface ArticleBodyImage {
  url?: string
  alt?: string
  caption?: string
  lqip?: string
  dimensions?: {width: number; height: number}
}

const articleBodyComponents: PortableTextComponents = {
  types: {
    image: ({value}) => {
      const image = value as ArticleBodyImage
      if (!image.url) return null

      return (
        <figure className="my-10 overflow-hidden rounded-3xl bg-brand-gray">
          <img
            src={image.url}
            alt={image.alt || ''}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
            loading="lazy"
            className="h-auto w-full object-cover"
            style={image.lqip ? {backgroundImage: `url(${image.lqip})`, backgroundSize: 'cover'} : undefined}
          />
          {image.caption && (
            <figcaption className="px-5 py-3 text-center font-sans text-sm text-gray-500">
              {image.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export default function ArticleDetail({article, loading, error, onBack}: ArticleDetailProps) {
  if (loading) return <ArticleMessage message="Loading article..." />
  if (error) return <ArticleMessage message={error} />
  if (!article) return <ArticleMessage message="This article could not be found." />

  const publishedDate = article.publishedAt
    ? new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(article.publishedAt))
    : null

  return (
    <article className="bg-white pb-24">
      <header className="relative min-h-[520px] overflow-hidden bg-brand-dark">
        {article.image && (
          <img src={article.image} alt={article.imageAlt || article.title} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/20" />
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-end px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <span className="inline-flex rounded-full bg-brand-red px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider">
              {article.category || 'Article'}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{article.title}</h1>
            <div className="mt-6 flex flex-wrap gap-5 font-sans text-sm text-white/80">
              {publishedDate && <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{publishedDate}</span>}
              {article.author && <span className="flex items-center gap-2"><UserRound className="h-4 w-4" />{article.author}</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8">
        <button type="button" onClick={onBack} className="mb-10 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-red hover:text-brand-navy">
          <ArrowLeft className="h-4 w-4" /> Back to Articles
        </button>
        {article.excerpt && <p className="mb-10 border-l-4 border-brand-red pl-6 font-display text-xl font-medium leading-relaxed text-brand-dark">{article.excerpt}</p>}
        <div className="font-sans text-base leading-8 text-gray-600 [&_a]:text-brand-red [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_p]:mb-6">
          {article.body?.length ? (
            <PortableText value={article.body} components={articleBodyComponents} />
          ) : (
            <p>Article content will be added soon.</p>
          )}
        </div>
      </div>
    </article>
  )
}

function ArticleMessage({message}: {message: string}) {
  return <div className="mx-auto min-h-[70vh] max-w-7xl px-4 pb-24 pt-40 font-sans text-gray-600 sm:px-6 lg:px-8">{message}</div>
}
