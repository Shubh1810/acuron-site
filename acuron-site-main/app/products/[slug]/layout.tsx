import { Metadata } from 'next';
import { getProductBySlug, getAllProductSlugs } from '../../lib/productData';
import { generateProductSchema } from '../../lib/seo-utils';

interface ProductLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Acuron Products',
      description: 'The requested product could not be found.'
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords.join(', '),
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name
        }
      ],
      type: 'website',
      siteName: 'Acuron Products'
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image]
    },
    alternates: {
      canonical: `/products/${product.slug}`
    }
  };
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProductLayout({ children, params }: ProductLayoutProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return children;
  }

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.detailedDescription,
    category: product.category,
    image: product.image,
    brand: 'Acuron Products',
    manufacturer: 'Acuron Products India'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      {children}
    </>
  );
}
