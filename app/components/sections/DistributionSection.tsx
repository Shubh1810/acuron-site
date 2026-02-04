'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';

export default function DistributionSection() {
  const { selectedCountry } = useCountryStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  // Localization Helper
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) return englishText;
    return translations[selectedCountry.language] || englishText;
  };

  const content = {
    title: getLocalizedContent('Our Distribution Network', {
      de: 'Unser Vertriebsnetz',
      fr: 'Notre Réseau de Distribution',
      ja: '配送ネットワーク',
      zh: '我们的分销网络',
      pt: 'Nossa Rede de Distribuição'
    }),
    subtitle: getLocalizedContent(
      'Delivering quality medical supplies across India with strategic distribution centers ensuring nationwide coverage and timely delivery.',
      {
        de: 'Lieferung hochwertiger medizinischer Hilfsmittel in ganz Indien mit strategischen Vertriebszentren.',
        fr: 'Livraison de fournitures médicales de qualité dans toute l\'Inde avec des centres de distribution stratégiques.',
        ja: 'インド全土で品質の高い医療用品を配送し、戦略的な配送センターで全国カバレッジを確保しています。',
        zh: '通过战略分销中心在印度全国提供优质医疗用品，确保全国覆盖和及时交付。',
        pt: 'Entregando suprimentos médicos de qualidade em toda a Índia com centros de distribuição estratégicos.'
      }
    )
  };

  const metrics = [
    {
      value: getLocalizedContent('28+', { de: '28+', fr: '28+', ja: '28+', zh: '28+', pt: '28+' }),
      label: getLocalizedContent('States Covered', { de: 'Abgedeckte Staaten', fr: 'États Couverts', ja: 'カバー州', zh: '覆盖州', pt: 'Estados' }),
      height: 'h-36 md:h-40'
    },
    {
      value: getLocalizedContent('500+', { de: '500+', fr: '500+', ja: '500+', zh: '500+', pt: '500+' }),
      label: getLocalizedContent('Healthcare Partners', { de: 'Gesundheitspartner', fr: 'Partenaires Santé', ja: 'パートナー', zh: '医疗合作伙伴', pt: 'Parceiros' }),
      height: 'h-44 md:h-48'
    },
    {
      value: getLocalizedContent('50+', {}),
      label: getLocalizedContent('Logistics Partners', { de: 'Logistikpartner', fr: 'Partenaires Logistiques', ja: '物流パートナー', zh: '物流合作伙伴', pt: 'Logística' }),
      height: 'h-40 md:h-44'
    }
  ];

  const features = [
    {
      title: getLocalizedContent('Hospital Networks', { de: 'Krankenhaus-Netzwerke', fr: 'Réseaux Hospitaliers', ja: '病院ネットワーク', zh: '医院网络', pt: 'Redes Hospitalares' }),
      desc: getLocalizedContent('Direct partnerships with major healthcare institutions', { de: 'Direkte Partnerschaften', fr: 'Partenariats directs', ja: '主要医療機関との提携', zh: '与主要医疗机构的合作', pt: 'Parcerias diretas' })
    },
    {
      title: getLocalizedContent('Express Delivery', { de: 'Express-Lieferung', fr: 'Livraison Express', ja: 'エクスプレス配送', zh: '快递配送', pt: 'Entrega Expressa' }),
      desc: getLocalizedContent('Fast and reliable supply chain management', { de: 'Schnelle Lieferkette', fr: 'Chaîne d\'approvisionnement rapide', ja: '迅速なサプライチェーン', zh: '快速供应链管理', pt: 'Gestão rápida' })
    },
    {
      title: getLocalizedContent('Quality Assurance', { de: 'Qualitätssicherung', fr: 'Assurance Qualité', ja: '品質保証', zh: '质量保证', pt: 'Garantia de Qualidade' }),
      desc: getLocalizedContent('ISO-certified products with temperature-controlled logistics', { de: 'ISO-zertifizierte Produkte', fr: 'Produits certifiés ISO', ja: 'ISO認定製品', zh: 'ISO认证产品', pt: 'Produtos certificados ISO' })
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen max-h-screen flex flex-col justify-center py-10 md:py-14 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 min-h-0 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* LEFT: Map - viewport-relative so it scales */}
          <div
            className={`relative w-full h-[min(52vh,460px)] lg:h-[min(60vh,580px)] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Image
              src="/mapog.png"
              alt="India Distribution Map"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* RIGHT: Heading + Metrics + Features */}
          <div className="flex flex-col justify-center">
            <div className={`-mb-4 md:-mb-8 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="lato-regular section-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight mb-2">
                {content.title}
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
                {content.subtitle}
              </p>
            </div>

            {/* Metrics bars - taller */}
            <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 h-[260px] md:h-[300px]">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex-1 min-w-0 border-2 border-[#0a2540] bg-white flex flex-col justify-end p-4 md:p-5 transition-all duration-500 ease-out group hover:bg-[#0a2540] hover:text-white hover:border-[#0a2540] ${metric.height} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${150 + idx * 80}ms` }}
                >
                  <span className="block text-2xl md:text-3xl font-bold tracking-tight text-[#0a2540] group-hover:text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#0a2540]/90 group-hover:text-white/90">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 80}ms` }}
                >
                  <h3 className="text-base md:text-lg font-bold text-[#0a2540] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#0a2540] rounded-full shrink-0" />
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug pl-4 border-l-2 border-[#0a2540]/30">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}