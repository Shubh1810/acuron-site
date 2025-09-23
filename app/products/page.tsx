"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import TransparentNavbar from "../components/TransparentNavbar";
import WhiteGridBackground from "../components/ui/white-grid-background";
import PharmaCorporateGiftingShowcase from "../components/PharmaCorporateGiftingShowcase";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Footer from "../components/sections/Footer";
import { allProducts } from "../lib/productData";


// Component that uses useSearchParams - needs to be wrapped in Suspense
function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollableNavRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  
  // Check if pharma category is selected
  const isPharmaCategory = searchParams.get('category') === 'pharma';

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    ...(isPharmaCategory ? [{ label: 'Pharmaceuticals' }] : [])
  ];

  // Products are now imported from productData.ts
  const nonFeaturedProducts = allProducts.filter(product => !product.featured);

  // Helpers
  const includesAny = (text: string, terms: string[]) => {
    const lower = text.toLowerCase();
    return terms.some(t => lower.includes(t));
  };

  // Apple-like navbar categories with predicates
  const categories: Array<{ key: string; label: string; predicate: (p: typeof allProducts[number]) => boolean }> = [
    { key: 'all', label: 'All', predicate: () => true },
    { key: 'razors', label: 'Razors', predicate: (p) => includesAny(p.name, ['razor']) },
    { key: 'face-masks', label: 'Face Masks', predicate: (p) => includesAny(p.name, ['mask']) || includesAny(p.category, ['masks']) },
    { key: 'surgical-caps', label: 'Surgical Caps', predicate: (p) => includesAny(p.name, ['cap']) },
    { key: 'shoe-covers', label: 'Shoe Covers', predicate: (p) => includesAny(p.name, ['shoe cover', 'shoe']) },
    { key: 'surgical-gowns', label: 'Surgical Gowns', predicate: (p) => includesAny(p.name, ['gown']) },
    { key: 'medical-coveralls', label: 'Medical Coveralls', predicate: (p) => includesAny(p.name, ['coverall', 'labcoat', 'scrub', 'scrub suit']) },
    { key: 'drapes', label: 'Drapes', predicate: (p) =>
      !includesAny(p.name, ['wrap']) && (
        includesAny(p.name, ['drape']) ||
        includesAny(p.category, ['drapes', 'linens', 'underpads']) ||
        (includesAny(p.name, ['pack', 'kit']) && includesAny(p.category, ['drapes', 'linens', 'underpads']))
      )
    },
    { key: 'sheets', label: 'Sheets', predicate: (p) => includesAny(p.name, ['sheet', 'underpad', 'wrap']) && !includesAny(p.name, ['gown']) },
    { key: 'gloves', label: 'Gloves', predicate: (p) => includesAny(p.name, ['glove']) },
    { key: 'miscellaneous', label: 'Miscellaneous', predicate: (p) => {
        // Not matching any of the above specific categories
        const matched = categories.slice(1, -1).some(c => c.predicate(p));
        return !matched;
      }
    },
  ];

  // Filter products based on active category
  const activeCategoryObj = categories.find(c => c.key === activeCategory) || categories[0];
  const filteredMiniProducts = nonFeaturedProducts.filter(p => activeCategoryObj.predicate(p));

  // Expand variants into separate display items for specific categories (e.g., Face Masks)
  type DisplayProduct = typeof allProducts[number] & { __variantCode?: string; __displayName?: string };
  const expandedProducts: DisplayProduct[] = (() => {
    const isMasks = activeCategoryObj.key === 'face-masks';
    const isCaps = activeCategoryObj.key === 'surgical-caps';
    const isShoes = activeCategoryObj.key === 'shoe-covers';
    if (!isMasks && !isCaps && !isShoes) return filteredMiniProducts as DisplayProduct[];

    const allowedN95Codes = new Set(['AP N95 01', 'AP N95 02', 'AP N95 03']);
    // Shoe covers + leggings should map to SC and SL codes per productData
    const allowedShoeCodes = new Set(['AP SC 01', 'AP SC 02', 'AP SL 01']);
    const items: DisplayProduct[] = [];
    for (const p of filteredMiniProducts) {
      // Masks view: exclude caps/hoods and goggles entirely
      if (isMasks) {
        if (/cap|hood/i.test(p.name)) continue;
        if (/goggle/i.test(p.name) || /goggle/i.test(p.category)) continue;
      }

      const isMaskProduct = /mask/i.test(p.name) || /mask/i.test(p.category);
      const isCapProduct = /cap/i.test(p.name) || /cap/i.test(p.category);
      const isShoeProduct = /shoe/i.test(p.name) || /shoe/i.test(p.category) || /legging/i.test(p.name);

      // Decide whether to expand variants for this item
      const shouldExpand = (isMasks && isMaskProduct) || (isCaps && isCapProduct) || (isShoes && isShoeProduct);

      if (shouldExpand && p.variants && p.variants.length > 0) {
        const isN95 = isMasks && (/n95/i.test(p.name) || p.variants.some(v => /n95/i.test(v.productName)));
        for (const v of p.variants) {
          // Masks-only restriction for N95 variants
          if (isN95 && !allowedN95Codes.has(v.productCode)) continue;
          if (isMasks && /goggle/i.test(v.productName)) continue;
          // Shoe-covers: only three specified codes
          if (isShoes && !allowedShoeCodes.has(v.productCode)) continue;
          items.push({
            ...p,
            __variantCode: v.productCode,
            __displayName: v.productName || `${p.name}`,
          });
        }
      } else if (shouldExpand) {
        // For shoe-covers view, restrict to specific codes only; skip non-variant items
        if (isShoes) {
          continue;
        }
        items.push(p as DisplayProduct);
      }
    }
    return items;
  })();

  // Effect to handle scroll indicator visibility
  useEffect(() => {
    const navElement = scrollableNavRef.current;

    const checkScroll = () => {
      if (navElement) {
        const canScroll = navElement.scrollWidth > navElement.clientWidth;
        const isScrolledToEnd = navElement.scrollLeft + navElement.clientWidth >= navElement.scrollWidth - 5; // 5px tolerance
        setShowScrollIndicator(canScroll && !isScrolledToEnd);
      }
    };

    if (navElement) {
      // Initial check
      checkScroll();
      navElement.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []); // Runs on mount and unmount

  return (
    <>
      <WhiteGridBackground />
      
              <Header />
        <div>
          <TransparentNavbar />
        </div>
        
        <div className="pt-[0px] min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Pharma Corporate Gifting Showcase - Only show when pharma category is selected */}
          {isPharmaCategory && (
            <div className="mb-16">
              <PharmaCorporateGiftingShowcase />
            </div>
          )}
          {/* Web3 Category Navigation with Glass Effect */}
          <div className="mb-6 pb-4 relative z-[60]">
            <div className="relative bg-white/80 backdrop-blur-[24px] shadow-lg p-2 sm:p-3 md:p-6 border border-gray-200 overflow-hidden rounded-3xl">
              {/* Subtle gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-teal-50/50 rounded-3xl opacity-60"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
              <div ref={scrollableNavRef} className="relative flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide z-10">
                {categories.map((category, index) => {
                  // Map categories to appropriate icons and display names
                  const getCategoryConfig = (categoryKey: string) => {
                    switch (categoryKey) {
                      case "all":
                        return {
                          icon: (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                          ),
                          displayName: "All"
                        };
                      case "razors":
                        return {
                          icon: (
                            <Image
                              src="/shave.png"
                              alt="Razors Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Razors"
                        };
                      case "face-masks":
                        return {
                          icon: (
                            <Image
                              src="/PPE Mask Icon.png"
                              alt="Face Masks Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Face Masks"
                        };
                      case "surgical-caps":
                        return {
                          icon: (
                            <Image
                              src="/caphood.png"
                              alt="Surgical Caps Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Surgical Caps"
                        };
                      case "shoe-covers":
                        return {
                          icon: (
                            <Image
                              src="/PPE shoe.png"
                              alt="PPE Shoe Covers Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Shoe Covers"
                        };
                      case "surgical-gowns":
                        return {
                          icon: (
                            <Image
                              src="/Health Icon Apron.png"
                              alt="Surgical Gowns Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Gowns"
                        };
                      case "medical-coveralls":
                        return {
                          icon: (
                            <Image
                              src="/PPE Suit Icon.png"
                              alt="Coveralls Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Coveralls/Labcoats"
                        };
                      case "drapes":
                        return {
                          icon: (
                            <Image
                              src="/Vascular Surgery Icon.png"
                              alt="Drapes Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Drapes"
                        };
                      case "sheets":
                        return {
                          icon: (
                            <Image
                              src="/surgery.png"
                              alt="ISO Sheets Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Sheets"
                        };
                      case "gloves":
                        return {
                          icon: (
                            <Image
                              src="/PPE Gloves Icon.png"
                              alt="Gloves Icon"
                              width={32}
                              height={32}
                              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                            />
                          ),
                          displayName: "Gloves"
                        };
                      case "miscellaneous":
                        return {
                          icon: (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                          ),
                          displayName: "Miscellaneous"
                        };
                      default:
                        return {
                          icon: (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          ),
                          displayName: category.label
                        };
                    }
                  };

                  const config = getCategoryConfig(category.key);
                  const isActive = activeCategory === category.key;

                  return (
                    <motion.div
                      key={category.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => {
                        setActiveCategory(category.key);
                        const el = productsSectionRef.current;
                        if (el) {
                          const headerOffset = 120;
                          const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 min-w-[70px] sm:min-w-[86px] md:min-w-[100px] group cursor-pointer"
                    >
                                              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-106 ${
                          isActive 
                            ? 'bg-gradient-to-br from-blue-500/20 to-teal-500/20 backdrop-blur-sm text-blue-700 shadow-lg border border-blue-300' 
                            : 'text-gray-600 hover:bg-gray-100 hover:backdrop-blur-sm'
                        }`}>
                          {config.icon}
                        </div>
                        <span className={`text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 text-center ${
                          isActive 
                            ? 'text-blue-700 font-semibold' 
                            : 'text-gray-600'
                        }`}>
                        {config.displayName}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

                              {/* Scroll Indicator - Mobile Only */}
                {showScrollIndicator && (
                  <div className="absolute top-0 right-0 h-full w-1.5 md:hidden pointer-events-none z-10 flex items-center">
                    <div className="w-full h-full bg-gradient-to-b from-blue-500/70 via-blue-400/40 to-teal-500/30 opacity-80 blur-[6px] shadow-[0_0_8px_2px_#3B82F6]"></div>
                  </div>
                )}
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
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-0 px-4">
                {/* Logo Block - Much Larger */}
                <div className="flex flex-row items-center mb-0">
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
                <div className="w-full text-center md:flex-1 md:text-right md:pl-12 mt-0">
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto md:ml-auto md:mr-0">
                    Discover our comprehensive range of ISO-certified medical supplies, designed for healthcare professionals who demand excellence in every procedure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Full-Width Explore Products Banner Divider */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0F4679] via-[#1A5A8A] to-[#158C07] py-16 md:py-24">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-50"></div>
                </div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Main Heading */}
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 -mt-10 leading-tight">
                    Explore
                    <span className="block bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                      Products
                    </span>
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                    Browse our extensive range of medical disposables and kits across all categories. 
                    <span className="block mt-2">Filter by category to find exactly what you need.</span>
                  </p>

                  {/* Decorative Elements */}
                  <div className="flex justify-center items-center mt-8 space-x-4">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  </div>

                  {/* Category Count Badge */}
                  <div className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-white font-medium">
                      {allProducts.length}+ Products • {categories.length - 1} Categories
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Wave Divider */}
              <div className="absolute bottom-0 left-0 w-full">
                <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-white"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Scroll target for smooth jump from category navbar */}
          <div ref={productsSectionRef}></div>

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
              {expandedProducts.map((product, index) => (
              <motion.div
                  key={`${product.id}${product.__variantCode ? '-' + product.__variantCode : ''}`} // Ensure unique key per variant
                  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }} // Staggered animation for cards
                  className="group relative flex flex-col h-full" // Added flex-col and h-full for consistent card height
                >
                  {/* Background Container - Extends behind image */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 -z-10"></div>

                  {/* Image Container - Smaller */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-2 rounded-t-2xl bg-white">
                  <Image 
                      src={product.image}
                    alt={product.name}
                    fill
                      className="object-contain transition-all duration-500 group-hover:scale-105 p-4"
                  />
                </div>

                  {/* Content Container - Scaled Down Replica */}
                  <div className="flex flex-col flex-grow bg-gray-100/40 backdrop-blur-xl rounded-b-2xl p-5 border-t-0 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#0F4679] transition-colors duration-300 leading-tight">
                    {product.__displayName || product.name}
                  </h3>
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-3 flex-grow hidden sm:block">
                    {product.description}
                  </p>

                    {/* Specifications - Always visible */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.specs.slice(0, 2).map((spec, idx) => ( // Show fewer specs or make them smaller
                      <span 
                        key={idx}
                          className="px-2 py-0.5 bg-white/50 backdrop-blur-sm text-gray-700 text-[10px] rounded-full font-medium border border-gray-200/40"
                      >
                        {spec}
                      </span>
                    ))}
                      {product.specs.length > 2 && (
                         <span className="px-2 py-0.5 bg-white/50 backdrop-blur-sm text-gray-700 text-[10px] rounded-full font-medium border border-gray-200/40">
                           +{product.specs.length - 2} more
                         </span>
                      )}
                  </div>

                    {/* Action Buttons - Smaller */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-2"> {/* mt-auto pushes to bottom */}
                      <button className="flex-1 px-3 py-2 text-xs bg-gradient-to-r from-[#158C07]/10 to-[#0F4679]/10 hover:from-[#158C07]/20 hover:to-[#0F4679]/20 text-[#0F4679] rounded-lg transition-all duration-300 font-semibold border border-[#0F4679]/20 hover:border-[#0F4679]/40 hover:shadow-md">
                      Get Quote
                    </button>
                      <Link 
                        href={`/products/${product.slug}`}
                        className="relative flex-1 px-3 py-2 text-xs bg-white hover:bg-[#0F4679] rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 overflow-hidden group text-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-lg p-px">
                          <div className="w-full h-full bg-white group-hover:bg-[#0F4679] rounded-[7px] transition-all duration-300"></div>
                      </div>
                        <span className="relative bg-gradient-to-r from-[#0F4679] to-[#158C07] group-hover:text-white bg-clip-text text-transparent transition-all duration-300">
                        Details →
                      </span>
                    </Link>
                  </div>
                </div>
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

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <>
      <WhiteGridBackground />
      <Header />
      <div>
        <TransparentNavbar />
      </div>
      <div className="pt-[0px] min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F4679] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Main page component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}