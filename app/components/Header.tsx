import Link from 'next/link';
import { FC } from 'react';
import CountrySelector from './CountrySelector';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6">
          <Link href="/company" className="text-[13px] tracking-wider font-bold hover:text-accent-400 transition-colors duration-300">
            OUR COMPANY
          </Link>
          <Link href="/contact" className="text-[13px] tracking-wider font-bold hover:text-accent-400 transition-colors duration-300">
            CONTACT
          </Link>
          <Link href="/careers" className="text-[13px] tracking-wider font-bold hover:text-accent-400 transition-colors duration-300">
            CAREERS
          </Link>
          <CountrySelector />
        </div>
      </div>
      
      {/* Logo and Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center">
            <div className="w-40 h-12 bg-gradient-to-r from-teal-700 to-blue-800 rounded flex items-center justify-center text-white font-heading font-bold text-xl shadow-soft hover:shadow-card transition-shadow duration-300">
              ACURON
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
                className="text-[14px] tracking-wider font-bold text-gray-800 hover:text-teal-700 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-[13px] tracking-wider"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-teal-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <button className="md:hidden ml-4 hover:text-teal-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 