'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/products'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={fadeUp}
      custom={index}
      className="bg-white rounded overflow-hidden shadow-sm flex flex-col group"
    >
      {/* Image */}
      <Link href={`/products/${product.category}/${product.id}`} className="block relative aspect-square overflow-hidden">
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
    </motion.div>
  )
}

export default function CategoryProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
