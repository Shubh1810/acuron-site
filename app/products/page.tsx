"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "../components/Header";
import WhiteGridBackground from "../components/ui/white-grid-background";
import Image from "next/image";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Footer from "../components/sections/Footer";

// Professional Video Showcase Component
function VideoShowcase() {
  return (
    <div className="mb-20">
      <div className="w-full">
        {/* Minimal Video Display */}
        <div className="relative border border-gray-300 mx-auto max-w-sm aspect-[3/4] md:max-w-none md:aspect-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ pointerEvents: 'none' }}
          >
            <source src="/Indian Nurse Video.mp4" type="video/mp4" />
          </video>
          
          {/* Premium Medical Solutions Badge - Top Right */}
          <div className="absolute top-6 right-6 z-20">
            <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 md:gap-1.5 md:px-3 md:py-1.5 bg-gradient-to-r from-[#0F4679]/10 to-[#158C07]/10 backdrop-blur-md rounded-full border border-white/30 shadow-lg whitespace-nowrap">
              <div className="w-0.5 h-0.5 md:w-1.5 md:h-1.5 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-full animate-pulse"></div>
              <span className="text-[8px] md:text-xs font-semibold bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent tracking-wider">
                PREMIUM MEDICAL SOLUTIONS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' }
  ];

  // Medical supplies product data with proper image paths - Reordered
  const products = [
    {
      id: 2,
      name: "N95 Respirator Masks",
      description: "NIOSH-approved respirators with 95% particle filtration efficiency",
      category: "PPE",
      image: "/products/n95-box.png",
      secondaryImage: "/products/n95-banner.png",
      featured: true,
      showInHero: true,
      specs: ["NIOSH Approved", "95% Filtration", "Secure Seal"]
    },
    {
      id: 9,
      name: "Surgical Razors",
      description: "Precision surgical prep razors with safety features",
      category: "Surgical",
      image: "/products/razor.png",
      secondaryImage: "/products/Acuron Prep Rezor.png",
      featured: true,
      showInHero: true,
      specs: ["Sterile", "Safety Guard", "Sharp Blade"]
    },
    {
      id: 1,
      name: "3-Ply Medical Face Masks",
      description: "High-quality disposable medical masks with bacterial filtration efficiency",
      category: "PPE",
      image: "/products/3ply-pack.png",
      secondaryImage: "/products/3ply-display.png",
      featured: true,
      showInHero: true,
      specs: ["99% BFE", "Fluid Resistant", "Comfortable Fit"]
    },
    {
      id: 3,
      name: "Medical Coveralls",
      description: "Full-body protection coveralls with elastic cuffs and ankles",
      category: "PPE",
      image: "/products/Product Pics for Display July 3 2020 (4).jpg",
      secondaryImage: "/products/Product Pics July 3 2020 (4).jpg",
      featured: false,
      showInHero: true,
      specs: ["Full Coverage", "Breathable", "Elastic Cuffs"]
    },
    {
      id: 11,
      name: "Surgical Gowns",
      description: "Fluid-resistant surgical gowns in multiple SMS fabric weights",
      category: "Surgical",
      image: "/products/Product Pics Aug 27 2020.jpeg",
      secondaryImage: "/products/Product Pics for Display July 30 2020 (2).jpg",
      featured: true,
      showInHero: true,
      specs: ["SMS Material", "Fluid Resistant", "Comfortable"]
    },
    {
      id: 8,
      name: "Complete PPE Kit",
      description: "All-in-one protection kit including mask, coverall, gloves, and more",
      category: "Kits",
      image: "/products/OT Premium Kit Product Pics.png",
      secondaryImage: "/products/Product Pics for Display July 30 2020.jpg",
      featured: true,
      showInHero: false,
      specs: ["Complete Set", "ISO Certified", "Premium Quality"]
    },
    {
      id: 4,
      name: "Medical Shoe Covers",
      description: "Fluid-resistant disposable boot covers for clinical environments",
      category: "PPE",
      image: "/products/Shoe Cover Box Pack.jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (2).jpg",
      featured: false,
      showInHero: false,
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
      showInHero: false,
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
      showInHero: false,
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
      showInHero: false,
      specs: ["Powder-Free", "Nitrile", "Textured Grip"]
    },
    {
      id: 10,
      name: "Surgical Drapes (SMS)",
      description: "Sterile surgical drapes in various SMS fabric compositions",
      category: "Surgical",
      image: "/products/Product Pics July 3 2020 (5).jpg",
      secondaryImage: "/products/Product Pics for Display July 3 2020 (5).jpg",
      featured: false,
      showInHero: false,
      specs: ["SMS Fabric", "Sterile", "Fluid Barrier"]
    },
    {
      id: 12,
      name: "Bouffant Caps",
      description: "Lightweight, breathable caps with elastic band for secure fit",
      category: "PPE",
      image: "/products/cap-box.jpg",
      secondaryImage: "/products/cap-model.png",
      featured: false,
      showInHero: false,
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
      showInHero: false,
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
      showInHero: false,
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

  const getCategoryBorderActive = (category: string) => {
    switch(category) {
      case "PPE": return "border-green-500";
      case "Surgical": return "border-blue-500";
      case "Disposal": return "border-purple-500";
      case "Kits": return "border-orange-500";
      default: return "border-gray-500";
    }
  };

  const getCategoryTextActive = (category: string) => {
    switch(category) {
      case "PPE": return "text-green-500";
      case "Surgical": return "text-blue-500";
      case "Disposal": return "text-purple-500";
      case "Kits": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getCategoryGlow = (category: string) => {
    switch(category) {
      case "PPE": return "bg-green-500";
      case "Surgical": return "bg-blue-500";
      case "Disposal": return "bg-purple-500";
      case "Kits": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <>
      <WhiteGridBackground />
      <Header />
      
      <div className="pt-[90px] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Apple-style Category Navigation */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-3 md:p-6 border border-gray-100">
              <div className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">All</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/PPE Mask Icon.png"
                      alt="Face Masks Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Face Masks</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/Health Icon Apron.png"
                      alt="Coveralls Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Coveralls</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/Vascular Surgery Icon.png"
                      alt="Surgical Items Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Surgical Items</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/PPE Goggles Icon.png"
                      alt="Goggles Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Goggles</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/PPE Gloves Icon.png"
                      alt="Gloves Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Gloves</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/Outbreak Health Icon.png"
                      alt="Disposal Bags Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Disposal Bags</span>
                </div>

                <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-[#0F4679] hover:bg-gray-50 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/PPE Suit Icon.png"
                      alt="Complete Kits Icon"
                      width={24}
                      height={24}
                      className="object-contain h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#0F4679] transition-colors duration-300 text-center">Complete Kits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          {/* Futuristic Hero Section */}
          <div className="relative text-center mb-8 overflow-hidden">
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
              {/* Header Layout: Logo + Badge Left, Description Right */}
              {/* Mobile: Logo and Badge side-by-side, centered. Text below, centered. */}
              {/* Desktop: Logo and Badge side-by-side on left. Text on right. */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 px-4">
                {/* Logo Block - Much Larger */}
                <div className="flex flex-row items-center mb-6 md:mb-0">
                  <Image
                    src="/acprod.png"
                    alt="Acuron Products - Premium Medical Supplies Manufacturer"
                    width={280} // Much larger width
                    height={112} // Much larger height
                    className="object-contain drop-shadow-lg md:w-[350px] md:h-[140px]" // Even larger on desktop
                    priority
                  />
                </div>

                {/* Description Text Block */}
                <div className="w-full text-center md:flex-1 md:text-right md:pl-12">
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto md:ml-auto md:mr-0">
                    Discover our comprehensive range of ISO-certified medical supplies, designed for healthcare professionals who demand excellence in every procedure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Video Showcase */}
          <VideoShowcase />

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
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 overflow-hidden shadow-lg border-2 ${
                  activeCategory === category.name 
                    ? getCategoryBorderActive(category.name) + " " + getCategoryTextActive(category.name) + " bg-transparent transform scale-110 shadow-2xl" 
                    : "text-gray-700 hover:text-gray-800 bg-transparent border-gray-300 hover:border-gray-400 hover:scale-105"
                }`}
              >
                {/* Content */}
                <div className="relative flex items-center justify-center">
                  <span className="text-lg font-bold">{category.name}</span>
                </div>

                {/* Glow Effect for Active */}
                {activeCategory === category.name && (
                  <div className={`absolute inset-0 ${getCategoryGlow(category.name)} rounded-2xl blur-xl opacity-20 -z-10 scale-110`} />
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
                className="group relative"
              >
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-white text-xs font-bold tracking-wider">✨ FEATURED</span>
                    </div>
                  </div>
                )}

                {/* Image Container - No Background Container */}
                <div className={`relative overflow-hidden ${product.featured ? 'aspect-[4/5]' : 'aspect-[4/3]'} mb-2`}>
                  <Image 
                    src={hoveredProduct === product.id ? product.secondaryImage : product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-all duration-700 group-hover:scale-110 p-3 sm:p-4 md:p-8"
                  />
                </div>

                {/* Content Container - Only Around Text and Buttons */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700">
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
            className="relative overflow-hidden bg-white rounded-3xl p-12 md:p-16 border border-gray-200 shadow-lg"
          >
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0F4679] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#158C07] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F4679] mb-6 leading-tight">
                  Need Custom Solutions?
                </h2>
                <p className="text-gray-600 max-w-2xl text-xl leading-relaxed">
                  Our expert team specializes in creating tailored medical supply solutions for healthcare facilities of all sizes. From bulk orders to specialized requirements.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-[#0F4679] text-white font-bold rounded-2xl transition-all duration-300 hover:bg-[#0D3A64] hover:shadow-xl hover:scale-105 flex items-center gap-3 text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Expert
                </button>
                
                <button className="px-10 py-5 bg-white text-[#0F4679] font-bold rounded-2xl border-2 border-[#0F4679] hover:bg-[#0F4679] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg">
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