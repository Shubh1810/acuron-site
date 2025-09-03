'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Download } from 'lucide-react';
import CountrySelector from './CountrySelector';
import NewsletterModal from './NewsletterModal';
import { useCountryStore } from '../../lib/store';

interface TransparentNavbarProps {
  isHeroSection?: boolean;
}

const TransparentNavbar: FC<TransparentNavbarProps> = ({ isHeroSection = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { selectedCountry } = useCountryStore();
  const pathname = usePathname();

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

  // Products dropdown categories - Health, Food, Pharma (Health first)
  const productCategories = useMemo(() => [
    {
      label: getLocalizedContent('Health', {
        de: 'Gesundheit',
        fr: 'Santé',
        ja: '健康',
        zh: '健康',
        pt: 'Saúde'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Food', {
        de: 'Lebensmittel',
        fr: 'Alimentation',
        ja: '食品',
        zh: '食品',
        pt: 'Alimentação'
      }),
      href: '/products'
    },
    {
      label: getLocalizedContent('Pharma', {
        de: 'Pharma',
        fr: 'Pharma',
        ja: 'ファルマ',
        zh: '制药',
        pt: 'Farmacêutica'
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
    const filePath = '/acuron-brochure.pdf';
    link.href = encodeURI(filePath);
    link.download = 'Acuron-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsNewsletterModalOpen(false);
  };

  // Memoize the toggle function to prevent recreation on renders
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Conditionally use white logo only on homepage hero overlay, colored logo for sticky navbar
  const isHomeHero = isHeroSection && pathname === '/';
  const logoSrc = '/acprod.png'; // Always use colored logo for sticky navbar
  const logoClass = 'object-contain';

  return (
    <nav className="relative z-[60] w-full max-w-[100vw] overflow-visible transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5 sm:py-2 flex justify-between items-center w-full">
        {/* Logo - Hidden on mobile */}
        <Link href="/" className="flex-shrink-0 hidden md:block md:ml-4 lg:ml-8">
          <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-12 sm:h-14 md:h-16 flex items-center justify-start hover:opacity-90 transition-opacity duration-300">
            <Image
              src={logoSrc}
              alt="Acuron Logo"
              width={320}
              height={96}
              priority
              sizes="(max-width: 640px) 160px, 176px"
              className={logoClass}
            />
          </div>
        </Link>
        
        {/* Mobile spacer to maintain layout */}
        <div className="md:hidden"></div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {/* HOME Link */}
          <Link 
            href="/" 
            className="text-xs font-semibold relative group transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
          >
            {navigationLinks[0].label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#0F4679]/80"></span>
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link 
              href="/products"
              className="flex items-center text-xs font-semibold relative group transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#0F4679]/80"></span>
            </Link>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-3 w-80 z-[100] transition-all duration-500 ease-out transform-gpu ${
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
                    <div className="w-2.5 h-2.5 rounded-full mr-3 bg-gradient-to-r from-[#0F4679] to-[#0F4679]/90 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              className="text-xs font-semibold relative group transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#0F4679]/80"></span>
            </Link>
          ))}
        </nav>
        
        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4 md:mr-4 lg:mr-8">
          {/* Catalog Button */}
          <button 
            onClick={handleCatalogDownload}
            className="hidden lg:flex items-center text-xs font-semibold transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
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
              className="search-input border backdrop-blur-sm rounded-lg py-1.5 sm:py-2 px-2 sm:px-3 pr-6 sm:pr-8 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] transition-all duration-300 text-xs border-[#0F4679]/30 bg-white/90 text-[#0F4679] placeholder-[#0F4679]/70 focus:bg-white focus:border-[#0F4679]/50"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-4 w-4 transition-colors duration-300 text-[#0F4679]/70 hover:text-[#0F4679]"
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
            className="lg:hidden flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 mb-1 sm:mb-2 rounded-md backdrop-blur-sm border transition-all duration-300 bg-white/90 border-[#0F4679]/20 text-[#0F4679] hover:bg-white"
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
        <div className="mx-4 mt-4 rounded-xl backdrop-blur-xl border bg-white/90 border-[#0F4679]/20">
          <nav className="px-4 py-2 space-y-1">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block py-3 text-sm font-semibold transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/products"
              className="block py-3 text-sm font-semibold transition-colors duration-300 text-[#0F4679]/90 hover:text-[#0F4679]"
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