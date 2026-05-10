import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import PromoBar from '@/components/PromoBar'
import Header from '@/components/Header'
import CartSidebar from '@/components/CartSidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Twin Falls Hardware & Supply | Your Neighbor in the Hardware Business',
  description:
    'Family-owned hardware store serving Twin Falls, Idaho since 1987. Tools, lumber, plumbing, electrical, paint and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <PromoBar />
          <Header />
          <CartSidebar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
