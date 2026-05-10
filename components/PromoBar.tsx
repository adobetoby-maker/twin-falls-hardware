export default function PromoBar() {
  return (
    <div className="bg-[#B91C1C] text-white text-sm py-2 font-semibold tracking-wide overflow-hidden">
      {/* Mobile: scrolling marquee */}
      <div className="md:hidden overflow-hidden">
        <span className="inline-block animate-marquee whitespace-nowrap">
          FREE local delivery on orders $75+ &nbsp;|&nbsp; (208) 555-0211
        </span>
      </div>

      {/* Desktop: static centered */}
      <div className="hidden md:block text-center">
        FREE local delivery on orders $75+ &nbsp;|&nbsp;{' '}
        <a href="tel:+12085550211" className="underline hover:no-underline">(208) 555-0211</a>
      </div>
    </div>
  )
}
