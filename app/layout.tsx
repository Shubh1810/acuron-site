import React from 'react';
import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display, Roboto, Rubik } from 'next/font/google'
import './globals.css'
import CacheCleanupClient from './lib/CacheCleanupClient';
import { Analytics } from "@vercel/analytics/react"
import ChatbotWidget from './components/ChatbotWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: {
    default: 'Acuron Products India | Medical Supplies, Surgical Wear & PPE Manufacturer',
    template: '%s | Acuron Products India'
  },
  description: 'Acuron Products - Leading manufacturer of surgical supplies, surgical wear, 3 ply masks, N95 masks, surgical gowns, bouffant caps, razors, and medical equipment. Wide distribution network across India with exports globally. ISO certified Primawear & Shi Mediwear quality.',
  metadataBase: new URL('https://acuron.in'),
  keywords: [
    // Primary Brand Keywords
    'Acuron',
    'Acuron Products',
    'Acuron India',
    'Primawear',
    'Shi Mediwear',
    
    // Core Product Keywords
    'surgical wear',
    'surgical supplies',
    'surgical gown',
    'surgical gowns',
    'bouffant cap',
    'bouffant caps',
    'surgical razors',
    'razor surgical',
    '3 ply mask',
    '3-ply masks',
    'N95 mask',
    'N95 masks',
    'medical wear',
    'medical equipment',
    'medical products',
    'medical supplies',
    'medical supplies India',
    
    // Business & Distribution Keywords
    'exports medical supplies',
    'medical supplies export',
    'distribution network India',
    'wide network medical supplies',
    'connections across India',
    'medical supply distribution',
    'healthcare distribution network',
    
    // Industry Keywords
    'PPE equipment',
    'PPE supplies',
    'medical disposables',
    'surgical instruments',
    'healthcare equipment',
    'hospital supplies',
    'surgical kits',
    'orthopedic drapes',
    'gynecology supplies',
    'urology drapes',
    'surgical drapes',
    
    // Certification Keywords
    'ISO certified medical products',
    'CE marked surgical supplies',
    'FDA registered medical devices',
    'BIS certified medical equipment',
    
    // Location Keywords
    'medical supplies manufacturer India',
    'surgical wear manufacturer',
    'Bhiwandi medical supplies',
    'Maharashtra medical equipment',
    'Indian medical products exporter'
  ].join(', '),
  authors: [{ name: 'Acuron Products India', url: 'https://acuron.in' }],
  creator: 'Acuron Products India',
  publisher: 'Acuron Products India',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://acuron.in',
    siteName: 'Acuron Products India',
    title: 'Acuron Products India | Surgical Wear, Medical Supplies & PPE Manufacturer',
    description: 'Leading manufacturer of surgical wear, 3 ply masks, N95 masks, surgical gowns, bouffant caps, and medical equipment. Wide distribution network across India with global exports. Primawear & Shi Mediwear quality.',
    images: [
      {
        url: '/metalogo.JPEG',
        width: 1200,
        height: 630,
        alt: 'Acuron Products India - Surgical Wear & Medical Supplies Manufacturer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acuron Products India | Surgical Wear, Medical Supplies & PPE Manufacturer',
    description: 'Leading manufacturer of surgical wear, 3 ply masks, N95 masks, surgical gowns, bouffant caps, and medical equipment. Wide distribution network across India.',
    images: ['/favicon-og.jpeg'],
    creator: '@acuronproducts',
  },
  icons: {
    icon: [
      { url: '/metalogo.JPEG', sizes: '32x32', type: 'image/jpeg' },
      { url: '/metalogo.JPEG', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/favicon-og.jpeg', sizes: '180x180', type: 'image/jpeg' }
    ],
  },
  manifest: '/manifest.json',
  category: 'Medical Supplies',
  classification: 'Business',
  other: {
    'google-site-verification': 'your-google-verification-code', // Add your actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Acuron Products India',
    alternateName: ['Acuron', 'Primawear', 'Shi Mediwear'],
    url: 'https://acuron.in',
    logo: 'https://acuron.in/metalogo.JPEG',
    description: 'Leading manufacturer of surgical wear, surgical supplies, 3 ply masks, N95 masks, surgical gowns, bouffant caps, razors, and medical equipment with wide distribution network across India and exports globally.',
    foundingDate: '2010',
    slogan: 'Revolutionizing Medical Supply with Precision & Care',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98200-43274',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gala No. 112, 1st Floor, B/10, Pritesh Complex, Dapoda Road',
      addressLocality: 'Bhiwandi',
      addressRegion: 'Maharashtra',
      postalCode: '421302',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    sameAs: [
      'https://www.linkedin.com/company/acuron-products/',
      'https://www.facebook.com/acuronproduct',
      'https://www.instagram.com/acuron/'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ISO 13485:2016',
        recognizedBy: {
          '@type': 'Organization',
          name: 'International Organization for Standardization'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'CE Marking',
        recognizedBy: {
          '@type': 'Organization',
          name: 'European Union'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'FDA Registration',
        recognizedBy: {
          '@type': 'Organization',
          name: 'U.S. Food and Drug Administration'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'BIS Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Bureau of Indian Standards'
        }
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Surgical Wear',
          category: 'Medical Equipment',
          description: 'Surgical gowns, surgical drapes, and protective surgical clothing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: '3 Ply Masks',
          category: 'PPE Equipment',
          description: 'High-quality 3-ply medical face masks with bacterial filtration'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'N95 Masks',
          category: 'PPE Equipment',
          description: 'NIOSH-approved N95 respirator masks'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Bouffant Caps',
          category: 'Medical Wear',
          description: 'Disposable surgical bouffant caps for medical professionals'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Surgical Razors',
          category: 'Medical Equipment',
          description: 'Precision surgical prep razors for medical procedures'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Medical Equipment',
          category: 'Healthcare Equipment',
          description: 'Comprehensive range of medical supplies and equipment'
        }
      }
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'India'
    },
    knowsAbout: [
      'Medical Supplies Manufacturing',
      'Surgical Wear Production',
      'PPE Equipment',
      'Medical Equipment Distribution',
      'Healthcare Supply Chain',
      'Medical Exports',
      'ISO Certification',
      'Medical Quality Standards'
    ]
  }

  return (
    <html lang="en-IN">
      <head>
        <link rel="preload" href="/oglogo2.png" as="image" />
        <link rel="preload" href="/main.jpeg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://acuron.in" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Bhiwandi, Maharashtra" />
        <meta name="geo.position" content="19.2952;73.0543" />
        <meta name="ICBM" content="19.2952, 73.0543" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${roboto.variable} ${rubik.variable} font-sans`}>
        <CacheCleanupClient />
        {children}
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  )
} 