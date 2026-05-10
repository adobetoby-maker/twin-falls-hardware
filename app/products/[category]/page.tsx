import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { categories, getCategoryById } from '@/lib/categories'
import { getProductsByCategory } from '@/lib/products'
import CategoryProductsGrid from '@/components/products/CategoryProductsGrid'

export async function generateStaticParams() {
  return categories.map(cat => ({ category: cat.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategoryById(category)
  if (!cat) return {}
  return {
    title: `${cat.name} | Twin Falls Hardware & Supply`,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategoryById(category)
  if (!cat) notFound()

  const catProducts = getProductsByCategory(category)

  // Cross-sell: up to 4 other categories
  const otherCategories = categories.filter(c => c.id !== category).slice(0, 4)

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Hero */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={`https://images.unsplash.com/${cat.image}?auto=format&fit=crop&w=1920&q=80`}
          alt={cat.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/70 mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white transition-colors font-medium">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors font-medium">Products</Link>
              <span>/</span>
              <span className="text-white font-semibold">{cat.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl" aria-hidden="true">{cat.icon}</span>
              <h1 className="text-5xl font-black uppercase text-white leading-tight">{cat.name}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[#374151]/80 text-base leading-relaxed max-w-3xl">{cat.description}</p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black uppercase text-[#374151]">
            {catProducts.length} Product{catProducts.length !== 1 ? 's' : ''}
          </h2>
        </div>

        {catProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-gray-300 mb-3">No products in this category yet</p>
            <Link
              href="/products"
              className="inline-block bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold uppercase tracking-wide px-6 py-3 text-sm transition-colors mt-4"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <CategoryProductsGrid products={catProducts} />
        )}
      </div>

      {/* Cross-sell: You might also need */}
      {otherCategories.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase text-[#374151] mb-6">You Might Also Need</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherCategories.map(other => (
                <Link
                  key={other.id}
                  href={`/products/${other.id}`}
                  className="group block relative rounded overflow-hidden aspect-video"
                >
                  <Image
                    src={`https://images.unsplash.com/${other.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={other.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg" aria-hidden="true">{other.icon}</span>
                      <span className="text-white font-black uppercase text-xs tracking-wide">{other.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
