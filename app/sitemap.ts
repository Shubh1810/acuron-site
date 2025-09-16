import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acuron-site.vercel.app'
  const currentDate = new Date()
  
  // Core business pages (highest priority)
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Important business pages
  const businessPages = [
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Product category pages (SEO-focused)
  const productCategories = [
    'surgical-wear',
    'surgical-gowns', 
    'bouffant-caps',
    'surgical-razors',
    '3-ply-masks',
    'n95-masks',
    'medical-equipment',
    'ppe-equipment',
  ]

  const productPages = productCategories.map(category => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Combine all pages
  return [
    ...corePages,
    ...businessPages,
    ...productPages,
  ]
} 