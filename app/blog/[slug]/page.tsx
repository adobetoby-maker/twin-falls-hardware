import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | Twin Falls Hardware`,
    description: article.excerpt,
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function shortTitle(title: string, max = 40): string {
  return title.length > max ? title.slice(0, max).trimEnd() + '…' : title
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug)
  const paragraphs = article.body.split('\n\n').filter(Boolean)

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Article header band */}
      <div className="bg-[#374151] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-5 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{shortTitle(article.title)}</span>
          </nav>

          {/* Category */}
          <span className="inline-block bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-3xl">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-3 text-white/80 italic text-base max-w-2xl">{article.excerpt}</p>

          {/* Meta */}
          <p className="mt-4 text-white/55 text-sm">
            {formatDate(article.date)} &middot; {article.readTime}
          </p>
        </div>
      </div>

      {/* Body + sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article body */}
          <article className="lg:col-span-2">
            <div className="bg-white rounded shadow-sm p-8 prose-like">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[#374151]/85 leading-relaxed mb-5 last:mb-0 text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-[#B91C1C] rounded p-7 text-center">
              <p className="text-white font-bold text-base leading-relaxed">
                Questions? We&apos;re here. Call{' '}
                <a href="tel:+12085550211" className="underline hover:no-underline">
                  (208) 555-0211
                </a>{' '}
                or visit us at 2180 Addison Ave W.
              </p>
            </div>

            {/* Back link */}
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#374151] font-semibold text-sm hover:text-[#B91C1C] transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded shadow-sm p-6 sticky top-6">
              <h2 className="text-lg font-black text-[#374151] uppercase mb-5">
                Related Articles
              </h2>

              <div className="space-y-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block border-b border-gray-100 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="inline-block bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-[#374151] text-sm leading-snug group-hover:text-[#B91C1C] transition-colors mb-1">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {formatDate(rel.date)} &middot; {rel.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
