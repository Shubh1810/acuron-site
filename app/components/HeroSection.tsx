'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useEffect } from 'react';
import { Download } from 'lucide-react';
import { ColourfulText } from './ui/colorful-text';
import { useCountryStore } from '../../lib/store';
import NewsletterModal from './NewsletterModal';
import { useNewsletterModalTrigger } from '../lib/modalEvents';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

type HeroCategoryId = 'healthcare' | 'chemicals' | 'pharmaceuticals' | 'food-processing';

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<HeroCategoryId>('healthcare');
  const { selectedCountry } = useCountryStore();

  useEffect(() => {
    const cleanup = useNewsletterModalTrigger(() => {
      setIsNewsletterModalOpen(true);
    });
    return cleanup;
  }, []);

  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
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
    pt: "Fabricant confiável da Índia de EPI certificados pela ISO e produtos e kits médicos descartáveis, capacitando hospitais em todo o país."
  });

  const localizedCtaText = getLocalizedContent(ctaText, {
    de: "ALLE PRODUKTE ENTDECKEN",
    fr: "EXPLORER TOUS LES PRODUITS",
    ja: "すべての製品を見る",
    zh: "探索所有产品",
    pt: "EXPLORAR TODOS OS PRODUTOS"
  });

  const downloadCatalogText = getLocalizedContent('Download Catalog', { de: 'Katalog herunterladen', fr: 'Télécharger le catalogue', ja: 'カタログをダウンロード', zh: '下载目录', pt: 'Baixar Catálogo' });
  const totalProductsText = getLocalizedContent('Products', { de: 'Produkte', fr: 'Produits', ja: '製品', zh: '产品', pt: 'Produtos' });
  const hospitalsServedText = getLocalizedContent('Healthcare Partners', { de: 'Gesundheitspartner', fr: 'Partenaires de santé', ja: 'ヘルスケアパートナー', zh: '医疗合作伙伴', pt: 'Parceiros de Saúde' });
  const certifiedQualityText = getLocalizedContent('Satisfied customer', { de: 'Zufriedener Kunde', fr: 'Client satisfait', ja: '満足した顧客', zh: '满意客户', pt: 'Cliente satisfeito' });
  const supportAvailableText = getLocalizedContent('Support Available', { de: 'Support verfügbar', fr: 'Support disponible', ja: 'サポート対応', zh: '支持可用', pt: 'Suporte Disponível' });

  const handleCatalogDownload = () => setIsNewsletterModalOpen(true);

  const handleActualDownload = () => {
    const link = document.createElement('a');
    link.href = encodeURI('/acuron-brochure.pdf');
    link.download = 'Acuron-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsNewsletterModalOpen(false);
  };

  const getKeyPhraseAndParts = () => {
    if (selectedCountry.useEnglishContent) {
      const parts = localizedTitle.split("Medical Supply");
      return { keyPhrase: "Medical Supply", titleParts: parts, hasKeyPhrase: parts.length > 1 };
    }
    const keyPhrases: Record<string, string> = {
      de: "medizinischen Versorgung", fr: "approvisionnement médical", ja: "医療供給",
      zh: "医疗供应", pt: "fornecimento médico"
    };
    const keyPhrase = keyPhrases[selectedCountry.language];
    if (keyPhrase) {
      const parts = localizedTitle.split(keyPhrase);
      return { keyPhrase, titleParts: parts, hasKeyPhrase: parts.length > 1 };
    }
    return { keyPhrase: "", titleParts: [localizedTitle], hasKeyPhrase: false };
  };

  const { keyPhrase, titleParts, hasKeyPhrase } = getKeyPhraseAndParts();

  /** Horizontal pill outline (stroke only) – smooth pill shape, edges aligned to pixel */
  const PillOutlineIllust = () => (
    <span className="inline-flex align-middle mx-0.5 shrink-0" aria-hidden>
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0F4679]" shapeRendering="geometricPrecision">
        <rect x="1" y="1" width="38" height="8" rx="4" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const subtitleWithPill = (() => {
    const needle = /ISO-certified\s+PPE/i;
    const idx = localizedSubtitle.search(needle);
    if (idx === -1) return localizedSubtitle;
    const before = localizedSubtitle.slice(0, idx);
    const from = localizedSubtitle.slice(idx);
    return (
      <>
        {before}
        <PillOutlineIllust />
        {from}
      </>
    );
  })();

  const precisionCareBlock = (
    <>
      <span className=" text-[#0F4679]">Precision</span> <span className="font-bold">&</span><br />
      <span className="inline-flex items-center mt-1">
        <span className=" text-[#0F4679]">Care</span>
      </span>
    </>
  );

  const productCategories = useMemo(() => [
    getLocalizedContent('Protective Apparel', { de: 'Schutzkleidung', fr: 'Vêtements de protection', ja: '保護服', zh: '防护服', pt: 'Vestuário de Proteção' }),
    getLocalizedContent('Medical Kits', { de: 'Medizinische Kits', fr: 'Kits médicaux', ja: '医療キット', zh: '医疗套件', pt: 'Kits Médicos' }),
    getLocalizedContent('Masks', { de: 'Masken', fr: 'Masques', ja: 'マスク', zh: '口罩', pt: 'Máscaras' }),
    getLocalizedContent('Surgical', { de: 'Chirurgisch', fr: 'Chirurgical', ja: '外科', zh: '外科', pt: 'Cirúrgico' }),
    getLocalizedContent('PPE', { de: 'PSA', fr: 'EPI', ja: 'PPE', zh: 'PPE', pt: 'EPI' }),
  ], [selectedCountry]);

  return (
    <div id="hero-section" className="bg-gradient-to-b from-slate-50 to-white px-2 md:px-4 pb-0 w-full max-w-[100vw] overflow-x-hidden pt-20 sm:pt-28">
      <div className="max-w-7xl mx-auto">
        {/* Two-column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12 px-4 md:px-6">
          {/* Left Column - Content */}
          <div className="relative flex flex-col justify-center order-2 lg:order-1">
            {/* Small light grey grid patch – empty area between subheading and hero (left column, top-right); overlay on top blends edges with bg */}
            <div className="absolute top-3 right-0 w-28 h-28 sm:w-40 sm:h-40 rounded-md pointer-events-none translate-x-4 translate-y-1 lg:right-0">
              <div
                className="absolute inset-0 rounded-md border border-gray-200/80"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, #f8fafc, #ffffff)',
                  backgroundSize: '14px 14px, 14px 14px, 100% 100%'
                }}
                aria-hidden
              />
              {/* Overlay on top: same color as hero bg, transparent center so edges blend */}
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 35%, #f8fafc 70%, #ffffff 100%)'
                }}
                aria-hidden
              />
            </div>

            {/* Minimal compact subtitle - inline with sparkle, narrow width for ~4 lines */}
            <div className="flex items-start gap-6 sm:gap-8 mb-4 max-w-[17.5rem] sm:max-w-[21rem] -mt-4 sm:-mt-5">
              <p className="text-[12px] sm:text-[13px] text-[#0F4679] font-semibold uppercase tracking-wide leading-snug flex-1 min-w-0">
                {subtitleWithPill}
              </p>
              <Image
                src="/star.png"
                alt=""
                width={48}
                height={48}
                className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 mt-0.5 object-contain ml-4"
                style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(58%) saturate(1200%) hue-rotate(195deg)' }}
              />
            </div>

            {/* Recognition logos – compact, single line */}
            <div className="flex flex-nowrap items-center justify-start gap-1 sm:gap-1.5 mb-8 overflow-hidden">
              {[
                { src: '/iso134.webp', alt: 'ISO Certification', name: 'ISO' },
                { src: '/ce-mark.png', alt: 'CE Mark Certification', name: 'CE Mark' },
                { src: '/cdsco-logo.webp', alt: 'CDSCO Certification', name: 'CDSCO' },
                { src: '/nsic.png', alt: 'NSIC Certification', name: 'NSIC' },
              ].map((logo, index) => (
                <div
                  key={index}
                  className={`flex shrink-0 items-center justify-center ${logo.name === 'NSIC' ? 'h-44' : logo.name === 'CDSCO' ? 'h-24' : 'h-20'} ${logo.name === 'CDSCO' ? '-mx-3' : ''} ${logo.name === 'NSIC' ? '-mx-4 translate-y-1' : ''}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.name === 'CDSCO' ? 80 : logo.name === 'NSIC' ? 120 : 60}
                    height={logo.name === 'CDSCO' ? 48 : logo.name === 'NSIC' ? 72 : 36}
                    className={`max-w-full max-h-full object-contain ${
                      logo.name === 'CDSCO'
                        ? 'brightness-0'
                        : logo.name === 'ISO'
                          ? 'opacity-100'
                          : 'opacity-70 filter grayscale'
                    }`}
                    style={{ width: 'auto', height: 'auto' }}
                    sizes={logo.name === 'NSIC' ? '(max-width: 640px) 80px, (max-width: 768px) 120px, 160px' : '(max-width: 640px) 60px, (max-width: 768px) 80px, 120px'}
                    unoptimized={logo.name === 'NSIC'}
                  />
                </div>
              ))}
            </div>

            {/* Main headline */}
            <h1 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F4679] leading-tight mb-4">
              {hasKeyPhrase ? (
                <>
                  <span className="font-semibold">
                    {titleParts[0]}
                    <span className="whitespace-nowrap">
                      <ColourfulText text={keyPhrase} />
                    </span>
                    {titleParts[1]?.includes('Precision & Care') ? titleParts[1].split('Precision & Care')[0] : ''}
                  </span>
                  {titleParts[1]?.includes('Precision & Care') ? (
                    <>
                      {precisionCareBlock}
                      {titleParts[1].split('Precision & Care')[1]}
                    </>
                  ) : null}
                </>
              ) : (
                localizedTitle.includes('Precision & Care') ? (
                  <>
                    <span className="font-normal">
                      {localizedTitle.split('Precision & Care')[0]}
                    </span>
                    {precisionCareBlock}
                    {localizedTitle.split('Precision & Care')[1]}
                  </>
                ) : (
                  localizedTitle
                )
              )}
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleCatalogDownload}
                className="inline-flex items-center px-4 py-2.5 text-sm border-2 border-gray-800 rounded-full text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
              >
                {downloadCatalogText}
              </button>
              <Link
                href={ctaLink}
                className="group relative inline-flex p-[2px] rounded-full bg-gradient-to-r from-[#0F4679] to-[#158C07] hover:from-[#0D3C6B] hover:to-emerald-600 transition-all duration-300 shadow-[0_0_15px_rgba(15,70,121,0.35),0_0_30px_rgba(21,140,7,0.25)]"
              >
                <span className="flex items-center px-4 py-2.5 text-sm rounded-full bg-white text-[#0F4679] font-semibold group-hover:bg-gray-50 transition-colors">
                  {localizedCtaText}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual / Interactive; bottom cutout for category pills */}
          <div className="relative min-h-[430px] sm:min-h-[480px] lg:min-h-[580px] -mt-16 order-1 lg:order-2">
            <div className="absolute inset-0 z-10 overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 z-0 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'url(/heromain.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.85)'
              }}
            />

            {/* Category button – top right of hero image, circular with arrow icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
              <Link
                href="/products"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-400/80 hover:bg-gray-500/90 text-white backdrop-blur-sm transition-colors"
                aria-label={getLocalizedContent('View All Products', { de: 'Alle Produkte', fr: 'Tous les produits', ja: 'すべての製品', zh: '查看所有产品', pt: 'Todos os produtos' })}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M17 7h-6M17 7v6" />
                </svg>
              </Link>
            </div>

            {/* Minimal line illustration – top-left of hero image (rounded square-like shapes) */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 pointer-events-none" aria-hidden>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-[#0F4679]/20">
                <rect x="4" y="4" width="48" height="48" rx="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="60" y="4" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <rect x="4" y="60" width="56" height="40" rx="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            {/* Procurement Partner card with hole – hero image shows through center */}
            <div className="absolute bottom-20 right-4 sm:right-6 sm:bottom-24 w-[180px] sm:w-[200px] z-20 flex flex-col rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(15,70,121,0.18),0_2px_8px_rgba(0,0,0,0.08)] border border-white/95">
              {/* SVG mask: sharp outer bottom, rounded inner hole – scales with taller hole */}
              <svg className="absolute w-0 h-0" aria-hidden>
                <defs>
                  <mask id="hole-frame-mask" maskContentUnits="objectBoundingBox">
                    <rect x="0" y="0" width="1" height="1" fill="white" />
                    <rect x="0.078" y="0.075" width="0.844" height="0.85" rx="0.08" ry="0.12" fill="black" />
                  </mask>
                </defs>
              </svg>
              <div className="relative flex-shrink-0 -mb-1 sm:-mb-0">
                {/* Frame: white bg, sharp bottom (outer), mask cuts hole – increased height */}
                <div
                  className="h-52 sm:h-56 rounded-t-3xl rounded-b-none bg-white"
                  style={{
                    maskImage: 'url(#hole-frame-mask)',
                    WebkitMaskImage: 'url(#hole-frame-mask)',
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                  }}
                  aria-hidden
                />
                {/* Inner glow – matches taller hole proportions */}
                <div className="absolute inset-[14px] sm:inset-[16px] rounded-t-[18px] rounded-b-[16px] sm:rounded-b-[24px] shadow-[inset_0_0_20px_rgba(15,70,121,0.08)] pointer-events-none" aria-hidden />
              </div>

              {/* Content below hole – overlaps arc so it tucks behind */}
              <div className="relative z-10 -mt-3 sm:-mt-4 bg-gradient-to-br from-white via-white to-slate-50/30 rounded-t-2xl rounded-b-3xl px-3.5 pt-0 pb-1.5">
                {/* Procurement Partner heading - right below hole */}
                <h4 className="text-[10px] font-semibold text-[#0F4679] uppercase tracking-wide mb-0.5">
                  {getLocalizedContent('Procurement Partner', { de: 'Beschaffungspartner', fr: 'Partenaire d\'approvisionnement', ja: '調達パートナー', zh: '采购合作伙伴', pt: 'Parceiro de Compras' })}
                </h4>

                {/* Main heading */}
                <h3 className="text-[13px] font-bold text-gray-900 leading-tight mb-1">
                  {getLocalizedContent('End-to-End Procurement Support', { de: 'Umfassende Beschaffungsunterstützung', fr: 'Support d\'approvisionnement de bout en bout', ja: 'エンドツーエンド調達サポート', zh: '端到端采购支持', pt: 'Suporte de Compras Completo' })}
                </h3>

                {/* Footer icon + label */}
                <div className="pt-1.5 my-3">
                  <div className="hole-card-dotted-divider mb-2 -mx-3.5" style={{ width: 'calc(100% + 1.75rem)' }} />
                  <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="/favicon-og.jpeg" alt="Acuron" width={28} height={28} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#0F4679]">Acuron</p>
                    <p className="text-[9px] text-gray-500">
                      {getLocalizedContent('Trusted Partner', { de: 'Vertrauenspartner', fr: 'Partenaire de confiance', ja: '信頼のパートナー', zh: '值得信赖的合作伙伴', pt: 'Parceiro Confiável' })}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category buttons – in a single line at bottom of hero image */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 z-20 px-2">
              {[
                { id: 'healthcare' as const, label: getLocalizedContent('Healthcare', { de: 'Gesundheitswesen', fr: 'Santé', ja: 'ヘルスケア', zh: '医疗保健', pt: 'Saúde' }) },
                { id: 'chemicals' as const, label: getLocalizedContent('Chemicals', { de: 'Chemikalien', fr: 'Chimiques', ja: '化学', zh: '化工', pt: 'Químicos' }) },
                { id: 'pharmaceuticals' as const, label: getLocalizedContent('Pharmaceuticals', { de: 'Pharmazeutika', fr: 'Pharmaceutique', ja: '製薬', zh: '制药', pt: 'Farmacêutico' }) },
                { id: 'food-processing' as const, label: getLocalizedContent('Food Processing', { de: 'Lebensmittelverarbeitung', fr: 'Transformation alimentaire', ja: '食品加工', zh: '食品加工', pt: 'Processamento de Alimentos' }) },
              ].map(({ id, label }) => (
                <Link
                  key={id}
                  href="/products"
                  onClick={() => setSelectedCategory(id)}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap transition-colors backdrop-blur-sm ${
                    selectedCategory === id
                      ? 'bg-white text-gray-900 border-white'
                      : 'border-white/90 bg-white/10 text-white/95 hover:bg-white/20'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            </div>

            {/* Bulk Orders & Institutional Pricing – redesigned with better layout */}
            <div
              className="absolute top-6 -left-4 sm:top-12 sm:-left-20 w-auto max-w-[90vw] bg-gradient-to-br from-white via-white to-slate-50/40 rounded-3xl px-4 py-4 border border-white/80 z-20 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 25px rgba(15, 70, 121, 0.15), 0 8px 32px rgba(15, 70, 121, 0.12), 0 2px 8px rgba(0,0,0,0.08)',
                minWidth: '280px'
              }}
            >
              {/* Icon badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#0F4679]/8 px-2.5 py-1 rounded-full mb-2">
                <svg className="w-3.5 h-3.5 text-[#0F4679]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-[10px] font-bold text-[#0F4679] uppercase tracking-wider">
                  {getLocalizedContent('Enterprise', { de: 'Unternehmen', fr: 'Entreprise', ja: '企業', zh: '企业', pt: 'Empresa' })}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#0F4679] mb-1.5 leading-tight">
                {getLocalizedContent('Bulk Orders & Institutional Pricing', { de: 'Mengenbestellungen & institutionelle Preise', fr: 'Commandes en gros et tarifs institutionnels', ja: '大口注文・法人価格', zh: '批量订单与机构定价', pt: 'Pedidos em massa e preços institucionais' })}
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                {getLocalizedContent('165+ certified medical products', { de: '165+ zertifizierte Medizinprodukte', fr: '165+ produits médicaux certifiés', ja: '165以上の認証医療製品', zh: '165+ 认证医疗产品', pt: '165+ produtos médicos certificados' })}
              </p>

              <Link
                href="/#contact-us-section"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0F4679] to-[#0D5A9E] hover:from-[#0D3C6B] hover:to-[#0B4D85] rounded-xl px-4 py-2.5 transition-all duration-300 shadow-[0_4px_14px_rgba(15,70,121,0.25)] hover:shadow-[0_6px_20px_rgba(15,70,121,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{getLocalizedContent('Request Pricing', { de: 'Preis anfragen', fr: 'Demander un devis', ja: '価格をリクエスト', zh: '请求定价', pt: 'Solicitar preços' })}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Second duplicate grid under the hero image – no shadow */}
            <div className="absolute bottom-0 left-0 lg:left-auto lg:right-0 w-28 h-28 sm:w-40 sm:h-40 rounded-md pointer-events-none z-[5] translate-y-4 lg:translate-y-6">
              <div
                className="absolute inset-0 rounded-md border border-gray-200/80"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(15,70,121,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,70,121,0.08) 1px, transparent 1px), linear-gradient(to bottom, #f8fafc, #ffffff)',
                  backgroundSize: '14px 14px, 14px 14px, 100% 100%'
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 35%, #f8fafc 70%, #ffffff 100%)'
                }}
                aria-hidden
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom metrics bar – full-width across screen, slightly darker blue */}
      <div className="relative z-20 w-screen left-1/2 -translate-x-1/2 mt-8 md:mt-8 py-8 md:py-8 bg-[#d8e1ed] flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-4 px-4 md:px-8 items-center justify-items-center max-w-3xl md:max-w-5xl">
        <div className="text-center">
          <div className="zalando-sans-expanded-metrics text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">165+</div>
          <div className="text-sm md:text-base text-slate-500 mt-3 font-medium">{totalProductsText}</div>
        </div>
        <div className="text-center">
          <div className="zalando-sans-expanded-metrics text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">500+</div>
          <div className="text-sm md:text-base text-slate-500 mt-3 font-medium">{hospitalsServedText}</div>
        </div>
        <div className="text-center">
          <div className="zalando-sans-expanded-metrics text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">10k+</div>
          <div className="text-sm md:text-base text-slate-500 mt-3 font-medium">{certifiedQualityText}</div>
        </div>
        <div className="text-center">
          <div className="zalando-sans-expanded-metrics text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">24/7</div>
          <div className="text-sm md:text-base text-slate-500 mt-3 font-medium">{supportAvailableText}</div>
        </div>
        </div>
      </div>

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        onSuccess={handleActualDownload}
      />
    </div>
  );
};

export default HeroSection;
