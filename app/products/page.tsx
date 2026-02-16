"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Download, Search, Menu } from 'lucide-react';
import WhiteGridBackground from "../components/ui/white-grid-background";
import PharmaCorporateGiftingShowcase from "../components/PharmaCorporateGiftingShowcase";
import FoodProcessingShowcase from "../components/FoodProcessingShowcase";
import ChemicalShowcase from "../components/ChemicalShowcase";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Footer from "../components/sections/Footer";
import NewsletterModal from "../components/NewsletterModal";
import CountrySelector from "../components/CountrySelector";
import { allProducts } from "../lib/productData";
import { useNewsletterModalTrigger } from "../lib/modalEvents";
import { useCountryStore } from "../../lib/store";
import { triggerNewsletterModal } from "../lib/modalEvents";


// Custom Header for Products Page - No Logo, Centered Nav
function ProductsHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const { selectedCountry } = useCountryStore();
  const searchParams = useSearchParams();
  
  // Check which category is selected
  const isPharmaCategory = searchParams.get('category') === 'pharma';
  const isFoodCategory = searchParams.get('category') === 'food';
  const isChemicalCategory = searchParams.get('category') === 'chemical';
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    ...(isPharmaCategory ? [{ label: 'Pharmaceuticals' }] : []),
    ...(isFoodCategory ? [{ label: 'Food Processing' }] : []),
    ...(isChemicalCategory ? [{ label: 'Chemical Industry' }] : [])
  ];

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

  const navigationLinks = [
    { href: '/', label: getLocalizedContent('Home', { de: 'STARTSEITE', fr: 'ACCUEIL', ja: 'ホーム', zh: '首页', pt: 'INÍCIO' }) },
    { href: '/certificates', label: getLocalizedContent('Certificates', { de: 'ZERTIFIKATE', fr: 'CERTIFICATS', ja: '証明書', zh: '证书', pt: 'CERTIFICADOS' }) },
    { href: '/faq', label: getLocalizedContent('FAQ', { de: 'FAQ', fr: 'FAQ', ja: 'よくある質問', zh: '常见问题', pt: 'FAQ' }) },
  ];

  const productCategories = [
    { label: getLocalizedContent('Healthcare', { de: 'Gesundheitswesen', fr: 'Soins de santé', ja: 'ヘルスケア', zh: '医疗保健', pt: 'Cuidados de Saúde' }), href: '/products' },
    { label: getLocalizedContent('Food Processing', { de: 'Lebensmittelverarbeitung', fr: 'Transformation alimentaire', ja: '食品加工', zh: '食品加工', pt: 'Processamento de Alimentos' }), href: '/products?category=food' },
    { label: getLocalizedContent('Pharmaceuticals', { de: 'Pharmazeutika', fr: 'Pharmaceutiques', ja: '製薬', zh: '制药', pt: 'Farmacêuticos' }), href: '/products?category=pharma' },
    { label: getLocalizedContent('Chemical', { de: 'Chemisch', fr: 'Chimique', ja: '化学', zh: '化学', pt: 'Químico' }), href: '/products?category=chemical' },
  ];

  const productsText = getLocalizedContent('Products', { de: 'PRODUKTE', fr: 'PRODUITS', ja: '製品', zh: '产品', pt: 'PRODUTOS' });
  const viewAllProductsText = getLocalizedContent('View All Products', { de: 'Alle Produkte anzeigen', fr: 'Voir tous les produits', ja: 'すべての製品を見る', zh: '查看所有产品', pt: 'Ver Todos os Produtos' });
  const catalogText = getLocalizedContent('Catalog', { de: 'KATALOG', fr: 'CATALOGUE', ja: 'カタログ', zh: '目录', pt: 'CATÁLOGO' });
  const searchPlaceholder = getLocalizedContent('Search', { de: 'SUCHEN', fr: 'RECHERCHER', ja: '検索', zh: '搜索', pt: 'PESQUISAR' });

  const pillBase = 'neu-pill rounded-full bg-[#0F4679]/[0.06] backdrop-blur-md border border-[#0F4679]/10 transition-all duration-300';

  const ourCompanyText = '+91 93229 61664';

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-2 pb-3 relative z-[100]">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Row - Logo + Navigation + Actions all in one line */}
        <div className="flex items-center gap-3 mb-3">
          {/* Logo */}
          <Image
            src="/acprod.png"
            alt="Acuron Products"
            width={180}
            height={72}
            className="object-contain flex-shrink-0"
            priority
          />
          
          {/* Desktop: Unified Navigation + Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-1 relative z-[150]">
            {/* Nav Pill */}
            <div className={`${pillBase} flex items-center justify-center px-3 py-1.5 relative z-[150]`}>
              <nav className="flex items-center gap-1 xl:gap-2">
                <Link
                  href="/"
                  className="text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black hover:bg-black/5 transition-colors"
                >
                  {navigationLinks[0].label}
                </Link>

                {/* Products Dropdown */}
                <div
                  className="relative z-[200]"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link
                    href="/products"
                    className="flex items-center gap-0.5 text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black hover:bg-black/5 transition-colors"
                  >
                    {productsText}
                    <svg className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white shadow-xl border border-gray-200 py-2 z-[200] transition-all ${
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
                    className="text-sm font-google-sans font-normal px-2.5 py-1 rounded-full text-black hover:bg-black/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Platform logos */}
            <div className="flex flex-nowrap items-center gap-0.5 -mx-0.5 shrink-0">
              <a href="https://www.amazon.in/s?k=acuron&crid=3LUINNVFBJX7Y&sprefix=acuron%2Caps%2C202&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 mt-1">
                <Image src="/amazon.png" alt="Amazon" width={36} height={12} className="h-3 w-auto object-contain" />
              </a>
              <a href="https://www.meesho.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 ml-1">
                <Image src="/meesho.png" alt="Meesho" width={64} height={22} className="h-6 sm:h-7 w-auto object-contain" />
              </a>
              <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -mr-1.5">
                <Image src="/flip.png" alt="Flipkart" width={48} height={16} className="h-4 sm:h-5 w-auto object-contain" />
              </a>
              <a href="https://dir.indiamart.com/search.mp?ss=acuron&prdsrc=1&v=4" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -ml-0.5">
                <Image src="/indiamart.png" alt="IndiaMART" width={48} height={16} className="h-4 sm:h-5 w-auto object-contain" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Catalog Download */}
            <button
              type="button"
              onClick={triggerNewsletterModal}
              className="neu-button flex items-center gap-2"
              title="Download Catalog"
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="hidden xl:inline">{catalogText}</span>
            </button>

            {/* Phone Number */}
            {isClient && (
              <a
                href="tel:+919322961664"
                className="text-black hover:text-gray-800 font-medium text-[10px] sm:text-xs whitespace-nowrap transition-colors"
              >
                {ourCompanyText}
              </a>
            )}

            {/* Search Icon */}
            {isSearchExpanded ? (
              <div className={`${pillBase} flex items-center w-[190px] px-2.5 py-1.5 overflow-hidden transition-all duration-300 ease-out`}>
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

            {/* Language Selector */}
            {isClient && <CountrySelector />}
          </div>

          {/* Mobile Phone + Hamburger */}
          <div className="lg:hidden flex items-center gap-2 ml-auto">
            {isClient && (
              <a
                href="tel:+919322961664"
                className="text-[#0F4679] hover:text-[#0D3C6B] font-semibold text-xs whitespace-nowrap transition-colors"
              >
                {ourCompanyText}
              </a>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0F4679] text-white hover:bg-[#0D3C6B] transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Subheading with gradient background - Full width */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-3 overflow-hidden">
          {/* Background gradient image */}
          <div className="absolute inset-0">
            <Image
              src="/bluegreengradient.jpeg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-end">
            <p className="text-sm md:text-base text-white font-medium max-w-2xl text-right">
              ISO-certified medical supplies designed for healthcare professionals who demand excellence.
            </p>
          </div>
        </div>

        {/* Mobile Actions Row with Breadcrumbs */}
        <div className="flex lg:hidden items-center justify-between gap-2 mb-2">
          {/* Breadcrumbs - Mobile (left side) */}
          <div className="flex-shrink min-w-0 -mb-1">
            <Breadcrumbs items={breadcrumbItems} className="!text-[9px] sm:!text-[10px] !mb-0" />
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Platform logos - Mobile */}
            <div className="flex flex-nowrap items-center gap-0.5 -mx-0.5 shrink-0">
              <a href="https://www.amazon.in/s?k=acuron&crid=3LUINNVFBJX7Y&sprefix=acuron%2Caps%2C202&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 mt-1">
                <Image src="/amazon.png" alt="Amazon" width={36} height={12} className="h-2.5 sm:h-3 w-auto object-contain" />
              </a>
              <a href="https://www.meesho.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 ml-1">
                <Image src="/meesho.png" alt="Meesho" width={64} height={22} className="h-5 sm:h-6 w-auto object-contain" />
              </a>
              <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -mr-1.5">
                <Image src="/flip.png" alt="Flipkart" width={48} height={16} className="h-3.5 sm:h-4 w-auto object-contain" />
              </a>
              <a href="https://dir.indiamart.com/search.mp?ss=acuron&prdsrc=1&v=4" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -ml-0.5">
                <Image src="/indiamart.png" alt="IndiaMART" width={48} height={16} className="h-3.5 sm:h-4 w-auto object-contain" />
              </a>
            </div>
            
            {/* Catalog Download */}
            <button
              type="button"
              onClick={triggerNewsletterModal}
              className="neu-button flex items-center gap-2"
              title="Download Catalog"
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{catalogText}</span>
            </button>

            {/* Search Icon */}
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

            {/* Language Selector */}
            {isClient && <CountrySelector />}
          </div>
        </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-2 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`${pillBase} p-3 rounded-lg`}>
          <nav className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {productsText}
            </Link>
          </nav>
        </div>
      </div>
      </div>
    </header>
  );
}

// Component that uses useSearchParams - needs to be wrapped in Suspense
function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("drapes");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const scrollableNavRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  
  // Check which category is selected
  const isPharmaCategory = searchParams.get('category') === 'pharma';
  const isFoodCategory = searchParams.get('category') === 'food';
  const isChemicalCategory = searchParams.get('category') === 'chemical';

  // Newsletter modal functionality
  const handleActualDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/acuron-brochure.pdf';
    link.download = 'acuron-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Set up newsletter modal trigger
  useEffect(() => {
    const cleanup = useNewsletterModalTrigger(() => {
      setIsNewsletterModalOpen(true);
    });
    
    return cleanup;
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    ...(isPharmaCategory ? [{ label: 'Pharmaceuticals' }] : []),
    ...(isFoodCategory ? [{ label: 'Food Processing' }] : []),
    ...(isChemicalCategory ? [{ label: 'Chemical Industry' }] : [])
  ];

  // Products are now imported from productData.ts
  const nonFeaturedProducts = allProducts.filter(product => !product.featured);

  // Helpers
  const includesAny = (text: string, terms: string[]) => {
    const lower = text.toLowerCase();
    return terms.some(t => lower.includes(t));
  };

  // Minimal navbar categories with predicates - Drapes first, Kits 4th
  const categories: Array<{ key: string; label: string; predicate: (p: typeof allProducts[number]) => boolean }> = [
    // Drapes first
    { key: 'drapes', label: 'Drapes', predicate: (p) =>
      !includesAny(p.name, ['wrap']) &&
      !includesAny(p.name, ['sheet', 'underpad']) && (
        includesAny(p.name, ['drape']) ||
        includesAny(p.category, ['drapes', 'linens', 'underpads']) ||
        (includesAny(p.name, ['pack', 'kit']) && includesAny(p.category, ['drapes', 'linens', 'underpads']))
      )
    },
    { key: 'sheets', label: 'Sheets', predicate: (p) => includesAny(p.name, ['sheet', 'underpad', 'wrap']) && !includesAny(p.name, ['gown']) },
    { key: 'surgical-gowns', label: 'Gowns', predicate: (p) => includesAny(p.name, ['gown']) },
    { key: 'medical-coveralls', label: 'Coveralls/Labcoats', predicate: (p) => includesAny(p.name, ['coverall', 'labcoat', 'scrub', 'scrub suit']) },
    // Kits 4th position
    { key: 'kits', label: 'Kits & Packs', predicate: (p) => p.category === 'Medical Kits' },
    { key: 'face-masks', label: 'Face Masks', predicate: (p) => includesAny(p.name, ['mask']) || includesAny(p.category, ['masks']) },
    { key: 'surgical-caps', label: 'Surgical Caps', predicate: (p) => includesAny(p.name, ['cap']) },
    { key: 'shoe-covers', label: 'Shoe Covers', predicate: (p) => 
      includesAny(p.name, ['shoe cover', 'shoe']) || includesAny(p.category, ['shoe', 'leg protection']) 
    },
    { key: 'gloves', label: 'Gloves', predicate: (p) => includesAny(p.name, ['glove']) },
    { key: 'razors', label: 'Razors', predicate: (p) => includesAny(p.name, ['razor']) },
    // Position-independent Misc
    { key: 'miscellaneous', label: 'Miscellaneous', predicate: (p) => {
        const nonMisc = categories.filter(c => c.key !== 'miscellaneous');
        const matched = nonMisc.some(c => c.predicate(p));
        return !matched;
      }
    },
  ];

  // Filter products based on active category
  const activeCategoryObj = categories.find(c => c.key === activeCategory) || categories[0];
  const filteredMiniProducts = nonFeaturedProducts.filter(p => activeCategoryObj.predicate(p));

  // Expand variants into separate display items for specific categories (e.g., Face Masks)
  type DisplayProduct = typeof allProducts[number] & { __variantCode?: string; __displayName?: string };
  const expandedProducts: DisplayProduct[] = (() => {
    const isMasks = activeCategoryObj.key === 'face-masks';
    const isCaps = activeCategoryObj.key === 'surgical-caps';
    const isShoes = activeCategoryObj.key === 'shoe-covers';
    const isKits = activeCategoryObj.key === 'kits';
    if (!isMasks && !isCaps && !isShoes && !isKits) return filteredMiniProducts as DisplayProduct[];

    const allowedN95Codes = new Set(['AP N95 01', 'AP N95 02', 'AP N95 03']);
    // Shoe covers + leggings should map to SC and SL codes per productData
    const allowedShoeCodes = new Set(['AP SC 01', 'AP SC 02', 'AP SL 01']);
    const items: DisplayProduct[] = [];
    for (const p of filteredMiniProducts) {
      // Masks view: exclude caps/hoods and goggles entirely
      if (isMasks) {
        if (/cap|hood/i.test(p.name)) continue;
        if (/goggle/i.test(p.name) || /goggle/i.test(p.category)) continue;
      }

      const isMaskProduct = /mask/i.test(p.name) || /mask/i.test(p.category);
      const isCapProduct = /cap/i.test(p.name) || /cap/i.test(p.category);
      const isBouffant = /bouffant/i.test(p.name);
      const isShoeProduct = /shoe/i.test(p.name) || /shoe/i.test(p.category) || /legging/i.test(p.name);
      const isKitProduct = /kit/i.test(p.name) || /pack/i.test(p.name) || /set/i.test(p.name) || /kit/i.test(p.category) || /pack/i.test(p.category);

      // Decide whether to expand variants for this item
      // Do not expand Bouffant Caps into separate cards; keep as single product
      const shouldExpand = (isMasks && isMaskProduct) || (isCaps && isCapProduct && !isBouffant) || (isShoes && isShoeProduct) || (isKits && isKitProduct);

      if (shouldExpand && p.variants && p.variants.length > 0) {
        const isN95 = isMasks && (/n95/i.test(p.name) || p.variants.some(v => /n95/i.test(v.productName)));
        for (const v of p.variants) {
          // Masks-only restriction for N95 variants
          if (isN95 && !allowedN95Codes.has(v.productCode)) continue;
          if (isMasks && /goggle/i.test(v.productName)) continue;
          // Shoe-covers: only three specified codes
          if (isShoes && !allowedShoeCodes.has(v.productCode)) continue;
          items.push({
            ...p,
            __variantCode: v.productCode,
            __displayName: v.productName || `${p.name}`,
          });
        }
      } else if (shouldExpand) {
        // For shoe-covers view, restrict to specific codes only; skip non-variant items
        if (isShoes) {
          continue;
        }
        items.push(p as DisplayProduct);
      } else {
        // If not expanding (e.g., Bouffant Caps), include the base product once
        if (isCaps && isBouffant) {
          items.push(p as DisplayProduct);
        }
      }
    }
    return items;
  })();

  // Effect to handle scroll indicator visibility
  useEffect(() => {
    const navElement = scrollableNavRef.current;

    const checkScroll = () => {
      if (navElement) {
        const canScroll = navElement.scrollWidth > navElement.clientWidth;
        const isScrolledToEnd = navElement.scrollLeft + navElement.clientWidth >= navElement.scrollWidth - 5; // 5px tolerance
        setShowScrollIndicator(canScroll && !isScrolledToEnd);
      }
    };

    if (navElement) {
      // Initial check
      checkScroll();
      navElement.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []); // Runs on mount and unmount

  return (
    <>
      {/* Minimal Clean Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-50"></div>
      
      <ProductsHeader />
      <div className="min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category-Specific Showcases */}
          {isPharmaCategory && (
            <div className="mb-12 pt-6">
              <PharmaCorporateGiftingShowcase />
            </div>
          )}
          
          {isFoodCategory && (
            <div className="mb-12 pt-6">
              <FoodProcessingShowcase />
            </div>
          )}
          
          {isChemicalCategory && (
            <div className="mb-12 pt-6">
              <ChemicalShowcase />
            </div>
          )}

          {/* Breadcrumbs - Desktop only */}
          <div className="hidden lg:block pt-6 pb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Minimal Category Navigation */}
          <div className="sticky top-20 z-50 mb-8 pb-4">
            <div className="relative liquid-glass-container rounded-2xl p-3 md:p-4">
              <div ref={scrollableNavRef} className="relative flex items-center justify-start gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-1">
                {categories.map((category, index) => {
                  // Map categories to appropriate icons and display names
                  const getCategoryConfig = (categoryKey: string) => {
                    switch (categoryKey) {
                      case "kits":
                        return {
                          icon: (
                            <Image
                              src="/medical.png"
                              alt="Medical Kits Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Kits & Packs"
                        };
                      case "razors":
                        return {
                          icon: (
                            <Image
                              src="/shave.png"
                              alt="Razors Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Razors"
                        };
                      case "face-masks":
                        return {
                          icon: (
                            <Image
                              src="/PPE Mask Icon.png"
                              alt="Face Masks Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Face Masks"
                        };
                      case "surgical-caps":
                        return {
                          icon: (
                            <Image
                              src="/caphood.png"
                              alt="Surgical Caps Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Surgical Caps"
                        };
                      case "shoe-covers":
                        return {
                          icon: (
                            <Image
                              src="/boot.png"
                              alt="PPE Shoe Covers Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Shoe Covers"
                        };
                      case "surgical-gowns":
                        return {
                          icon: (
                            <Image
                              src="/Health Icon Apron.png"
                              alt="Surgical Gowns Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Gowns"
                        };
                      case "medical-coveralls":
                        return {
                          icon: (
                            <Image
                              src="/PPE Suit Icon.png"
                              alt="Coveralls Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Coveralls/Labcoats"
                        };
                      case "drapes":
                        return {
                          icon: (
                            <Image
                              src="/Vascular Surgery Icon.png"
                              alt="Drapes Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Drapes"
                        };
                      case "sheets":
                        return {
                          icon: (
                            <Image
                              src="/surgery.png"
                              alt="ISO Sheets Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Sheets"
                        };
                      case "gloves":
                        return {
                          icon: (
                            <Image
                              src="/PPE Gloves Icon.png"
                              alt="Gloves Icon"
                              width={24}
                              height={24}
                              className="object-contain w-5 h-5 md:w-6 md:h-6"
                            />
                          ),
                          displayName: "Gloves"
                        };
                      case "miscellaneous":
                        return {
                          icon: (
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                          ),
                          displayName: "Miscellaneous"
                        };
                      default:
                        return {
                          icon: (
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          ),
                          displayName: category.label
                        };
                    }
                  };

                  const config = getCategoryConfig(category.key);
                  const isActive = activeCategory === category.key;

                  return (
                    <motion.button
                      key={category.key}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      onClick={() => {
                        setActiveCategory(category.key);
                        const el = productsSectionRef.current;
                        if (el) {
                          const headerOffset = 140;
                          const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className={`group relative flex items-center gap-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0F4679]/[0.08] backdrop-blur-sm text-[#0F4679] shadow-sm border border-[#0F4679]/20 px-3 py-3 md:py-3.5' 
                          : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:text-[#0F4679] border border-gray-200/60 hover:border-[#0F4679]/15 hover:shadow-sm hover:bg-white/90 p-3 md:p-3.5 md:hover:px-3'
                      }`}
                    >
                      {/* Icon - Always visible, full size on mobile */}
                      <div className="flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px]">
                        {config.icon}
                      </div>
                      
                      {/* Category Name - Shows on active (mobile) or hover (desktop) */}
                      <span className={`text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isActive 
                          ? 'max-w-[120px] opacity-100' 
                          : 'max-w-0 opacity-0 md:group-hover:max-w-[120px] md:group-hover:opacity-100'
                      }`}>
                        {config.displayName}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Scroll Indicator - Mobile Only */}
              {showScrollIndicator && (
                <div className="absolute top-0 right-0 h-full w-8 md:hidden pointer-events-none flex items-center justify-end pr-1">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#0F4679] to-transparent rounded-full opacity-50"></div>
                </div>
              )}
            </div>
          </div>

          {/* Scroll target for smooth jump from category navbar */}
          <div ref={productsSectionRef} className="mb-6"></div>

          {/* Minimal Section Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {categories.find(c => c.key === activeCategory)?.label || 'Products'}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {expandedProducts.length} {expandedProducts.length === 1 ? 'product' : 'products'} available
                </p>
              </div>
            </div>
          </div>

          {/* Minimal Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mb-16"
            >
              {expandedProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}${product.__variantCode ? '-' + product.__variantCode : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square bg-white overflow-hidden">
                    <Image 
                      src={
                        (product as any).__variantCode === 'AP N95 03' && product.secondaryImage
                          ? product.secondaryImage
                          : (product as any).__variantCode === 'AP FM T 01'
                            ? '/3ply-tie.webp'
                            : (product as any).__variantCode === 'AP FM L 04' && product.secondaryImage
                              ? product.secondaryImage
                              : product.image
                      }
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-4">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.__displayName || product.name}
                    </h3>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 hidden sm:block flex-grow">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.specs.slice(0, 2).map((spec, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] rounded-md font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {product.specs.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] rounded-md font-medium">
                          +{product.specs.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex gap-2">
                      <button className="flex-1 px-3 py-2 text-xs font-medium text-[#0F4679] bg-[#0F4679]/5 hover:bg-[#0F4679]/10 rounded-lg transition-colors duration-200">
                        Quote
                      </button>
                      <Link 
                        href={`/products/${product.slug}`}
                        className="flex-1 px-3 py-2 text-xs font-medium text-white bg-[#0F4679] hover:bg-[#0D3A64] rounded-lg transition-colors duration-200 text-center"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {expandedProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium mb-1">No products found</p>
                  <p className="text-sm text-gray-600">Try selecting another category</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>


          {/* Custom Solutions CTA Section with Gradient Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
          >
            {/* Background gradient image */}
            <div className="absolute inset-0">
              <Image
                src="/bluegreengradient.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-14">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="text-center lg:text-left flex-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    Need Custom Solutions?
                  </h2>
                  <p className="text-white text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                    Our expert team specializes in creating tailored medical supply solutions for healthcare facilities of all sizes.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <button className="px-8 py-3.5 bg-white text-[#0F4679] font-semibold rounded-xl transition-all duration-200 hover:bg-gray-100 hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Us
                  </button>
                  
                  <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/40 hover:bg-white/20 transition-all duration-200 text-sm md:text-base">
                    View Catalog
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      
      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        onSuccess={handleActualDownload}
      />
    </>
  );
}

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-50"></div>
      <ProductsHeader />
      <div className="pt-4 min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F4679] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Main page component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}