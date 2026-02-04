'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Download, Search, Menu } from 'lucide-react';
import CountrySelector from './CountrySelector';
import { useCountryStore } from '../../lib/store';
import { triggerNewsletterModal } from '../lib/modalEvents';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const { selectedCountry } = useCountryStore();
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const navigationLinks = useMemo(() => [
    { href: '/', label: getLocalizedContent('Home', { de: 'STARTSEITE', fr: 'ACCUEIL', ja: 'ホーム', zh: '首页', pt: 'INÍCIO' }) },
    { href: '/certificates', label: getLocalizedContent('Certificates', { de: 'ZERTIFIKATE', fr: 'CERTIFICATS', ja: '証明書', zh: '证书', pt: 'CERTIFICADOS' }) },
    { href: '/faq', label: getLocalizedContent('FAQ', { de: 'FAQ', fr: 'FAQ', ja: 'よくある質問', zh: '常见问题', pt: 'FAQ' }) },
  ], [selectedCountry]);

  const productCategories = useMemo(() => [
    { label: getLocalizedContent('Healthcare', { de: 'Gesundheitswesen', fr: 'Soins de santé', ja: 'ヘルスケア', zh: '医疗保健', pt: 'Cuidados de Saúde' }), href: '/products' },
    { label: getLocalizedContent('Food Processing', { de: 'Lebensmittelverarbeitung', fr: 'Transformation alimentaire', ja: '食品加工', zh: '食品加工', pt: 'Processamento de Alimentos' }), href: '/products?category=food' },
    { label: getLocalizedContent('Pharmaceuticals', { de: 'Pharmazeutika', fr: 'Pharmaceutiques', ja: '製薬', zh: '制药', pt: 'Farmacêuticos' }), href: '/products?category=pharma' },
    { label: getLocalizedContent('Chemical', { de: 'Chemisch', fr: 'Chimique', ja: '化学', zh: '化学', pt: 'Químico' }), href: '/products?category=chemical' },
  ], [selectedCountry]);

  const productsText = getLocalizedContent('Products', { de: 'PRODUKTE', fr: 'PRODUITS', ja: '製品', zh: '产品', pt: 'PRODUTOS' });
  const viewAllProductsText = getLocalizedContent('View All Products', { de: 'Alle Produkte anzeigen', fr: 'Voir tous les produits', ja: 'すべての製品を見る', zh: '查看所有产品', pt: 'Ver Todos os Produtos' });
  const catalogText = getLocalizedContent('Catalog', { de: 'KATALOG', fr: 'CATALOGUE', ja: 'カタログ', zh: '目录', pt: 'CATÁLOGO' });
  const searchPlaceholder = getLocalizedContent('Search', { de: 'SUCHEN', fr: 'RECHERCHER', ja: '検索', zh: '搜索', pt: 'PESQUISAR' });

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const pillBase = 'neu-pill rounded-full bg-[#0F4679]/[0.06] backdrop-blur-md border border-[#0F4679]/10 transition-all duration-300';
  const rightPillClass = `${pillBase} flex items-center justify-center px-2.5 py-1.5`;

  const ourCompanyText = '+91 93229 61664';

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-2 pb-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4">
        {/* Left Pill - Logo + Nav (covers ~50% on desktop) */}
        <div className={`${pillBase} w-full lg:w-[50%] xl:w-[48%] flex items-center justify-between lg:justify-start px-2 sm:px-3 py-1 sm:py-1.5`}>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/acprod.png"
              alt="Acuron Logo"
              width={140}
              height={42}
              priority
              className="object-contain h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav Links - right-aligned away from logo */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-auto flex-1 justify-end">
            <Link
              href="/"
              className="text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black"
            >
              {navigationLinks[0].label}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className="flex items-center gap-0.5 text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black"
              >
                {productsText}
                <svg className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div
                className={`absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white shadow-xl border border-gray-200 py-2 z-50 transition-all ${
                  isProductsDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                {productCategories.map((cat, i) => (
                  <Link key={i} href={cat.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0F4679]">
                    {cat.label}
                  </Link>
                ))}
                <Link href="/products" className="block px-4 py-2.5 text-sm font-medium text-[#0F4679] hover:bg-[#0F4679]/5 border-t border-gray-100 mt-1 pt-2">
                  {viewAllProductsText} →
                </Link>
              </div>
            </div>

            {navigationLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#0F4679] text-white hover:bg-[#0D3C6B] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side - Catalog, phone, search, language */}
        <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-end">
          {/* Catalog Download - Neumorphic button */}
          <button
            type="button"
            onClick={triggerNewsletterModal}
            className="neu-button flex items-center gap-2"
            title="Download Catalog"
          >
            <Download className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">{catalogText}</span>
          </button>

          {/* Phone Number - floating, no pill */}
          {isClient && (
            <a
              href="tel:+919322961664"
              className="text-black hover:text-gray-800 font-medium text-[10px] sm:text-xs whitespace-nowrap hidden lg:flex transition-colors"
            >
              {ourCompanyText}
            </a>
          )}

          {/* Search Icon - expands to search bar when clicked; no container when closed */}
          {isSearchExpanded ? (
            <div className={`${pillBase} flex items-center w-[150px] sm:w-[190px] px-2.5 py-1.5 overflow-hidden transition-all duration-300 ease-out`}>
              <button
                ref={searchButtonRef}
                type="button"
                onClick={() => setIsSearchExpanded(false)}
                className="flex-shrink-0 flex items-center justify-center text-black hover:text-gray-800 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <input
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                onBlur={(e) => {
                  if (!e.relatedTarget || !searchButtonRef.current?.contains(e.relatedTarget as Node)) {
                    setIsSearchExpanded(false);
                  }
                }}
                onKeyDown={(e) => e.key === 'Escape' && setIsSearchExpanded(false)}
                className="bg-transparent text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0 flex-1 min-w-0 ml-2"
              />
            </div>
          ) : (
            <button
              ref={searchButtonRef}
              type="button"
              onClick={() => setIsSearchExpanded(true)}
              className="flex items-center justify-center text-black hover:text-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* Language Selector - last */}
          {isClient && <CountrySelector />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-2 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`${pillBase} p-3`}>
          <nav className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={toggleMobileMenu}
            >
              {productsText}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
