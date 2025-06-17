'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback } from 'react';
import { Download } from 'lucide-react';
import CountrySelector from './CountrySelector';
import NewsletterModal from './NewsletterModal';
import { useCountryStore } from '../../lib/store';

const TransparentNavbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { selectedCountry } = useCountryStore();

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

  // Products dropdown categories
  const productCategories = useMemo(() => [
    {
      label: getLocalizedContent('Protective Apparel', {
        de: 'Schutzkleidung',
        fr: 'Vêtements de protection',
        ja: '保護服',
        zh: '防护服',
        pt: 'Vestuário de Proteção'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Masks & Headwear', {
        de: 'Masken & Kopfbedeckungen',
        fr: 'Masques et couvre-chefs',
        ja: 'マスク・帽子',
        zh: '口罩和头饰',
        pt: 'Máscaras e Chapéus'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Shoe & Leg Protection', {
        de: 'Schuh- & Beinschutz',
        fr: 'Protection des chaussures et jambes',
        ja: '靴・脚保護',
        zh: '鞋套和腿部保护',
        pt: 'Proteção de Sapatos e Pernas'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Drapes Linens & Underpads', {
        de: 'Tücher, Bettwäsche & Unterlagen',
        fr: 'Draps, linge et alèses',
        ja: 'ドレープ・リネン・パッド',
        zh: '手术巾、床单和护垫',
        pt: 'Campos, Roupas de Cama e Forrações'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Medical Kits', {
        de: 'Medizinische Kits',
        fr: 'Kits médicaux',
        ja: '医療キット',
        zh: '医疗套件',
        pt: 'Kits Médicos'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('General Medical & Surgical Disposables', {
        de: 'Allgemeine medizinische & chirurgische Einwegartikel',
        fr: 'Jetables médicaux et chirurgicaux généraux',
        ja: '一般医療・外科用使い捨て用品',
        zh: '一般医疗和手术一次性用品',
        pt: 'Descartáveis Médicos e Cirúrgicos Gerais'
      }),
      href: '/products'
    }
  ], [selectedCountry]);

  const productsText = getLocalizedContent('PRODUCTS', {
    de: 'PRODUKTE',
    fr: 'PRODUITS',
    ja: '製品',
    zh: '产品',
    pt: 'PRODUTOS'
  });

  const viewAllProductsText = getLocalizedContent('View All Products', {
    de: 'Alle Produkte anzeigen',
    fr: 'Voir tous les produits',
    ja: 'すべての製品を見る',
    zh: '查看所有产品',
    pt: 'Ver Todos os Produtos'
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
    link.href = '/catalog/acuron-catalog.pdf';
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
    <nav className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Hidden on mobile */}
        <Link href="/" className="flex-shrink-0 hidden md:block md:ml-8">
          <div className="w-40 sm:w-44 h-16 flex items-center justify-start hover:opacity-90 transition-opacity duration-300">
            <Image
              src="/acuron.png"
              alt="Acuron Logo"
              width={320}
              height={96}
              priority
              sizes="(max-width: 640px) 160px, 176px"
              className="object-contain scale-125 filter brightness-0 invert"
            />
          </div>
        </Link>
        
        {/* Mobile spacer to maintain layout */}
        <div className="md:hidden"></div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {/* HOME Link */}
          <Link 
            href="/" 
            className="text-xs font-semibold text-white/90 hover:text-white relative group transition-colors duration-300"
          >
            {navigationLinks[0].label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link 
              href="/products"
              className="flex items-center text-xs font-semibold text-white/90 hover:text-white relative group transition-colors duration-300"
            >
              {productsText}
              <svg 
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-3 w-80 z-50 transition-all duration-500 ease-out transform-gpu ${
                isProductsDropdownOpen 
                  ? 'opacity-100 translate-y-0 visible scale-100' 
                  : 'opacity-0 -translate-y-4 invisible scale-95'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
                transformOrigin: 'top center'
              }}
            >
              <div className="p-3">
                {productCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className="group flex items-center px-4 py-3 text-sm font-medium text-gray-800 rounded-xl transition-all duration-300 hover:bg-white/70 hover:shadow-md"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    <div className="w-2.5 h-2.5 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{category.label}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-200/50 m-3 mt-0 rounded-b-xl overflow-hidden">
                <Link
                  href="/products"
                  className="flex items-center justify-center px-4 py-4 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:bg-blue-50/70 group"
                  onClick={() => setIsProductsDropdownOpen(false)}
                >
                  <span className="group-hover:scale-105 transition-transform duration-300">{viewAllProductsText}</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Other Navigation Links */}
          {navigationLinks.slice(1).map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-xs font-semibold text-white/90 hover:text-white relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        
        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 md:mr-8">
          {/* Catalog Button */}
          <button 
            onClick={handleCatalogDownload}
            className="hidden lg:flex items-center text-xs font-semibold text-white/90 hover:text-white transition-colors duration-300"
            title="Download Catalog"
          >
            <Download size={16} className="mr-2" />
            {catalogText}
          </button>

          {/* Search */}
          <div className="hidden md:flex relative group">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="search-input border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg py-2 px-3 pr-8
                       w-[160px] lg:w-[200px]
                       transition-all duration-300 text-xs text-white
                       placeholder-white/70 focus:bg-white/20 focus:border-white/50"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-4 w-4 text-white/70 hover:text-white transition-colors duration-300" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-8 h-8 mb-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="mx-4 mt-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
          <nav className="px-4 py-2 space-y-1">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block py-3 text-sm font-semibold text-white/90 hover:text-white transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/products"
              className="block py-3 text-sm font-semibold text-white/90 hover:text-white transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {productsText}
            </Link>
          </nav>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        onSuccess={handleActualDownload}
      />
    </nav>
  );
};

export default TransparentNavbar; 