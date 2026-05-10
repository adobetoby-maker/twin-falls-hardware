'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/lib/cart-context'

// ---------------------------------------------------------------------------
// Delivery threshold constants
// ---------------------------------------------------------------------------
const FREE_DELIVERY_THRESHOLD = 75

// ---------------------------------------------------------------------------
// Cart Item Row
// ---------------------------------------------------------------------------
function CartItemRow() {
  const { items, removeItem, updateQty } = useCart()

  return (
    <ul className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.id} className="flex gap-4 py-5">
          {/* Thumbnail */}
          <div className="relative w-16 h-16 rounded overflow-hidden bg-gray-100 shrink-0">
            {item.image ? (
              <Image
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=128&q=80`}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#374151] leading-snug">{item.name}</p>
            <p className="text-sm text-gray-500 mt-0.5">{item.unit}</p>
          </div>

          {/* Qty + Price + Remove */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            {/* Remove */}
            <button
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name} from cart`}
              className="text-gray-400 hover:text-[#B91C1C] transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
            </button>

            {/* Quantity controls */}
            <div className="flex items-center gap-1 border border-gray-200 rounded">
              <button
                onClick={() => updateQty(item.id, item.quantity - 1)}
                aria-label={`Decrease quantity of ${item.name}`}
                className="p-1.5 hover:bg-gray-100 transition-colors"
              >
                <MinusIcon className="w-3 h-3" />
              </button>
              <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQty(item.id, item.quantity + 1)}
                aria-label={`Increase quantity of ${item.name}`}
                className="p-1.5 hover:bg-gray-100 transition-colors"
              >
                <PlusIcon className="w-3 h-3" />
              </button>
            </div>

            {/* Line total */}
            <p className="text-sm font-bold text-[#B91C1C]">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

// ---------------------------------------------------------------------------
// Delivery Progress Bar
// ---------------------------------------------------------------------------
function DeliveryThreshold({ total }: { total: number }) {
  const progress = Math.min(100, (total / FREE_DELIVERY_THRESHOLD) * 100)
  const remaining = (FREE_DELIVERY_THRESHOLD - total).toFixed(2)
  const qualified = total >= FREE_DELIVERY_THRESHOLD

  return (
    <div className="mt-6 bg-[#FAFAF9] border border-gray-200 rounded p-4">
      <p className="text-sm font-semibold text-[#374151] mb-2">
        {qualified
          ? '✓ You\'ve qualified for FREE local delivery!'
          : `Add $${remaining} more for FREE local delivery`}
      </p>
      <div
        className="w-full bg-gray-200 rounded-full h-2"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Delivery threshold progress"
      >
        <div
          className="bg-[#B91C1C] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Order Summary
// ---------------------------------------------------------------------------
function OrderSummary({ total }: { total: number }) {
  const qualifies = total >= FREE_DELIVERY_THRESHOLD

  return (
    <div className="bg-white border border-gray-200 rounded p-6 sticky top-24">
      <h2 className="text-xl font-bold text-[#374151] mb-5">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-[#374151]">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#374151]">
          <span className="font-medium">Delivery</span>
          <span className={`font-semibold ${qualifies ? 'text-green-600' : ''}`}>
            {qualifies ? 'FREE (orders $75+)' : 'Calculated at checkout'}
          </span>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between">
          <span className="font-bold text-[#374151] text-base">Total</span>
          <span className="text-xl font-bold text-[#B91C1C]">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href="#quote"
          className="block w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-center font-bold uppercase tracking-wide py-3 rounded transition-colors"
        >
          Request a Quote
        </a>
        <a
          href="tel:+12085550211"
          className="block w-full border-2 border-[#374151] text-[#374151] hover:bg-gray-50 text-center font-bold py-3 rounded transition-colors text-sm"
        >
          Call to Order: (208) 555-0211
        </a>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Quote Request Form
// ---------------------------------------------------------------------------
function QuoteRequestForm() {
  const { items, total } = useCart()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [deliveryType, setDeliveryType] = useState('Delivery (Twin Falls area)')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, deliveryType, notes, items }),
      })

      if (!res.ok) throw new Error('Failed to send')
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please call us at (208) 555-0211.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-[#374151] mb-2">Request a Quote</h2>
      <p className="text-gray-500 text-sm mb-8">
        We&apos;ll confirm availability and pricing and contact you within 1 business day.
      </p>

      {success ? (
        <div className="bg-green-50 border border-green-200 rounded p-6 text-green-800 font-semibold">
          Your quote request has been received! We&apos;ll contact you within 1 business day at{' '}
          <span className="underline">{email}</span>.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
          {/* Name */}
          <div>
            <label htmlFor="quote-name" className="block text-sm font-semibold text-[#374151] mb-1">
              Name <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#374151] mb-1">
              Phone <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent"
              placeholder="(208) 555-0000"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="quote-email" className="block text-sm font-semibold text-[#374151] mb-1">
              Email <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          {/* Delivery or Pickup */}
          <div>
            <label htmlFor="quote-delivery" className="block text-sm font-semibold text-[#374151] mb-1">
              Fulfillment <span className="text-[#B91C1C]">*</span>
            </label>
            <select
              id="quote-delivery"
              required
              value={deliveryType}
              onChange={e => setDeliveryType(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent bg-white"
            >
              <option>Delivery (Twin Falls area)</option>
              <option>Will-Call Pickup</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="quote-notes" className="block text-sm font-semibold text-[#374151] mb-1">
              Notes
            </label>
            <textarea
              id="quote-notes"
              rows={4}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:border-transparent resize-none"
              placeholder="Special instructions, delivery address, or questions"
            />
          </div>

          {/* Cart contents (read-only) */}
          <div className="bg-[#FAFAF9] border border-gray-200 rounded p-4">
            <p className="text-sm font-semibold text-[#374151] mb-3">Items in Your Quote</p>
            <ul className="space-y-1 text-sm text-gray-600">
              {items.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} &times; {item.quantity} <span className="text-gray-400">/ {item.unit}</span>
                  </span>
                  <span className="font-semibold text-[#374151]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between text-sm font-bold text-[#374151]">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {error && (
            <p className="text-[#B91C1C] text-sm font-semibold" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#B91C1C] hover:bg-[#991B1B] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wide py-3.5 rounded transition-colors"
          >
            {loading ? 'Sending...' : 'Send Quote Request'}
          </button>
        </form>
      )}
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CartPage() {
  const { items, total } = useCart()
  const isEmpty = items.length === 0

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#B91C1C] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#374151] font-semibold">Cart</li>
          </ol>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#374151] mb-8">Your Cart</h1>

        {isEmpty ? (
          /* Empty state */
          <div className="bg-white border border-gray-200 rounded p-12 text-center max-w-md mx-auto">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold uppercase tracking-wide px-8 py-3 rounded transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* 2-col layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: cart items (2/3) */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded p-6">
                  <CartItemRow />
                  <DeliveryThreshold total={total} />
                  <div className="mt-6">
                    <Link
                      href="/products"
                      className="text-sm font-semibold text-[#B91C1C] hover:underline"
                    >
                      &larr; Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: order summary (1/3) */}
              <div className="lg:col-span-1">
                <OrderSummary total={total} />
              </div>
            </div>

            {/* Quote request form below */}
            <QuoteRequestForm />
          </>
        )}
      </div>
    </div>
  )
}
