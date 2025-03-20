import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import CountrySelector from './CountrySelector';

const Header: FC = () => {
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
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center">
              <div className="w-40 h-12 flex items-center justify-center hover:opacity-90 transition-opacity duration-300 mt-1">
                <Image
                  src="/acuron.png"
                  alt="Acuron Logo"
                  width={220}
                  height={66}
                  priority
                  className="object-contain scale-125"
                />
              </div>
            </Link>
            
            {/* Main Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { href: '/consumers', label: 'CONSUMERS' },
                { href: '/healthcare', label: 'HEALTHCARE PROFESSIONALS' },
                { href: '/careers', label: 'CAREERS' },
                { href: '/about', label: 'ABOUT ACURON' },
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-[12px] tracking-wide font-bold text-white hover:text-teal-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                className="border border-gray-700 bg-gray-800 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-[11px] tracking-wide text-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-teal-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <button className="md:hidden ml-4 hover:text-teal-300 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 