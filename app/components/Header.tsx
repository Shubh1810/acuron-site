import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import CountrySelector from './CountrySelector';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-[#0A2F35] to-[#0B4F6C] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6">
          <Link href="/company" className="text-[11px] tracking-wide font-bold hover:text-emerald-300 transition-colors duration-300">
            OUR COMPANY
          </Link>
          <Link href="/contact" className="text-[11px] tracking-wide font-bold hover:text-emerald-300 transition-colors duration-300">
            CONTACT
          </Link>
          <Link href="/careers" className="text-[11px] tracking-wide font-bold hover:text-emerald-300 transition-colors duration-300">
            CAREERS
          </Link>
          <CountrySelector />
        </div>
      </div>
      
      {/* Logo and Main Navigation */}
      <div className="bg-[#051B20] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link href="/" className="flex-shrink-0">
              <div className="w-28 sm:w-32 h-12 flex items-center justify-start hover:opacity-90 transition-opacity duration-300 mt-1">
                <Image
                  src="/acuron.png"
                  alt="Acuron Logo"
                  width={220}
                  height={66}
                  priority
                  className="object-contain scale-110"
                />
              </div>
            </Link>
            
            {/* Main Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              {[
                { href: '/consumers', label: 'CONSUMERS' },
                { href: '/healthcare', label: 'HEALTHCARE PROFESSIONALS' },
                { href: '/careers', label: 'CAREERS' },
                { href: '/about', label: 'ABOUT ACURON' },
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-[10px] lg:text-[11px] tracking-wide font-bold text-white hover:text-teal-300 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="SEARCH"
                className="search-input border border-gray-700 bg-[#051B20] rounded-md py-1.5 px-3 pr-8
                         w-[140px] sm:w-[180px] lg:w-[200px]
                         border-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.3)]
                         transition-all duration-300 text-[11px] tracking-wide text-white
                         placeholder-white cursor-text"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-3.5 w-3.5 text-teal-400 transition-colors duration-300" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-teal-300 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-[#051B20] border-t border-gray-700 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-4 py-3 space-y-3">
            {[
              { href: '/consumers', label: 'CONSUMERS' },
              { href: '/healthcare', label: 'HEALTHCARE PROFESSIONALS' },
              { href: '/careers', label: 'CAREERS' },
              { href: '/about', label: 'ABOUT ACURON' },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block text-[11px] tracking-wide font-bold text-white hover:text-teal-300 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;