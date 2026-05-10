'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import ContractorForm from './ContractorForm'

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
const benefits = [
  {
    title: 'Net-30 Terms',
    body: 'Buy now, pay in 30 days. Keep your cash flow moving.',
  },
  {
    title: 'Volume Pricing',
    body: 'The more you buy, the more you save. Tiered discounts starting at $500/month.',
  },
  {
    title: 'Dedicated Rep',
    body: 'One contact who knows your business. Not a 1-800 number.',
  },
  {
    title: 'Priority Will-Call',
    body: "Call ahead, we'll have your order pulled and ready at the dock.",
  },
]

const testimonials = [
  {
    quote:
      "I've had accounts at Home Depot and Lowe's. Nothing compares to having a rep who actually knows what I need.",
    author: 'Jason M.',
    role: 'Framing contractor, 8 years as customer',
  },
  {
    quote:
      "The net-30 terms alone changed my business. I'm not floating materials for 45 days anymore.",
    author: 'Lisa T.',
    role: 'Remodeling contractor',
  },
  {
    quote:
      "They've sourced things I couldn't find anywhere in the Magic Valley. Same week, sometimes same day.",
    author: 'Carlos R.',
    role: 'Plumbing contractor',
  },
]

const faqs = [
  {
    question: 'How long does account approval take?',
    answer:
      "We typically approve accounts within 24 business hours. You'll receive an email confirmation with your account number and discount schedule.",
  },
  {
    question: 'What are the discount tiers?',
    answer:
      'Tier 1 ($500+/mo): 5% off. Tier 2 ($1,000+/mo): 8% off. Tier 3 ($2,500+/mo): 12% off. Custom pricing available for larger accounts.',
  },
  {
    question: 'How do I place orders?',
    answer:
      'Call (208) 555-0211 or stop in. We can also set up a will-call account for phone-ahead orders with guaranteed dock pickup.',
  },
]

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1920&q=80"
          alt="Contractor working on a project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-black uppercase text-white leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Contractors Get More at Twin Falls Hardware
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-white/90 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Net-30 terms, volume pricing, dedicated account manager. Apply in minutes.
        </motion.p>

        <motion.div
          className="mt-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <a
            href="#apply"
            className="inline-block bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold uppercase tracking-wide px-10 py-4 transition-colors text-lg"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="bg-[#374151] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeUp}
            custom={i * 0.5}
          >
            <div className="w-10 h-1 bg-[#B91C1C] mb-4" />
            <h3 className="font-black text-white text-lg uppercase mb-2">{b.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed">{b.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#B91C1C]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          What Our Contractors Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="bg-white rounded p-7 shadow-md flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <StarRating />
              <p className="text-[#374151]/85 text-base leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-gray-100 pt-4">
                <span className="font-bold text-[#374151] text-sm">{t.author}</span>
                <span className="text-gray-400 text-xs ml-2">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Common Questions
        </motion.h2>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <h3 className="font-black text-[#374151] text-lg mb-2">{faq.question}</h3>
              <p className="text-[#374151]/80 text-sm leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplicationSection() {
  return (
    <section id="apply" className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Apply for a Contractor Account
        </motion.h2>
        <motion.p
          className="text-center text-[#374151]/70 text-sm mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={1}
        >
          We&apos;ll review your application and be in touch within 24 business hours.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={2}
        >
          <ContractorForm />
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Client root
// ---------------------------------------------------------------------------
export default function ContractorsClient() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ApplicationSection />
    </>
  )
}
