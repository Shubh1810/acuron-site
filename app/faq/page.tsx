"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";

export default function FAQPage() {
  // FAQ data organized by categories
  const faqData = [
    {
      category: "Product Information",
      questions: [
        {
          id: 1,
          question: "What certifications do your medical products have?",
          answer: "Our medical products are certified according to international standards including ISO 13485:2016, CE certification, and FDA registration where applicable. All our products meet or exceed the required quality and safety standards for their respective categories. You can view our full list of certifications on our Certificates page."
        },
        {
          id: 2,
          question: "Are your masks and PPE appropriate for medical use?",
          answer: "Yes, our masks and PPE are specifically designed for medical use. Our 3-ply masks meet EN 14683 Type IIR standards with ≥98% bacterial filtration efficiency (BFE), while our N95 respirators are NIOSH-approved with 95% filtration efficiency for airborne particles. All our PPE products undergo rigorous testing to ensure they provide the required protection for healthcare professionals."
        },
        {
          id: 3,
          question: "What materials are used in your surgical drapes and gowns?",
          answer: "Our surgical drapes and gowns are made using high-quality SMS (Spunbond-Meltblown-Spunbond) fabric in various weights (from 30 to 50 gsm). This material provides an effective barrier against fluids and microorganisms while remaining comfortable and breathable. We also offer reinforced options with additional fluid-resistant layers for high-risk procedures."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          id: 4,
          question: "What is the minimum order quantity (MOQ) for your products?",
          answer: "Our minimum order quantities vary by product type. For standard items like masks and gloves, our MOQs typically start at 10,000 units. For specialized items like surgical drapes or coveralls, MOQs may start at 1,000 units. For bulk orders or customized products, please contact our sales team for specific MOQ information."
        },
        {
          id: 5,
          question: "How long does shipping take and which countries do you deliver to?",
          answer: "We ship worldwide to over 80 countries. Standard shipping times vary by destination: 7-10 business days for Europe, 10-15 days for North America and Middle East, and 15-20 days for other regions. Express shipping options are available for urgent orders. We handle all export documentation and can recommend shipping partners for specific regions."
        },
        {
          id: 6,
          question: "Do you offer customized packaging or private labeling?",
          answer: "Yes, we offer customized packaging and private labeling services for bulk orders. This includes custom boxes, packaging inserts, and product labeling with your brand logo and information. Custom packaging requires a minimum order quantity and additional lead time, typically 2-3 weeks beyond standard production times."
        }
      ]
    },
    {
      category: "Product Usage & Safety",
      questions: [
        {
          id: 7,
          question: "What is the shelf life of your medical supplies?",
          answer: "The shelf life varies by product type. Masks, gloves, and other disposable items typically have a 3-year shelf life when stored properly in original packaging at room temperature in dry conditions. Sterile products like surgical drapes have a shelf life of 5 years when the packaging remains intact. Each product package is clearly marked with manufacturing and expiration dates."
        },
        {
          id: 8,
          question: "Are your products latex-free?",
          answer: "Yes, all our medical supplies including gloves, masks, and other PPE are 100% latex-free to prevent allergic reactions. Our nitrile examination gloves are specifically designed to provide the same elasticity and comfort as latex while being suitable for individuals with latex allergies."
        },
        {
          id: 9,
          question: "How should I dispose of used medical supplies?",
          answer: "Used medical supplies should be disposed of according to local regulations for medical waste. Our biodegradable waste disposal bags are specifically designed for the safe containment of used medical supplies. For items potentially contaminated with infectious materials, we recommend following your facility's protocols for biohazardous waste management."
        }
      ]
    },
    {
      category: "Technical Specifications",
      questions: [
        {
          id: 10,
          question: "What are the filtration specifications of your N95 respirators?",
          answer: "Our N95 respirators provide at least 95% filtration efficiency against non-oil-based particles and aerosols as small as 0.3 microns. They meet NIOSH 42 CFR 84 standards and feature a secure fit with adjustable nose bridges and elastic head straps. Each batch undergoes testing for filtration efficiency, breathing resistance, and fit performance."
        },
        {
          id: 11,
          question: "What is the fluid resistance level of your surgical gowns?",
          answer: "Our surgical gowns are available in multiple AAMI levels: Level 1 (minimal fluid resistance), Level 2 (low fluid resistance), Level 3 (moderate fluid resistance), and Level 4 (high fluid resistance). The Level 4 gowns provide protection against penetration by blood and body fluids under pressure and are suitable for long, fluid-intensive procedures."
        },
        {
          id: 12,
          question: "Are your biodegradable waste bags suitable for autoclaving?",
          answer: "Our standard biodegradable waste bags are not autoclave-safe as they have a melting point of approximately 90°C. However, we do offer specialized autoclave-safe waste bags made from high-temperature resistant biodegradable materials that can withstand temperatures up to 135°C, suitable for steam sterilization processes."
        }
      ]
    }
  ];

  // State to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  // Toggle question expansion
  const toggleQuestion = (id: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#78d6f5] max-w-2xl mx-auto text-lg"
            >
              Find answers to common questions about our medical supplies and services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1E619E] to-[#16DBBE] mx-auto mt-6"
            />
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-[#0A2A45]/80 to-[#061D33]/90 backdrop-blur-sm border border-[#1E619E]/30 rounded-xl overflow-hidden"
              >
                <div className="p-6 border-b border-[#1E619E]/30">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <span className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-[#16DBBE]/20 flex items-center justify-center">
                      {categoryIndex === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {categoryIndex === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      )}
                      {categoryIndex === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {categoryIndex === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                    </span>
                    {category.category}
                  </h2>
                </div>

                <div className="divide-y divide-[#1E619E]/20">
                  {category.questions.map((item) => (
                    <div key={item.id} className="p-6">
                      <button 
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex justify-between items-start text-left"
                      >
                        <h3 className="text-white font-medium pr-6 group-hover:text-[#16DBBE] transition-colors duration-300">
                          {item.question}
                        </h3>
                        <div className={`mt-1 transition-transform duration-300 text-[#16DBBE] ${expandedQuestions[item.id] ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedQuestions[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-300 text-sm"
                        >
                          <p>{item.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't find the answer you need?</h2>
                <p className="text-gray-300 mb-6 md:mb-0 max-w-xl">
                  Our team is ready to assist with any specific questions about our products, ordering process, or technical specifications. Reach out to us directly for personalized support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-6 py-3 bg-[#16DBBE] hover:bg-[#14c5ac] text-[#082A45] font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </button>
                <button className="px-6 py-3 bg-[#1E619E]/30 hover:bg-[#1E619E]/50 text-[#78d6f5] font-bold rounded-lg border border-[#1E619E]/50 transition-colors duration-300 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Live Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}