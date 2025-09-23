'use client';

import Link from 'next/link';
import Image from 'next/image';
import { } from 'react';
import { useCountryStore } from '../../../lib/store';

// Video Showcase Component
function VideoShowcase() {
  return (
    <div className="mb-12">
      <div className="w-full">
        {/* Video Display */}
        <div className="relative mx-auto max-w-sm aspect-[3/4] md:max-w-none md:aspect-video">
          <video
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ 
              pointerEvents: 'none',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' 
            }}
          >
            <source src="/Indian Nurse Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default function ProductPreviewSection() {
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const productsText = getLocalizedContent('OUR PRODUCTS', {
    de: 'UNSERE PRODUKTE',
    fr: 'NOS PRODUITS',
    ja: '私たちの製品',
    zh: '我们的产品',
    pt: 'NOSSOS PRODUTOS'
  });

  const discoverTitle = getLocalizedContent('Discover Our Medical Products Range', {
    de: 'Entdecken Sie unser Sortiment an medizinischen Produkten',
    fr: 'Découvrez notre gamme de produits médicaux',
    ja: '私たちの医療製品の範囲を発見',
    zh: '发现我们的医疗产品系列',
    pt: 'Descubra nossa linha de produtos médicos'
  });

  const exploreDescription = getLocalizedContent(
    'Browse through our comprehensive collection of high-quality medical supplies - from protective equipment to surgical disposables and medical accessories.',
    {
      de: 'Stöbern Sie durch unsere umfassende Sammlung hochwertiger medizinischer Produkte - von Schutzausrüstung bis hin zu chirurgischen Einwegartikeln und medizinischem Zubehör.',
      fr: 'Parcourez notre collection complète de fournitures médicales de haute qualité - des équipements de protection aux jetables chirurgicaux et accessoires médicaux.',
      ja: '保護具から外科用使い捨て用品、医療アクセサリーまで、高品質な医療用品の包括的なコレクションをご覧ください。',
      zh: '浏览我们全面的高质量医疗用品收藏 - 从防护设备到外科一次性用品和医疗配件。',
      pt: 'Navegue por nossa coleção abrangente de suprimentos médicos de alta qualidade - desde equipamentos de proteção até descartáveis cirúrgicos e acessórios médicos.'
    }
  );

  const exploreAllProductsText = getLocalizedContent('Explore All Products', {
    de: 'Alle Produkte erkunden',
    fr: 'Explorer tous les produits',
    ja: 'すべての製品を探索',
    zh: '探索所有产品',
    pt: 'Explorar Todos os Produtos'
  });

  const totalProductsText = getLocalizedContent('Total Products', {
    de: 'Gesamtprodukte',
    fr: 'Produits totaux',
    ja: '総製品数',
    zh: '总产品',
    pt: 'Total de Produtos'
  });

  const hospitalsServedText = getLocalizedContent('Hospitals Served', {
    de: 'Krankenhäuser bedient',
    fr: 'Hôpitaux desservis',
    ja: '病院への提供',
    zh: '服务医院',
    pt: 'Hospitais Atendidos'
  });

  const certifiedQualityText = getLocalizedContent('Certified Quality', {
    de: 'Zertifizierte Qualität',
    fr: 'Qualité certifiée',
    ja: '認定品質',
    zh: '认证质量',
    pt: 'Qualidade Certificada'
  });

  const supportAvailableText = getLocalizedContent('Support Available', {
    de: 'Support verfügbar',
    fr: 'Support disponible',
    ja: 'サポート利用可能',
    zh: '支持可用',
    pt: 'Suporte Disponível'
  });

  const availableInCategoryText = getLocalizedContent('Available kit variations', {
    de: 'Verfügbare Kit-Varianten',
    fr: 'Variations de kits disponibles',
    ja: '利用可能なキットバリエーション',
    zh: '可用的套件变化',
    pt: 'Variações de kits disponíveis'
  });

  // Simple gallery images
  const galleryImages = [
    '/products/3ply-pack.png',
    '/products/n95-box.png',
    '/products/pe-shoecover.webp'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F4679] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#158C07] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-start ml-8">
            <div className="relative">
              <h2 className="section-heading text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight">
                {discoverTitle}
              </h2>
            </div>
          </div>
          <div className="mt-6 ml-8">
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              {exploreDescription}
            </p>
          </div>
        </div>

        {/* Video Showcase */}
        <VideoShowcase />

        {/* Minimal Gallery + CTA */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 font-medium rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 group"
              >
                {exploreAllProductsText}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="text-center space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-[#0F4679] leading-tight">165+</div>
            <div className="text-gray-600 text-xs md:text-sm leading-relaxed">{totalProductsText}</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-[#0F4679] leading-tight">500+</div>
            <div className="text-gray-600 text-xs md:text-sm leading-relaxed">{hospitalsServedText}</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">ISO</div>
            <div className="text-gray-600 text-xs md:text-sm leading-relaxed">{certifiedQualityText}</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-[#0F4679] to-[#DC2626] bg-clip-text text-transparent">24/7</div>
            <div className="text-gray-600 text-xs md:text-sm leading-relaxed">{supportAvailableText}</div>
          </div>
        </div>
      </div>
    </section>
  );
}