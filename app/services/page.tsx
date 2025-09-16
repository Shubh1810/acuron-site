"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import TransparentNavbar from "../components/TransparentNavbar";
import Image from "next/image";
import WhiteGridBackground from "../components/ui/white-grid-background";
import Footer from "../components/sections/Footer";

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const services = [
    {
      id: 1,
      title: "Medical Product Consulting",
      shortDescription: "Expert guidance on medical product selection and usage",
      fullDescription: "Our medical product consulting service provides healthcare facilities with expert advice on selecting the most appropriate medical supplies for their specific needs. Our consultants have extensive experience in the healthcare industry and can help you navigate complex regulatory requirements, evaluate product efficacy, and optimize your procurement strategy.",
      icon: "/icons/consulting.svg",
      image: "/services/consulting.jpg",
      benefits: [
        "Personalized product recommendations based on facility needs",
        "Regulatory compliance guidance for medical products",
        "Cost-effective procurement strategies",
        "Staff training on product usage and best practices"
      ]
    },
    {
      id: 2,
      title: "Global Procurement",
      shortDescription: "Streamlined sourcing of high-quality medical supplies worldwide",
      fullDescription: "Acuron's global procurement service leverages our extensive network of trusted manufacturers and suppliers to source the highest quality medical products at competitive prices. We handle the entire procurement process, from initial sourcing to delivery, ensuring that healthcare facilities receive reliable supplies that meet all regulatory standards.",
      icon: "/icons/procurement.svg",
      image: "/services/procurement.jpg",
      benefits: [
        "Access to a global network of trusted manufacturers",
        "Quality assurance and verification processes",
        "Competitive pricing through bulk purchasing",
        "Streamlined customs clearance and logistics"
      ]
    },
    {
      id: 3,
      title: "Distribution & Logistics",
      shortDescription: "Efficient delivery and inventory management solutions",
      fullDescription: "Our distribution and logistics service ensures that your medical supplies reach you efficiently and reliably. We manage the entire supply chain, from warehouse storage to last-mile delivery, utilizing advanced tracking systems to provide real-time updates. Our inventory management solutions help healthcare facilities maintain optimal stock levels while minimizing waste.",
      icon: "/icons/distribution.svg",
      image: "/services/distribution.jpg",
      benefits: [
        "Reliable, timely delivery of medical supplies",
        "Real-time shipment tracking and notifications",
        "Temperature-controlled shipping for sensitive products",
        "Inventory management systems for hospitals and clinics"
      ]
    },
    {
      id: 4,
      title: "Quality Assurance",
      shortDescription: "Rigorous testing and certification of all medical products",
      fullDescription: "Quality is at the heart of everything we do at Acuron. Our quality assurance service involves rigorous testing of all medical products before they reach healthcare facilities. We ensure that all products meet international standards and regulatory requirements, providing peace of mind to healthcare providers and patients alike.",
      icon: "/icons/quality.svg",
      image: "/services/quality.jpg",
      benefits: [
        "Comprehensive product testing and verification",
        "International standards compliance certification",
        "Batch tracking and documentation",
        "Rapid response to quality concerns"
      ]
    },
    {
      id: 5,
      title: "Custom Product Development",
      shortDescription: "Tailored medical supplies designed to your specifications",
      fullDescription: "When standard products don't meet your specific needs, our custom product development service offers a solution. We work closely with healthcare facilities to design and manufacture bespoke medical supplies that address unique challenges. From custom surgical kits to specialized PPE, we can develop products that perfectly match your requirements.",
      icon: "/icons/custom.svg",
      image: "/services/custom.jpg",
      benefits: [
        "Collaborative design process with healthcare professionals",
        "Prototype development and testing",
        "Small to large-scale manufacturing capabilities",
        "Continuous improvement based on feedback"
      ]
    },
    {
      id: 6,
      title: "Emergency Response Supply",
      shortDescription: "Rapid deployment of critical medical supplies during crises",
      fullDescription: "In times of emergency, access to critical medical supplies can make all the difference. Acuron's emergency response supply service provides rapid deployment of essential products during healthcare crises. Our dedicated emergency response team works around the clock to ensure that urgent supplies reach healthcare facilities as quickly as possible.",
      icon: "/icons/emergency.svg",
      image: "/services/emergency.jpg",
      benefits: [
        "24/7 emergency response team",
        "Priority production and shipping for critical situations",
        "Pre-positioned inventory for rapid deployment",
        "Specialized crisis management logistics"
      ]
    }
  ];

  return (
    <>
      <WhiteGridBackground />
      <Header />
      <TransparentNavbar />
      
      <div className="pt-[0px] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0A3D62] to-[#158C07] bg-clip-text text-transparent mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Comprehensive medical supply services tailored to healthcare facilities worldwide
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#0A3D62] to-[#158C07] mx-auto mt-6"
            />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
                className={`bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  expandedService === service.id ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div 
                  className={`relative overflow-hidden ${
                    expandedService === service.id ? "aspect-[21/9]" : "aspect-video"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#158C07]/10 to-transparent z-10" />
                  <div className="relative w-full h-full">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white/80 text-[#158C07] text-sm font-medium py-1.5 px-4 rounded-full z-20 backdrop-blur-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Acuron Service
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#158C07] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <button 
                      onClick={() => toggleExpanded(service.id)}
                      className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${
                        expandedService === service.id 
                          ? "rotate-180 hover:bg-gray-200" 
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className={`text-gray-600 mb-4 ${expandedService === service.id ? "" : "line-clamp-2"}`}>
                    {expandedService === service.id ? service.fullDescription : service.shortDescription}
                  </p>
                  
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-[#158C07] font-medium mt-6 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 + i * 0.1 }}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-5 text-[#158C07] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <div className="flex justify-between items-center mt-6">
                    {expandedService !== service.id && (
                      <button 
                        onClick={() => toggleExpanded(service.id)}
                        className="text-[#0A3D62] hover:text-[#158C07] transition-colors duration-300 text-sm font-medium flex items-center gap-1"
                      >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                    <button className="px-4 py-2 bg-[#0A3D62]/10 hover:bg-[#0A3D62]/20 text-[#0A3D62] rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact Us
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need specialized services?</h2>
                <p className="text-gray-600 mb-6 md:mb-0 max-w-xl">
                  Our team can provide customized service packages tailored to your healthcare facility's specific requirements. Contact us today to discuss your needs.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#158C07] hover:bg-[#107006] text-white font-bold rounded-lg transition-colors duration-300 whitespace-nowrap flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Request Consultation
              </button>
            </div>
          </motion.div>

          {/* Service Process Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Service Process</h2>
              <p className="text-[#0A3D62] max-w-2xl mx-auto">
                A streamlined approach to ensure you receive the highest quality medical supplies and services
              </p>
            </div>
            
            <div className="relative">
              {/* Process timeline connector */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#0A3D62] to-[#158C07] md:transform md:-translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">1. Initial Consultation</h3>
                      <p className="text-gray-600">
                        We begin with a comprehensive assessment of your healthcare facility's needs, understanding your specific requirements and challenges.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0A3D62] border-4 border-white shadow-md z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col md:flex-row-reverse items-center gap-8"
                >
                  <div className="md:w-1/2 md:text-left md:pl-12">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">2. Customized Solution Development</h3>
                      <p className="text-gray-600">
                        Our team designs a tailored solution, selecting the most appropriate products and services to address your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0A3D62] border-4 border-white shadow-md z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pr-12"></div>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">3. Procurement & Quality Assurance</h3>
                      <p className="text-gray-600">
                        We source the highest quality products from our global network of trusted manufacturers, subjecting each item to rigorous quality checks.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0A3D62] border-4 border-white shadow-md z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </motion.div>
                
                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col md:flex-row-reverse items-center gap-8"
                >
                  <div className="md:w-1/2 md:text-left md:pl-12">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">4. Efficient Delivery & Implementation</h3>
                      <p className="text-gray-600">
                        Our logistics team ensures timely delivery of your products, with optional implementation support and staff training.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0A3D62] border-4 border-white shadow-md z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pr-12"></div>
                </motion.div>
                
                {/* Step 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">5. Ongoing Support & Optimization</h3>
                      <p className="text-gray-600">
                        We provide continuous support, regularly reviewing your needs and suggesting optimizations to ensure maximum efficiency and cost-effectiveness.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#158C07] border-4 border-white shadow-md z-10">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 