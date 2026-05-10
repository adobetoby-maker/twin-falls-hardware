'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { products } from '@/lib/products'
import { categories } from '@/lib/categories'

export default function ProductsContent() {
  const { addItem } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [inStockOnly, setInStockOnly] = useState(false)

  const filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (inStockOnly && !p.inStock) return false
    return true
  })

  function resetFilters() {
    setSelectedCategory('all')
    setInStockOnly(false)
  }

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#B91C1C] transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-[#374151] font-semibold">Products</span>
          </nav>
          <h1 className="text-4xl font-bold uppercase text-[#374151]">Our Products</h1>
          <p className="mt-2 text-gray-500 text-sm">Tools, lumber, plumbing, electrical, paint and more — in stock today.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile: horizontal category tabs */}
        <div className="lg:hidden mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-sm font-semibold rounded transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#B91C1C] text-white'
                  : 'bg-white text-[#374151] border border-gray-200 hover:border-[#B91C1C] hover:text-[#B91C1C]'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-sm font-semibold rounded transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#B91C1C] text-white'
                    : 'bg-white text-[#374151] border border-gray-200 hover:border-[#B91C1C] hover:text-[#B91C1C]'
                }`}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded shadow-sm p-4 sticky top-24">
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Categories</h2>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 text-sm font-semibold rounded transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-[#B91C1C] text-white'
                        : 'text-[#374151] hover:bg-gray-50 hover:text-[#B91C1C]'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 text-sm font-semibold rounded transition-colors flex items-center gap-2 ${
                        selectedCategory === cat.id
                          ? 'bg-[#B91C1C] text-white'
                          : 'text-[#374151] hover:bg-gray-50 hover:text-[#B91C1C]'
                      }`}
                    >
                      <span aria-hidden="true" className="text-base">{cat.icon}</span>
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* In-stock filter */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={e => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#B91C1C] rounded"
                  />
                  <span className="text-sm font-semibold text-[#374151]">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile: in-stock filter + count row */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <p className="text-sm text-gray-500 font-medium">
                Showing <span className="text-[#374151] font-bold">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
              </p>
              <label className="flex items-center gap-2 cursor-pointer select-none lg:hidden">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={e => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 accent-[#B91C1C] rounded"
                />
                <span className="text-sm font-semibold text-[#374151]">In Stock Only</span>
              </label>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl font-bold text-gray-300 mb-3">No products match your filters</p>
                <p className="text-gray-400 mb-6 text-sm">Try removing some filters to see more results.</p>
                <button
                  onClick={resetFilters}
                  className="bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold uppercase tracking-wide px-6 py-3 text-sm transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="bg-white rounded overflow-hidden shadow-sm flex flex-col group"
                  >
                    {/* Image */}
                    <Link
                      href={`/products/${product.category}/${product.id}`}
                      className="block relative aspect-square overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&q=80`}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-1">
                      {/* Category badge */}
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wide">
                        {product.category.replace(/-/g, ' ')}
                      </span>

                      {/* Name */}
                      <Link href={`/products/${product.category}/${product.id}`}>
                        <h3 className="font-semibold text-[#374151] text-sm leading-snug mb-1 hover:text-[#B91C1C] transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      {/* SKU */}
                      <p className="text-xs text-gray-400 mb-2">SKU: {product.sku}</p>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-lg font-black text-[#B91C1C]">${product.price.toFixed(2)}</span>
                        <span className="text-xs text-gray-500">/ {product.unit}</span>
                      </div>

                      {/* Stock badge */}
                      <div className="mb-3">
                        {product.inStock ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button
                        onClick={() =>
                          product.inStock &&
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            unit: product.unit,
                            image: product.image,
                          })
                        }
                        disabled={!product.inStock}
                        className={`mt-auto w-full py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                          product.inStock
                            ? 'bg-[#B91C1C] hover:bg-[#991B1B] text-white'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
