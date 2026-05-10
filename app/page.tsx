'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { useCart } from '@/lib/cart-context'
import { categories } from '@/lib/categories'
import { getFeaturedProducts } from '@/lib/products'

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

// ---------------------------------------------------------------------------
// Section: Hero
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1920&q=80"
          alt="Twin Falls Hardware store interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-black uppercase text-white leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Twin Falls&apos; Hardware Store Since 1987
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-white/90 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Tools, lumber, plumbing, electrical and more — in stock today
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <Link
            href="/products"
            className="inline-block bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold uppercase tracking-wide px-8 py-4 transition-colors text-lg"
          >
            Shop Now
          </Link>
          <a
            href="tel:+12085550211"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#374151] font-bold uppercase tracking-wide px-8 py-4 transition-colors text-lg"
          >
            Talk to an Expert
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section: Trust Strip
// ---------------------------------------------------------------------------
const trustItems = [
  { stat: '37 Years', sub: 'Serving Twin Falls & Magic Valley' },
  { stat: 'Same-Day', sub: 'Special Orders Available' },
  { stat: 'Price Match', sub: "We'll Beat Any Local Price" },
  { stat: 'Contractors', sub: 'Net-30 Accounts Welcome' },
]

function TrustStrip() {
  return (
    <section className="bg-[#B91C1C]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
        {trustItems.map((item) => (
          <div key={item.stat} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black uppercase tracking-wide">{item.stat}</span>
            <span className="text-sm font-semibold text-white/85">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section: Category Grid
// ---------------------------------------------------------------------------
function CategoryGrid() {
  return (
    <section className="py-20 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Shop By Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <Link
                href={`/products/${cat.id}`}
                className="group block relative rounded overflow-hidden aspect-square"
              >
                <Image
                  src={`https://images.unsplash.com/${cat.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                    <span className="text-white font-black uppercase text-sm leading-tight tracking-wide">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-white/75 text-xs font-semibold">
                    Shop {cat.name} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section: Featured Products
// ---------------------------------------------------------------------------
function ProductCard({ product }: { product: ReturnType<typeof getFeaturedProducts>[number] }) {
  const { addItem } = useCart()

  return (
    <div className="bg-white rounded overflow-hidden shadow-sm flex flex-col">
      {/* Image */}
      <div className="relative aspect-square">
        <Image
          src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&q=80`}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#374151] text-sm leading-snug mb-1 flex-1">
          {product.name}
        </h3>
        <div className="flex items-end justify-between mt-3">
          <div>
            <span className="text-lg font-black text-[#B91C1C]">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
          </div>
        </div>
        <button
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              unit: product.unit,
              image: product.image,
            })
          }
          disabled={!product.inStock}
          className={`mt-3 w-full py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
            product.inStock
              ? 'bg-[#B91C1C] hover:bg-[#991B1B] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold uppercase text-[#374151] mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={fadeUp}
          custom={0}
        >
          Popular Products
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeUp}
              custom={i * 0.5}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section: Why Choose Us
// ---------------------------------------------------------------------------
const whyItems = [
  {
    title: 'Local Expertise',
    body: 'Our staff averages 11 years in the trades. Real answers, not guesses.',
  },
  {
    title: 'Same-Day Special Orders',
    body: "Don't see it? We'll have it same day. Just call ahead.",
  },
  {
    title: 'Contractor Accounts',
    body: 'Net-30 terms, volume pricing, dedicated reps. Apply today.',
  },
  {
    title: 'Community First',
    body: "Family-owned since 1987. We know your name, not just your order number.",
  },
]

function WhyChooseUs() {
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
          Your Neighbor in the Hardware Business
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyItems.map((item, i) => (
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
              <h3 className="font-black text-[#374151] text-lg uppercase mb-2">{item.title}</h3>
              <p className="text-[#374151]/80 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section: Testimonials
// ---------------------------------------------------------------------------
const testimonials = [
  {
    quote:
      "Gary's team helped me source an obscure part for a 1960s plumbing system no one else could find. In stock the next morning.",
    author: 'Mike T.',
    role: 'Twin Falls contractor',
  },
  {
    quote:
      "I've been coming here for 15 years. The advice alone saves me more than any discount at the big box stores.",
    author: 'Sarah K.',
    role: 'DIY homeowner',
  },
  {
    quote:
      'Net-30 account made our cash flow so much easier. And they actually pick up the phone.',
    author: 'Dan R.',
    role: 'General contractor',
  },
]

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

function Testimonials() {
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
          What Our Customers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="bg-white rounded p-7 shadow-md flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={fadeIn}
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

// ---------------------------------------------------------------------------
// Section: Store Info Strip
// ---------------------------------------------------------------------------
function StoreInfoStrip() {
  return (
    <section className="bg-[#374151] py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
        {/* Address */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#B91C1C] text-2xl font-black uppercase tracking-wide mb-1">
            Find Us
          </span>
          <p className="text-white/90 text-sm leading-relaxed">
            2180 Addison Ave W<br />
            Twin Falls, ID 83301
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#B91C1C] text-2xl font-black uppercase tracking-wide mb-1">
            Hours
          </span>
          <p className="text-white/90 text-sm leading-relaxed">
            Mon – Sat: 7AM – 6PM<br />
            Sun: 9AM – 4PM
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#B91C1C] text-2xl font-black uppercase tracking-wide mb-1">
            Call Us
          </span>
          <a
            href="tel:+12085550211"
            className="text-white/90 text-sm hover:text-white transition-colors font-semibold"
          >
            (208) 555-0211
          </a>
          <p className="text-white/60 text-xs">We actually pick up.</p>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <StoreInfoStrip />
    </>
  )
}
