'use client';

import { useCountryStore } from '@/lib/store';

// Mission Section Component - Professional Minimal Design (localized)

const MissionSection = () => {
  const { selectedCountry } = useCountryStore();

  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const missionTitle = getLocalizedContent('Our Mission', {
    de: 'Unsere Mission',
    fr: 'Notre mission',
    ja: '私たちの使命',
    zh: '我们的使命',
    pt: 'Nossa missão',
  });

  const missionStatement = getLocalizedContent(
    'We are committed to advancing Healthcare connecting providers with essential Medical Solutions worldwide.',
    {
      de: 'Wir setzen uns für die Weiterentwicklung der Gesundheitsversorgung ein und verbinden Anbieter weltweit mit wichtigen medizinischen Lösungen.',
      fr: 'Nous nous engageons à faire progresser les soins de santé en connectant les fournisseurs avec des solutions médicales essentielles dans le monde entier.',
      ja: '私たちは、医療提供者と世界中の必須医療ソリューションを結び、ヘルスケアの推進に取り組んでいます。',
      zh: '我们致力于推进医疗保健，将提供者与全球 essential 医疗解决方案连接起来。',
      pt: 'Estamos comprometidos em avançar a saúde, conectando provedores a soluções médicas essenciais em todo o mundo.',
    }
  );

  const innovationTitle = getLocalizedContent('Innovation Driven', {
    de: 'Innovationsgetrieben',
    fr: 'Axé sur l\'innovation',
    ja: 'イノベーション駆動',
    zh: '创新驱动',
    pt: 'Impulsionado pela inovação',
  });

  const innovationDesc = getLocalizedContent(
    'At Acuron, innovation drives our commitment to healthcare excellence. Our dedicated R&D team consistently develops cutting-edge solutions, enhancing clinical efficiency and patient safety across India and beyond.',
    {
      de: 'Bei Acuron treibt Innovation unser Engagement für Exzellenz in der Gesundheitsversorgung. Unser engagiertes F&E-Team entwickelt durchgängig zukunftsweisende Lösungen und verbessert die klinische Effizienz und Patientensicherheit in Indien und darüber hinaus.',
      fr: 'Chez Acuron, l\'innovation guide notre engagement envers l\'excellence des soins. Notre équipe R&D dédiée développe constamment des solutions de pointe, améliorant l\'efficacité clinique et la sécurité des patients en Inde et au-delà.',
      ja: 'Acuronでは、イノベーションがヘルスケアの卓越性への私たちの取り組みを推進しています。専任のR&Dチームは、インドおよびそれを超えて、臨床効率と患者の安全を高める最先端のソリューションを一貫して開発しています。',
      zh: '在Acuron，创新推动我们对医疗卓越的承诺。我们专门的研发团队持续开发尖端解决方案，提高印度及以外的临床效率和患者安全。',
      pt: 'Na Acuron, a inovação impulsiona nosso compromisso com a excelência em saúde. Nossa equipe de P&D dedicada desenvolve consistentemente soluções de ponta, aprimorando a eficiência clínica e a segurança do paciente na Índia e além.',
    }
  );

  const trustedTitle = getLocalizedContent('Trusted Nationwide', {
    de: 'Bundesweit vertrauenswürdig',
    fr: 'Une confiance nationale',
    ja: '全国で信頼',
    zh: '全国信赖',
    pt: 'Confiabilidade nacional',
  });

  const trustedDesc = getLocalizedContent(
    'Trusted by renowned hospitals and healthcare institutions nationwide, including leading public hospitals, private healthcare groups, and government medical agencies.',
    {
      de: 'Vertraut von renommierten Krankenhäusern und Gesundheitseinrichtungen im ganzen Land, einschließlich führender öffentlicher Krankenhäuser, privater Gesundheitsgruppen und staatlicher medizinischer Behörden.',
      fr: 'Approuvé par des hôpitaux et établissements de santé renommés à l\'échelle nationale, y compris les principaux hôpitaux publics, groupes de santé privés et agences médicales gouvernementales.',
      ja: '主要な公立病院、民間医療グループ、政府医療機関を含む、全国の有名な病院や医療機関から信頼されています。',
      zh: '受到全国知名医院和医疗机构信赖，包括领先的公立医院、私营医疗集团和政府医疗机构。',
      pt: 'Confiado por hospitais e instituições de saúde renomados em todo o país, incluindo principais hospitais públicos, grupos de saúde privados e agências médicas governamentais.',
    }
  );

  const certifiedTitle = getLocalizedContent('Internationally Certified', {
    de: 'International zertifiziert',
    fr: 'Certifié internationalement',
    ja: '国際認証',
    zh: '国际认证',
    pt: 'Certificado internacionalmente',
  });

  const certifiedDesc = getLocalizedContent(
    'Our rigorous adherence to international quality standards—ISO-certified, BIS-compliant, and globally recognized—ensures every Acuron® product is of unparalleled quality and reliability.',
    {
      de: 'Unsere strenge Einhaltung internationaler Qualitätsstandards – ISO-zertifiziert, BIS-konform und weltweit anerkannt – gewährleistet, dass jedes Acuron®-Produkt von unvergleichlicher Qualität und Zuverlässigkeit ist.',
      fr: 'Notre adhésion rigoureuse aux normes de qualité internationales—certifié ISO, conforme BIS et reconnu mondialement—garantit que chaque produit Acuron® est d\'une qualité et d\'une fiabilité inégalées.',
      ja: 'ISO認証、BIS準拠、世界的に認められた国際品質基準への厳格な準拠により、すべてのAcuron®製品が比類のない品質と信頼性を保証しています。',
      zh: '我们严格遵守国际质量标准——ISO认证、BIS合规、全球认可——确保每件Acuron®产品具有无与伦比的质量和可靠性。',
      pt: 'Nossa adesão rigorosa aos padrões internacionais de qualidade—certificado ISO, em conformidade com BIS e reconhecido globalmente—garante que cada produto Acuron® seja de qualidade e confiabilidade incomparáveis.',
    }
  );

  const hospitalsServed = getLocalizedContent('Hospitals Served', {
    de: 'Krankenhäuser bedient',
    fr: 'Hôpitaux desservis',
    ja: '病院への提供',
    zh: '服务医院',
    pt: 'Hospitais atendidos',
  });

  const yearsExperience = getLocalizedContent('Years Experience', {
    de: 'Jahre Erfahrung',
    fr: 'Années d\'expérience',
    ja: '年の経験',
    zh: '年经验',
    pt: 'Anos de experiência',
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-slate-50/30 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-stretch">
          
          {/* LEFT HALF - Product Video Showcase */}
          <div className="relative w-full mx-auto aspect-[4/5] sm:aspect-[3/4] lg:aspect-video rounded-2xl mb-8 sm:mb-12 lg:mb-0">
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              poster="/acprod.png"
              preload="metadata"
              style={{
                pointerEvents: 'none',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              }}
            >
              <source src="/Indian%20Nurse%20Video.mp4" type="video/mp4" />
            </video>

            {/* Metrics - left and right, raised; gradient fade at outer edges into bg */}
            <div
              className="absolute bottom-10 sm:bottom-20 left-0 right-1/2 z-10 flex justify-start pl-4 sm:pl-12"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
              }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-500">500+</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{hospitalsServed}</div>
              </div>
            </div>
            <div
              className="absolute bottom-10 sm:bottom-20 left-1/2 right-0 z-10 flex justify-end pr-4 sm:pr-12"
              style={{
                maskImage: 'linear-gradient(to left, transparent 0%, black 35%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 25%, black 100%)',
              }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-500">15+</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-medium">{yearsExperience}</div>
              </div>
            </div>
          </div>

          {/* RIGHT HALF - Left-Aligned Content */}
          <div className="flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="lato-regular section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight mb-6">
              {missionTitle}
            </h2>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-xl">
              {missionStatement}
            </p>

            {/* Feature list - icon inline with heading */}
            <div className="space-y-6 sm:space-y-8">
              {/* Innovation Driven */}
              <div className="group">
                <h3 className="text-xl font-bold text-slate-600 mb-2 inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 align-middle group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  {innovationTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {innovationDesc}
                </p>
              </div>

              {/* Trusted Nationwide */}
              <div className="group">
                <h3 className="text-xl font-bold text-slate-600 mb-2 inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 align-middle group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {trustedTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {trustedDesc}
                </p>
              </div>

              {/* Internationally Certified */}
              <div className="group">
                <h3 className="text-xl font-bold text-slate-600 mb-2 inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 align-middle group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {certifiedTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {certifiedDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;