'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Country {
  code: string;
  name: string;
}

// Using SVG flags from flagcdn.com
const countries: Country[] = [
  { code: 'in', name: 'India' },
  { code: 'us', name: 'USA' },
  { code: 'gb', name: 'UK' },
  { code: 'de', name: 'Deutsche' },
  { code: 'fr', name: 'Français' },
  { code: 'jp', name: '日本語' },
  { code: 'cn', name: '中国人' },
  { code: 'br', name: 'Brazil' },
];

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="w-5 h-3.5 overflow-hidden rounded-sm hover:opacity-80 transition-opacity duration-300">
          <Image 
            src={`https://flagcdn.com/w40/${selectedCountry.code}.png`}
            alt={selectedCountry.name}
            width={20} 
            height={14}
            className="object-cover w-full h-full"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
          <div className="max-h-60 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors duration-150 ${
                  selectedCountry.code === country.code ? 'bg-gray-50 text-teal-700' : 'text-gray-700'
                }`}
              >
                <div className="w-5 h-3.5 overflow-hidden rounded-sm mr-3">
                  <Image 
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    width={20} 
                    height={14}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector; 