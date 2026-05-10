'use client'

import { useState } from 'react'

interface FormState {
  businessName: string
  licenseNumber: string
  licenseType: string
  yearsInBusiness: string
  contactName: string
  phone: string
  email: string
  monthlySpend: string
}

const initialState: FormState = {
  businessName: '',
  licenseNumber: '',
  licenseType: '',
  yearsInBusiness: '',
  contactName: '',
  phone: '',
  email: '',
  monthlySpend: '',
}

const licenseTypes = [
  'General Commercial Builder',
  'General Residential Builder',
  'Remodeler',
  'Electrical',
  'Plumbing',
  'HVAC',
  'Fire Sprinkler',
  'Other',
]

const monthlySpendOptions = [
  'Under $500',
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
]

const labelClass = 'block text-sm font-bold uppercase tracking-wide text-[#374151] mb-1'
const inputClass =
  'w-full border border-gray-300 px-4 py-3 text-[#374151] focus:outline-none focus:border-[#B91C1C] bg-white text-sm'

export default function ContractorForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contractor-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          yearsInBusiness: Number(form.yearsInBusiness),
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
          Application received! We&apos;ll review it and contact you within 24 business hours at{' '}
          <span className="text-[#B91C1C]">{form.email}</span>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Business Name */}
      <div className="md:col-span-2">
        <label htmlFor="businessName" className={labelClass}>
          Business Name <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          required
          value={form.businessName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* License Number */}
      <div>
        <label htmlFor="licenseNumber" className={labelClass}>
          Idaho Contractor License # <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="licenseNumber"
          name="licenseNumber"
          type="text"
          required
          value={form.licenseNumber}
          onChange={handleChange}
          className={inputClass}
        />
        <p className="mt-1 text-xs text-gray-500">
          General, electrical, plumbing, HVAC, or other trade license number
        </p>
      </div>

      {/* License Type */}
      <div>
        <label htmlFor="licenseType" className={labelClass}>
          License Type <span className="text-[#B91C1C]">*</span>
        </label>
        <select
          id="licenseType"
          name="licenseType"
          required
          value={form.licenseType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a type…</option>
          {licenseTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Years in Business */}
      <div>
        <label htmlFor="yearsInBusiness" className={labelClass}>
          Years in Business <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="yearsInBusiness"
          name="yearsInBusiness"
          type="number"
          required
          min={1}
          value={form.yearsInBusiness}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Contact Name */}
      <div>
        <label htmlFor="contactName" className={labelClass}>
          Contact Name <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          required
          value={form.contactName}
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

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-[#B91C1C]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Monthly Spend */}
      <div className="md:col-span-2">
        <label htmlFor="monthlySpend" className={labelClass}>
          Estimated Monthly Spend
        </label>
        <select
          id="monthlySpend"
          name="monthlySpend"
          value={form.monthlySpend}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a range…</option>
          {monthlySpendOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
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
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
