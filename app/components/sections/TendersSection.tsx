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
          className={`mb-0 mt-0 transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
          }`}
          style={{
            transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
          }}
        >
          <div className="relative mb-0 ml-8">
            <h2 className={`lato-regular text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-left leading-tight transition-all duration-900 delay-100 ${
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
        
        {/* Desktop: single responsive row, no carousel */}
        <div 
          className="hidden md:flex w-full flex-nowrap gap-0 -mx-2 lg:-mx-3 xl:-mx-4 -mt-8 items-center justify-center min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]"
          role="region" 
          aria-label="Tender logos"
        >
          {Array.from({ length: 11 }).map((_, index) => (
            <div 
              key={`desktop-${index}`} 
              className="relative flex-1 min-w-0 h-44 lg:h-56 xl:h-64 flex items-center justify-center drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-300 px-0.5"
            >
              <Image 
                src={`/tender${index + 1}.png`} 
                alt={`Tender ${index + 1}`} 
                width={600} 
                height={600}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile only: carousel (infinite scroll via CSS animation) */}
        <div className="relative w-full overflow-hidden h-56 sm:h-72 md:hidden -mt-2">
          <div 
            className="flex tender-carousel"
            style={{ width: 'max-content' }}
            role="region" 
            aria-label="Tender logos carousel"
          >
            {[...Array(2)].map((_, setIndex) => 
              Array.from({ length: 11 }).map((_, index) => (
                <div 
                  key={`set-${setIndex}-${index}`} 
                  className="relative flex-shrink-0 -mx-10 sm:-mx-3 drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center"
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
