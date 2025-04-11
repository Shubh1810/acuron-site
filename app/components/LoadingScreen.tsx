'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  minLoadTime?: number; // Minimum time to show loading screen in ms
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ minLoadTime = 1000 }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);
    
    // Ensure the loading screen shows for at least minLoadTime
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
    }, minLoadTime);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [minLoadTime]);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-900 to-blue-950 flex items-center justify-center z-50">
      <div className="text-center max-w-md px-6">
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-20">
            <Image
              src="/acuronog.png"
              alt="Acuron Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="relative w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-teal-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="relative">
          <p className="text-white/80 font-light">
            Loading innovative healthcare solutions...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 