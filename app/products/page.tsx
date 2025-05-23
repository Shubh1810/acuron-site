"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../components/Header";
import WhiteGridBackground from "../components/ui/white-grid-background";
import Image from "next/image";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Footer from "../components/sections/Footer";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

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
      secondaryImage: "/products/3ply-display.png",
      featured: true,
      specs: ["99% BFE", "Fluid Resistant", "Comfortable Fit"]
    },
    {
      id: 2,
      name: "N95 Respirator Masks",
      description: "NIOSH-approved respirators with 95% particle filtration efficiency",
      category: "PPE",
      image: "/products/n95-box.png",
      secondaryImage: "/products/n95-banner.png",
      featured: true,
      specs: ["NIOSH Approved", "95% Filtration", "Secure Seal"]
    },
    {
      id: 3,
      name: "Medical Coveralls",
      description: "Full-body protection coveralls with elastic cuffs and ankles",
      category: "PPE",
      image: "/products/Product Pics for Display July 3 2020 (4).jpg",
      secondaryImage: "/products/Product Pics July 3 2020 (4).jpg",
      featured: false,
      specs: ["Full Coverage", "Breathable", "Elastic Cuffs"]
    },
    {
      id: 4,
      name: "Medical Shoe Covers",
      description: "Fluid-resistant disposable boot covers for clinical environments",
      category: "PPE",
      image: "/products/Shoe Cover Box Pack.jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (2).jpg",
      featured: false,
      specs: ["Fluid Resistant", "Non-Slip", "Easy Wear"]
    },
    {
      id: 5,
      name: "Medical Safety Goggles",
      description: "Anti-fog protective eyewear with indirect ventilation",
      category: "PPE",
      image: "/products/Product Pics for Display July 3 2020 (3).jpg",
      secondaryImage: "/products/Product Pics July 3 2020 (3).jpg",
      featured: false,
      specs: ["Anti-Fog", "UV Protection", "Adjustable"]
    },
    {
      id: 6,
      name: "Biodegradable Waste Disposal Bags",
      description: "Eco-friendly medical waste bags with high tensile strength",
      category: "Disposal",
      image: "/products/Product Pics July 3 2020 (6).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (6).jpg",
      featured: false,
      specs: ["Eco-Friendly", "High Strength", "Leak Proof"]
    },
    {
      id: 7,
      name: "Medical Examination Gloves",
      description: "Powder-free nitrile gloves for clinical and laboratory use",
      category: "PPE",
      image: "/products/Product Pics July 3 2020 (7).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (7).jpg",
      featured: false,
      specs: ["Powder-Free", "Nitrile", "Textured Grip"]
    },
    {
      id: 8,
      name: "Complete PPE Kit",
      description: "All-in-one protection kit including mask, coverall, gloves, and more",
      category: "Kits",
      image: "/products/OT Premium Kit Product Pics.png",
      secondaryImage: "/products/Product Pics for Display July 30 2020.jpg",
      featured: true,
      specs: ["Complete Set", "ISO Certified", "Premium Quality"]
    },
    {
      id: 9,
      name: "Surgical Razors",
      description: "Precision surgical prep razors with safety features",
      category: "Surgical",
      image: "/products/razor.png",
      secondaryImage: "/products/Acuron Prep Rezor.png",
      featured: false,
      specs: ["Sterile", "Safety Guard", "Sharp Blade"]
    },
    {
      id: 10,
      name: "Surgical Drapes (SMS)",
      description: "Sterile surgical drapes in various SMS fabric compositions",
      category: "Surgical",
      image: "/products/Product Pics July 3 2020 (5).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (5).jpg",
      featured: false,
      specs: ["SMS Fabric", "Sterile", "Fluid Barrier"]
    },
    {
      id: 11,
      name: "Surgical Gowns",
      description: "Fluid-resistant surgical gowns in multiple SMS fabric weights",
      category: "Surgical",
      image: "/products/Product Pics Aug 27 2020.jpeg",
      secondaryImage: "/products/Product Pics for Display July 30 2020 (2).jpg",
      featured: true,
      specs: ["SMS Material", "Fluid Resistant", "Comfortable"]
    },
    {
      id: 12,
      name: "Bouffant Caps",
      description: "Lightweight, breathable caps with elastic band for secure fit",
      category: "PPE",
      image: "/products/cap-box.jpg",
      secondaryImage: "/products/cap-model.png",
      featured: false,
      specs: ["Lightweight", "Breathable", "Secure Fit"]
    },
    {
      id: 13,
      name: "Kids 3-Ply Masks",
      description: "Specially designed 3-ply masks for children with fun designs",
      category: "PPE",
      image: "/products/kids-3ply.png",
      secondaryImage: "/products/3ply-laces.jpg",
      featured: false,
      specs: ["Child-Safe", "Fun Designs", "Comfortable"]
    },
    {
      id: 14,
      name: "Surgeon Caps",
      description: "High-quality surgeon caps with tie-back for secure fit",
      category: "Surgical",
      image: "/products/Surgeon Cap Box Pack.jpg",
      secondaryImage: "/products/Surgeon Cap Product Pic.png",
      featured: false,
      specs: ["Tie-Back", "Sterile", "Comfortable"]
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = [
    { name: "All", color: "from-blue-500 to-teal-500" },
    { name: "PPE", color: "from-green-500 to-emerald-500" },
    { name: "Surgical", color: "from-blue-600 to-cyan-500" },
    { name: "Disposal", color: "from-purple-500 to-pink-500" },
    { name: "Kits", color: "from-orange-500 to-red-500" }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "PPE": return "from-green-500/20 to-emerald-500/20";
      case "Surgical": return "from-blue-600/20 to-cyan-500/20";
      case "Disposal": return "from-purple-500/20 to-pink-500/20";
      case "Kits": return "from-orange-500/20 to-red-500/20";
      default: return "from-gray-500/20 to-gray-600/20";
    }
  };

  const getCategoryBorder = (category: string) => {
    switch(category) {
      case "PPE": return "border-green-500/30";
      case "Surgical": return "border-blue-500/30";
      case "Disposal": return "border-purple-500/30";
      case "Kits": return "border-orange-500/30";
      default: return "border-gray-500/30";
    }
  };

  return (
    <>
      <WhiteGridBackground />
      <Header />
      
      <div className="pt-[90px] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          {/* Futuristic Hero Section */}
          <div className="relative text-center mb-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-[#0F4679]/8 to-[#0F4679]/4 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-[#158C07]/6 to-[#0F4679]/4 rounded-full blur-3xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0F4679]/10 to-[#158C07]/10 backdrop-blur-md rounded-full border border-white/30 mb-8 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent tracking-wider">PREMIUM MEDICAL SOLUTIONS</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="text-[#0F4679] drop-shadow-sm">Medical </span>
                <span className="bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent drop-shadow-sm">Supplies</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                Discover our comprehensive range of ISO-certified medical supplies, designed for healthcare professionals who demand excellence in every procedure.
              </p>

              {/* Glowing Divider */}
              <div className="flex justify-center mb-16">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#158C07] to-transparent rounded-full shadow-[0_0_20px_rgba(21,140,7,0.5)]"></div>
              </div>
            </motion.div>
          </div>

          {/* Refined Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.name)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden shadow-lg ${
                  activeCategory === category.name 
                    ? "text-white transform scale-110 shadow-2xl" 
                    : "text-gray-700 hover:text-white bg-white/70 backdrop-blur-sm border-2 border-gray-200/50 hover:border-transparent hover:scale-105"
                }`}
              >
                {/* Active Background */}
                {activeCategory === category.name && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl shadow-2xl`}
                    transition={{ type: "spring", duration: 0.8 }}
                  />
                )}
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative flex items-center justify-center">
                  <span className="text-lg font-bold">{category.name}</span>
                </div>

                {/* Glow Effect for Active */}
                {activeCategory === category.name && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-40 -z-10 scale-110`} />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  className={`group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 ${product.featured ? 'lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-white/95 to-gray-50/90' : ''}`}
                >
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-6 left-6 z-20">
                      <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-white text-xs font-bold tracking-wider">✨ FEATURED</span>
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(product.category)} backdrop-blur-md rounded-full border-2 ${getCategoryBorder(product.category)} shadow-md`}>
                      <span className="text-gray-800 text-xs font-bold tracking-wider">{product.category}</span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className={`relative overflow-hidden bg-gradient-to-br from-gray-50 to-white ${product.featured ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                    
                    <Image
                      src={hoveredProduct === product.id ? product.secondaryImage : product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-all duration-700 group-hover:scale-110 p-8"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F4679]/90 via-[#0F4679]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                    
                    {/* Quick Actions */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl text-gray-800 font-semibold hover:bg-white transition-colors duration-300 shadow-lg">
                          Quick View
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-xl text-white font-semibold hover:shadow-xl transition-all duration-300">
                          Quote
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0F4679] transition-colors duration-300 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.specs.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm rounded-full font-medium border border-gray-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#158C07]/10 to-[#0F4679]/10 hover:from-[#158C07]/20 hover:to-[#0F4679]/20 text-[#0F4679] rounded-xl transition-all duration-300 font-semibold border-2 border-[#0F4679]/20 hover:border-[#0F4679]/40 hover:shadow-lg">
                        Get Quote
                      </button>
                      <button className="px-6 py-4 bg-gradient-to-r from-[#0F4679] to-[#158C07] hover:from-[#0F4679]/90 hover:to-[#158C07]/90 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                        Details →
                      </button>
                    </div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F4679]/20 to-[#158C07]/20 rounded-3xl blur-2xl scale-110" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#0F4679]/5 via-white/80 to-[#158C07]/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-white/30 shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#0F4679]/30 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-52 h-52 bg-gradient-to-br from-[#158C07]/30 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent mb-6 leading-tight">
                  Need Custom Solutions?
                </h2>
                <p className="text-gray-600 max-w-2xl text-xl leading-relaxed">
                  Our expert team specializes in creating tailored medical supply solutions for healthcare facilities of all sizes. From bulk orders to specialized requirements.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-gradient-to-r from-[#0F4679] to-[#158C07] text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-110 flex items-center gap-3 text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Expert
                </button>
                
                <button className="px-10 py-5 bg-white/90 backdrop-blur-sm text-[#0F4679] font-bold rounded-2xl border-2 border-[#0F4679]/30 hover:border-[#0F4679]/60 transition-all duration-500 hover:shadow-xl hover:scale-105 text-lg">
                  View Catalog
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}