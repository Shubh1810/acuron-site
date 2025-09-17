'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';

export default function DistributionSection() {
  const { selectedCountry } = useCountryStore();
  const distributionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (distributionRef.current) {
      observer.observe(distributionRef.current);
    }

    return () => {
      if (distributionRef.current) {
        observer.unobserve(distributionRef.current);
      }
    };
  }, []);

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const distributionTitle = getLocalizedContent('Our Distribution Network', {
    de: 'Unser Vertriebsnetz',
    fr: 'Notre Réseau de Distribution',
    ja: '配送ネットワーク',
    zh: '我们的分销网络',
    pt: 'Nossa Rede de Distribuição'
  });

  const distributionSubtitle = getLocalizedContent(
    'Delivering quality medical supplies across India with strategic distribution centers ensuring nationwide coverage and timely delivery.',
    {
      de: 'Lieferung hochwertiger medizinischer Hilfsmittel in ganz Indien mit strategischen Vertriebszentren für landesweite Abdeckung und pünktliche Lieferung.',
      fr: 'Livraison de fournitures médicales de qualité dans toute l\'Inde avec des centres de distribution stratégiques assurant une couverture nationale et une livraison rapide.',
      ja: 'インド全土で品質の高い医療用品を配送し、戦略的な配送センターで全国カバレッジと迅速な配送を確保しています。',
      zh: '通过战略分销中心在印度全国提供优质医疗用品，确保全国覆盖和及时交付。',
      pt: 'Entregando suprimentos médicos de qualidade em toda a Índia com centros de distribuição estratégicos garantindo cobertura nacional e entrega pontual.'
    }
  );

  const keyStats = [
    {
      number: getLocalizedContent('28+', { de: '28+', fr: '28+', ja: '28+', zh: '28+', pt: '28+' }),
      label: getLocalizedContent('States Covered', {
        de: 'Abgedeckte Bundesstaaten',
        fr: 'États Couverts',
        ja: 'カバー州',
        zh: '覆盖州',
        pt: 'Estados Cobertos'
      })
    },
    {
      number: getLocalizedContent('500+', { de: '500+', fr: '500+', ja: '500+', zh: '500+', pt: '500+' }),
      label: getLocalizedContent('Healthcare Partners', {
        de: 'Gesundheitspartner',
        fr: 'Partenaires de Santé',
        ja: 'ヘルスケアパートナー',
        zh: '医疗合作伙伴',
        pt: 'Parceiros de Saúde'
      })
    },
    {
      number: getLocalizedContent('24/7', { de: '24/7', fr: '24/7', ja: '24/7', zh: '24/7', pt: '24/7' }),
      label: getLocalizedContent('Supply Support', {
        de: 'Versorgungsunterstützung',
        fr: 'Support d\'Approvisionnement',
        ja: 'サプライサポート',
        zh: '供应支持',
        pt: 'Suporte de Suprimentos'
      })
    }
  ];

  // City markers positioned in percentage relative to the map container
  // Positions adjusted to match the provided India map image
  const cityMarkers: Array<{ name: string; x: number; y: number }> = [
    { name: 'Delhi', x: 47, y: 24 },
    { name: 'Mumbai', x: 28, y: 50 },
    { name: 'Bengaluru', x: 38, y: 72 },
    { name: 'Chennai', x: 48, y: 75 },
    { name: 'Kolkata', x: 70, y: 42 },
    { name: 'Hyderabad', x: 43, y: 62 },
    { name: 'Ahmedabad', x: 26, y: 42 },
    { name: 'Pune', x: 32, y: 58 },
    { name: 'Jaipur', x: 38, y: 32 },
    { name: 'Guwahati', x: 82, y: 32 }
  ];

  // Connection lines between major cities
  const connections: Array<{ from: number; to: number }> = [
    { from: 0, to: 1 }, // Delhi to Mumbai
    { from: 0, to: 4 }, // Delhi to Kolkata
    { from: 0, to: 8 }, // Delhi to Jaipur
    { from: 1, to: 2 }, // Mumbai to Bengaluru
    { from: 1, to: 7 }, // Mumbai to Pune
    { from: 2, to: 3 }, // Bengaluru to Chennai
    { from: 2, to: 5 }, // Bengaluru to Hyderabad
    { from: 4, to: 9 }, // Kolkata to Guwahati
    { from: 6, to: 8 }, // Ahmedabad to Jaipur
    { from: 5, to: 3 }  // Hyderabad to Chennai
  ];

  return (
    <section className="py-12 px-6 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={distributionRef}
          className={`mb-12 transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
          }}
        >
          <div className="flex justify-start">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight">
                {distributionTitle}
              </h2>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              {distributionSubtitle}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* India Map - Clean, minimal */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
            style={{
              transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
            }}
          >
            <div className="relative w-full h-[350px] lg:h-[400px] group">
              <Image
                src="/indiamap.webp"
                alt="India Distribution Network"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                priority
              />
              {/* Connection lines overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {connections.map((connection, index) => {
                    const fromCity = cityMarkers[connection.from];
                    const toCity = cityMarkers[connection.to];
                    return (
                      <line
                        key={index}
                        x1={fromCity.x}
                        y1={fromCity.y}
                        x2={toCity.x}
                        y2={toCity.y}
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="0.2"
                        strokeDasharray="1,1"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* City markers overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {cityMarkers.map((city, index) => (
                  <div
                    key={city.name}
                    className="absolute pointer-events-none"
                    style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* Ping ring */}
                    <span className="absolute -inset-2 rounded-full bg-white/30 animate-ping" />
                    {/* Core dot with glow */}
                    <span className="relative block w-3 h-3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)] border border-white/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics - Compact & Clean */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
            style={{
              transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
            }}
          >
            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {keyStats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-500 delay-${400 + index * 100} hover:bg-gray-100 hover:border-blue-300 hover:scale-105 group ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features - Simplified */}
            <div className="space-y-3">
              {[
                {
                  title: getLocalizedContent('Hospital Networks', {
                    de: 'Krankenhaus-Netzwerke',
                    fr: 'Réseaux Hospitaliers',
                    ja: '病院ネットワーク',
                    zh: '医院网络',
                    pt: 'Redes Hospitalares'
                  }),
                  desc: getLocalizedContent('Direct partnerships with major healthcare institutions', {
                    de: 'Direkte Partnerschaften mit großen Gesundheitseinrichtungen',
                    fr: 'Partenariats directs avec de grandes institutions de santé',
                    ja: '主要医療機関との直接パートナーシップ',
                    zh: '与主要医疗机构的直接合作伙伴关系',
                    pt: 'Parcerias diretas com grandes instituições de saúde'
                  })
                },
                {
                  title: getLocalizedContent('Express Delivery', {
                    de: 'Express-Lieferung',
                    fr: 'Livraison Express',
                    ja: 'エクスプレス配送',
                    zh: '快递配送',
                    pt: 'Entrega Expressa'
                  }),
                  desc: getLocalizedContent('Fast and reliable supply chain management', {
                    de: 'Schnelle und zuverlässige Lieferkettenführung',
                    fr: 'Gestion de chaîne d\'approvisionnement rapide et fiable',
                    ja: '迅速で信頼性の高いサプライチェーン管理',
                    zh: '快速可靠的供应链管理',
                    pt: 'Gestão de cadeia de suprimentos rápida e confiável'
                  })
                },
                {
                  title: getLocalizedContent('Quality Assurance', {
                    de: 'Qualitätssicherung',
                    fr: 'Assurance Qualité',
                    ja: '品質保証',
                    zh: '质量保证',
                    pt: 'Garantia de Qualidade'
                  }),
                  desc: getLocalizedContent('ISO-certified products with temperature-controlled logistics', {
                    de: 'ISO-zertifizierte Produkte mit temperaturkontrollierter Logistik',
                    fr: 'Produits certifiés ISO avec logistique à température contrôlée',
                    ja: 'ISO認定製品と温度管理ロジスティクス',
                    zh: 'ISO认证产品，温控物流',
                    pt: 'Produtos certificados ISO com logística com controle de temperatura'
                  })
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 p-3 rounded-lg bg-gray-50/50 border-l-3 border-blue-500 transition-all duration-500 delay-${500 + index * 100} hover:bg-gray-100/50 hover:border-blue-600 group ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
