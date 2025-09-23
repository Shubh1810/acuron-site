'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const PharmaCorporateGiftingShowcase: React.FC = () => {
  const pharmaGiftingKits = [
    {
      id: 'pharma-executive-kit',
      name: 'Executive Pharma Kit',
      description: 'Premium corporate gifting solution for pharmaceutical executives and partners',
      image: '/products/ot-premium-kit.jpg',
      features: ['Premium Packaging', 'Custom Branding', 'Executive Quality'],
      price: 'Contact for Quote'
    },
    {
      id: 'pharma-partner-kit',
      name: 'Partner Recognition Kit',
      description: 'Professional gifting kits for pharmaceutical partners and distributors',
      image: '/products/operation-kit.webp',
      features: ['Professional Design', 'Bulk Ordering', 'Custom Logos'],
      price: 'Contact for Quote'
    },
    {
      id: 'pharma-conference-kit',
      name: 'Conference & Event Kit',
      description: 'Specialized kits for pharmaceutical conferences and industry events',
      image: '/products/hivkit.png',
      features: ['Event Branding', 'Bulk Packaging', 'Quick Delivery'],
      price: 'Contact for Quote'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0F4679] via-[#1A5A8A] to-[#2B5A7A] py-16 md:py-20 mb-16 rounded-3xl"
    >
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
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="text-white font-medium">Pharmaceuticals</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pharma Corporate
              <span className="block bg-gradient-to-r from-white via-blue-50 to-slate-100 bg-clip-text text-transparent">
                Gifting Solutions
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Premium corporate gifting kits designed specifically for pharmaceutical industry professionals. 
              <span className="block mt-2">Elevate your corporate relationships with our specialized pharma gifting solutions.</span>
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmaGiftingKits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image 
                    src={kit.image}
                    alt={kit.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.png';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0F4679] group-hover:text-[#1A5A8A] transition-colors duration-300">
                    {kit.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {kit.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {kit.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#0F4679]/10 text-[#0F4679] text-xs rounded-full font-medium border border-[#0F4679]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-lg font-bold text-[#1A5A8A]">{kit.price}</span>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href="/#contact-us-section"
                    className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#0F4679] to-[#1A5A8A] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Custom Pharma Gifting Solutions?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our team specializes in creating bespoke corporate gifting solutions for pharmaceutical companies. 
              From executive kits to bulk conference materials, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact-us-section"
                className="px-8 py-4 bg-white text-[#0F4679] font-bold rounded-xl transition-all duration-300 hover:bg-gray-50 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Pharma Specialist
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-[#0F4679] hover:scale-105">
                Download Pharma Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PharmaCorporateGiftingShowcase;
