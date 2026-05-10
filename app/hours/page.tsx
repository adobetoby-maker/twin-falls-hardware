import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Store Hours & Directions | Twin Falls Hardware & Supply',
  description:
    'Twin Falls Hardware & Supply hours: Mon-Sat 7AM-6PM, Sun 9AM-4PM. Located at 2180 Addison Ave W, Twin Falls, ID 83301.',
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const HOURS = [
  { days: 'Monday – Saturday', time: '7:00 AM – 6:00 PM' },
  { days: 'Sunday', time: '9:00 AM – 4:00 PM' },
]

const DIRECTIONS_URL =
  'https://maps.google.com/?q=2180+Addison+Ave+W+Twin+Falls+ID+83301'

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function HoursPage() {
  return (
    <>
      {/* Hero / header */}
      <section className="bg-[#374151] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Hours &amp; Directions</span>
          </nav>

          <h1 className="text-4xl font-bold uppercase text-white leading-tight">
            Hours &amp; Directions
          </h1>
          {/* Red underline accent */}
          <div className="mt-3 w-16 h-1 bg-[#B91C1C]" />
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ---- Left: Hours ---- */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-black uppercase text-[#374151] mb-6">Store Hours</h2>
              <div className="divide-y divide-gray-100">
                {HOURS.map(({ days, time }) => (
                  <div key={days} className="flex justify-between items-center py-4">
                    <span className="font-semibold text-[#374151]">{days}</span>
                    <span className="text-[#374151] font-bold text-lg">{time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-[#374151]/60 italic">
                Holiday hours may vary. Call ahead on holidays.
              </p>
            </div>

            {/* ---- Right: Address + Phone stacked ---- */}
            <div className="space-y-8">

              {/* Address & Directions card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-black uppercase text-[#374151] mb-4">
                  Address &amp; Directions
                </h2>
                <address className="not-italic text-[#374151] text-lg leading-relaxed mb-3">
                  2180 Addison Ave W
                  <br />
                  Twin Falls, ID 83301
                </address>
                <p className="text-sm text-[#374151]/70 mb-2">
                  Located on Addison Ave W, 2 blocks west of Blue Lakes Blvd intersection
                </p>
                <p className="text-sm text-[#374151]/70 mb-6">
                  Free parking lot with accessible entrance
                </p>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B91C1C] text-white font-bold text-sm px-5 py-3 rounded hover:bg-[#991b1b] transition-colors"
                >
                  <span>&#128205;</span> Get Directions
                </a>
              </div>

              {/* Phone card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-black uppercase text-[#374151] mb-4">
                  Call Us
                </h2>
                <a
                  href="tel:+12085550211"
                  className="text-[#B91C1C] text-4xl font-black hover:underline block mb-3"
                >
                  (208) 555-0211
                </a>
                <p className="text-sm text-[#374151]/70">
                  Call ahead for large lumber orders or contractor pickup
                </p>
              </div>

            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-10 bg-[#B91C1C] rounded-lg p-6 text-white">
            <p className="text-base font-semibold leading-relaxed">
              Planning a large order? Call ahead at{' '}
              <a href="tel:+12085550211" className="font-black underline hover:no-underline">
                (208) 555-0211
              </a>{' '}
              and we&apos;ll have your materials ready at the dock.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
