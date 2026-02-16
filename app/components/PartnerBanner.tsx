'use client';

import { X } from 'lucide-react';

export default function PartnerBanner() {
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

        {/* Right side - Fake close icon (non-functional) */}
        <div
          className="p-1 text-gray-800 flex-shrink-0 mr-0 cursor-default"
          aria-hidden="true"
        >
          <X className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
