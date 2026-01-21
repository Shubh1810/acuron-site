// SEO utilities for consistent metadata and schema markup

import { Metadata } from 'next';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
}

// Base URL for the site
const BASE_URL = 'https://acuron-site.vercel.app';

// Generate canonical URL for a given path
export function generateCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords,
  images,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  images?: { url: string; width: number; height: number; alt: string }[];
}): Metadata {
  const canonicalUrl = generateCanonicalUrl(path);
  
  return {
    title: `${title} | Acuron Products India`,
    description,
    // Use only 3-5 focused keywords per page instead of keyword stuffing
    keywords: keywords?.slice(0, 5).join(', '),
    openGraph: {
      title: `${title} | Acuron Products India`,
      description,
      url: canonicalUrl,
      images: images || [{
        url: '/metalogo.JPEG',
        width: 1200,
        height: 630,
        alt: 'Acuron Products India - Medical Supplies Manufacturer',
      }],
    },
    twitter: {
      title: `${title} | Acuron Products India`,
      description,
      images: images?.map(img => img.url) || ['/favicon-og.jpeg'],
    },
  };
}

// Generate canonical link element (use in page components)
export function generateCanonicalLink(path: string = ''): string {
  return `<link rel="canonical" href="${generateCanonicalUrl(path)}" />`;
}

// Page-specific keyword suggestions (use sparingly, 3-5 max per page)
export const pageKeywords = {
  home: ['medical disposables India', 'Acuron products', 'PPE equipment manufacturer'],
  products: ['surgical gowns', 'N95 masks', 'medical drapes', 'nitrile gloves'],
  certificates: ['ISO certified medical', 'CE marked surgical supplies'],
  events: ['medical trade shows', 'healthcare exhibitions'],
  faq: ['medical supplies FAQ', 'surgical wear questions'],
} as const;

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