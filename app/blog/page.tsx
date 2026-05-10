import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog | Twin Falls Hardware & Supply',
  description:
    'Hardware tips, DIY guides, and expert advice from Twin Falls Hardware & Supply.',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Page header */}
      <div className="bg-[#374151] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="text-4xl font-bold uppercase text-white tracking-wide">
            Hardware Tips & Guides
          </h1>
          <p className="mt-3 text-white/75 text-base max-w-xl">
            Expert advice on tools, lumber, plumbing, and more — from the team at Twin Falls Hardware.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded shadow-sm overflow-hidden border-b-4 border-transparent hover:border-[#B91C1C] transition-colors"
            >
              <div className="p-7 flex flex-col h-full">
                {/* Category badge */}
                <span className="inline-block bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start">
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#374151] leading-snug mb-3 group-hover:text-[#B91C1C] transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#374151]/70 text-sm leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>

                {/* Meta + CTA */}
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <span>
                    {formatDate(article.date)} &middot; {article.readTime}
                  </span>
                  <span className="font-bold text-[#B91C1C] group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-[#B91C1C] rounded p-8 text-center">
          <p className="text-white font-bold text-lg">
            Have a question? We&apos;re happy to help —{' '}
            <a href="tel:+12085550211" className="underline hover:no-underline">
              (208) 555-0211
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
