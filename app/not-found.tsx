import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#FAFAF9]">
      <div className="text-center max-w-lg px-6">
        <div className="text-9xl font-black text-[#B91C1C] leading-none">404</div>
        <h1 className="text-3xl font-black uppercase text-[#374151] mt-4">
          This Aisle Doesn&apos;t Exist
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Looks like this item isn&apos;t on our shelves. Try another route.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/products"
            className="bg-[#B91C1C] text-white font-bold px-6 py-3 hover:bg-red-800 transition-colors"
          >
            Shop Products
          </Link>
          <Link
            href="/"
            className="border-2 border-[#374151] text-[#374151] font-bold px-6 py-3 hover:bg-[#374151] hover:text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Need help? Call us: <a href="tel:+12085550211" className="text-[#B91C1C] hover:underline">(208) 555-0211</a>
        </p>
      </div>
    </main>
  )
}
