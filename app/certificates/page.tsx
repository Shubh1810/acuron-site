"use client";
import React from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";

export default function CertificatesPage() {
  // Certificate data
  const certificates = [
    {
      id: 1,
      name: "ISO 13485:2016",
      description: "Quality management systems for medical devices",
      category: "Quality"
    },
    {
      id: 2,
      name: "CE Certification",
      description: "European conformity for medical devices and PPE",
      category: "Compliance"
    },
    {
      id: 3,
      name: "FDA Registration",
      description: "US Food and Drug Administration registration",
      category: "Compliance"
    },
    {
      id: 4,
      name: "ISO 9001:2015",
      description: "Quality management system certification",
      category: "Quality"
    },
    {
      id: 5,
      name: "EN 14683",
      description: "European standard for medical face masks",
      category: "Product Standard"
    },
    {
      id: 6,
      name: "ASTM F2100",
      description: "Standard specification for performance of materials used in medical face masks",
      category: "Product Standard"
    },
    {
      id: 7,
      name: "EN 14126",
      description: "Protective clothing against infective agents",
      category: "Product Standard"
    },
    {
      id: 8,
      name: "EN 374",
      description: "Protective gloves against chemicals and micro-organisms",
      category: "Product Standard"
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
              Our Certificates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#78d6f5] max-w-2xl mx-auto text-lg"
            >
              Demonstrating our commitment to quality and compliance in medical supplies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1E619E] to-[#16DBBE] mx-auto mt-6"
            />
          </div>

          {/* Certificate filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "Quality", "Compliance", "Product Standard"].map((category) => (
              <button 
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#0A2A45]/80 text-[#78d6f5] hover:bg-[#1E619E]/50 transition-colors duration-300 border border-[#1E619E]/30"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certificates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
                className="bg-gradient-to-br from-[#0A2A45]/80 to-[#061D33]/90 backdrop-blur-sm border border-[#1E619E]/30 rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(30,97,158,0.3)] transition-all duration-300 group"
              >
                <div className="aspect-[3/2] w-full bg-[#0A2A45]/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E619E]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#16DBBE]/10 rounded-full flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-12 w-12 text-[#16DBBE]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#16DBBE]/20 text-[#16DBBE] text-xs font-bold py-1 px-3 rounded-full">
                    {certificate.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#16DBBE] transition-colors duration-300">
                    {certificate.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {certificate.description}
                  </p>
                  <div className="flex justify-end items-center">
                    <button className="px-4 py-2 bg-[#1E619E]/30 hover:bg-[#1E619E]/50 text-[#78d6f5] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                      View Certificate
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have questions about our certifications?</h2>
                <p className="text-gray-300 mb-6 md:mb-0 max-w-xl">
                  Our team can provide detailed information about our quality standards and certifications. Contact us today for more information about our compliance and product safety.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#16DBBE] hover:bg-[#14c5ac] text-[#082A45] font-bold rounded-lg transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Request Information
              </button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Trusted by Healthcare Providers Worldwide
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Europe', 'North America', 'Middle East', 'Asia Pacific'].map((region, index) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-[#0A2A45]/50 p-6 rounded-lg border border-[#1E619E]/30"
                >
                  <div className="text-[#16DBBE] font-bold text-lg mb-1">{region}</div>
                  <div className="text-gray-400 text-sm">Certified Distributor</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}