'use client'

import { motion, type Variants } from 'framer-motion'
import SpecialOrderForm from './SpecialOrderForm'

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
// Data
// ---------------------------------------------------------------------------
const steps = [
  {
    number: '01',
    title: 'Contact Us',
    body: 'Call, email, or fill out the form below with the item you need.',
  },
  {
    number: '02',
    title: 'We Source It',
    body: 'We contact our suppliers immediately. For common items, often same day.',
  },
  {
    number: '03',
    title: 'You Pick Up or We Deliver',
    body: "We'll call when your order is ready. Delivery available for $75+ orders.",
  },
]

const categories = [
  {
    title: 'Specialty Lumber',
    body: 'Custom dimensions, exotic species, or treated grades not in stock',
  },
  {
    title: 'Commercial-Grade Tools',
    body: 'Professional contractor tools, specific brands, industrial specs',
  },
  {
    title: 'Bulk Fasteners',
    body: 'Large quantity orders, specialty grades, custom lengths',
  },
  {
    title: 'Plumbing & HVAC',
    body: 'Obscure fittings, older home parts, commercial fixtures',
  },
]

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="bg-[#B91C1C] py-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-black uppercase text-white leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          If We Don&apos;t Have It, We&apos;ll Get It
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-white/90 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Often same day. Always from a trusted source.
        </motion.p>

        <motion.p
          className="mt-5 text-white font-bold text-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          For urgent orders, call direct:{' '}
          <a href="tel:+12085550211" className="underline hover:no-underline">
            (208) 555-0211
          </a>
        </motion.p>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <div className="w-12 h-12 rounded-full bg-[#B91C1C] flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-white font-black text-sm">{step.number}</span>
              </div>
              <h3 className="font-black text-[#374151] text-lg uppercase mb-2">{step.title}</h3>
              <p className="text-[#374151]/80 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Popular Special Order Categories
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-[#FAFAF9] border border-gray-200 rounded p-6 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <div className="w-10 h-1 bg-[#B91C1C] mb-4" />
              <h3 className="font-black text-[#374151] text-base uppercase mb-2">{cat.title}</h3>
              <p className="text-[#374151]/75 text-sm leading-relaxed">{cat.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RequestFormSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Request a Special Order
        </motion.h2>
        <motion.p
          className="text-center text-[#374151]/70 text-sm mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={1}
        >
          Fill out the form below and we&apos;ll get back to you as soon as we have an update from
          our suppliers. For urgent needs, call{' '}
          <a href="tel:+12085550211" className="text-[#B91C1C] font-semibold">
            (208) 555-0211
          </a>
          .
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={2}
        >
          <SpecialOrderForm />
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Client root
// ---------------------------------------------------------------------------
export default function SpecialOrdersClient() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <CategoriesSection />
      <RequestFormSection />
    </>
  )
}
