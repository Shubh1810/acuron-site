'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useCallback } from 'react';
import { Download } from 'lucide-react';
import { ColourfulText } from './ui/colorful-text';
import { useCountryStore } from '../../lib/store';
import { TextGenerateEffect } from "./ui/textgenerateeffect";
import TransparentNavbar from './TransparentNavbar';
import NewsletterModal from './NewsletterModal';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
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
    const filePath = '/acuron-brochure.pdf';
    link.href = encodeURI(filePath);
    link.download = 'Acuron-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsNewsletterModalOpen(false);
  };



  const localizedTitle = getLocalizedContent(title, {
    de: "Revolutionierung der medizinischen Versorgung mit Präzision und Sorgfalt.",
    fr: "Révolutionner l'approvisionnement médical avec précision et soin.",
    ja: "精密さとケアで医療供給を革命化する。",
    zh: "以精准和关怀革新医疗供应。",
    pt: "Revolucionando o fornecimento médico com precisão e cuidado."
  });

  const localizedSubtitle = getLocalizedContent(subtitle, {
    de: "Indiens vertrauenswürdiger Hersteller von ISO-zertifizierten PSA- und medizinischen Einwegprodukten und -kits, der Krankenhäuser landesweit stärkt.",
    fr: "Fabricant de confiance de l'Inde d'EPI certifiés ISO et de produits et kits médicaux jetables, autonomisant les hôpitaux à l'échelle nationale.",
    ja: "ISO認証のPPEおよび医療用使い捨て製品とキットのインドの信頼できるメーカーで、全国の病院を支援しています。",
    zh: "印度值得信赖的ISO认证PPE和医疗一次性产品及套件制造商，为全国医院提供支持。",
    pt: "Fabricante confiável da Índia de EPI certificados pela ISO e produtos e kits médicos descartáveis, capacitando hospitais em todo o país."
  });

  const localizedCtaText = getLocalizedContent(ctaText, {
    de: "PRODUKTE ERKUNDEN",
    fr: "EXPLORER LES PRODUITS",
    ja: "製品を探索",
    zh: "探索产品",
    pt: "EXPLORAR PRODUTOS"
  });

  // Define the key phrases to highlight in each language
  const getKeyPhraseAndParts = () => {
    if (selectedCountry.useEnglishContent) {
      const parts = localizedTitle.split("Medical Supply");
      return {
        keyPhrase: "Medical Supply",
        titleParts: parts,
        hasKeyPhrase: parts.length > 1
      };
    }

    const keyPhrases: Record<string, string> = {
      de: "medizinischen Versorgung",
      fr: "approvisionnement médical",
      ja: "医療供給",
      zh: "医疗供应",
      pt: "fornecimento médico"
    };

    const keyPhrase = keyPhrases[selectedCountry.language];
    if (keyPhrase) {
      const parts = localizedTitle.split(keyPhrase);
      return {
        keyPhrase,
        titleParts: parts,
        hasKeyPhrase: parts.length > 1
      };
    }

    return {
      keyPhrase: "",
      titleParts: [localizedTitle],
      hasKeyPhrase: false
    };
  };

  const { keyPhrase, titleParts, hasKeyPhrase } = getKeyPhraseAndParts();
  
  return (
    <div className="bg-white px-2 md:px-4 pb-0 md:pb-4 w-full max-w-[100vw] overflow-x-hidden">
      <div className="relative h-[70vh] sm:h-[68vh] md:h-[66vh] lg:h-[62vh] min-h-[420px] flex flex-col rounded-3xl md:rounded-3xl rounded-t-3xl overflow-hidden w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/main.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.5)'
          }}
        />

        {/* Top Overlay gradient */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0F4679]/50 to-transparent pointer-events-none" style={{ height: '40%' }} />
        
        {/* Bottom Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F4679]/50 to-transparent pointer-events-none" style={{ height: '40%' }} />



      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-2 sm:px-6 lg:px-8 text-white">
        <div className="text-center w-full max-w-none sm:max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold font-sans leading-tight mb-6 text-center">
            {hasKeyPhrase ? (
              <>
                {titleParts[0]}
                <span className="whitespace-nowrap">
                  <ColourfulText text={keyPhrase} />
                </span>
                {titleParts[1].includes('Precision & Care') ? (
                  <>
                    {titleParts[1].split('Precision & Care')[0]}
                    <span className="font-serif italic font-normal"><span className="underline underline-offset-4 decoration-white/60">Precision</span> & <span className="underline underline-offset-4 decoration-white/60">Care</span></span>
                    {titleParts[1].split('Precision & Care')[1]}
                  </>
                ) : (
                  titleParts[1]
                )}
              </>
            ) : (
              localizedTitle.includes('Precision & Care') ? (
                <>
                  {localizedTitle.split('Precision & Care')[0]}
                  <span className="font-serif italic font-normal"><span className="underline underline-offset-4 decoration-white/60">Precision</span> & <span className="underline underline-offset-4 decoration-white/60">Care</span></span>
                  {localizedTitle.split('Precision & Care')[1]}
              </>
            ) : (
              localizedTitle
              )
            )}
          </h1>
          
          <TextGenerateEffect 
            words={localizedSubtitle} 
            className="text-base sm:text-lg lg:text-xl mb-8 text-white/90 font-light leading-relaxed max-w-sm sm:max-w-3xl mx-auto" 
          />
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="relative group">
              {/* Animated Web3 Gradient Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 animate-pulse group-hover:animate-none transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-300 via-green-300 to-emerald-300 rounded-full blur-[4px] opacity-50 group-hover:opacity-75 animate-ping group-hover:animate-pulse transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-full blur-[6px] opacity-30 group-hover:opacity-60 animate-bounce group-hover:animate-pulse transition-all duration-700"></div>
              
            <Link 
              href={ctaLink}
                className="relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#0F4679] font-bold text-sm sm:text-base rounded-full hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 z-10"
            >
              {localizedCtaText}
            </Link>
            </div>
            
            <button 
              onClick={handleCatalogDownload}
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Download size={16} className="mr-2 sm:mr-2" />
              <span className="hidden sm:inline">Download Catalog</span>
              <span className="sm:hidden">Download Catalog</span>
            </button>
          </div>
        </div>
      </div>

        {/* Newsletter Modal */}
        <NewsletterModal 
          isOpen={isNewsletterModalOpen}
          onClose={() => setIsNewsletterModalOpen(false)}
          onSuccess={handleActualDownload}
        />
      </div>
    </div>
  );
};

export default HeroSection; 