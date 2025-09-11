"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import TransparentNavbar from "../../components/TransparentNavbar";
import WhiteGridBackground from "../../components/ui/white-grid-background";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import Footer from "../../components/sections/Footer";
import ProductSpecTable from "../../components/ProductSpecTable";
import { getProductBySlug } from "../../lib/productData";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.image);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.name }
  ];

  return (
    <>
      <WhiteGridBackground />
      <Header />
      <div>
        <TransparentNavbar />
      </div>
      
      <div className="pt-[0px] min-h-screen relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Simple Product Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Product Image */}
            <div>
              <div className="relative aspect-square bg-white rounded border border-gray-200 overflow-hidden">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
              {/* Small thumbnails */}
              <div className="flex gap-2 mt-2">
                {[product.image, product.secondaryImage].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-12 h-12 rounded border overflow-hidden ${
                      activeImage === img ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <span className="text-sm text-gray-500">{product.category}</span>
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              </div>
              
              <p className="text-gray-600">{product.description}</p>
              
              <div className="flex gap-2">
                {product.specs.map((spec, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Get Quote
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div className="mb-8">
            <ProductSpecTable variants={product.variants} productName={product.name} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
