import type { Metadata } from 'next'
import SpecialOrdersClient from '@/components/special-orders/SpecialOrdersClient'

export const metadata: Metadata = {
  title: 'Special Orders | Twin Falls Hardware & Supply',
  description:
    'We can source almost any hardware item, often same day. Request a special order from Twin Falls Hardware.',
}

export default function SpecialOrdersPage() {
  return <SpecialOrdersClient />
}
