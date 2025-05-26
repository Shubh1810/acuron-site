'use client';

import React from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md"
    >
      {/* Content container */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          {/* Logo */}
          <div className="relative w-[280px] h-[160px] mx-auto mb-8">
            <Image
              src="/oglogo2.png"
              alt="Acuron Logo"
              fill
              sizes="280px"
              className="object-contain"
              priority
            />
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 