'use client';

import { useEffect, useState } from 'react';

export default function ScrollbarEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / height) * 100;
      setScrollPosition(percentage);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Don't render anything during SSR
  if (!isMounted) return null;
  
  return (
    <div className="fixed right-0 top-[130px] w-2 h-[calc(100%-130px)] z-50 pointer-events-none">
      <div 
        className="w-full bg-gradient-to-b from-teal-500 to-teal-600 rounded-b-lg transition-all duration-200 ease-out"
        style={{ 
          height: `${scrollPosition}%`,
          boxShadow: '0 0 8px rgba(20, 184, 166, 0.6)'
        }}
      />
    </div>
  );
} 