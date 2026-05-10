import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cart | Twin Falls Hardware & Supply',
  description: 'Review your cart and request a quote from Twin Falls Hardware & Supply.',
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
