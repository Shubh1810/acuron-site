'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback, useEffect } from 'react';
import { Download } from 'lucide-react';
import CountrySelector from './CountrySelector';
import { useCountryStore } from '../../lib/store';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { selectedCountry } = useCountryStore();

  // Fix hydration issues by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Localized top navigation links
  const ourCompanyText = "+91 98200 43274";

  const contactText = getLocalizedContent('INQUIRE', {
    de: 'ANFRAGE',
    fr: 'DEMANDE',
    ja: 'お問い合わせ',
    zh: '询问',
    pt: 'INQUÉRITO'
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


  // Memoize the toggle function to prevent recreation on renders
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      if (!prev) {
        setIsMobileProductsOpen(false); // Reset products dropdown when opening menu
      }
      return !prev;
    });
  }, []);

  return (
    <header className="w-full">
      {/* Top Navigation Bar - Glassmorphism effect with dot pattern */}
      <div 
        className="bg-white/70 backdrop-blur-md relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, transparent 1.2px, rgba(255,255,255,0.7) 1.2px),
            radial-gradient(circle at 3px 2px, transparent 1px, transparent 1px),
            radial-gradient(circle at 5px 1px, transparent 1.1px, transparent 1.1px),
            radial-gradient(circle at 2px 4px, transparent 0.9px, transparent 0.9px),
            radial-gradient(circle at 6px 3px, transparent 1.3px, transparent 1.3px),
            radial-gradient(circle at 0.5px 2.5px, transparent 0.8px, transparent 0.8px),
            radial-gradient(circle at 2.5px 0.5px, transparent 1px, transparent 1px),
            radial-gradient(circle at 4px 4px, transparent 1.2px, transparent 1.2px),
            radial-gradient(circle at 6.5px 1.5px, transparent 0.9px, transparent 0.9px),
            radial-gradient(circle at 1.5px 3.5px, transparent 1.1px, transparent 1.1px),
            radial-gradient(circle at 3.5px 5px, transparent 0.8px, transparent 0.8px),
            radial-gradient(circle at 5.5px 2.5px, transparent 1px, transparent 1px),
            radial-gradient(circle at 0.8px 5.5px, transparent 1.2px, transparent 1.2px),
            radial-gradient(circle at 4.5px 0.8px, transparent 0.9px, transparent 0.9px),
            radial-gradient(circle at 7px 4.5px, transparent 1.3px, transparent 1.3px),
            radial-gradient(circle at 0.2px 0.8px, transparent 0.7px, transparent 0.7px),
            radial-gradient(circle at 1.8px 1.8px, transparent 1px, transparent 1px),
            radial-gradient(circle at 3.2px 3.2px, transparent 0.8px, transparent 0.8px),
            radial-gradient(circle at 4.8px 2.2px, transparent 1.1px, transparent 1.1px),
            radial-gradient(circle at 6.2px 0.2px, transparent 0.9px, transparent 0.9px),
            radial-gradient(circle at 7.5px 1.8px, transparent 1px, transparent 1px),
            radial-gradient(circle at 0.8px 4.2px, transparent 1.2px, transparent 1.2px),
            radial-gradient(circle at 2.2px 5.8px, transparent 0.8px, transparent 0.8px),
            radial-gradient(circle at 3.8px 6.5px, transparent 1px, transparent 1px),
            radial-gradient(circle at 5.2px 5.2px, transparent 1.1px, transparent 1.1px),
            radial-gradient(circle at 6.8px 6.8px, transparent 0.9px, transparent 0.9px),
            radial-gradient(circle at 7.2px 2.8px, transparent 1px, transparent 1px),
            radial-gradient(circle at 1.2px 6.2px, transparent 1.2px, transparent 1.2px),
            radial-gradient(circle at 4.2px 1.2px, transparent 0.8px, transparent 0.8px),
            radial-gradient(circle at 5.8px 4.8px, transparent 1.1px, transparent 1.1px)
          `,
          backgroundSize: '8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px'
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1 sm:py-1.5 flex justify-between items-center">
          {/* Left side - Available on platforms (desktop only) */}
          {isClient && (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-[9px] sm:text-[10px] text-[#0F4679]/70 font-medium">Available on:</span>
              <div className="flex items-center space-x-1">
                <Image
                  src="/flip.png"
                  alt="Available on Flipkart"
                  width={48}
                  height={16}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
                <a 
                  href="https://www.amazon.in/s?k=acuron&crid=3LUINNVFBJX7Y&sprefix=acuron%2Caps%2C202&ref=nb_sb_noss_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src="/amazon.png"
                    alt="Available on Amazon"
                    width={48}
                    height={16}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain cursor-pointer"
                  />
                </a>
                <a 
                  href="https://dir.indiamart.com/search.mp?ss=acuron&prdsrc=1&v=4&mcatid=&catid=&sref=as-popular%7Ckwd%3Dacuron%7Cpos%3D2%7Ccat%3D-2%7Cmcat%3D-2%7Ckwd_len%3D6%7Ckwd_cnt%3D1&cq=mumbai&tags=res:RC1-R5%7Cktp:N0%7Cmtp:S%7Cwc:1%7Clcf:3%7Ccq:mumbai%7Cqr_nm:localhgmct-gl-gd%7Ccs:17898%7Ccom-cf:nl%7Cptrs:na%7Cmc:186459%7Ccat:855%7Cqry_typ:P%7Clang:en%7Ctyr:1%7Cqrd:250923%7Cmrd:250923%7Cprdt:250923%7Cmsf:hs%7Cpfen:1%7Cgli:G0I0%7Cgc:Mumbai%7Cic:Mumbai%7Cscw:1%7Clf:5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src="/indiamart.png"
                    alt="Available on IndiaMART"
                    width={48}
                    height={16}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain cursor-pointer"
                  />
                </a>
              </div>
            </div>
          )}
          
          {/* Placeholder for server-side rendering */}
          {!isClient && <div className="hidden md:block w-48 h-5"></div>}

          {/* Mobile Logo - Center on mobile */}
          <Link href="/" className="md:hidden flex-shrink-0">
            <div className="w-28 h-8 flex items-center justify-start hover:opacity-90 transition-opacity duration-300">
              <Image
                src="/acprod.png"
                alt="Acuron Logo"
                width={160}
                height={48}
                priority
                className="object-contain scale-100"
              />
            </div>
          </Link>
          
          {/* Right side navigation items */}
          <div className="flex items-center space-x-3 sm:space-x-6">
          <a 
            href="tel:+919820043274" 
            className="text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300 cursor-pointer"
          >
            {ourCompanyText}
          </a>
          <Link href="/#contact-us-section" className="text-[10px] sm:text-[11px] tracking-wide font-bold text-[#0F4679] hover:text-[#16599D] transition-colors duration-300">
            {contactText}
          </Link>
          {isClient && <CountrySelector />}
          </div>
        </div>
      </div>
      


    </header>
  );
};

export default Header;