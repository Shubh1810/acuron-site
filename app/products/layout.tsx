import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Medical Supplies & Products | Surgical Wear, 3 Ply Masks, N95 Masks, Bouffant Caps | Acuron Products",
  description: "Browse Acuron Products comprehensive range of surgical wear, surgical supplies, 3 ply masks, N95 masks, surgical gowns, bouffant caps, razors, and medical equipment. Primawear & Shi Mediwear quality with wide distribution network across India. ISO certified medical products with exports globally.",
  keywords: [
    'Acuron Products',
    'Acuron medical supplies',
    'surgical wear',
    'surgical supplies',
    'surgical gown',
    'surgical gowns', 
    'bouffant cap',
    'bouffant caps',
    'surgical razors',
    '3 ply mask',
    '3-ply masks',
    'N95 mask',
    'N95 masks',
    'medical wear',
    'medical equipment',
    'medical products',
    'Primawear',
    'Shi Mediwear',
    'PPE equipment',
    'medical disposables',
    'orthopedic drapes',
    'gynecology supplies',
    'urology products',
    'ISO certified products',
    'exports medical supplies',
    'distribution network India',
    'wide network medical supplies',
    'connections across India',
    'medical supply distribution'
  ].join(', '),
  openGraph: {
    title: "Medical Supplies & Products | Surgical Wear, 3 Ply Masks, N95 Masks | Acuron Products India",
    description: "Browse comprehensive range of surgical wear, surgical supplies, 3 ply masks, N95 masks, surgical gowns, bouffant caps, and medical equipment. Primawear & Shi Mediwear quality with wide distribution across India.",
    url: "https://acuron.in/products",
    type: "website",
    images: [
      {
        url: "/favicon-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Acuron Products - Surgical Wear & Medical Supplies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Supplies & Products | Surgical Wear, 3 Ply Masks, N95 Masks | Acuron Products",
    description: "Browse comprehensive range of surgical wear, surgical supplies, 3 ply masks, N95 masks, surgical gowns, bouffant caps, and medical equipment.",
    images: ["/favicon-og.jpeg"]
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 