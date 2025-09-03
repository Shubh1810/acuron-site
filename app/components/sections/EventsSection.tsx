'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';

export default function EventsSection() {
  const { selectedCountry } = useCountryStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(events.length / 2));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const getCurrentEvents = () => {
    const startIndex = currentIndex * 2;
    return events.slice(startIndex, startIndex + 2);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(events.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(events.length / 2)) % Math.ceil(events.length / 2));
  };

  return (
    <section className="py-16 bg-[#0F4679] relative overflow-hidden">
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
            className="lg:col-span-4 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-2xl border border-white/20 mb-6">
              <svg className="w-4 h-4 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-bold text-white tracking-wide">{eventsText.toUpperCase()}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter leading-tight">
              {joinUsText} at Industry Events
            </h2>
            
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              Connect with us at leading medical exhibitions and conferences worldwide. Discover our latest innovations and solutions.
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 flex items-center justify-center text-[#0F4679] hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 flex items-center justify-center text-[#0F4679] hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="text-sm text-blue-200 font-medium">
                {currentIndex + 1} / {Math.ceil(events.length / 2)}
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
            <div className="relative h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex gap-6"
                >
                  {getCurrentEvents().map((event, index) => (
                    <div key={event.id} className="flex-1">
                      <div className="h-full bg-white rounded-3xl border border-gray-100/80 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group relative">
                        {/* Professional Header Strip */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4679] via-[#158C07] to-[#0F4679]"></div>
                        
                        {/* Event Image with Overlay */}
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679]/20 via-transparent to-[#158C07]/20"></div>
                          
                          {/* Category Badge - Top Right */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg border border-white/50">
                              <span className="text-xs font-bold text-[#0F4679] tracking-wide">{event.category}</span>
                            </div>
                          </div>

                          {/* Date Badge - Top Left */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-[#0F4679]/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg">
                              <div className="flex items-center text-white">
                                <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xs font-semibold">{event.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-1 flex flex-col">
                          {/* Event Title */}
                          <div className="mb-3">
                            <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#0F4679] transition-colors duration-300 line-clamp-2">
                              {event.name}
                            </h3>
                            <div className="flex items-center text-gray-600">
                              <svg className="w-3.5 h-3.5 mr-1.5 text-[#0F4679]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-xs font-medium">{event.location}</span>
                            </div>
                          </div>



                          {/* Bottom Section */}
                          <div className="space-y-3">
                            {/* Booth Information */}
                            {event.boothNumber !== "N/A" && (
                              <div className="flex items-center p-2.5 bg-gray-50/80 rounded-lg border border-gray-100/50">
                                <div className="w-6 h-6 bg-[#0F4679]/10 rounded-md flex items-center justify-center mr-2.5">
                                  <svg className="w-3 h-3 text-[#0F4679]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500 font-medium leading-none">Booth</p>
                                  <p className="text-xs font-bold text-[#0F4679] leading-none">{event.boothNumber}</p>
                                </div>
                              </div>
                            )}

                            {/* Action Button */}
                            <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-2.5 px-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative flex items-center justify-center">
                                <span className="text-xs">Learn More</span>
                                <svg className="w-3 h-3 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </button>
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
    </section>
  );
}
