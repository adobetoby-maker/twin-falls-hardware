import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#374151] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-black mb-3 tracking-wide">
              Twin Falls Hardware
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Family-owned hardware store serving Twin Falls, Idaho since 1987.
            </p>
            <address className="text-gray-300 text-sm not-italic space-y-1">
              <p>2180 Addison Ave W</p>
              <p>Twin Falls, ID 83301</p>
              <p>
                <a href="tel:+12085550211" className="hover:text-white transition-colors">
                  (208) 555-0211
                </a>
              </p>
            </address>
            <div className="mt-3 text-gray-300 text-sm">
              <p className="font-semibold text-white">Hours</p>
              <p>Mon–Sat: 7:00 AM – 6:00 PM</p>
              <p>Sun: 9:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-lg font-black mb-3 tracking-wide">
              Products
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products/tools" className="hover:text-white transition-colors">Tools &amp; Equipment</Link></li>
              <li><Link href="/products/lumber-building" className="hover:text-white transition-colors">Lumber &amp; Building</Link></li>
              <li><Link href="/products/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
              <li><Link href="/products/electrical" className="hover:text-white transition-colors">Electrical</Link></li>
              <li><Link href="/products/paint" className="hover:text-white transition-colors">Paint &amp; Finishes</Link></li>
              <li><Link href="/products/lawn-garden" className="hover:text-white transition-colors">Lawn &amp; Garden</Link></li>
              <li><Link href="/products/fasteners" className="hover:text-white transition-colors">Fasteners &amp; Hardware</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-black mb-3 tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/contractors" className="hover:text-white transition-colors">Contractors</Link></li>
              <li><Link href="/special-orders" className="hover:text-white transition-colors">Special Orders</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog &amp; How-Tos</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-lg font-black mb-3 tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/hours" className="hover:text-white transition-colors">Hours &amp; Directions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Twin Falls Hardware &amp; Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
