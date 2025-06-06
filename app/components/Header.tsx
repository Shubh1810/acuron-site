'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback } from 'react';
import { Phone } from 'lucide-react';
import CountrySelector from './CountrySelector';
import { useCountryStore } from '../../lib/store';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { selectedCountry } = useCountryStore();

  // Flagship blue color
  const flagshipBlue = "#0F4679";

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  // Memoize navigation links with localization
  const navigationLinks = useMemo(() => [
    { 
      href: '/', 
      label: getLocalizedContent('HOME', {
        de: 'STARTSEITE',
        fr: 'ACCUEIL',
        ja: 'ホーム',
        zh: '首页',
        pt: 'INÍCIO'
      })
    },
    { 
      href: '/products', 
      label: getLocalizedContent('PRODUCTS', {
        de: 'PRODUKTE',
        fr: 'PRODUITS',
        ja: '製品',
        zh: '产品',
        pt: 'PRODUTOS'
      })
    },
    { 
      href: '/certificates', 
      label: getLocalizedContent('CERTIFICATES', {
        de: 'ZERTIFIKATE',
        fr: 'CERTIFICATS',
        ja: '証明書',
        zh: '证书',
        pt: 'CERTIFICADOS'
      })
    },
    { 
      href: '/events', 
      label: getLocalizedContent('EVENTS', {
        de: 'VERANSTALTUNGEN',
        fr: 'ÉVÉNEMENTS',
        ja: 'イベント',
        zh: '活动',
        pt: 'EVENTOS'
      })
    },
    { 
      href: '/categories', 
      label: getLocalizedContent('CATEGORIES', {
        de: 'KATEGORIEN',
        fr: 'CATÉGORIES',
        ja: 'カテゴリー',
        zh: '类别',
        pt: 'CATEGORIAS'
      })
    },
    { 
      href: '/faq', 
      label: getLocalizedContent('FAQ', {
        de: 'FAQ',
        fr: 'FAQ',
        ja: 'よくある質問',
        zh: '常见问题',
        pt: 'FAQ'
      })
    },
  ], [selectedCountry]);

  // Localized top navigation links
  const ourCompanyText = "+91 98200 43274";

  const contactText = getLocalizedContent('INQUIRE', {
    de: 'ANFRAGE',
    fr: 'DEMANDE',
    ja: 'お問い合わせ',
    zh: '询问',
    pt: 'INQUÉRITO'
  });

  const careersText = getLocalizedContent('CAREERS', {
    de: 'KARRIERE',
    fr: 'CARRIÈRES',
    ja: 'キャリア',
    zh: '职业',
    pt: 'CARREIRAS'
  });

  const searchPlaceholder = getLocalizedContent('SEARCH', {
    de: 'SUCHEN',
    fr: 'RECHERCHER',
    ja: '検索',
    zh: '搜索',
    pt: 'PESQUISAR'
  });

  // Memoize the toggle function to prevent recreation on renders
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md">
      {/* Top Navigation Bar - Changed to white background with blue text */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6">
          <a 
            href="tel:+919820043274" 
            className="flex items-center text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300"
          >
            <Phone size={12} className="mr-1.5" />
            {ourCompanyText}
          </a>
          <Link href="/#contact-us-section" className="text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300">
            {contactText}
          </Link>
          <Link href="/careers" className="text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300">
            {careersText}
          </Link>
          <CountrySelector />
        </div>
      </div>
      
      {/* Logo and Main Navigation */}
      <div className="bg-[#0D3C6B] text-white">
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
                  sizes="(max-width: 640px) 144px, 160px"
                  className="object-contain scale-125 translate-y-0.5"
                />
              </div>
            </Link>
            
            {/* Main Navigation */}
            <nav className="hidden md:flex space-x-3 lg:space-x-4">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[10px] lg:text-[11px] tracking-wide font-bold text-white hover:text-sky-200 relative group whitespace-nowrap`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-300 group-hover:w-full transition-all duration-300`}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="search-input border border-[#16599D] bg-[#0A3054] rounded-md py-1.5 px-3 pr-8
                         w-[140px] sm:w-[180px] lg:w-[200px]
                         shadow-[0_0_10px_rgba(22,89,157,0.3)]
                         transition-all duration-300 text-[11px] tracking-wide text-white
                         placeholder-white cursor-text"
                style={{ boxShadow: '0 0 10px #16599D' }}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-3.5 w-3.5 text-[#16599D] transition-colors duration-300" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={toggleMobileMenu}
              className={`md:hidden transition-all duration-300 rounded-md p-1 ${isMobileMenuOpen ? 'bg-[#16599D] text-white' : 'text-white'}`}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-white border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="px-4 py-2 divide-y divide-gray-300">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block py-3 text-[12px] tracking-wide font-bold text-gray-800 hover:text-[#16599D] transition-colors duration-300"
                onClick={toggleMobileMenu} // Close menu when a link is clicked
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