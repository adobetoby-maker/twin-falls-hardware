'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/lib/cart-context'

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#374151]" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                Your Cart
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-[#B91C1C] transition-colors"
                aria-label="Close cart"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="text-[#B91C1C] font-semibold underline hover:no-underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map(item => (
                    <li key={item.id} className="flex gap-4 py-4 border-b border-gray-100">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#374151] truncate">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.unit}</p>
                        <p className="text-sm font-bold text-[#B91C1C] mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-[#B91C1C] transition-colors"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 border border-gray-200 rounded">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-6 py-4 space-y-3">
                <div className="flex justify-between text-lg font-bold text-[#374151]">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#B91C1C] text-white text-center font-bold py-3 rounded hover:bg-red-800 transition-colors"
                >
                  View Full Cart
                </Link>
                <Link
                  href="/cart#quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full border-2 border-[#374151] text-[#374151] text-center font-bold py-3 rounded hover:bg-gray-50 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
