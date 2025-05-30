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
        <div className="relative mx-auto max-w-sm aspect-[3/4] md:max-w-none md:aspect-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ 
              pointerEvents: 'none',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' 
            }}
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

  // New extensive product data
  const allProducts = [
    // Protective Apparel
    { id: 101, name: "Surgical Gown", description: "Standard nonwoven surgical gown for basic protection.", category: "Protective Apparel", image: "/products/Product Pics Aug 27 2020.jpeg", secondaryImage: "/products/Product Pics for Display July 30 2020 (2).jpg", featured: false, specs: ["Nonwoven Fabric", "Fluid Resistant", "Comfortable Fit"] },
    { id: 102, name: "Surgical Gown", description: "Standard nonwoven surgical gown for basic protection.", category: "Protective Apparel", image: "/products/Product Pics Aug 27 2020.jpeg", secondaryImage: "/products/Product Pics for Display July 30 2020 (2).jpg", featured: false, specs: ["Nonwoven Fabric", "Fluid Resistant", "Comfortable Fit"] },
    { id: 103, name: "Patient Gown", description: "Comfortable and dignifying patient gowns.", category: "Protective Apparel", image: "/products/gown.jpg", secondaryImage: "/products/gown-2.jpg", featured: false, specs: ["Soft Fabric", "Easy Access", "Disposable"] },
    { id: 104, name: "Plastic Apron", description: "Waterproof plastic aprons for various medical applications.", category: "Protective Apparel", image: "/products/plastic-apron.jpg", secondaryImage: "/products/plastic-apron.jpg", featured: false, specs: ["Waterproof LDPE", "Disposable", "Hygienic"] },
    { id: 105, name: "Medical Coverall", description: "Nonwoven labcoats for laboratory and general use.", category: "Protective Apparel", image: "/products/coverall.jpg", secondaryImage: "/products/coverall-2.jpg", featured: false, specs: ["Nonwoven Polypropylene", "Splash Resistant", "Knee-Length"] },

    // Masks & Headwear
    { id: 201, name: "3 Ply Face Mask - Tie/Lace", description: "Standard 3-ply face mask with tie/lace closure.", category: "Masks & Headwear", image: "/products/3ply-pack.png", secondaryImage: "/products/3ply-display.png", featured: false, specs: ["Tie/Lace Closure", "High BFE", "Comfortable"] },
    { id: 202, name: "N95/FFP2 Protective Face Mask - Earloop", description: "N95/FFP2 respirator mask with earloops.", category: "Masks & Headwear", image: "/products/n95-box.png", secondaryImage: "/products/n95-banner.png", featured: false, specs: ["N95/FFP2 Standard", "High Filtration", "Earloop"] },
    { id: 203, name: "Bouffant Cap", description: "Standard 18-inch bouffant caps for hair coverage.", category: "Masks & Headwear", image: "/products/cap-box.jpg", secondaryImage: "/products/cap-model.png", featured: false, specs: ["18 Inch Diameter", "Nonwoven", "Elasticated"] },
    { id: 204, name: "Surgeon Cap", description: "Traditional surgeon caps for operating room use.", category: "Masks & Headwear", image: "/products/surgeon-cap.png", secondaryImage: "/products/surgeon-cap-2.png", featured: false, specs: ["Tie-back Design", "Cotton/Nonwoven", "Breathable"] },

    // Shoe & Leg Protection
    { id: 301, name: "Shoe Cover", description: "Disposable plastic (LDPE) shoe covers.", category: "Shoe & Leg Protection", image: "/products/Shoe Cover Box Pack.jpg", secondaryImage: "/products/Product Pics for Display July 3 2020 (2).jpg", featured: false, specs: ["LDPE Material", "Water Resistant", "Anti-Slip Option"] },
    { id: 302, name: "PE Shoe Leggings", description: "Polyethylene shoe leggings for extended leg protection.", category: "Shoe & Leg Protection", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Polyethylene", "Knee-High", "Waterproof"] },

    // Drapes, Linens & Underpads
    { id: 401, name: "Bedsheet", description: "Disposable nonwoven bedsheets for hygiene.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Nonwoven Fabric", "Hygienic", "Various Sizes"] },
    { id: 402, name: "Pillow Cover", description: "Disposable nonwoven pillow covers.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Nonwoven Fabric", "Soft", "Disposable"] },
    { id: 403, name: "Underpads", description: "Absorbent underpads for patient care.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["High Absorbency", "Waterproof Backing", "Multiple Sizes"] },
    { id: 404, name: "Sterilization Wraps", description: "SMS sterilization wraps for medical instruments.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["35gsm SMS", "Bacterial Barrier", "Various Sizes"] },
    { id: 405, name: "Poly Drape", description: "Surgical drape for surgical procedures.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Nonwoven Fabric", "Waterproof", "Sterile"] },
    { id: 406, name: "Plain Sheet", description: "Surgical drape for surgical procedures.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Nonwoven Fabric", "Waterproof", "Sterile"] },
    { id: 407, name: "Minor Drape Set", description: "Surgical drape for surgical procedures.", category: "Drapes, Linens & Underpads", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Nonwoven Fabric", "Waterproof", "Sterile"] },


    // Medical Kits
    { id: 501, name: "PPE Kit", description: "Basic PPE kit for general protection.", category: "Medical Kits", image: "/products/OT Premium Kit Product Pics.png", secondaryImage: "/products/Product Pics for Display July 30 2020.jpg", featured: false, specs: ["Basic Coverage", "ISO Certified", "Cost-Effective"] },
    { id: 502, name: "Surgeon's OT Kit", description: "Basic PPE kit for general protection.", category: "Medical Kits", image: "/products/OT Premium Kit Product Pics.png", secondaryImage: "/products/Product Pics for Display July 30 2020.jpg", featured: false, specs: ["Basic Coverage", "ISO Certified", "Cost-Effective"] },
    { id: 503, name: "Delivery Kit", description: "Basic PPE kit for general protection.", category: "Medical Kits", image: "/products/OT Premium Kit Product Pics.png", secondaryImage: "/products/Product Pics for Display July 30 2020.jpg", featured: false, specs: ["Basic Coverage", "ISO Certified", "Cost-Effective"] },
    { id: 504, name: "OT Premium Kit", description: "Comprehensive kit for surgeons in the operating theatre.", category: "Medical Kits", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["OT Essentials", "Sterile Components", "Convenient Pack"] },
    { id: 505, name: "HIV | AIDS Protection kit", description: "Ultra delivery kit for childbirth procedures.", category: "Medical Kits", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Comprehensive", "Sterile", "For Safe Delivery"] },
    { id: 506, name: "Dental Kit - Premium", description: "Premium dental kit for various dental procedures.", category: "Medical Kits", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Dental Essentials", "High Quality", "Sterile Options"] },
    { id: 507, name: "Disposable 'Z' Kit", description: "Premium dental kit for various dental procedures.", category: "Medical Kits", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Dental Essentials", "High Quality", "Sterile Options"] },
    { id: 508, name: "Onco Plus (Chemo Kit)", description: "Premium dental kit for various dental procedures.", category: "Medical Kits", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Dental Essentials", "High Quality", "Sterile Options"] },

    // General Medical & Surgical Disposables
    { id: 601, name: "Skin Blade / Prep Razor", description: "Precision surgical prep razors with safety features.", category: "General Medical & Surgical Disposables", image: "/products/razor.png", secondaryImage: "/products/razor-box.png", featured: false, specs: ["Sterile", "Safety Guard", "Sharp Blade"] },
    { id: 602, name: "C Arm Cover (Poly)", description: "Polyethylene C-Arm covers for imaging equipment.", category: "General Medical & Surgical Disposables", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Polyethylene", "Sterile", "Equipment Protection"] },
    { id: 603, name: "Nitrile Gloves", description: "Non-Polyethylene C-Arm covers for imaging equipment.", category: "General Medical & Surgical Disposables", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Non-Polyethylene", "Sterile", "Equipment Protection"] },
    { id: 604, name: "Bio-degradable Disposal Bag", description: "Non-Polyethylene C-Arm covers for imaging equipment.", category: "General Medical & Surgical Disposables", image: "/placeholder.png", secondaryImage: "/placeholder.png", featured: false, specs: ["Non-Polyethylene", "Sterile", "Equipment Protection"] },
  ];

  const featuredProducts = allProducts.filter(product => product.featured);
  const nonFeaturedProducts = allProducts.filter(product => !product.featured);

  // New categories for filtering
  const categories = [
    { name: "All" },
    { name: "Protective Apparel" },
    { name: "Masks & Headwear" },
    { name: "Shoe & Leg Protection" },
    { name: "Drapes, Linens & Underpads" },
    { name: "Medical Kits" },
    { name: "General Medical & Surgical Disposables" }
  ];

  // Filter products based on active category (excluding featured products from this filter)
  const filteredMiniProducts = activeCategory === "All"
    ? nonFeaturedProducts
    : nonFeaturedProducts.filter(product => product.category === activeCategory);

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
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/6 to-[#0F4679]/4 rounded-full blur-3xl"></div>
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
                <div className="w-full text-center md:flex-1 md:text-right md:pl-12 mt-0 md:mt-6">
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto md:ml-auto md:mr-0">
                    Discover our comprehensive range of ISO-certified medical supplies, designed for healthcare professionals who demand excellence in every procedure.
                  </p>
                </div>
              </div>
              {/* Professional Video Showcase moved here */}
              <VideoShowcase /> 
            </motion.div>
          </div>

          {/* Static Large Featured Product Cards (Disconnected from filters) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group relative" // This is the large card structure
              >
                <div className={`relative overflow-hidden aspect-[4/5] mb-2`}>
                  <Image 
                    src={hoveredProduct === product.id && product.secondaryImage ? product.secondaryImage : product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-all duration-700 group-hover:scale-110 p-3 sm:p-4 md:p-8" // Added padding
                  />
                </div>
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0F4679] transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>
                  
                  {/* Action Button */}
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-[#158C07]/10 to-[#0F4679]/10 hover:from-[#158C07]/20 hover:to-[#0F4679]/20 text-[#0F4679] rounded-xl transition-all duration-300 font-semibold border-2 border-[#0F4679]/20 hover:border-[#0F4679]/40 hover:shadow-lg">
                    Get Quote
                  </button>
                </div>

                {/* Card Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F4679]/20 to-[#158C07]/20 rounded-3xl blur-2xl scale-110" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12 md:mb-20" // Increased bottom margin
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }} // Faster stagger
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border-2 ${
                  activeCategory === category.name 
                    ? "bg-[#0F4679] text-white border-[#0F4679]"
                    : "text-gray-700 bg-white border-gray-300 hover:text-[#0F4679] hover:border-[#0F4679] hover:bg-gray-50"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Product Grid (Mini Replicas - Filterable) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Ensure this key changes for AnimatePresence to work
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Faster transition
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mb-24" // Adjusted gap and columns
            >
              {filteredMiniProducts.map((product, index) => (
              <motion.div
                  key={product.id} // Use product.id for unique key
                  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }} // Staggered animation for cards
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                  className="group relative flex flex-col h-full" // Added flex-col and h-full for consistent card height
                >
                  {/* No featured badge for mini cards, or add if logic is needed */}
                  {/* Image Container - Smaller */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-2 bg-gray-50 rounded-xl"> {/* Adjusted aspect ratio & bg */}
                  <Image 
                      src={hoveredProduct === product.id && product.secondaryImage ? product.secondaryImage : product.image}
                    alt={product.name}
                    fill
                      className="object-contain transition-all duration-500 group-hover:scale-105 p-4" // Added padding
                  />
                </div>

                  {/* Content Container - Scaled Down Replica */}
                  <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-lg rounded-2xl p-5 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#0F4679] transition-colors duration-300 leading-tight"> {/* Smaller text */}
                    {product.name}
                  </h3>
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-3 flex-grow"> {/* Smaller text, line-clamp */}
                    {product.description}
                  </p>

                    {/* Specifications - อาจจะซ่อนบางส่วนหรือทำให้เล็กลง */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.specs.slice(0, 2).map((spec, idx) => ( // Show fewer specs or make them smaller
                      <span 
                        key={idx}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] rounded-full font-medium border border-gray-200"
                      >
                        {spec}
                      </span>
                    ))}
                      {product.specs.length > 2 && (
                         <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] rounded-full font-medium border border-gray-200">
                           +{product.specs.length - 2} more
                         </span>
                      )}
                  </div>

                    {/* Action Buttons - Smaller */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-2"> {/* mt-auto pushes to bottom */}
                      <button className="flex-1 px-3 py-2 text-xs bg-gradient-to-r from-[#158C07]/10 to-[#0F4679]/10 hover:from-[#158C07]/20 hover:to-[#0F4679]/20 text-[#0F4679] rounded-lg transition-all duration-300 font-semibold border border-[#0F4679]/20 hover:border-[#0F4679]/40 hover:shadow-md">
                      Get Quote
                    </button>
                      <button className="relative flex-1 px-3 py-2 text-xs bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-lg p-px">
                          <div className="w-full h-full bg-white group-hover:bg-gray-50 rounded-[7px] transition-colors duration-300"></div>
                      </div>
                      <span className="relative bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">
                        Details →
                      </span>
                    </button>
                  </div>
                </div>
                  {/* Optional: Card Glow Effect - can be distracting on small cards */}
              </motion.div>
            ))}
               {filteredMiniProducts.length === 0 && activeCategory !== "All" && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{duration: 0.3}}
                    className="col-span-full text-center py-12"
                >
                    <Image src="/placeholder.png" alt="No products found" width={128} height={128} className="mx-auto mb-4 opacity-50" />
                    <p className="text-gray-600 text-lg">No products found in "{activeCategory}".</p>
                    <p className="text-gray-500 text-sm">Try selecting another category or "All" to see all available products.</p>
                </motion.div>
            )}
            </motion.div>
          </AnimatePresence>


          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: filteredMiniProducts.length > 0 ? 0.4 : 0.1 }} // Adjust delay based on product loading
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