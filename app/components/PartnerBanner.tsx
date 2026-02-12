'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PartnerBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has dismissed the banner
  useEffect(() => {
    const dismissed = localStorage.getItem('partner-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('partner-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#e0e8f7] py-1.5 relative z-[70]">
      <div className="w-full flex items-center justify-between gap-4 pl-4 sm:pl-6 md:pl-7 pr-4 sm:pr-6 md:pr-8">
        {/* Left side - Text and Learn More link */}
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-start">
          <p className="text-[10px] sm:text-sm text-gray-800 font-bold truncate sm:truncate-none">
            <span className="hidden sm:inline">Acuron & Whizzo Announce Strategic Partnership to Strengthen Healthcare Manufacturing</span>
            <span className="sm:hidden">Acuron & Whizzo Strategic Partnership</span>
          </p>
          <a 
            href="https://whizzo.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-sm text-[#0F4679] underline hover:text-[#0D3C6B] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Learn More
          </a>
        </div>

        {/* Right side - Close button */}
        <button
          onClick={handleClose}
          className="p-1 text-gray-800 hover:text-gray-900 transition-colors flex-shrink-0 mr-0"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
