'use client'

import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/products'

export default function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: product.image,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Qty selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-[#374151]">Qty:</span>
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            disabled={!product.inStock}
            className="px-3 py-2 text-[#374151] hover:bg-gray-100 transition-colors disabled:opacity-40 font-bold"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-2 text-[#374151] font-semibold min-w-[3rem] text-center">
            {qty}
          </span>
          <button
            onClick={() => setQty(q => Math.min(10, q + 1))}
            disabled={!product.inStock}
            className="px-3 py-2 text-[#374151] hover:bg-gray-100 transition-colors disabled:opacity-40 font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`w-full py-3 text-base font-bold uppercase tracking-wide transition-colors ${
          !product.inStock
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : added
            ? 'bg-green-600 text-white'
            : 'bg-[#B91C1C] hover:bg-[#991B1B] text-white'
        }`}
      >
        {!product.inStock ? 'Out of Stock' : added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  )
}
