import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acuron-site.vercel.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Specific product category pages targeting user's keywords
  const specificProductPages = [
    'surgical-wear',
    'surgical-supplies',
    'surgical-gowns',
    'surgical-gown',
    'bouffant-caps',
    'bouffant-cap',
    'surgical-razors',
    '3-ply-masks',
    'n95-masks',
    'medical-wear',
    'medical-equipment',
    'medical-products',
    'ppe-equipment',
    'primawear',
    'shi-mediwear'
  ]

  // Traditional product categories
  const productCategories = [
    'surgical',
    'orthopedic-drapes',
    'gynecology-drapes', 
    'urology-drapes',
    'protective'
  ]

  // Combine all product pages
  const allProductPages = [...specificProductPages, ...productCategories].map(category => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Distribution and export pages
  const businessPages = [
    {
      url: `${baseUrl}/distribution`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/exports`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/network`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  return [...staticPages, ...allProductPages, ...businessPages]
} 