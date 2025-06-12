import type { Metadata } from 'next'
import { generatePageMetadata, pageKeywords } from '../lib/seo-utils'

// SEO Metadata for FAQ page
export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions - Medical Supplies & Support',
  description: 'Find expert answers to common questions about Acuron Products medical supplies, ISO certifications, ordering processes, technical specifications, and regulatory compliance.',
  path: '/faq',
  keywords: ['medical supplies FAQ', 'surgical wear questions', 'PPE equipment support', 'ISO certification queries', 'medical product technical specs'],
})

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 