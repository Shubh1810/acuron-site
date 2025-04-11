import React from 'react';
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Acuron Products India ',
  description: 'India\'s trusted manufacturer of ISO-certified PPE and medical disposable products and custom PPE and surgical kits.',
  keywords: 'Acuron, Primawear medical supplies, healthcare, surgical products, PPE, medical disposables, India',
  authors: [{ name: 'Acuron Products' }],
  openGraph: {
    type: 'website',
    title: 'Acuron Products India | High Quality Medical Kits and Disposables',
    description: 'India\'s trusted manufacturer of ISO-certified PPE and medical disposable products and custom PPE and surgical kits.',
    url: 'https://acuron.in',
    siteName: 'Acuron Products India',
    images: [{ url: '/favicon-og.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acuron Products India | High Quality Medical Kits and Disposables',
    description: 'India\'s trusted manufacturer of ISO-certified PPE and medical disposable products and custom PPE and surgical kits.',
    images: ['/favicon-og.jpeg'],
  },
  icons: {
    icon: '/favicon-og.jpeg',
    apple: '/favicon-og.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
} 