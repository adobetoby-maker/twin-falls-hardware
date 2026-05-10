import type { Metadata } from 'next'
import AboutClient from '@/components/about/AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Twin Falls Hardware & Supply',
  description:
    'Family-owned hardware store serving Twin Falls since 1987. Meet owner Gary Hendricks and the team.',
}

export default function AboutPage() {
  return <AboutClient />
}
