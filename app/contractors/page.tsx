import type { Metadata } from 'next'
import ContractorsClient from '@/components/contractors/ContractorsClient'

export const metadata: Metadata = {
  title: 'Contractor Accounts | Twin Falls Hardware & Supply',
  description:
    'Apply for a contractor account. Net-30 terms, volume pricing, dedicated rep, and priority will-call pickup.',
}

export default function ContractorsPage() {
  return <ContractorsClient />
}
