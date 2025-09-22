'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';

export default function TendersSection() {
  const { selectedCountry } = useCountryStore();
  const tendersRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (tendersRef.current) {
      observer.observe(tendersRef.current);
    }

    return () => {
      if (tendersRef.current) {
        observer.unobserve(tendersRef.current);
      }
    };
  }, []);

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const tendersAwardedTitle = getLocalizedContent('Tenders Awarded', {
    de: 'Ausschreibungen gewonnen',
    fr: 'Appels d\'offres attribués',
    ja: '受賞した入札',
    zh: '获得的招标',
    pt: 'Licitações Concedidas'
  });

  return (
    <section className="py-16 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tenders Section */}
        <div 
          ref={tendersRef}
          className={`mb-1 mt-1 sm:mb-2 sm:mt-2 transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
          }`}
          style={{
            transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
          }}
        >
          <div className="relative mb-2 sm:mb-4 ml-8">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-left leading-tight transition-all duration-900 delay-100 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-12'
            }`}
            style={{
              transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
            }}>
              {tendersAwardedTitle}
            </h2>
          </div>
        </div>
        
        {/* Infinite Carousel Tender Logos */}
        <div className="relative w-full overflow-hidden h-48 sm:h-64 lg:h-72 xl:h-80">
          <div 
            className="flex tender-carousel"
            style={{
              width: 'max-content'
            }}
            role="region" 
            aria-label="Tender logos"
          >
            {/* Render logos twice for seamless infinite loop */}
            {[...Array(2)].map((_, setIndex) => 
              Array.from({ length: 11 }).map((_, index) => (
                <div 
                  key={`set-${setIndex}-${index}`} 
                  className="relative flex-shrink-0 -mx-12 sm:-mx-4 lg:-mx-6 drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex items-center justify-center"
                >
                  <Image 
                    src={`/tender${index + 1}.png`} 
                    alt={`Tender ${index + 1}`} 
                    width={600} 
                    height={600}
                    className="object-contain max-w-full max-h-full"
                    loading="lazy"
                  />
                </div>
              ))
            ).flat()}
          </div>
        </div>
      </div>
    </section>
  );
}
