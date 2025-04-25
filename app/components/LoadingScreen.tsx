'use client';

import React from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-950 via-blue-900 to-sky-900 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md px-6">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo with subtle animation */}
          <div className="relative w-[320px] h-[180px] mb-10 animate-fade-in">
            <Image
              src="/oglogo2.png"
              alt="Acuron Logo"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain scale-100 hover:scale-105 transition-transform duration-700"
              priority
              loading="eager"
            />
            
            {/* Subtle reflection effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-t from-sky-500/10 to-transparent blur-sm"></div>
          </div>
          
          {/* Elegant loading bar */}
          <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-sky-400 via-blue-500 to-teal-400">
              <div className="absolute inset-0 animate-loading-progress"></div>
            </div>
          </div>
          
          <p className="text-white/60 font-light tracking-wide text-center mb-4">
            Preparing innovative healthcare solutions
          </p>
          
          {/* Pulsing dots animation */}
          <div className="flex justify-center space-x-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-1"></span>
            <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-2"></span>
            <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
} 