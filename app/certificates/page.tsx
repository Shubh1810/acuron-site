"use client";
import React, { useState, useTransition } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import Image from "next/image";
import Header from "../components/Header";
import TransparentNavbar from "../components/TransparentNavbar";
import Footer from "../components/sections/Footer";
import WhiteGridBackground from "../components/ui/white-grid-background";

function AnimatedMotif() {
  const motifs = [
    { size: 250, x: '10vw', y: '20vh', duration: 40, opacity: 0.03 },
    { size: 180, x: '80vw', y: '30vh', duration: 30, opacity: 0.05 },
    { size: 120, x: '50vw', y: '75vh', duration: 50, opacity: 0.04 },
    { size: 160, x: '20vw', y: '80vh', duration: 35, opacity: 0.04 },
    { size: 90, x: '90vw', y: '70vh', duration: 45, opacity: 0.03 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {motifs.map((motif, i) => (
        <motion.div
          key={i}
          initial={{ x: motif.x, y: motif.y, scale: 0.5, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{
            duration: motif.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 2,
          }}
          className="absolute rounded-full bg-gradient-to-br from-[#0F4679] to-[#158C07]"
          style={{ 
            width: motif.size, 
            height: motif.size,
            opacity: motif.opacity,
          }}
        />
      ))}
    </div>
  );
}

// Define types for certificate and props
interface Certificate {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  year: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679]/20 to-[#158C07]/20 rounded-3xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        <div style={{ transformStyle: "preserve-3d" }} className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
          <div className="aspect-[3/4] relative">
            <Image
              src={certificate.image}
              alt={certificate.name}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSI2MCIgZmlsbD0iIzBGNDY3OSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzBGNDY3OSI+Q2VydGlmaWNhdGU8L3RleHQ+Cjwvc3ZnPg==";
              }}
            />
            
            <motion.div style={{ transform: "translateZ(40px)" }} className="absolute top-4 right-4 bg-[#158C07] text-white p-2 rounded-full shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <motion.div style={{ transform: "translateZ(30px)" }} className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {certificate.year}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <motion.h3 style={{ transform: "translateZ(50px)" }} className="text-white font-bold text-lg mb-1">
              {certificate.name}
            </motion.h3>
            <motion.p style={{ transform: "translateZ(40px)" }} className="text-white/90 text-sm">
              {certificate.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        <h4 className="text-xl font-bold text-[#0F4679] mb-2">
          {certificate.name}
        </h4>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
          {certificate.category}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPending, startTransition] = useTransition();

  const certificates: Certificate[] = [
    { id: 1, name: "SASMIRA Certification", description: "SASMIRA quality certification", category: "Quality", image: "/sasmira.jpg", year: "2025" },
    { id: 2, name: "SASMIRA Standard", description: "SASMIRA standard compliance", category: "Compliance", image: "/sasmira2.jpg", year: "2025" },
    { id: 3, name: "SASMIRA Approval", description: "SASMIRA regulatory approval", category: "Compliance", image: "/sasmira3.jpg", year: "2025" },
    { id: 4, name: "CE Certification", description: "European conformity certification document", category: "Compliance", image: "/IMG_8303.jpg", year: "2025" },
    { id: 5, name: "GMP WHO Certificate", description: "Good Manufacturing Practice WHO certification", category: "Quality", image: "/IMG_8304.jpg", year: "2025" },
    { id: 6, name: "ISO 13485", description: "Quality management systems certification", category: "Quality", image: "/IMG_8305.jpg", year: "2025" },
    { id: 7, name: "ISO 13759:1996", description: "Medical devices quality management standard", category: "Product Standard", image: "/IMG_8306.jpg", year: "2025" },
    { id: 8, name: "ISO 9001:2015", description: "Quality management system certification", category: "Quality", image: "/IMG_8307.jpg", year: "2025" },
    { id: 9, name: "WHO GMP Certificate", description: "Good Manufacturing Practice WHO certification", category: "Quality", image: "/IMG_8309.jpg", year: "2025" },
    { id: 10, name: "ISO 9001:2015 (New)", description: "Quality management system certification", category: "Quality", image: "/IMG_8310.jpg", year: "2025" },
    { id: 11, name: "CE Certification (New)", description: "European conformity certification", category: "Compliance", image: "/IMG_8311.jpg", year: "2025" },
    { id: 12, name: "ISO 13485:2016 (New)", description: "Quality management systems certification", category: "Quality", image: "/IMG_8312.jpg", year: "2025" }
  ];

  const categories = ["All", "Quality", "Compliance", "Product Standard"];

  const filteredCertificates = activeCategory === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <>
      <WhiteGridBackground />
      <Header />
      <div>
        <TransparentNavbar />
      </div>
      <AnimatedMotif />
      
      <div className="pt-[0px] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent mb-4">
              Our Certificates
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality. Compliance. Trust.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-full p-2 shadow-lg border border-gray-200">
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => startTransition(() => setActiveCategory(category))}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#0F4679] text-white shadow-lg'
                        : 'text-gray-600 hover:text-[#0F4679] hover:bg-gray-50'
                    } ${isPending ? 'opacity-50' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-20"
            >
              {filteredCertificates.map((certificate, index) => (
                <CertificateCard key={certificate.id} certificate={certificate} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <div className="w-2 h-2 bg-[#158C07] rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                Trusted by 500+ healthcare providers worldwide
              </span>
              <div className="w-2 h-2 bg-[#0F4679] rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </>
  );
}