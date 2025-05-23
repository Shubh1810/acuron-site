'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProductPreviewSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Product categories with rotating products
  const productCategories = [
    {
      name: "Surgical Wear",
      description: "Premium surgical gowns, drapes, and protective clothing",
      color: "from-[#0F4679] to-[#1E5A8D]",
      accentColor: "text-blue-300",
      count: "45+ Products",
      products: [
        {
          name: "Surgical Gowns",
          image: "/products/Product Pics Aug 27 2020.jpeg",
          description: "Sterile, fluid-resistant surgical gowns"
        },
        {
          name: "Surgical Drapes",
          image: "/products/Product Pics July 3 2020 (5).jpg",
          description: "SMS surgical drapes for all procedures"
        },
        {
          name: "Surgical Razors",
          image: "/products/razor.png",
          description: "Precision surgical prep razors"
        }
      ]
    },
    {
      name: "PPE Equipment",
      description: "Complete range of personal protective equipment",
      color: "from-[#158C07] to-[#0FB36D]",
      accentColor: "text-green-300",
      count: "60+ Products",
      products: [
        {
          name: "3-Ply Masks",
          image: "/products/3ply-pack.png",
          description: "High-quality 3-ply medical face masks"
        },
        {
          name: "N95 Masks",
          image: "/products/n95-box.png",
          description: "NIOSH-approved N95 respirators"
        },
        {
          name: "Medical Coveralls",
          image: "/products/Product Pics for Display July 3 2020 (4).jpg",
          description: "Full-body protection coveralls"
        }
      ]
    },
    {
      name: "Medical Equipment",
      description: "Essential medical devices and instruments",
      color: "from-[#7C3AED] to-[#A855F7]",
      accentColor: "text-purple-300",
      count: "35+ Products",
      products: [
        {
          name: "Bouffant Caps",
          image: "/products/cap-box.jpg",
          description: "Lightweight surgical caps"
        },
        {
          name: "Medical Gloves",
          image: "/products/Product Pics July 3 2020 (7).jpg",
          description: "Powder-free examination gloves"
        },
        {
          name: "Safety Goggles",
          image: "/products/Product Pics for Display July 3 2020 (3).jpg",
          description: "Anti-fog protective eyewear"
        }
      ]
    },
    {
      name: "Complete Kits",
      description: "All-in-one medical supply solutions",
      color: "from-[#DC2626] to-[#EF4444]",
      accentColor: "text-red-300",
      count: "25+ Products",
      products: [
        {
          name: "Premium PPE Kit",
          image: "/products/OT Premium Kit Product Pics.png",
          description: "Complete protection kit"
        },
        {
          name: "Surgical Kit",
          image: "/products/Surgeon Cap Box Pack.jpg",
          description: "Comprehensive surgical supplies"
        },
        {
          name: "Shoe Covers",
          image: "/products/Shoe Cover Box Pack.jpg",
          description: "Disposable protective shoe covers"
        }
      ]
    }
  ];

  // Function to get translucent glass colors for each category
  const getGlassColor = (index: number) => {
    const glassColors = [
      'from-[#0F4679]/30 to-[#1E5A8D]/30', // Surgical Wear - Blue
      'from-[#158C07]/30 to-[#0FB36D]/30', // PPE Equipment - Green  
      'from-[#7C3AED]/30 to-[#A855F7]/30', // Medical Equipment - Purple
      'from-[#DC2626]/30 to-[#EF4444]/30'  // Complete Kits - Red
    ];
    return glassColors[index];
  };

  // Auto-rotate products within active category
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => 
        (prev + 1) % productCategories[activeCategory].products.length
      );
    }, 3000); // Change product every 3 seconds

    return () => clearInterval(interval);
  }, [activeCategory, productCategories]);

  // Auto-rotate categories
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % productCategories.length);
      setCurrentProductIndex(0); // Reset product index when category changes
    }, 12000); // Change category every 12 seconds

    return () => clearInterval(categoryInterval);
  }, [productCategories]);

  const currentCategory = productCategories[activeCategory];
  const currentProduct = currentCategory.products[currentProductIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F4679] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#158C07] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -left-2 -top-2 w-20 h-8 bg-gradient-to-br from-[#158C07]/40 to-[#0F4679]/40 rounded-full blur-lg"></div>
            <span className="relative inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-white backdrop-blur-sm rounded-full mb-6 border-l-4 border-[#158C07] text-black shadow-lg">PRODUCTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-6">
            Discover Our <span className="bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">Medical Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of surgical wear, PPE equipment, and medical supplies trusted by healthcare professionals worldwide.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setCurrentProductIndex(0);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image & Info */}
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.color} rounded-3xl transform rotate-6 scale-105 opacity-10`}></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <Image
                  src={currentProduct.image}
                  alt={`${currentProduct.name} - Acuron Products surgical wear, medical supplies, 3 ply masks, N95 masks, bouffant caps`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Product badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getGlassColor(activeCategory)} backdrop-blur-md rounded-full border border-white/30 shadow-lg`}>
                    <span className="text-white text-xs font-semibold drop-shadow-sm">{currentCategory.name}</span>
                  </div>
                </div>

                {/* Product counter */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs">
                      {currentProductIndex + 1} / {currentCategory.products.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentProduct.name}</h3>
                <p className="text-gray-600 mb-4">{currentProduct.description}</p>
                
                {/* Product indicators */}
                <div className="flex space-x-2 mb-4">
                  {currentCategory.products.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentProductIndex
                          ? `bg-gradient-to-r ${currentCategory.color} w-8`
                          : 'bg-gray-200 w-2'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentCategory.name}</h3>
              <p className="text-lg text-gray-600 mb-6">{currentCategory.description}</p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className={`px-4 py-2 bg-gradient-to-r ${currentCategory.color} rounded-lg`}>
                  <span className="text-white font-semibold">{currentCategory.count}</span>
                </div>
                <div className="text-gray-500">Available in this category</div>
              </div>
            </div>

            {/* Product list */}
            <div className="space-y-4">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    index === currentProductIndex
                      ? 'border-gray-300 bg-gray-50 transform scale-102'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setCurrentProductIndex(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentCategory.color}`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/products"
                className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentCategory.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group`}
              >
                Explore All Products
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0F4679] mb-2">165+</div>
            <div className="text-gray-600">Total Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#158C07] mb-2">500+</div>
            <div className="text-gray-600">Hospitals Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#7C3AED] mb-2">ISO</div>
            <div className="text-gray-600">Certified Quality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#DC2626] mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
} 