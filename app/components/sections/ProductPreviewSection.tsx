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

  const productsText = getLocalizedContent('SPECIALIZED KITS', {
    de: 'SPEZIALKITS',
    fr: 'KITS SPÉCIALISÉS',
    ja: '専門キット',
    zh: '专业套件',
    pt: 'KITS ESPECIALIZADOS'
  });

  const discoverTitle = getLocalizedContent('Discover Our Custom Medical Kit Solutions', {
    de: 'Entdecken Sie unsere kompletten medizinischen Kit-Lösungen',
    fr: 'Découvrez nos solutions complètes de kits médicaux',
    ja: '私たちの完全な医療キットソリューションを発見',
    zh: '发现我们完整的医疗套件解决方案',
    pt: 'Descubra nossas soluções completas de kits médicos'
  });

  const exploreDescription = getLocalizedContent(
    'Explore our specialized medical kits designed for specific procedures - from PPE protection to chemotherapy safety, HIV care, and delivery room solutions.',
    {
      de: 'Entdecken Sie unsere spezialisierten medizinischen Kits für spezifische Verfahren - von PPE-Schutz bis hin zu Chemotherapie-Sicherheit, HIV-Pflege und Kreißsaal-Lösungen.',
      fr: 'Explorez nos kits médicaux spécialisés conçus pour des procédures spécifiques - de la protection EPI à la sécurité en chimiothérapie, aux soins VIH et aux solutions de salle d\'accouchement.',
      ja: '特定の手順用に設計された当社の専門医療キットをご覧ください - PPE保護から化学療法安全性、HIV治療、分娩室ソリューションまで。',
      zh: '探索我们为特定程序设计的专业医疗套件 - 从PPE防护到化疗安全、HIV护理和产房解决方案。',
      pt: 'Explore nossos kits médicos especializados projetados para procedimentos específicos - desde proteção EPI até segurança em quimioterapia, cuidados com HIV e soluções para sala de parto.'
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

  // Product categories with rotating products - Specialized Kits
  const getProductCategories = () => [
    {
      name: getLocalizedContent("PPE Kits", {
        de: "PSA-Kits",
        fr: "Kits EPI",
        ja: "PPEキット",
        zh: "PPE套件",
        pt: "Kits EPI"
      }),
      description: getLocalizedContent("Complete personal protective equipment solutions", {
        de: "Komplette Lösungen für persönliche Schutzausrüstung",
        fr: "Solutions complètes d'équipements de protection individuelle",
        ja: "完全な個人用保護具ソリューション",
        zh: "完整的个人防护设备解决方案",
        pt: "Soluções completas de equipamentos de proteção individual"
      }),
      color: "from-[#0F4679] to-[#1E5A8D]",
      accentColor: "text-blue-300",
      count: getLocalizedContent("15+ Kits", {
        de: "15+ Kits",
        fr: "15+ Kits",
        ja: "15+キット",
        zh: "15+套件",
        pt: "15+ Kits"
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
          description: getLocalizedContent("Complete protection with gown, mask, gloves, and face shield", {
            de: "Vollständiger Schutz mit Kittel, Maske, Handschuhen und Gesichtsschutz",
            fr: "Protection complète avec blouse, masque, gants et visière",
            ja: "ガウン、マスク、手袋、フェイスシールドによる完全保護",
            zh: "带有手术服、口罩、手套和面罩的完整保护",
            pt: "Proteção completa com avental, máscara, luvas e protetor facial"
          })
        },
        {
          name: getLocalizedContent("Basic PPE Kit", {
            de: "Basis-PSA-Kit",
            fr: "Kit EPI Basique",
            ja: "ベーシックPPEキット",
            zh: "基础PPE套件",
            pt: "Kit EPI Básico"
          }),
          image: "/products/3ply-pack.png",
          description: getLocalizedContent("Essential protection kit with mask and gloves", {
            de: "Wesentliches Schutzkit mit Maske und Handschuhen",
            fr: "Kit de protection essentiel avec masque et gants",
            ja: "マスクと手袋による基本保護キット",
            zh: "带有口罩和手套的基本防护套件",
            pt: "Kit de proteção essencial com máscara e luvas"
          })
        },
        {
          name: getLocalizedContent("N95 Protection Kit", {
            de: "N95-Schutzkit",
            fr: "Kit de Protection N95",
            ja: "N95保護キット",
            zh: "N95防护套件",
            pt: "Kit de Proteção N95"
          }),
          image: "/products/n95-box.png",
          description: getLocalizedContent("High-filtration respiratory protection kit", {
            de: "Hochfiltrierendes Atemschutzkit",
            fr: "Kit de protection respiratoire haute filtration",
            ja: "高濾過呼吸保護キット",
            zh: "高过滤呼吸防护套件",
            pt: "Kit de proteção respiratória de alta filtração"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("HIV/AIDS Kits", {
        de: "HIV/AIDS-Kits",
        fr: "Kits VIH/SIDA",
        ja: "HIV/AIDSキット",
        zh: "HIV/AIDS套件",
        pt: "Kits HIV/AIDS"
      }),
      description: getLocalizedContent("Specialized protection for HIV/AIDS care procedures", {
        de: "Spezialisierter Schutz für HIV/AIDS-Pflegeverfahren",
        fr: "Protection spécialisée pour les procédures de soins VIH/SIDA",
        ja: "HIV/AIDS治療手順の専門保護",
        zh: "HIV/AIDS护理程序的专业保护",
        pt: "Proteção especializada para procedimentos de cuidados com HIV/AIDS"
      }),
      color: "from-[#158C07] to-[#0FB36D]",
      accentColor: "text-green-300",
      count: getLocalizedContent("8+ Kits", {
        de: "8+ Kits",
        fr: "8+ Kits",
        ja: "8+キット",
        zh: "8+套件",
        pt: "8+ Kits"
      }),
      products: [
        {
          name: getLocalizedContent("HIV Care Protection Kit", {
            de: "HIV-Pflege-Schutzkit",
            fr: "Kit de Protection Soins VIH",
            ja: "HIV治療保護キット",
            zh: "HIV护理保护套件",
            pt: "Kit de Proteção para Cuidados HIV"
          }),
          image: "/products/Product Pics for Display July 3 2020 (4).jpg",
          description: getLocalizedContent("Enhanced protection for HIV patient care", {
            de: "Verstärkter Schutz für die HIV-Patientenversorgung",
            fr: "Protection renforcée pour les soins aux patients VIH",
            ja: "HIV患者ケアの強化された保護",
            zh: "HIV患者护理的增强保护",
            pt: "Proteção aprimorada para cuidados de pacientes HIV"
          })
        },
        {
          name: getLocalizedContent("Blood Safety Kit", {
            de: "Blutsicherheitskit",
            fr: "Kit de Sécurité Sanguine",
            ja: "血液安全キット",
            zh: "血液安全套件",
            pt: "Kit de Segurança Sanguínea"
          }),
          image: "/products/Product Pics July 3 2020 (7).jpg",
          description: getLocalizedContent("Specialized protection for blood handling procedures", {
            de: "Spezialisierter Schutz für Bluthandhabungsverfahren",
            fr: "Protection spécialisée pour les procédures de manipulation du sang",
            ja: "血液取扱手順の専門保護",
            zh: "血液处理程序的专业保护",
            pt: "Proteção especializada para procedimentos de manuseio de sangue"
          })
        },
        {
          name: getLocalizedContent("Infectious Disease Kit", {
            de: "Infektionskrankheiten-Kit",
            fr: "Kit Maladies Infectieuses",
            ja: "感染症キット",
            zh: "传染病套件",
            pt: "Kit de Doenças Infecciosas"
          }),
          image: "/products/Product Pics for Display July 3 2020 (3).jpg",
          description: getLocalizedContent("Comprehensive protection against infectious diseases", {
            de: "Umfassender Schutz gegen Infektionskrankheiten",
            fr: "Protection complète contre les maladies infectieuses",
            ja: "感染症に対する包括的保護",
            zh: "针对传染病的全面保护",
            pt: "Proteção abrangente contra doenças infecciosas"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("Chemo Kits", {
        de: "Chemo-Kits",
        fr: "Kits Chimio",
        ja: "化学療法キット",
        zh: "化疗套件",
        pt: "Kits Quimio"
      }),
      description: getLocalizedContent("Specialized protection for chemotherapy procedures", {
        de: "Spezialisierter Schutz für Chemotherapie-Verfahren",
        fr: "Protection spécialisée pour les procédures de chimiothérapie",
        ja: "化学療法手順の専門保護",
        zh: "化疗程序的专业保护",
        pt: "Proteção especializada para procedimentos de quimioterapia"
      }),
      color: "from-[#7C3AED] to-[#A855F7]",
      accentColor: "text-purple-300",
      count: getLocalizedContent("12+ Kits", {
        de: "12+ Kits",
        fr: "12+ Kits",
        ja: "12+キット",
        zh: "12+套件",
        pt: "12+ Kits"
      }),
      products: [
        {
          name: getLocalizedContent("Chemotherapy Protection Kit", {
            de: "Chemotherapie-Schutzkit",
            fr: "Kit de Protection Chimiothérapie",
            ja: "化学療法保護キット",
            zh: "化疗保护套件",
            pt: "Kit de Proteção Quimioterapia"
          }),
          image: "/products/Product Pics Aug 27 2020.jpeg",
          description: getLocalizedContent("Specialized gowns and gloves for chemo handling", {
            de: "Spezialisierte Kittel und Handschuhe für Chemo-Handhabung",
            fr: "Blouses et gants spécialisés pour la manipulation de chimio",
            ja: "化学療法取扱いの専門ガウンと手袋",
            zh: "用于化疗处理的专业手术服和手套",
            pt: "Aventais e luvas especializados para manuseio de quimio"
          })
        },
        {
          name: getLocalizedContent("Cytotoxic Drug Kit", {
            de: "Zytotoxisches Medikamenten-Kit",
            fr: "Kit Médicaments Cytotoxiques",
            ja: "細胞毒性薬物キット",
            zh: "细胞毒性药物套件",
            pt: "Kit de Drogas Citotóxicas"
          }),
          image: "/products/cap-box.jpg",
          description: getLocalizedContent("Complete protection for cytotoxic drug preparation", {
            de: "Vollständiger Schutz für die Zubereitung zytotoxischer Medikamente",
            fr: "Protection complète pour la préparation de médicaments cytotoxiques",
            ja: "細胞毒性薬物調製の完全保護",
            zh: "细胞毒性药物制备的完整保护",
            pt: "Proteção completa para preparação de drogas citotóxicas"
          })
        },
        {
          name: getLocalizedContent("Oncology Care Kit", {
            de: "Onkologie-Pflegekit",
            fr: "Kit de Soins Oncologiques",
            ja: "腫瘍ケアキット",
            zh: "肿瘤护理套件",
            pt: "Kit de Cuidados Oncológicos"
          }),
          image: "/products/Product Pics July 3 2020 (5).jpg",
          description: getLocalizedContent("Comprehensive protection for oncology procedures", {
            de: "Umfassender Schutz für onkologische Verfahren",
            fr: "Protection complète pour les procédures oncologiques",
            ja: "腫瘍学手順の包括的保護",
            zh: "肿瘤学程序的全面保护",
            pt: "Proteção abrangente para procedimentos oncológicos"
          })
        }
      ]
    },
    {
      name: getLocalizedContent("Delivery Kits", {
        de: "Entbindungs-Kits",
        fr: "Kits d'Accouchement",
        ja: "分娩キット",
        zh: "分娩套件",
        pt: "Kits de Parto"
      }),
      description: getLocalizedContent("Complete sterile solutions for delivery procedures", {
        de: "Vollständige sterile Lösungen für Entbindungsverfahren",
        fr: "Solutions stériles complètes pour les procédures d'accouchement",
        ja: "分娩手順の完全無菌ソリューション",
        zh: "分娩程序的完整无菌解决方案",
        pt: "Soluções estéreis completas para procedimentos de parto"
      }),
      color: "from-[#DC2626] to-[#EF4444]",
      accentColor: "text-red-300",
      count: getLocalizedContent("10+ Kits", {
        de: "10+ Kits",
        fr: "10+ Kits",
        ja: "10+キット",
        zh: "10+套件",
        pt: "10+ Kits"
      }),
      products: [
        {
          name: getLocalizedContent("Maternity Delivery Kit", {
            de: "Geburtshilfe-Kit",
            fr: "Kit d'Accouchement Maternité",
            ja: "産科分娩キット",
            zh: "产科分娩套件",
            pt: "Kit de Parto Maternidade"
          }),
          image: "/products/Surgeon Cap Box Pack.jpg",
          description: getLocalizedContent("Complete sterile kit for normal delivery", {
            de: "Vollständiges steriles Kit für normale Entbindung",
            fr: "Kit stérile complet pour accouchement normal",
            ja: "正常分娩用完全無菌キット",
            zh: "正常分娩的完整无菌套件",
            pt: "Kit estéril completo para parto normal"
          })
        },
        {
          name: getLocalizedContent("C-Section Kit", {
            de: "Kaiserschnitt-Kit",
            fr: "Kit Césarienne",
            ja: "帝王切開キット",
            zh: "剖腹产套件",
            pt: "Kit Cesariana"
          }),
          image: "/products/razor.png",
          description: getLocalizedContent("Specialized surgical kit for cesarean delivery", {
            de: "Spezialisiertes chirurgisches Kit für Kaiserschnitt-Entbindung",
            fr: "Kit chirurgical spécialisé pour accouchement par césarienne",
            ja: "帝王切開分娩の専門外科キット",
            zh: "剖腹产分娩的专业手术套件",
            pt: "Kit cirúrgico especializado para parto cesariano"
          })
        },
        {
          name: getLocalizedContent("Emergency Delivery Kit", {
            de: "Notfall-Entbindungskit",
            fr: "Kit d'Accouchement d'Urgence",
            ja: "緊急分娩キット",
            zh: "紧急分娩套件",
            pt: "Kit de Parto de Emergência"
          }),
          image: "/products/Shoe Cover Box Pack.jpg",
          description: getLocalizedContent("Portable kit for emergency deliveries", {
            de: "Tragbares Kit für Notfall-Entbindungen",
            fr: "Kit portable pour accouchements d'urgence",
            ja: "緊急分娩用ポータブルキット",
            zh: "紧急分娩便携套件",
            pt: "Kit portátil para partos de emergência"
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F4679] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#158C07] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
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

        {/* Category Filter - Apple-like Design */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-0.5 sm:p-1 bg-gray-100/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-sm">
            {productCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setCurrentProductIndex(0);
                }}
                className={`relative px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl transition-all duration-300 ease-out ${
                  activeCategory === index
                    ? "text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {/* Active background */}
                {activeCategory === index && (
                  <div 
                    className="absolute inset-0 rounded-lg sm:rounded-xl shadow-sm transition-all duration-300"
                    style={{
                      background: index === 0 ? '#0F4679' : 
                                 index === 1 ? '#158C07' : 
                                 index === 2 ? '#7C3AED' : '#DC2626'
                    }}
                  />
                )}
                
                {/* Button text */}
                <span className="relative z-10 whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Product Showcase */}
        <div className="flex flex-col items-center mb-16">
          {/* Category Details */}
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {currentCategory.name}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className={`px-6 py-3 rounded-lg bg-white border-2 border-[#0F4679] shadow-sm`}>
                  <span className={`font-semibold text-[#0F4679] text-lg`}>
                    {currentCategory.count}
                  </span>
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  {availableInCategoryText}
                </div>
              </div>
            </div>

            {/* Product list - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    index === currentProductIndex
                      ? 'border-gray-300 bg-gray-50 transform scale-105 shadow-lg'
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                  }`}
                  onClick={() => setCurrentProductIndex(index)}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentCategory.color} mx-auto`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg leading-tight mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product indicators */}
            <div className="flex justify-center space-x-2 mb-8">
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

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/products"
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group bg-white border-2 border-[#0F4679] text-[#0F4679] hover:bg-[#0F4679] hover:text-white`}
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