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
      const percentage = height > 0 ? (position / height) * 100 : 0;
      setScrollPosition(percentage);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Don't render during SSR
  if (!isMounted) return null;
  
  return (
    <div className="fixed top-0 right-0 w-1 h-full bg-gray-200/20 z-40 pointer-events-none">
      <div 
        className="w-full bg-[#0F4679]/60 transition-all duration-150 ease-out"
        style={{ height: `${scrollPosition}%` }}
      />
    </div>
  );
} 