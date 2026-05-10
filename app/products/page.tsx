import type { Metadata } from 'next'
import ProductsContent from './ProductsContent'

export const metadata: Metadata = {
  title: 'Products | Twin Falls Hardware & Supply',
  description: 'Shop tools, lumber, plumbing, electrical, paint and more at Twin Falls Hardware & Supply.',
}

export default function ProductsPage() {
  return <ProductsContent />
}
