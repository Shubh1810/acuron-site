import type { Metadata } from 'next'
import { generatePageMetadata, pageKeywords } from '../lib/seo-utils'

// SEO Metadata with proper keywords - moved here from page.tsx because page.tsx is a client component
export const metadata: Metadata = generatePageMetadata({
  title: 'Medical Products & Surgical Supplies',
  description: 'Comprehensive range of surgical gowns, N95 masks, medical disposables, PPE equipment, and healthcare supplies manufactured with ISO certification.',
  path: '/products',
  keywords: [...pageKeywords.products],
})

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 