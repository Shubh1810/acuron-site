'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback } from 'react';
import { Download } from 'lucide-react';
import CountrySelector from './CountrySelector';
import NewsletterModal from './NewsletterModal';
import { useCountryStore } from '../../lib/store';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
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

  const catalogText = getLocalizedContent('CATALOG', {
    de: 'KATALOG',
    fr: 'CATALOGUE',
    ja: 'カタログ',
    zh: '目录',
    pt: 'CATÁLOGO'
  });

  const searchPlaceholder = getLocalizedContent('SEARCH', {
    de: 'SUCHEN',
    fr: 'RECHERCHER',
    ja: '検索',
    zh: '搜索',
    pt: 'PESQUISAR'
  });

  // Function to handle catalog download - opens newsletter modal first
  const handleCatalogDownload = () => {
    setIsNewsletterModalOpen(true);
  };

  // Function to actually download after newsletter signup
  const handleActualDownload = () => {
    const link = document.createElement('a');
    link.href = '/catalog/acuron-catalog.pdf'; // Path to your catalog file
    link.download = 'Acuron-Medical-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsNewsletterModalOpen(false);
  };

  // Memoize the toggle function to prevent recreation on renders
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md">
      {/* Top Navigation Bar - Changed to white background with blue text */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-3 sm:space-x-6">
          <a 
            href="tel:+919820043274" 
            className="text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300 cursor-pointer"
          >
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
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Catalog Button */}
            <button 
              onClick={handleCatalogDownload}
              className="hidden sm:flex items-center text-[10px] lg:text-[11px] tracking-wide font-bold text-white hover:text-sky-200 transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
              title="Download Catalog"
            >
              <Download size={14} className="mr-1.5" />
              {catalogText}
            </button>

            <div className="relative group">
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="search-input border border-[#16599D] bg-[#0A3054] rounded-md py-1.5 px-3 pr-8
                         w-[120px] sm:w-[140px] lg:w-[180px]
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

            {/* Mobile Catalog Button */}
            <button 
              onClick={handleCatalogDownload}
              className="sm:hidden flex items-center justify-center w-8 h-8 text-white hover:text-sky-200 transition-colors duration-300"
              title="Download Catalog"
            >
              <Download size={16} />
            </button>
            
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

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        onSuccess={handleActualDownload}
      />
    </header>
  );
};

export default Header;