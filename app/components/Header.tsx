import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import CountrySelector from './CountrySelector';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md">
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-[#0A3D62] to-[#1B4F72] text-white">
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
      <div className="bg-[#082A45] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="flex-shrink-0">
              <div className="w-36 sm:w-40 h-14 flex items-center justify-start hover:opacity-90 transition-opacity duration-300 ml-1.5 mt-1">
                <Image
                  src="/acuron.png"
                  alt="Acuron Logo"
                  width={280}
                  height={84}
                  priority
                  className="object-contain scale-125 translate-y-0.5"
                />
              </div>
            </Link>
            
            {/* Main Navigation */}
            <nav className="hidden md:flex space-x-3 lg:space-x-4">
              {[
                { href: '/', label: 'HOME' },
                { href: '/healthcare', label: 'PRODUCTS', highlight: true },
                { href: '/certificates', label: 'CERTIFICATES' },
                { href: '/categories', label: 'CATEGORIES' },
                { href: '/faq', label: 'FAQ' },
                { href: '/about', label: 'ABOUT ACURON' },
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[10px] lg:text-[11px] tracking-wide font-bold ${link.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200' : 'text-white'} hover:text-teal-300 relative group whitespace-nowrap`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${link.highlight ? 'bg-gradient-to-r from-teal-300 to-cyan-200' : 'bg-teal-400'} group-hover:w-full transition-all duration-300`}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="SEARCH"
                className="search-input border border-gray-700 bg-[#061D33] rounded-md py-1.5 px-3 pr-8
                         w-[140px] sm:w-[180px] lg:w-[200px]
                         border-[#1E619E] shadow-[0_0_10px_rgba(30,97,158,0.3)]
                         transition-all duration-300 text-[11px] tracking-wide text-white
                         placeholder-white cursor-text"
                style={{ boxShadow: '0 0 10px #1E619E' }}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-3.5 w-3.5 text-[#1E619E] transition-colors duration-300" 
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
              { href: '/', label: 'HOME' },
              { href: '/healthcare', label: 'PRODUCTS' },
              { href: '/certificates', label: 'CERTIFICATES' },
              { href: '/categories', label: 'CATEGORIES' },
              { href: '/faq', label: 'FAQ' },
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