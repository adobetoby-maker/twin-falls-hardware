import type { Metadata } from 'next'
import ContactClient from '@/components/contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Twin Falls Hardware & Supply',
  description:
    'Contact Twin Falls Hardware & Supply. Call (208) 555-0211 or send us a message.',
}

export default function ContactPage() {
  return <ContactClient />
}
