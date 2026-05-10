'use client'

import { useState } from 'react'

interface FormState {
  name: string
  phone: string
  itemDescription: string
  quantity: string
  neededBy: string
  notes: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  itemDescription: '',
  quantity: '',
  neededBy: '',
  notes: '',
}

const labelClass = 'block text-sm font-bold uppercase tracking-wide text-[#374151] mb-1'
const inputClass =
  'w-full border border-gray-300 px-4 py-3 text-[#374151] focus:outline-none focus:border-[#B91C1C] bg-white text-sm'

// Compute today's date string in YYYY-MM-DD for the min attribute
function todayString() {
  return new Date().toISOString().split('T')[0]
}

export default function SpecialOrderForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/special-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          quantity: Number(form.quantity),
        }),
      })

      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
        <p className="text-green-800 font-bold text-lg">
          Request received! We&apos;ll reach out to you at{' '}
          <span className="text-[#B91C1C]">{form.phone}</span> as soon as we have an update.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Item Description */}
      <div className="md:col-span-2">
        <label htmlFor="itemDescription" className={labelClass}>
          Item Description <span className="text-[#B91C1C]">*</span>
        </label>
        <textarea
          id="itemDescription"
          name="itemDescription"
          required
          rows={4}
          value={form.itemDescription}
          onChange={handleChange}
          placeholder="Be as specific as possible: brand, model, size, grade, quantity"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className={labelClass}>
          Quantity <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          required
          min={1}
          value={form.quantity}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Needed By */}
      <div>
        <label htmlFor="neededBy" className={labelClass}>
          When Needed By <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="neededBy"
          name="neededBy"
          type="date"
          required
          min={todayString()}
          value={form.neededBy}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Additional Notes */}
      <div className="md:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Additional Notes <span className="text-gray-400 text-xs font-normal normal-case ml-1">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="md:col-span-2">
          <p className="text-[#B91C1C] text-sm font-semibold">
            Something went wrong. Please call us at (208) 555-0211 or try again.
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full md:w-auto bg-[#B91C1C] hover:bg-[#991B1B] disabled:bg-gray-400 text-white font-bold uppercase tracking-wide px-10 py-4 transition-colors text-base"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
        </button>
      </div>
    </form>
  )
}
