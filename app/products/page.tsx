"use client";
import React from "react";
import { motion } from "motion/react";
import Header from "../components/Header";

export default function ProductsPage() {
  // Medical supplies product data
  const products = [
    {
      id: 1,
      name: "3-Ply Medical Face Masks",
      description: "High-quality disposable medical masks with bacterial filtration efficiency",
      category: "PPE"
    },
    {
      id: 2,
      name: "N95 Respirator Masks",
      description: "NIOSH-approved respirators with 95% particle filtration efficiency",
      category: "PPE"
    },
    {
      id: 3,
      name: "Medical Coveralls",
      description: "Full-body protection coveralls with elastic cuffs and ankles",
      category: "PPE"
    },
    {
      id: 4,
      name: "Medical Shoe Covers",
      description: "Fluid-resistant disposable boot covers for clinical environments",
      category: "PPE"
    },
    {
      id: 5,
      name: "Medical Safety Goggles",
      description: "Anti-fog protective eyewear with indirect ventilation",
      category: "PPE"
    },
    {
      id: 6,
      name: "Biodegradable Waste Disposal Bags",
      description: "Eco-friendly medical waste bags with high tensile strength",
      category: "Disposal"
    },
    {
      id: 7,
      name: "Medical Examination Gloves",
      description: "Powder-free nitrile gloves for clinical and laboratory use",
      category: "PPE"
    },
    {
      id: 8,
      name: "Complete PPE Kit",
      description: "All-in-one protection kit including mask, coverall, gloves, and more",
      category: "Kits"
    },
    {
      id: 9,
      name: "Surgical Razors",
      description: "Precision surgical prep razors with safety features",
      category: "Surgical"
    },
    {
      id: 10,
      name: "Surgical Drapes (SMS)",
      description: "Sterile surgical drapes in various SMS fabric compositions",
      category: "Surgical"
    },
    {
      id: 11,
      name: "Surgical Gowns",
      description: "Fluid-resistant surgical gowns in multiple SMS fabric weights",
      category: "Surgical"
    },
    {
      id: 12,
      name: "Bouffant Caps",
      description: "Lightweight, breathable caps with elastic band for secure fit",
      category: "PPE"
    }
  ];

  return (
    <>
      <Header />
      
      <div className="pt-[90px] min-h-screen bg-gradient-to-b from-[#061D33] via-[#082F4F] to-[#061D33]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#78d6f5] bg-clip-text text-transparent mb-4"
            >
              Medical Supplies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#78d6f5] max-w-2xl mx-auto text-lg"
            >
              High-quality medical supplies and equipment for healthcare professionals
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1E619E] to-[#16DBBE] mx-auto mt-6"
            />
          </div>

          {/* Product filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "PPE", "Surgical", "Disposal", "Kits"].map((category) => (
              <button 
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#0A2A45]/80 text-[#78d6f5] hover:bg-[#1E619E]/50 transition-colors duration-300 border border-[#1E619E]/30"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
                className="bg-gradient-to-br from-[#0A2A45]/80 to-[#061D33]/90 backdrop-blur-sm border border-[#1E619E]/30 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(30,97,158,0.3)] transition-all duration-300 group"
              >
                <div className="aspect-video w-full bg-[#0A2A45]/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E619E]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[url('/medical-1.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-[#16DBBE]/20 text-[#16DBBE] text-xs font-bold py-1 px-3 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#16DBBE] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-[#16DBBE]/20 hover:bg-[#16DBBE]/30 text-[#16DBBE] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Get Quote
                    </button>
                    <button className="px-4 py-2 bg-[#1E619E]/30 hover:bg-[#1E619E]/50 text-[#78d6f5] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2">
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
            className="bg-gradient-to-r from-[#082A45] to-[#0A3D62] rounded-2xl p-8 md:p-12 shadow-lg border border-[#1E619E]/30 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need custom medical supplies?</h2>
                <p className="text-gray-300 mb-6 md:mb-0 max-w-xl">
                  Our team can provide customized medical supplies tailored to your specific requirements. Contact us today for bulk orders and personalized solutions.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#16DBBE] hover:bg-[#14c5ac] text-[#082A45] font-bold rounded-lg transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
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
              className="px-8 py-3 bg-[#1E619E]/20 hover:bg-[#1E619E]/40 text-[#78d6f5] rounded-lg transition-colors duration-300 border border-[#1E619E]/30 font-medium"
            >
              View All Products
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}