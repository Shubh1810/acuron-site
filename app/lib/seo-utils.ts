// SEO utilities for consistent metadata and schema markup

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
}

export function generateMetadata(config: SEOMetadata) {
  const baseUrl = 'https://acuron.in';
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(', '),
    canonical: config.url ? `${baseUrl}${config.url}` : baseUrl,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url ? `${baseUrl}${config.url}` : baseUrl,
      type: config.type || 'website',
      images: config.image ? [
        {
          url: config.image,
          width: 1200,
          height: 630,
          alt: config.title
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.image ? [config.image] : undefined,
    }
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  category: string;
  image?: string;
  brand?: string;
  manufacturer?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Acuron Products'
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.manufacturer || 'Acuron Products India'
    },
    ...(product.image && {
      image: product.image
    })
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author || 'Acuron Products India'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Acuron Products India',
      logo: {
        '@type': 'ImageObject',
        url: 'https://acuron.in/favicon-og.jpeg'
      }
    },
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image
      }
    })
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `https://acuron.in${item.url}` })
    }))
  };
} 