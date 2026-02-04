'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useMemo, useEffect } from 'react';
import { Download, User } from 'lucide-react';
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

  const trustedHospitalsText = getLocalizedContent('Trusted Hospitals', { de: 'VERTRAUTE KRANKENHÄUSER', fr: 'HÔPITAUX DE CONFIANCE', ja: '信頼される病院', zh: '信赖医院', pt: 'HOSPITAIS CONFIÁVEIS' });
  const downloadCatalogText = getLocalizedContent('Download Catalog', { de: 'Katalog herunterladen', fr: 'Télécharger le catalogue', ja: 'カタログをダウンロード', zh: '下载目录', pt: 'Baixar Catálogo' });
  const totalProductsText = getLocalizedContent('Products', { de: 'Produkte', fr: 'Produits', ja: '製品', zh: '产品', pt: 'Produtos' });
  const hospitalsServedText = getLocalizedContent('Hospitals Served', { de: 'Krankenhäuser bedient', fr: 'Hôpitaux desservis', ja: 'サービス病院', zh: '服务医院', pt: 'Hospitais Atendidos' });
  const certifiedQualityText = getLocalizedContent('Certified Quality', { de: 'Zertifizierte Qualität', fr: 'Qualité certifiée', ja: '認証品質', zh: '认证质量', pt: 'Qualidade Certificada' });
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
      <span className=" text-[#0F4679]">Precision</span> &<br />
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
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0,0
                L 1,0
                L 1,0.85
                C 1,0.87 0.97,0.895 0.94,0.9
                L 0.55,0.9
                C 0.54,0.905 0.535,0.915 0.53,0.93
                L 0.515,0.965
                C 0.51,0.975 0.505,0.98 0.50,0.98
                L 0.12,0.98
                Q 0.1,0.98 0.1,0.96
                L 0.1,0.92
                Q 0.1,0.9 0.08,0.9
                L 0.02,0.9
                Q 0,0.9 0,0.88
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>
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

            {/* Social proof - avatars + stat */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#0F4679]/20 border-2 border-white flex items-center justify-center overflow-hidden">
                    <User className="w-5 h-5 text-[#0F4679]" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">{trustedHospitalsText}</div>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="font-ubuntu text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4">
              {hasKeyPhrase ? (
                <>
                  <span className="font-normal">
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
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ clipPath: 'url(#heroClip)' }}
            >
            {/* Background image */}
            <div
              className="absolute inset-0 z-0 rounded-t-3xl overflow-hidden"
              style={{
                backgroundImage: 'url(/heromain.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.85)'
              }}
            />

            {/* Minimal line illustration – top-left of hero image (rounded square-like shapes) */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 pointer-events-none" aria-hidden>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-[#0F4679]/20">
                <rect x="4" y="4" width="48" height="48" rx="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="60" y="4" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <rect x="4" y="60" width="56" height="40" rx="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            {/* Procurement Partner card with hole – hero image shows through center */}
            <div className="absolute bottom-36 right-4 sm:right-6 sm:bottom-40 w-[180px] sm:w-[200px] z-20 flex flex-col rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(15,70,121,0.18),0_2px_8px_rgba(0,0,0,0.08)] border border-white/95">
              {/* Frame with hole – transparent middle shows hero image; white border creates hole cutout */}
              <div
                className="h-24 sm:h-28 flex-shrink-0 border-[14px] sm:border-[16px] border-white rounded-t-3xl bg-transparent relative"
                style={{ boxSizing: 'content-box' }}
                aria-hidden
              >
                {/* Subtle inner glow on hole edges */}
                <div className="absolute inset-0 rounded-t-[20px] shadow-[inset_0_0_20px_rgba(15,70,121,0.08)]" />
              </div>

              {/* Content below hole - seamless connection, minimal spacing */}
              <div className="bg-gradient-to-br from-white via-white to-slate-50/30 rounded-b-3xl px-3.5 pt-1 pb-1.5">
                {/* Procurement Partner heading - right below hole */}
                <h4 className="text-[10px] font-semibold text-[#0F4679] uppercase tracking-wide mb-0.5">
                  {getLocalizedContent('Procurement Partner', { de: 'Beschaffungspartner', fr: 'Partenaire d\'approvisionnement', ja: '調達パートナー', zh: '采购合作伙伴', pt: 'Parceiro de Compras' })}
                </h4>

                {/* Main heading */}
                <h3 className="text-[13px] font-bold text-gray-900 leading-tight mb-1">
                  {getLocalizedContent('End-to-End Procurement Support', { de: 'Umfassende Beschaffungsunterstützung', fr: 'Support d\'approvisionnement de bout en bout', ja: 'エンドツーエンド調達サポート', zh: '端到端采购支持', pt: 'Suporte de Compras Completo' })}
                </h3>

                {/* Feature list with bullets - tight spacing */}
                <div className="space-y-0.5 mb-1">
                  {[
                    getLocalizedContent('SKU planning', { de: 'SKU-Planung', fr: 'Planification SKU', ja: 'SKU計画', zh: 'SKU规划', pt: 'Planejamento de SKU' }),
                    getLocalizedContent('Volume forecasting', { de: 'Volumenprognose', fr: 'Prévision de volume', ja: '数量予測', zh: '数量预测', pt: 'Previsão de Volume' }),
                    getLocalizedContent('Compliance documentation', { de: 'Konformitätsdokumentation', fr: 'Documentation de conformité', ja: 'コンプライアンス文書', zh: '合规文档', pt: 'Documentação de Conformidade' })
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#0F4679]/60 mt-1 flex-shrink-0" />
                      <span className="text-[10.5px] text-gray-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer icon + label */}
                <div className="flex items-center gap-2 pt-1.5 border-t border-gray-100">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0F4679]/10 to-[#0F4679]/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#0F4679]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-[#0F4679]">Acuron</p>
                    <p className="text-[9px] text-gray-500">
                      {getLocalizedContent('Trusted Partner', { de: 'Vertrauenspartner', fr: 'Partenaire de confiance', ja: '信頼のパートナー', zh: '值得信赖的合作伙伴', pt: 'Parceiro Confiável' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare & Chemicals – left aligned, lower; Healthcare selected by default (white fill, black text) */}
            <div className="absolute bottom-6 left-4 sm:left-16 sm:bottom-6 flex flex-wrap items-center gap-2 z-20">
              <Link
                href="/products"
                onClick={() => setSelectedCategory('healthcare')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap transition-colors backdrop-blur-sm ${
                  selectedCategory === 'healthcare'
                    ? 'bg-white text-gray-900 border-white'
                    : 'border-white/90 bg-white/10 text-white/95 hover:bg-white/20'
                }`}
              >
                {getLocalizedContent('Healthcare', { de: 'Gesundheitswesen', fr: 'Santé', ja: 'ヘルスケア', zh: '医疗保健', pt: 'Saúde' })}
              </Link>
              <Link
                href="/products"
                onClick={() => setSelectedCategory('chemicals')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap transition-colors backdrop-blur-sm ${
                  selectedCategory === 'chemicals'
                    ? 'bg-white text-gray-900 border-white'
                    : 'border-white/90 bg-white/10 text-white/95 hover:bg-white/20'
                }`}
              >
                {getLocalizedContent('Chemicals', { de: 'Chemikalien', fr: 'Chimiques', ja: '化学', zh: '化工', pt: 'Químicos' })}
              </Link>
            </div>

            {/* Pharmaceuticals & Food Processing – below the hole container, right */}
            <div className="absolute bottom-16 right-4 sm:right-6 sm:bottom-20 flex items-center gap-2 z-20">
              <Link
                href="/products"
                onClick={() => setSelectedCategory('pharmaceuticals')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap transition-colors backdrop-blur-sm ${
                  selectedCategory === 'pharmaceuticals'
                    ? 'bg-white text-gray-900 border-white'
                    : 'border-white/90 bg-white/10 text-white/95 hover:bg-white/20'
                }`}
              >
                {getLocalizedContent('Pharmaceuticals', { de: 'Pharmazeutika', fr: 'Pharmaceutique', ja: '製薬', zh: '制药', pt: 'Farmacêutico' })}
              </Link>
              <Link
                href="/products"
                onClick={() => setSelectedCategory('food-processing')}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border whitespace-nowrap transition-colors backdrop-blur-sm ${
                  selectedCategory === 'food-processing'
                    ? 'bg-white text-gray-900 border-white'
                    : 'border-white/90 bg-white/10 text-white/95 hover:bg-white/20'
                }`}
              >
                {getLocalizedContent('Food Processing', { de: 'Lebensmittelverarbeitung', fr: 'Transformation alimentaire', ja: '食品加工', zh: '食品加工', pt: 'Processamento de Alimentos' })}
              </Link>
            </div>

            </div>

            {/* Available on – text on line 1, logos on line 2; compact, more rounded; outside clip, peeping from top-left */}
            <div
              className="absolute top-6 -left-4 sm:top-12 sm:-left-20 w-auto max-w-[90vw] bg-white rounded-2xl px-2 py-1.5 border border-gray-100 z-20"
              style={{ boxShadow: '0 0 20px rgba(15, 70, 121, 0.45), 0 0 40px rgba(15, 70, 121, 0.3), 0 4px 6px -1px rgba(0,0,0,0.1)' }}
            >
              <span className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                {getLocalizedContent('Available on', { de: 'Erhältlich bei', fr: 'Disponible sur', ja: '取扱い', zh: '可购买于', pt: 'Disponível em' })}
              </span>
              <div className="flex flex-nowrap items-center gap-0.5 -mx-0.5">
                <a href="https://www.amazon.in/s?k=acuron&crid=3LUINNVFBJX7Y&sprefix=acuron%2Caps%2C202&ref=nb_sb_noss_1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5">
                  <Image src="/amazon.png" alt="Amazon" width={36} height={12} className="h-3 w-auto object-contain" />
                </a>
                <a href="https://www.meesho.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5">
                  <Image src="/meesho.png" alt="Meesho" width={64} height={22} className="h-6 sm:h-7 w-auto object-contain" />
                </a>
                <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -mr-1.5">
                  <Image src="/flip.png" alt="Flipkart" width={48} height={16} className="h-4 sm:h-5 w-auto object-contain" />
                </a>
                <a href="https://dir.indiamart.com/search.mp?ss=acuron&prdsrc=1&v=4" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex-shrink-0 -mx-0.5 -ml-1.5">
                  <Image src="/indiamart.png" alt="IndiaMART" width={48} height={16} className="h-4 sm:h-5 w-auto object-contain" />
                </a>
              </div>
            </div>

            {/* Second duplicate grid + shadow motif under the hero image */}
            <div className="absolute bottom-0 left-0 lg:left-auto lg:right-0 w-28 h-28 sm:w-40 sm:h-40 rounded-md pointer-events-none z-[5] translate-y-4 lg:translate-y-6">
              <div
                className="absolute inset-0 rounded-md border border-gray-200/80"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, #f8fafc, #ffffff)',
                  backgroundSize: '14px 14px, 14px 14px, 100% 100%',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(15,70,121,0.08)'
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

        {/* Bottom metrics bar: 2 stats only (no category buttons) */}
        <div className="relative z-20 grid grid-cols-2 gap-4 md:gap-6 py-6 px-4 md:px-6 bg-white border-t border-gray-200 items-center max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0F4679]">165+</div>
            <div className="text-xs md:text-sm text-gray-600">{totalProductsText}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#0F4679]">500+</div>
            <div className="text-xs md:text-sm text-gray-600">{hospitalsServedText}</div>
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
