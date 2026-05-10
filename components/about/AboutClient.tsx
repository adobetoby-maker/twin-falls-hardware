'use client'

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
// Data
// ---------------------------------------------------------------------------
const timelineEvents = [
  {
    year: '1987',
    text: 'Dale Hendricks founds Twin Falls Hardware & Supply with a single storefront on Addison Ave W',
  },
  {
    year: '2001',
    text: 'Gary Hendricks takes over as owner and expands the lumber yard',
  },
  {
    year: '2009',
    text: 'Major building expansion adds 4,000 sq ft of retail floor space and a dedicated contractor counter',
  },
  {
    year: '2017',
    text: 'Online presence launched; same-day special order program formalized',
  },
  {
    year: '2024',
    text: 'Local delivery service launched for orders $75+',
  },
]

const teamMembers = [
  { initials: 'SW', name: 'Sandra W.', role: 'Store Manager', tenure: 18 },
  { initials: 'MJ', name: 'Mike J.', role: 'Lumber & Building Sales', tenure: 12 },
  { initials: 'AP', name: 'Angela P.', role: 'Paint Department', tenure: 9 },
  { initials: 'DR', name: 'Dave R.', role: 'Contractor Account Manager', tenure: 6 },
]

const communityItems = [
  {
    title: 'Youth Sports Sponsor',
    body: 'Twin Falls Little League, Boys & Girls Club',
  },
  {
    title: 'Rotary Member',
    body: 'Gary serves on the Twin Falls Rotary Club board',
  },
  {
    title: 'Annual Tool Drive',
    body: 'Every November, we collect tools for the Idaho Vocational Education Fund',
  },
]

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1920&q=80"
          alt="Twin Falls Hardware store interior"
          className="w-full h-full object-cover"
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
          Your Neighbor in the Hardware Business Since 1987
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-white/90 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Family-owned and operated in Twin Falls, Idaho
        </motion.p>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Owner Bio
// ---------------------------------------------------------------------------
function OwnerBioSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#374151] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Meet Gary Hendricks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeUp}
            custom={1}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=512&q=80"
              alt="Gary Hendricks, owner of Twin Falls Hardware & Supply"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={fadeUp}
            custom={2}
          >
            <p className="text-[#374151]/85 leading-relaxed">
              Gary Hendricks grew up in Twin Falls, the son of Dale Hendricks who founded the store
              in 1987. Dale started with a small storefront on Addison Ave with $40,000 in inventory
              and a belief that Twin Falls deserved a hardware store that treated customers like
              neighbors, not transactions.
            </p>
            <p className="text-[#374151]/85 leading-relaxed">
              Gary took over the business in 2001 after working every role in the store — from stock
              boy to sales floor to purchasing. Today he runs a staff of 12 and maintains the same
              philosophy his father started with: know your customers, stock what they need, and never
              stop learning the trades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Timeline
// ---------------------------------------------------------------------------
function TimelineSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#374151] mb-16 text-center uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Our Story
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={event.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeUp}
                  custom={i * 0.5}
                >
                  {/* Content (desktop: half width) */}
                  <div
                    className={`pl-12 md:pl-0 md:w-5/12 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <span className="text-3xl font-black text-[#B91C1C] block mb-1">
                      {event.year}
                    </span>
                    <p className="text-[#374151]/80 text-sm leading-relaxed">{event.text}</p>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex md:w-2/12 justify-center items-start pt-1">
                    <div className="w-4 h-4 rounded-full bg-[#B91C1C] border-4 border-white shadow ring-2 ring-[#B91C1C]/30 z-10" />
                  </div>

                  {/* Empty spacer for the other side (desktop) */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Mobile dot */}
                  <div className="absolute left-3 top-1 md:hidden">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#B91C1C] border-2 border-white shadow z-10" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------
function TeamSection() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#374151] mb-12 text-center uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white rounded shadow-sm p-6 flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-xl font-black text-[#374151]/60">{member.initials}</span>
              </div>

              <h3 className="font-bold text-[#374151] text-base mb-1">{member.name}</h3>
              <p className="text-[#374151]/65 text-sm mb-3">{member.role}</p>
              <span className="inline-block bg-[#B91C1C] text-white text-xs font-bold px-3 py-1 rounded-full">
                {member.tenure} years
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Community
// ---------------------------------------------------------------------------
function CommunitySection() {
  return (
    <section className="py-20 px-6 bg-[#374151]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Community Involvement
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {communityItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <div className="w-10 h-1 bg-[#B91C1C] mb-4" />
              <h3 className="font-black text-white text-lg uppercase mb-2">{item.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Client root
// ---------------------------------------------------------------------------
export default function AboutClient() {
  return (
    <>
      <HeroSection />
      <OwnerBioSection />
      <TimelineSection />
      <TeamSection />
      <CommunitySection />
    </>
  )
}
