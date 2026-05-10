import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, getProductById, getProductsByCategory } from '@/lib/products'
import { getCategoryById } from '@/lib/categories'
import AddToCartSection from '@/components/products/AddToCartSection'
import ShareButton from '@/components/products/ShareButton'

export async function generateStaticParams() {
  return products.map(p => ({ category: p.category, id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return {}
  return {
    title: `${product.name} — $${product.price.toFixed(2)} | Twin Falls Hardware & Supply`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const { category, id } = await params
  const product = getProductById(id)

  if (!product || product.category !== category) notFound()

  const cat = getCategoryById(category)

  // Related products: same category, exclude current, up to 3
  const related = getProductsByCategory(category)
    .filter(p => p.id !== id)
    .slice(0, 3)

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#B91C1C] transition-colors font-medium">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#B91C1C] transition-colors font-medium">Products</Link>
            <span>/</span>
            {cat && (
              <>
                <Link
                  href={`/products/${category}`}
                  className="hover:text-[#B91C1C] transition-colors font-medium"
                >
                  {cat.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#374151] font-semibold line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded shadow-sm p-6 md:p-10">
          {/* Left: Image */}
          <div className="relative aspect-square rounded overflow-hidden bg-gray-50">
            <Image
              src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=800&q=80`}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            {/* Category badge */}
            {cat && (
              <Link
                href={`/products/${category}`}
                className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit mb-3 uppercase tracking-wide hover:bg-gray-200 transition-colors"
              >
                {cat.icon} {cat.name}
              </Link>
            )}

            {/* Name */}
            <h1 className="text-3xl font-bold text-[#374151] leading-tight mb-1">{product.name}</h1>

            {/* SKU */}
            <p className="text-sm text-gray-400 mb-4">SKU: {product.sku}</p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-[#B91C1C]">${product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-500">/ {product.unit}</span>
            </div>

            {/* Stock badge */}
            <div className="mb-4">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-[#374151]/80 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Add to Cart section */}
            <AddToCartSection product={product} />

            {/* Share button */}
            <div className="mt-4">
              <ShareButton />
            </div>

            {/* In-store note */}
            {!product.inStock && (
              <p className="mt-4 text-xs text-gray-500 italic">
                This item may be available via special order. Call us at{' '}
                <a href="tel:+12085550211" className="text-[#B91C1C] font-semibold hover:underline">
                  (208) 555-0211
                </a>{' '}
                for availability.
              </p>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-black uppercase text-[#374151] mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.category}/${rel.id}`}
                  className="group bg-white rounded overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/${rel.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#374151] text-sm leading-snug mb-1 group-hover:text-[#B91C1C] transition-colors">
                      {rel.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-base font-black text-[#B91C1C]">${rel.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-500">/ {rel.unit}</span>
                    </div>
                    {rel.inStock ? (
                      <span className="inline-block mt-1.5 text-xs font-semibold text-green-700">In Stock</span>
                    ) : (
                      <span className="inline-block mt-1.5 text-xs font-semibold text-gray-400">Out of Stock</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
