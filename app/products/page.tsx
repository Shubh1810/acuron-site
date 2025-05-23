"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import WhiteGridBackground from "../components/ui/white-grid-background";
import Image from "next/image";
import Breadcrumbs from "../components/ui/Breadcrumbs";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' }
  ];

  // Medical supplies product data with proper image paths
  const products = [
    {
      id: 1,
      name: "3-Ply Medical Face Masks",
      description: "High-quality disposable medical masks with bacterial filtration efficiency",
      category: "PPE",
      image: "/products/3ply-pack.png",
      secondaryImage: "/products/3ply-display.png"
    },
    {
      id: 2,
      name: "N95 Respirator Masks",
      description: "NIOSH-approved respirators with 95% particle filtration efficiency",
      category: "PPE",
      image: "/products/n95-box.png",
      secondaryImage: "/products/n95-banner.png"
    },
    {
      id: 3,
      name: "Medical Coveralls",
      description: "Full-body protection coveralls with elastic cuffs and ankles",
      category: "PPE",
      image: "/products/Product Pics for Display July 3 2020 (4).jpg",
      secondaryImage: "/products/Product Pics July 3 2020 (4).jpg"
    },
    {
      id: 4,
      name: "Medical Shoe Covers",
      description: "Fluid-resistant disposable boot covers for clinical environments",
      category: "PPE",
      image: "/products/Shoe Cover Box Pack.jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (2).jpg"
    },
    {
      id: 5,
      name: "Medical Safety Goggles",
      description: "Anti-fog protective eyewear with indirect ventilation",
      category: "PPE",
      image: "/products/Product Pics for Display July 3 2020 (3).jpg",
      secondaryImage: "/products/Product Pics July 3 2020 (3).jpg"
    },
    {
      id: 6,
      name: "Biodegradable Waste Disposal Bags",
      description: "Eco-friendly medical waste bags with high tensile strength",
      category: "Disposal",
      image: "/products/Product Pics July 3 2020 (6).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (6).jpg"
    },
    {
      id: 7,
      name: "Medical Examination Gloves",
      description: "Powder-free nitrile gloves for clinical and laboratory use",
      category: "PPE",
      image: "/products/Product Pics July 3 2020 (7).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (7).jpg"
    },
    {
      id: 8,
      name: "Complete PPE Kit",
      description: "All-in-one protection kit including mask, coverall, gloves, and more",
      category: "Kits",
      image: "/products/OT Premium Kit Product Pics.png",
      secondaryImage: "/products/Product Pics for Display July 30 2020.jpg"
    },
    {
      id: 9,
      name: "Surgical Razors",
      description: "Precision surgical prep razors with safety features",
      category: "Surgical",
      image: "/products/razor.png",
      secondaryImage: "/products/Acuron Prep Rezor.png"
    },
    {
      id: 10,
      name: "Surgical Drapes (SMS)",
      description: "Sterile surgical drapes in various SMS fabric compositions",
      category: "Surgical",
      image: "/products/Product Pics July 3 2020 (5).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (5).jpg"
    },
    {
      id: 11,
      name: "Surgical Gowns",
      description: "Fluid-resistant surgical gowns in multiple SMS fabric weights",
      category: "Surgical",
      image: "/products/Product Pics Aug 27 2020.jpeg",
      secondaryImage: "/products/Product Pics for Display July 30 2020 (2).jpg"
    },
    {
      id: 12,
      name: "Bouffant Caps",
      description: "Lightweight, breathable caps with elastic band for secure fit",
      category: "PPE",
      image: "/products/cap-box.jpg",
      secondaryImage: "/products/cap-model.png"
    },
    {
      id: 13,
      name: "Kids 3-Ply Masks",
      description: "Specially designed 3-ply masks for children with fun designs",
      category: "PPE",
      image: "/products/kids-3ply.png",
      secondaryImage: "/products/3ply-laces.jpg"
    },
    {
      id: 14,
      name: "Surgeon Caps",
      description: "High-quality surgeon caps with tie-back for secure fit",
      category: "Surgical",
      image: "/products/Surgeon Cap Box Pack.jpg",
      secondaryImage: "/products/Surgeon Cap Product Pic.png"
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = ["All", "PPE", "Surgical", "Disposal", "Kits"];

  return (
    <>
      <WhiteGridBackground />
      <Header />
      
      <div className="pt-[90px] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-[#0d7d12] drop-shadow-sm mb-4"
            >
              Medical Supplies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              High-quality medical supplies and equipment for healthcare professionals
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-32 h-1 bg-gradient-to-r from-[#158C07] via-[#2ad62a] to-[#158C07] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(21,140,7,0.3)]"
            />
          </div>

          {/* Product filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category 
                    ? "bg-[#158C07] text-white border-[#158C07] shadow-[0_0_15px_rgba(21,140,7,0.35)]" 
                    : "bg-white text-[#2a9fd6] hover:bg-[#158C07]/10 border-[#2a9fd6]/40 hover:border-[#2a9fd6]/70"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
                className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video w-full bg-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#158C07]/5 to-transparent z-10" />
                  <div className="absolute top-4 right-4 bg-[#2a9fd6]/15 text-[#2a9fd6] text-xs font-bold py-1 px-3 rounded-full z-20 backdrop-blur-sm border border-[#2a9fd6]/20 shadow-[0_0_10px_rgba(42,159,214,0.2)]">
                    {product.category}
                  </div>
                  <div className="relative w-full h-full">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#158C07] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-[#158C07]/10 hover:bg-[#158C07]/20 text-[#158C07] rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-[0_0_10px_rgba(21,140,7,0.2)] hover:shadow-[0_0_15px_rgba(21,140,7,0.3)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Get Quote
                    </button>
                    <button className="px-4 py-2 bg-[#2a9fd6]/10 hover:bg-[#2a9fd6]/20 text-[#2a9fd6] rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-[0_0_10px_rgba(42,159,214,0.15)] hover:shadow-[0_0_15px_rgba(42,159,214,0.25)]">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need custom medical supplies?</h2>
                <p className="text-gray-600 mb-6 md:mb-0 max-w-xl">
                  Our team can provide customized medical supplies tailored to your specific requirements. Contact us today for bulk orders and personalized solutions.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#158C07] hover:bg-[#107006] text-white font-bold rounded-lg transition-all duration-300 whitespace-nowrap flex items-center gap-2 shadow-[0_0_15px_rgba(21,140,7,0.3)] hover:shadow-[0_0_20px_rgba(21,140,7,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* View all products button */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="px-8 py-3 bg-[#2a9fd6]/10 hover:bg-[#2a9fd6]/20 text-[#2a9fd6] rounded-lg transition-all duration-300 border border-[#2a9fd6]/30 font-medium shadow-[0_0_15px_rgba(42,159,214,0.15)] hover:shadow-[0_0_20px_rgba(42,159,214,0.25)]"
            >
              View All Products
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}