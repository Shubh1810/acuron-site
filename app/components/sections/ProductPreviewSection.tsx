'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCountryStore } from '../../../lib/store';

export default function ProductPreviewSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const productsText = getLocalizedContent('PRODUCTS', {
    de: 'PRODUKTE',
    fr: 'PRODUITS',
    ja: '製品',
    zh: '产品',
    pt: 'PRODUTOS'
  });

  const discoverTitle = getLocalizedContent('Discover Our Medical Solutions', {
    de: 'Entdecken Sie unsere medizinischen Lösungen',
    fr: 'Découvrez nos solutions médicales',
    ja: '私たちの医療ソリューションを発見',
    zh: '发现我们的医疗解决方案',
    pt: 'Descubra nossas soluções médicas'
  });

  const exploreDescription = getLocalizedContent(
    'Explore our comprehensive range of surgical wear, PPE equipment, and medical supplies trusted by healthcare professionals worldwide.',
    {
      de: 'Entdecken Sie unser umfassendes Sortiment an chirurgischer Kleidung, PSA-Ausrüstung und medizinischen Hilfsmitteln, denen Gesundheitsfachkräfte weltweit vertrauen.',
      fr: 'Explorez notre gamme complète de vêtements chirurgicaux, d\'équipements EPI et de fournitures médicales auxquels font confiance les professionnels de la santé du monde entier.',
      ja: '世界中の医療従事者に信頼されている外科用ウェア、PPE機器、医療用品の包括的な範囲をご覧ください。',
      zh: '探索我们全面的外科服装、个人防护设备和医疗用品系列，受到全球医疗保健专业人员的信赖。',
      pt: 'Explore nossa gama abrangente de roupas cirúrgicas, equipamentos de EPI e suprimentos médicos confiáveis por profissionais de saúde em todo o mundo.'
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

  const availableInCategoryText = getLocalizedContent('Available in this category', {
    de: 'Verfügbar in dieser Kategorie',
    fr: 'Disponible dans cette catégorie',
    ja: 'このカテゴリで利用可能',
    zh: '此类别中可用',
    pt: 'Disponível nesta categoria'
  });

  // Product categories with rotating products
  const getProductCategories = () => [
    {
      name: getLocalizedContent("Surgical Wear", {
        de: "Chirurgische Kleidung",
        fr: "Vêtements chirurgicaux",
        ja: "外科用ウェア",
        zh: "外科服装",
        pt: "Roupas Cirúrgicas"
      }),
      description: getLocalizedContent("Premium surgical gowns, drapes, and protective clothing", {
        de: "Premium-Operationskittel, Abdeckungen und Schutzkleidung",
        fr: "Blouses chirurgicales, draps et vêtements de protection haut de gamme",
        ja: "プレミアム手術用ガウン、ドレープ、保護服",
        zh: "优质手术服、手术巾和防护服",
        pt: "Aventais cirúrgicos premium, campos e roupas de proteção"
      }),
      color: "from-[#0F4679] to-[#1E5A8D]",
      accentColor: "text-blue-300",
      count: getLocalizedContent("45+ Products", {
        de: "45+ Produkte",
        fr: "45+ Produits",
        ja: "45+製品",
        zh: "45+产品",
        pt: "45+ Produtos"
      }),
      products: [
        {
          name: getLocalizedContent("Surgical Gowns", {
            de: "Operationskittel",
            fr: "Blouses chirurgicales",
            ja: "手術用ガウン",
            zh: "手术服",
            pt: "Aventais Cirúrgicos"
          }),
          image: "/products/Product Pics Aug 27 2020.jpeg",
          description: getLocalizedContent("Sterile, fluid-resistant surgical gowns", {
            de: "Sterile, flüssigkeitsresistente Operationskittel",
            fr: "Blouses chirurgicales stériles et résistantes aux fluides",
            ja: "無菌、液体耐性手術用ガウン",
            zh: "无菌、防液体手术服",
            pt: "Aventais cirúrgicos estéreis e resistentes a fluidos"
          })
        },
        {
          name: getLocalizedContent("Surgical Drapes", {
            de: "Chirurgische Abdeckungen",
            fr: "Draps chirurgicaux",
            ja: "手術用ドレープ",
            zh: "手术巾",
            pt: "Campos Cirúrgicos"
          }),
          image: "/products/Product Pics July 3 2020 (5).jpg",
          description: getLocalizedContent("SMS surgical drapes for all procedures", {
            de: "SMS-Operationsabdeckungen für alle Eingriffe",
            fr: "Draps chirurgicaux SMS pour toutes les procédures",
            ja: "すべての手術用SMSドレープ",
            zh: "适用于所有手术的SMS手术巾",
            pt: "Campos cirúrgicos SMS para todos os procedimentos"
          })
        },
        {
          name: getLocalizedContent("Surgical Razors", {
            de: "Chirurgische Rasierer",
            fr: "Rasoirs chirurgicaux",
            ja: "手術用カミソリ",
            zh: "手术剃刀",
            pt: "Lâminas Cirúrgicas"
          }),
          image: "/products/razor.png",
          description: getLocalizedContent("Precision surgical prep razors", {
            de: "Präzisions-Operationsvorbereitungsrasierer",
            fr: "Rasoirs de préparation chirurgicale de précision",
            ja: "精密手術準備用カミソリ",
            zh: "精密手术准备剃刀",
            pt: "Lâminas de preparação cirúrgica de precisão"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("PPE", {
        de: "PSA",
        fr: "EPI",
        ja: "PPE",
        zh: "个人防护设备",
        pt: "EPI"
      }),
      description: getLocalizedContent("Complete range of personal protective equipment", {
        de: "Komplettes Sortiment an persönlicher Schutzausrüstung",
        fr: "Gamme complète d'équipements de protection individuelle",
        ja: "個人用保護具の完全な範囲",
        zh: "完整的个人防护设备系列",
        pt: "Gama completa de equipamentos de proteção individual"
      }),
      color: "from-[#158C07] to-[#0FB36D]",
      accentColor: "text-green-300",
      count: getLocalizedContent("60+ Products", {
        de: "60+ Produkte",
        fr: "60+ Produits",
        ja: "60+製品",
        zh: "60+产品",
        pt: "60+ Produtos"
      }),
      products: [
        {
          name: getLocalizedContent("3-Ply Masks", {
            de: "3-lagige Masken",
            fr: "Masques 3 plis",
            ja: "3層マスク",
            zh: "三层口罩",
            pt: "Máscaras 3 Camadas"
          }),
          image: "/products/3ply-pack.png",
          description: getLocalizedContent("High-quality 3-ply medical face masks", {
            de: "Hochwertige 3-lagige medizinische Gesichtsmasken",
            fr: "Masques médicaux 3 plis de haute qualité",
            ja: "高品質3層医療用フェイスマスク",
            zh: "高质量三层医用口罩",
            pt: "Máscaras faciais médicas de 3 camadas de alta qualidade"
          })
        },
        {
          name: getLocalizedContent("N95 Masks", {
            de: "N95-Masken",
            fr: "Masques N95",
            ja: "N95マスク",
            zh: "N95口罩",
            pt: "Máscaras N95"
          }),
          image: "/products/n95-box.png",
          description: getLocalizedContent("NIOSH-approved N95 respirators", {
            de: "NIOSH-zugelassene N95-Atemschutzmasken",
            fr: "Respirateurs N95 approuvés par NIOSH",
            ja: "NIOSH承認N95レスピレーター",
            zh: "NIOSH认证的N95呼吸器",
            pt: "Respiradores N95 aprovados pelo NIOSH"
          })
        },
        {
          name: getLocalizedContent("Medical Coveralls", {
            de: "Medizinische Overalls",
            fr: "Combinaisons médicales",
            ja: "医療用つなぎ",
            zh: "医用连体服",
            pt: "Macacões Médicos"
          }),
          image: "/products/Product Pics for Display July 3 2020 (4).jpg",
          description: getLocalizedContent("Full-body protection coveralls", {
            de: "Ganzkörper-Schutzoveralls",
            fr: "Combinaisons de protection intégrale",
            ja: "全身保護つなぎ",
            zh: "全身防护连体服",
            pt: "Macacões de proteção corporal completa"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("Medical Equipment", {
        de: "Medizinische Ausrüstung",
        fr: "Équipement médical",
        ja: "医療機器",
        zh: "医疗设备",
        pt: "Equipamento Médico"
      }),
      description: getLocalizedContent("Essential medical devices and instruments", {
        de: "Wesentliche medizinische Geräte und Instrumente",
        fr: "Dispositifs et instruments médicaux essentiels",
        ja: "必要不可欠な医療機器と器具",
        zh: "基本医疗设备和器械",
        pt: "Dispositivos e instrumentos médicos essenciais"
      }),
      color: "from-[#7C3AED] to-[#A855F7]",
      accentColor: "text-purple-300",
      count: getLocalizedContent("35+ Products", {
        de: "35+ Produkte",
        fr: "35+ Produits",
        ja: "35+製品",
        zh: "35+产品",
        pt: "35+ Produtos"
      }),
      products: [
        {
          name: getLocalizedContent("Bouffant Caps", {
            de: "Bouffant-Kappen",
            fr: "Bonnets bouffants",
            ja: "ブーファントキャップ",
            zh: "蓬松帽",
            pt: "Toucas Bouffant"
          }),
          image: "/products/cap-box.jpg",
          description: getLocalizedContent("Lightweight surgical caps", {
            de: "Leichte Operationshauben",
            fr: "Bonnets chirurgicaux légers",
            ja: "軽量手術用キャップ",
            zh: "轻便手术帽",
            pt: "Toucas cirúrgicas leves"
          })
        },
        {
          name: getLocalizedContent("Medical Gloves", {
            de: "Medizinische Handschuhe",
            fr: "Gants médicaux",
            ja: "医療用手袋",
            zh: "医用手套",
            pt: "Luvas Médicas"
          }),
          image: "/products/Product Pics July 3 2020 (7).jpg",
          description: getLocalizedContent("Powder-free examination gloves", {
            de: "Puderfreie Untersuchungshandschuhe",
            fr: "Gants d'examen sans poudre",
            ja: "パウダーフリー検査用手袋",
            zh: "无粉检查手套",
            pt: "Luvas de exame sem pó"
          })
        },
        {
          name: getLocalizedContent("Safety Goggles", {
            de: "Schutzbrille",
            fr: "Lunettes de sécurité",
            ja: "安全ゴーグル",
            zh: "安全护目镜",
            pt: "Óculos de Segurança"
          }),
          image: "/products/Product Pics for Display July 3 2020 (3).jpg",
          description: getLocalizedContent("Anti-fog protective eyewear", {
            de: "Antibeschlag-Schutzbrille",
            fr: "Lunettes de protection anti-buée",
            ja: "曇り止め保護眼鏡",
            zh: "防雾护目镜",
            pt: "Óculos de proteção antiembaçante"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("Surgical Kits", {
        de: "Chirurgische Kits",
        fr: "Kits chirurgicaux",
        ja: "手術キット",
        zh: "手术套件",
        pt: "Kits Cirúrgicos"
      }),
      description: getLocalizedContent("All-in-one medical supply solutions", {
        de: "All-in-One-Lösungen für medizinische Versorgung",
        fr: "Solutions d'approvisionnement médical tout-en-un",
        ja: "オールインワン医療用品ソリューション",
        zh: "一体化医疗用品解决方案",
        pt: "Soluções médicas tudo-em-um"
      }),
      color: "from-[#DC2626] to-[#EF4444]",
      accentColor: "text-red-300",
      count: getLocalizedContent("25+ Products", {
        de: "25+ Produkte",
        fr: "25+ Produits",
        ja: "25+製品",
        zh: "25+产品",
        pt: "25+ Produtos"
      }),
      products: [
        {
          name: getLocalizedContent("Premium PPE Kit", {
            de: "Premium-PSA-Kit",
            fr: "Kit EPI Premium",
            ja: "プレミアムPPEキット",
            zh: "高级PPE套件",
            pt: "Kit EPI Premium"
          }),
          image: "/products/OT Premium Kit Product Pics.png",
          description: getLocalizedContent("Complete protection kit", {
            de: "Komplettes Schutzkit",
            fr: "Kit de protection complet",
            ja: "完全保護キット",
            zh: "完整保护套件",
            pt: "Kit de proteção completo"
          })
        },
        {
          name: getLocalizedContent("Surgical Kit", {
            de: "Chirurgisches Kit",
            fr: "Kit chirurgical",
            ja: "手術キット",
            zh: "手术套件",
            pt: "Kit Cirúrgico"
          }),
          image: "/products/Surgeon Cap Box Pack.jpg",
          description: getLocalizedContent("Comprehensive surgical supplies", {
            de: "Umfassende chirurgische Versorgung",
            fr: "Fournitures chirurgicales complètes",
            ja: "包括的な手術用品",
            zh: "全面的手术用品",
            pt: "Suprimentos cirúrgicos abrangentes"
          })
        },
        {
          name: getLocalizedContent("Shoe Covers", {
            de: "Schuhüberzieher",
            fr: "Couvre-chaussures",
            ja: "シューズカバー",
            zh: "鞋套",
            pt: "Protetores de Sapatos"
          }),
          image: "/products/Shoe Cover Box Pack.jpg",
          description: getLocalizedContent("Disposable protective shoe covers", {
            de: "Einweg-Schutzschuhüberzieher",
            fr: "Couvre-chaussures de protection jetables",
            ja: "使い捨て保護シューズカバー",
            zh: "一次性防护鞋套",
            pt: "Protetores de sapatos descartáveis"
          })
        }
      ]
    }
  ];

  const productCategories = getProductCategories();

  // Function to get translucent glass colors for each category
  const getGlassColor = (index: number) => {
    const glassColors = [
      'from-[#0F4679]/30 to-[#1E5A8D]/30', // Surgical Wear - Blue
      'from-[#158C07]/30 to-[#0FB36D]/30', // PPE Equipment - Green  
      'from-[#7C3AED]/30 to-[#A855F7]/30', // Medical Equipment - Purple
      'from-[#DC2626]/30 to-[#EF4444]/30'  // Complete Kits - Red
    ];
    return glassColors[index];
  };

  // Auto-rotate products within active category
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => 
        (prev + 1) % productCategories[activeCategory].products.length
      );
    }, 3000); // Change product every 3 seconds

    return () => clearInterval(interval);
  }, [activeCategory, productCategories]);

  // Auto-rotate categories
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % productCategories.length);
      setCurrentProductIndex(0); // Reset product index when category changes
    }, 12000); // Change category every 12 seconds

    return () => clearInterval(categoryInterval);
  }, [productCategories]);

  const currentCategory = productCategories[activeCategory];
  const currentProduct = currentCategory.products[currentProductIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F4679] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#158C07] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -left-2 -top-2 w-20 h-8 bg-gradient-to-br from-[#158C07]/40 to-[#0F4679]/40 rounded-full blur-lg"></div>
            <span className="relative inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-white backdrop-blur-sm rounded-full mb-6 border-l-4 border-[#158C07] text-black shadow-lg">{productsText}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-6">
            {discoverTitle.split(' ').slice(0, 2).join(' ')} <span className="bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">{discoverTitle.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {exploreDescription}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setCurrentProductIndex(0);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-white text-${category.color.split(' ')[0].substring(5)} border border-${category.color.split(' ')[0].substring(5)} shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image & Info */}
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.color} rounded-3xl transform rotate-6 scale-105 opacity-10`}></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <Image
                  src={currentProduct.image}
                  alt={`${currentProduct.name} - Acuron Products surgical wear, medical supplies, 3 ply masks, N95 masks, bouffant caps`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Product badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getGlassColor(activeCategory)} backdrop-blur-md rounded-full border border-white/30 shadow-lg`}>
                    <span className="text-white text-xs font-semibold drop-shadow-sm">{currentCategory.name}</span>
                  </div>
                </div>

                {/* Product counter */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs">
                      {currentProductIndex + 1} / {currentCategory.products.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentProduct.name}</h3>
                <p className="text-gray-600 mb-4">{currentProduct.description}</p>
                
                {/* Product indicators */}
                <div className="flex space-x-2 mb-4">
                  {currentCategory.products.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentProductIndex
                          ? `bg-gradient-to-r ${currentCategory.color} w-8`
                          : 'bg-gray-200 w-2'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentCategory.name}</h3>
              <p className="text-lg text-gray-600 mb-6">{currentCategory.description}</p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className={`px-4 py-2 rounded-lg bg-white border border-${currentCategory.color.split(' ')[0].substring(5)}`}>
                  <span className={`font-semibold text-${currentCategory.color.split(' ')[0].substring(5)}`}>{currentCategory.count}</span>
                </div>
                <div className="text-gray-500">{availableInCategoryText}</div>
              </div>
            </div>

            {/* Product list */}
            <div className="space-y-4">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    index === currentProductIndex
                      ? 'border-gray-300 bg-gray-50 transform scale-102'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setCurrentProductIndex(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentCategory.color}`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/products"
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group bg-white border border-${currentCategory.color.split(' ')[0].substring(5)} text-${currentCategory.color.split(' ')[0].substring(5)}`}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0F4679] mb-2">165+</div>
            <div className="text-gray-600">{totalProductsText}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0F4679] mb-2">500+</div>
            <div className="text-gray-600">{hospitalsServedText}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#0F4679] to-[#158C07] bg-clip-text text-transparent">ISO</div>
            <div className="text-gray-600">{certifiedQualityText}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#0F4679] to-[#DC2626] bg-clip-text text-transparent">24/7</div>
            <div className="text-gray-600">{supportAvailableText}</div>
          </div>
        </div>
      </div>
    </section>
  );
}