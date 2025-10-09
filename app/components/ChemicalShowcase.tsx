'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const ChemicalShowcase: React.FC = () => {
  const chemicalIndustryProducts = [
    {
      id: 'chemical-protection-kit',
      name: 'Chemical Safety Protection Kit',
      description: 'Comprehensive protective equipment for chemical handling and processing operations',
      image: '/products/hivkit.png',
      features: ['Chemical Resistant', 'Full Protection', 'Industrial Grade'],
      price: 'Contact for Quote'
    },
    {
      id: 'disposable-safety-equipment',
      name: 'Disposable Safety Equipment',
      description: 'Industrial-grade disposable safety equipment for chemical plant operations and hazardous material handling',
      image: '/disposable-safety-equipment.webp',
      features: ['Chemical Resistant', 'Complete Protection', 'Industrial Grade'],
      price: 'Contact for Quote'
    },
    {
      id: 'visitor-safety-kit',
      name: 'Visitor Disposable Safety Kit',
      description: 'Complete disposable safety kit for chemical plant visitors ensuring maximum protection and safety',
      image: '/visitor-safety-kit.avif',
      features: ['Visitor Protection', 'Single Use', 'Complete Safety'],
      price: 'Contact for Quote'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] py-16 md:py-20 mb-16 rounded-3xl"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-medium">Chemical Industry</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Chemical Protection
              <span className="block bg-gradient-to-r from-white via-purple-50 to-violet-100 bg-clip-text text-transparent">
                Safety Equipment
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Advanced protective equipment for chemical manufacturing and handling operations. 
              <span className="block mt-2">Ensure worker safety with our certified chemical-resistant protective gear.</span>
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
          {chemicalIndustryProducts.map((product, index) => (
            <motion.div
              key={product.id}
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
                    src={product.image}
                    alt={product.name}
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
                  <h3 className="text-xl font-bold text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#7C3AED]/10 text-[#7C3AED] text-xs rounded-full font-medium border border-[#7C3AED]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-lg font-bold text-[#8B5CF6]">{product.price}</span>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href="/#contact-us-section"
                    className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ChemicalShowcase;

