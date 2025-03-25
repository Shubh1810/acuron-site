'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollbarEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(105);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Measure the actual header height
    const header = document.querySelector('header');
    if (header) {
      const height = header.getBoundingClientRect().height;
      setHeaderHeight(height);
    }
    
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / height) * 100;
      setScrollPosition(percentage);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    // Re-measure header height on resize
    const handleResize = () => {
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Don't render anything during SSR
  if (!isMounted) return null;
  
  return (
    <div 
      ref={scrollbarRef}
      className="fixed right-0 z-50 pointer-events-none w-2"
      style={{ 
        top: `${headerHeight}px`,
        height: `calc(100% - ${headerHeight}px)`
      }}
    >
      <div 
        className="w-full bg-gradient-to-b from-teal-500 to-teal-600 rounded-t-sm rounded-b-lg transition-all duration-200 ease-out"
        style={{ 
          height: `${scrollPosition}%`,
          boxShadow: '0 0 8px rgba(20, 184, 166, 0.6)'
        }}
      />
    </div>
  );
} 