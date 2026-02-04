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

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Localization
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

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (!isMounted) return;
      const isMobile = window.innerWidth < 768;
      const cardsPerPage = isMobile ? 1 : 2; // Mobile shows 1 for better focus, Desktop 2
      const totalPages = Math.ceil(events.length / cardsPerPage);
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length, isMounted]);

  const getCurrentEvents = () => {
    if (!isMounted) return events.slice(0, 2);
    const isMobile = window.innerWidth < 768;
    const cardsPerPage = isMobile ? 1 : 2;
    const startIndex = currentIndex * cardsPerPage;
    return events.slice(startIndex, startIndex + cardsPerPage);
  };

  const nextSlide = () => {
    const isMobile = isMounted && window.innerWidth < 768;
    const cardsPerPage = isMobile ? 1 : 2;
    const totalPages = Math.ceil(events.length / cardsPerPage);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    if (!isMounted) return;
    const isMobile = window.innerWidth < 768;
    const cardsPerPage = isMobile ? 1 : 2;
    const totalPages = Math.ceil(events.length / cardsPerPage);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Event Carousel (Visuals) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {getCurrentEvents().map((event) => (
                    <div 
                      key={event.id} 
                      className="group relative h-full bg-white border-2 border-black flex flex-col transition-all duration-500 hover:bg-black hover:text-white"
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                      {/* Image Section */}
                      <div className="relative h-56 w-full overflow-hidden border-b-2 border-black">
                        <Image
                          src={event.image}
                          alt={event.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Date Tag */}
                        <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors duration-300">
                           {event.date.split(',')[0]}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full group-hover:border-white group-hover:bg-white group-hover:text-black transition-colors">
                            {event.category}
                          </span>
                          <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-white transition-colors">
                            {event.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium group-hover:text-gray-300">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                             {event.location}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-700">
                          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                             <span>Booth {event.boothNumber}</span>
                             <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                               View Details &rarr;
                             </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Header & Controls */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9]">
                <span className="text-blue-900">{joinUsText}</span> <br/>
                <span className="text-slate-400">at Industry</span> <br/>
                <span className="text-blue-900">{eventsText}</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Connect with us at leading medical exhibitions and conferences worldwide. Discover our latest innovations and solutions in person.
              </p>

              {/* Custom Controls */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="ml-4 text-sm font-bold tracking-widest">
                  <span className="text-black">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-400">
                    {isMounted ? String(Math.ceil(events.length / (window.innerWidth < 768 ? 1 : 2))).padStart(2, '0') : '06'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}