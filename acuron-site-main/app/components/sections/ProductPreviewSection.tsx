'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
          
          {/* Premium Medical Solutions Badge */}
          <div className="absolute top-6 right-6 z-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#0F4679]/10 to-[#158C07]/10 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0F4679] to-[#158C07] rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent tracking-wider">
                PREMIUM MEDICAL SOLUTIONS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPreviewSection() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
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

  // Simple product carousel data
  const products = [
    {
      name: getLocalizedContent("3-Ply Face Masks", {
        de: "3-lagige Gesichtsmasken",
        fr: "Masques faciaux 3 plis",
        ja: "3層フェイスマスク",
        zh: "三层口罩",
        pt: "Máscaras Faciais 3 Camadas"
      }),
      image: "/products/3ply-pack.png",
      description: getLocalizedContent("High-quality disposable face masks with 3-layer protection", {
        de: "Hochwertige Einweg-Gesichtsmasken mit 3-lagigem Schutz",
        fr: "Masques faciaux jetables de haute qualité avec protection 3 couches",
        ja: "3層保護の高品質使い捨てフェイスマスク",
        zh: "具有3层保护的高质量一次性口罩",
        pt: "Máscaras faciais descartáveis de alta qualidade com proteção de 3 camadas"
      }),
      category: "Masks"
    },
    {
      name: getLocalizedContent("N95 Respirator Masks", {
        de: "N95-Atemschutzmasken",
        fr: "Masques respiratoires N95",
        ja: "N95呼吸器マスク",
        zh: "N95呼吸器口罩",
        pt: "Máscaras Respiratórias N95"
          }),
          image: "/products/n95-box.png",
      description: getLocalizedContent("Premium N95 masks for superior respiratory protection", {
        de: "Premium N95-Masken für überlegenen Atemschutz",
        fr: "Masques N95 premium pour une protection respiratoire supérieure",
        ja: "優れた呼吸保護のためのプレミアムN95マスク",
        zh: "用于卓越呼吸保护的优质N95口罩",
        pt: "Máscaras N95 premium para proteção respiratória superior"
      }),
      category: "Masks"
    },
    {
      name: getLocalizedContent("Surgical Caps", {
        de: "Chirurgische Hauben",
        fr: "Bonnets chirurgicaux",
        ja: "手術帽",
        zh: "手术帽",
        pt: "Gorros Cirúrgicos"
      }),
      image: "/products/cap-box.jpg",
      description: getLocalizedContent("Comfortable and breathable surgical caps for medical professionals", {
        de: "Bequeme und atmungsaktive chirurgische Hauben für medizinisches Fachpersonal",
        fr: "Bonnets chirurgicaux confortables et respirants pour les professionnels de santé",
        ja: "医療従事者のための快適で通気性の良い手術帽",
        zh: "为医疗专业人员提供舒适透气的手术帽",
        pt: "Gorros cirúrgicos confortáveis e respiráveis para profissionais médicos"
      }),
      category: "Headwear"
    },
    {
      name: getLocalizedContent("Shoe Covers", {
        de: "Schuhüberzieher",
        fr: "Couvre-chaussures",
        ja: "靴カバー",
        zh: "鞋套",
        pt: "Protetores de Sapatos"
      }),
      image: "/products/Shoe Cover Box Pack.jpg",
      description: getLocalizedContent("Disposable shoe covers for maintaining sterile environments", {
        de: "Einweg-Schuhüberzieher zur Aufrechterhaltung steriler Umgebungen",
        fr: "Couvre-chaussures jetables pour maintenir des environnements stériles",
        ja: "無菌環境を維持するための使い捨て靴カバー",
        zh: "用于维持无菌环境的一次性鞋套",
        pt: "Protetores de sapatos descartáveis para manter ambientes estéreis"
      }),
      category: "Protection"
    },
    {
      name: getLocalizedContent("Disposable Razors", {
        de: "Einwegrasierer",
        fr: "Rasoirs jetables",
        ja: "使い捨てカミソリ",
        zh: "一次性剃刀",
        pt: "Lâminas Descartáveis"
      }),
      image: "/products/razor.png",
      description: getLocalizedContent("Medical-grade disposable razors for surgical preparation", {
        de: "Medizinische Einwegrasierer für die chirurgische Vorbereitung",
        fr: "Rasoirs jetables de qualité médicale pour la préparation chirurgicale",
        ja: "手術準備のための医療グレード使い捨てカミソリ",
        zh: "用于手术准备的医疗级一次性剃刀",
        pt: "Lâminas descartáveis de grau médico para preparação cirúrgica"
      }),
      category: "Surgical"
    },
    {
      name: getLocalizedContent("Premium OT Kit", {
        de: "Premium OP-Kit",
        fr: "Kit de bloc opératoire premium",
        ja: "プレミアム手術室キット",
        zh: "高级手术室套件",
        pt: "Kit de Centro Cirúrgico Premium"
      }),
      image: "/products/OT Premium Kit Product Pics.png",
      description: getLocalizedContent("Complete operating theater kit with all essential items", {
        de: "Komplettes Operationssaal-Kit mit allen wichtigen Artikeln",
        fr: "Kit de bloc opératoire complet avec tous les articles essentiels",
        ja: "すべての必需品を含む完全な手術室キット",
        zh: "包含所有必需品的完整手术室套件",
        pt: "Kit completo de centro cirúrgico com todos os itens essenciais"
      }),
      category: "Kits"
    }
  ];

  // Auto-rotate products in carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 4000); // Change product every 4 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentProductIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F4679] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#158C07] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-5">
            <div className="absolute -left-2 -top-2 w-20 h-8 bg-gradient-to-br from-[#158C07]/40 to-[#0F4679]/40 rounded-full blur-lg"></div>
            <span className="relative inline-block px-4 py-2 text-sm uppercase tracking-wider font-semibold bg-white backdrop-blur-sm rounded-full border-l-4 border-[#158C07] text-black shadow-lg">
              {productsText}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight">
            <span className="relative">
              {discoverTitle.split(' ').slice(0, 2).join(' ')}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0F4679] to-transparent"></span>
            </span>
            {' '}
            <span className="bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">
              {discoverTitle.split(' ').slice(2).join(' ')}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {exploreDescription}
          </p>
        </div>

        {/* Video Showcase */}
        <VideoShowcase />

        {/* Product Carousel */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-4xl mx-auto">
            {/* Featured Product Display */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product Image */}
            <div className="text-center">
                  <div className="relative w-64 h-64 mx-auto mb-4">
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#0F4679]/10 text-[#0F4679] text-sm font-medium rounded-full">
                    {currentProduct.category}
                  </div>
                </div>

                {/* Product Details */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {currentProduct.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {currentProduct.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center px-6 py-3 bg-[#0F4679] text-white font-semibold rounded-xl hover:bg-[#0D3C6B] transform hover:scale-105 transition-all duration-300 group"
                  >
                    View Product Details
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentProductIndex
                      ? 'bg-[#0F4679] w-8'
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group bg-white border-2 border-[#0F4679] text-[#0F4679] hover:bg-[#0F4679] hover:text-white"
              >
                {exploreAllProductsText}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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