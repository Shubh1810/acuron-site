'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';

export default function EventsSection() {
  const { selectedCountry } = useCountryStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const eventsText = getLocalizedContent('Events', {
    de: 'Veranstaltungen',
    fr: 'Événements',
    ja: 'イベント',
    zh: '活动',
    pt: 'Eventos'
  });

  const joinUsText = getLocalizedContent('Join Us', {
    de: 'Begleiten Sie uns',
    fr: 'Rejoignez-nous',
    ja: 'ご参加ください',
    zh: '加入我们',
    pt: 'Junte-se a nós'
  });

  const events = [
    {
      id: 1,
      name: "Medical Expo",
      location: "Guwahati, India",
      date: "April 25-27, 2025",
      description: "Brochure Distribution",
      boothNumber: "Hall A-25",
      image: "/IMG_8316.PNG",
      category: "Expo"
    },
    {
      id: 2,
      name: "IndiaMed Expo",
      location: "Noida, India",
      date: "May 23-25, 2025",
      description: "Brochure Distribution",
      boothNumber: "B2.145",
      image: "/IMG_8317.JPG",
      category: "Expo"
    },
    {
      id: 3,
      name: "GMEC India 2025",
      location: "Bangalore, India",
      date: "June 20-22, 2025",
      description: "Visit & Brochure Distribution",
      boothNumber: "C-18",
      image: "/gmec.jpeg",
      category: "Expo"
    },
    {
      id: 4,
      name: "India Health",
      location: "Delhi, India",
      date: "July 11-13, 2025",
      description: "Brochure Distribution",
      boothNumber: "D3.72",
      image: "/indiahelth.webp",
      category: "Expo"
    },
    {
      id: 5,
      name: "Medicall",
      location: "Chennai, India",
      date: "July 25-27, 2025",
      description: "Acuron Booth",
      boothNumber: "B-42",
      image: "/IMG_8316.PNG",
      category: "Expo"
    },
    {
      id: 6,
      name: "Medical Expo",
      location: "Ahmedabad, India",
      date: "August 22-23, 2025",
      description: "Visit & Brochure Distribution",
      boothNumber: "C-15",
      image: "/IMG_8318.PNG",
      category: "Expo"
    },
    {
      id: 7,
      name: "Gujarat Medical",
      location: "Ahmedabad, India",
      date: "September 14-16, 2025",
      description: "Brochure Distribution",
      boothNumber: "D-28",
      image: "/gujmed.jpg",
      category: "Expo"
    },
    {
      id: 8,
      name: "Medicall",
      location: "Delhi, India",
      date: "September 15-26, 2025",
      description: "Brochure Distribution",
      boothNumber: "E-35",
      image: "/IMG_8316.PNG",
      category: "Expo"
    },
    {
      id: 9,
      name: "Bihar Medical",
      location: "Patna, India",
      date: "November 2025",
      description: "Brochure Distribution",
      boothNumber: "F-12",
      image: "/bihar.png",
      category: "Expo"
    },
    {
      id: 10,
      name: "Medicall",
      location: "Mumbai, India",
      date: "December 12-14, 2025",
      description: "Brochure Distribution",
      boothNumber: "G-45",
      image: "/IMG_8316.PNG",
      category: "Expo"
    },
    {
      id: 11,
      name: "Medical Expo",
      location: "Lucknow, India",
      date: "December 19-21, 2025",
      description: "Brochure Distribution",
      boothNumber: "H-33",
      image: "/IMG_8318.PNG",
      category: "Expo"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (!isMounted) return;
      const isMobile = window.innerWidth < 768;
      const cardsPerPage = isMobile ? 4 : 2;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(events.length / cardsPerPage));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length, isMounted]);

  const getCurrentEvents = () => {
    // Mobile: 4 cards, Desktop: 2 cards
    const isMobile = isMounted && window.innerWidth < 768;
    const cardsPerPage = isMobile ? 4 : 2;
    const startIndex = currentIndex * cardsPerPage;
    return events.slice(startIndex, startIndex + cardsPerPage);
  };

  const nextSlide = () => {
    const isMobile = isMounted && window.innerWidth < 768;
    const cardsPerPage = isMobile ? 4 : 2;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(events.length / cardsPerPage));
  };

  const prevSlide = () => {
    if (!isMounted) return;
    const isMobile = window.innerWidth < 768;
    const cardsPerPage = isMobile ? 4 : 2;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(events.length / cardsPerPage)) % Math.ceil(events.length / cardsPerPage));
  };

  return (
    <section className="bg-white px-2 md:px-4 w-full max-w-[100vw] overflow-x-hidden">
      <div className="py-16 bg-[#0F4679] relative overflow-hidden rounded-3xl border-2 border-white/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Side-by-Side Layout: Header + Carousel */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Header Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 text-left"
          >
            <div className="flex justify-start">
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight text-left">
                  {joinUsText} at Industry {eventsText}
                </h2>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl text-left">
                Connect with us at leading medical exhibitions and conferences worldwide. Discover our latest innovations and solutions.
              </p>
            </div>

            {/* Navigation Controls - Containerless */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-3 md:mt-4">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:scale-125 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:scale-125 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="text-sm text-blue-200/70 font-medium" suppressHydrationWarning>
                {isMounted ? (
                  <>
                    {currentIndex + 1} / {Math.ceil(events.length / (window.innerWidth < 768 ? 4 : 2))}
                  </>
                ) : (
                  <>
                    {currentIndex + 1} / {Math.ceil(events.length / 2)}
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Events Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            {/* Events Container */}
            <div className="relative min-h-[420px] md:h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6"
                >
                  {getCurrentEvents().map((event, index) => (
                    <div key={event.id} className="w-full">
                      <div className="h-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-xl flex flex-col">
                        {/* Event Image - Fixed height */}
                        <div className="relative h-20 md:h-64 overflow-hidden rounded-t-2xl">
                          <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                          
                          {/* Date Badge - Subtle glass effect */}
                          <div className="absolute top-3 left-3">
                            <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/30">
                              <span className="text-xs font-medium text-white">{event.date.split(',')[0]}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content Area - Below image for all screen sizes */}
                        <div className="p-3 md:p-4 flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="text-sm md:text-base font-semibold text-white mb-2 leading-tight line-clamp-1">
                              {event.name}
                            </h3>
                            <div className="flex items-center text-white/90 mb-2">
                              <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-xs truncate">{event.location}</span>
                            </div>
                            
                            {/* Booth Info */}
                            {event.boothNumber !== "N/A" && (
                              <div className="text-xs text-white/80">
                                <span>Booth: {event.boothNumber}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
