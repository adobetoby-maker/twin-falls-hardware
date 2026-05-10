'use client'

import { useState, type FormEvent } from 'react'
import { motion, type Variants } from 'framer-motion'

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
}

// ---------------------------------------------------------------------------
// Store Info (left column)
// ---------------------------------------------------------------------------
function StoreInfo() {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-3xl font-black uppercase text-[#374151]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={0}
      >
        Visit or Call Us
      </motion.h2>

      {/* Address */}
      <motion.div
        className="space-y-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={1}
      >
        <p className="text-sm font-bold uppercase tracking-wide text-[#374151]/60">Address</p>
        <p className="text-[#374151] text-lg leading-snug">
          2180 Addison Ave W
          <br />
          Twin Falls, ID 83301
        </p>
      </motion.div>

      {/* Phone */}
      <motion.div
        className="space-y-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={2}
      >
        <p className="text-sm font-bold uppercase tracking-wide text-[#374151]/60">Phone</p>
        <a
          href="tel:+12085550211"
          className="text-[#B91C1C] text-3xl font-black hover:underline"
        >
          (208) 555-0211
        </a>
      </motion.div>

      {/* Email */}
      <motion.div
        className="space-y-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={3}
      >
        <p className="text-sm font-bold uppercase tracking-wide text-[#374151]/60">Email</p>
        <a
          href="mailto:info@twinfallshardware.com"
          className="text-[#374151] text-base hover:text-[#B91C1C] transition-colors underline"
        >
          info@twinfallshardware.com
        </a>
      </motion.div>

      {/* Hours */}
      <motion.div
        className="space-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={4}
      >
        <p className="text-sm font-bold uppercase tracking-wide text-[#374151]/60">Store Hours</p>
        <div className="space-y-1">
          <div className="flex justify-between max-w-xs">
            <span className="text-[#374151] font-medium">Monday – Saturday</span>
            <span className="text-[#374151]">7:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between max-w-xs">
            <span className="text-[#374151] font-medium">Sunday</span>
            <span className="text-[#374151]">9:00 AM – 4:00 PM</span>
          </div>
        </div>
      </motion.div>

      {/* Map / Directions card */}
      <motion.div
        className="bg-white border border-gray-200 rounded-lg p-5 space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={5}
      >
        <p className="text-[#374151] text-sm leading-relaxed">
          Located on Addison Ave W, 2 blocks west of Blue Lakes Blvd
        </p>
        <a
          href="https://maps.google.com/?q=2180+Addison+Ave+W+Twin+Falls+ID+83301"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#B91C1C] text-white font-bold text-sm px-4 py-2.5 rounded hover:bg-[#991b1b] transition-colors"
        >
          <span>&#128205;</span> Get Directions
        </a>
      </motion.div>

      {/* Emergency note */}
      <motion.p
        className="text-sm text-[#374151]/70 italic"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={6}
      >
        For contractor emergencies outside hours, call{' '}
        <a href="tel:+12085550211" className="font-bold text-[#374151] hover:text-[#B91C1C] transition-colors">
          (208) 555-0211
        </a>
      </motion.p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Contact Form (right column)
// ---------------------------------------------------------------------------
const QUESTION_TYPES = [
  'Order Inquiry',
  'Special Order',
  'Contractor Account',
  'General Question',
] as const

function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [questionType, setQuestionType] = useState<string>('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, questionType, message }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full border border-gray-300 rounded px-3 py-2.5 text-[#374151] text-sm focus:outline-none focus:ring-2 focus:ring-[#B91C1C]/40 focus:border-[#B91C1C] transition-colors bg-white'

  return (
    <div>
      <motion.h2
        className="text-3xl font-black uppercase text-[#374151] mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={fadeUp}
        custom={0}
      >
        Send Us a Message
      </motion.h2>

      {status === 'success' ? (
        <motion.div
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-green-800 font-bold text-lg mb-1">Message sent!</p>
          <p className="text-green-700 text-sm">
            We&apos;ll get back to you within 1 business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={1}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-1.5">
              Name <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className={inputBase}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-1.5">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(208) 555-0000"
              className={inputBase}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-1.5">
              Email <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputBase}
            />
          </div>

          {/* Question Type */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-1.5">
              Question Type <span className="text-[#B91C1C]">*</span>
            </label>
            <select
              required
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className={inputBase}
            >
              <option value="" disabled>
                Select a category
              </option>
              {QUESTION_TYPES.map((qt) => (
                <option key={qt} value={qt}>
                  {qt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-[#374151] mb-1.5">
              Message <span className="text-[#B91C1C]">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              className={`${inputBase} resize-y`}
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
              Something went wrong. Please call us directly at{' '}
              <a href="tel:+12085550211" className="font-bold underline">
                (208) 555-0211
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#B91C1C] text-white font-black uppercase tracking-wide py-3 rounded hover:bg-[#991b1b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
        </motion.form>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page Hero
// ---------------------------------------------------------------------------
function PageHero() {
  return (
    <section className="bg-[#374151] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-white/50 mb-4">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-white/80">Contact Us</span>
        </nav>
        <h1 className="text-5xl font-black uppercase text-white leading-tight">Contact Us</h1>
        <p className="mt-3 text-white/70 text-lg">We&apos;re here to help — stop by, call, or send a message.</p>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Client root
// ---------------------------------------------------------------------------
export default function ContactClient() {
  return (
    <>
      <PageHero />
      <section className="py-16 px-6 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <StoreInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
