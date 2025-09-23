'use client';


import Metric from '../ui/metric';
import { useCountryStore } from '../../../lib/store';

export default function MissionSection() {
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const ourMissionText = getLocalizedContent('Our Mission', {
    de: 'Unsere Mission',
    fr: 'Notre Mission',
    ja: '私たちの使命',
    zh: '我们的使命',
    pt: 'Nossa Missão'
  });

  const missionTitle = getLocalizedContent(
    'We are committed to advancing Healthcare: connecting providers with essential Medical Solutions worldwide.',
    {
      de: 'Wir sind dem Fortschritt im Gesundheitswesen verpflichtet: Wir verbinden Anbieter mit wesentlichen medizinischen Lösungen weltweit.',
      fr: 'Nous nous engageons à faire progresser les soins de santé : connecter les fournisseurs avec des solutions médicales essentielles dans le monde entier.',
      ja: '私たちはヘルスケアの発展に取り組んでいます：世界中の医療提供者と必要不可欠な医療ソリューションを結びつけています。',
      zh: '我们致力于推进医疗保健：将提供者与全球必要的医疗解决方案连接起来。',
      pt: 'Estamos comprometidos em avançar os cuidados de saúde: conectando provedores com soluções médicas essenciais em todo o mundo.'
    }
  );

  const innovationTitle = getLocalizedContent('Innovation Driven', {
    de: 'Innovationsgetrieben',
    fr: 'Axé sur l\'innovation',
    ja: 'イノベーション主導',
    zh: '创新驱动',
    pt: 'Orientado pela Inovação'
  });

  const innovationDesc = getLocalizedContent(
    'At Acuron, innovation drives our commitment to healthcare excellence. Our dedicated R&D team consistently develops cutting-edge solutions, enhancing clinical efficiency and patient safety across India and beyond.',
    {
      de: 'Bei Acuron treibt Innovation unser Engagement für Exzellenz im Gesundheitswesen an. Unser engagiertes F&E-Team entwickelt kontinuierlich modernste Lösungen und verbessert die klinische Effizienz und Patientensicherheit in Indien und darüber hinaus.',
      fr: 'Chez Acuron, l\'innovation guide notre engagement envers l\'excellence des soins de santé. Notre équipe R&D dédiée développe constamment des solutions de pointe, améliorant l\'efficacité clinique et la sécurité des patients en Inde et au-delà.',
      ja: 'Acuronでは、イノベーションがヘルスケアの卓越性への取り組みを推進しています。専任のR&Dチームは継続的に最先端のソリューションを開発し、インドおよびその他の地域で臨床効率と患者安全性を向上させています。',
      zh: '在Acuron，创新推动着我们对医疗保健卓越的承诺。我们专门的研发团队持续开发尖端解决方案，提高印度及其他地区的临床效率和患者安全。',
      pt: 'Na Acuron, a inovação impulsiona nosso compromisso com a excelência em saúde. Nossa equipe dedicada de P&D desenvolve consistentemente soluções de ponta, melhorando a eficiência clínica e a segurança do paciente na Índia e além.'
    }
  );

  const trustedTitle = getLocalizedContent('Trusted Nationwide', {
    de: 'Landesweit vertraut',
    fr: 'Fiable à l\'échelle nationale',
    ja: '全国で信頼される',
    zh: '全国信赖',
    pt: 'Confiável em todo o país'
  });

  const trustedDesc = getLocalizedContent(
    'Trusted by renowned hospitals and healthcare institutions nationwide, including leading public hospitals, private healthcare groups, and government medical agencies.',
    {
      de: 'Vertraut von renommierten Krankenhäusern und Gesundheitseinrichtungen landesweit, einschließlich führender öffentlicher Krankenhäuser, privater Gesundheitsgruppen und staatlicher Medizinbehörden.',
      fr: 'Fait confiance par des hôpitaux renommés et des institutions de santé à l\'échelle nationale, y compris les principaux hôpitaux publics, les groupes de santé privés et les agences médicales gouvernementales.',
      ja: '全国の著名な病院や medical機関から信頼されており、主要な公立病院、民間医療グループ、政府医療機関が含まれます。',
      zh: '受到全国知名医院和医疗机构的信赖，包括领先的公立医院、私人医疗集团和政府医疗机构。',
      pt: 'Confiável por hospitais renomados e instituições de saúde em todo o país, incluindo principais hospitais públicos, grupos de saúde privados e agências médicas governamentais.'
    }
  );

  const certifiedTitle = getLocalizedContent('Internationally Certified', {
    de: 'International zertifiziert',
    fr: 'Certifié internationalement',
    ja: '国際認証取得',
    zh: '国际认证',
    pt: 'Certificado Internacionalmente'
  });

  const certifiedDesc = getLocalizedContent(
    'Our rigorous adherence to international quality standards—ISO-certified, BIS-compliant, and globally recognized—ensures every Acuron® product is of unparalleled quality and reliability.',
    {
      de: 'Unsere strenge Einhaltung internationaler Qualitätsstandards—ISO-zertifiziert, BIS-konform und weltweit anerkannt—stellt sicher, dass jedes Acuron®-Produkt von unvergleichlicher Qualität und Zuverlässigkeit ist.',
      fr: 'Notre adhésion rigoureuse aux normes de qualité internationales—certifié ISO, conforme BIS et reconnu mondialement—garantit que chaque produit Acuron® est d\'une qualité et d\'une fiabilité inégalées.',
      ja: '国際品質基準への厳格な遵守—ISO認証、BIS準拠、世界的に認知—により、すべてのAcuron®製品が比類のない品質と信頼性を確保しています。',
      zh: '我们严格遵守国际质量标准——ISO认证、BIS合规、全球认可——确保每个Acuron®产品都具有无与伦比的质量和可靠性。',
      pt: 'Nossa rigorosa aderência aos padrões internacionais de qualidade—certificado ISO, compatível com BIS e reconhecido globalmente—garante que cada produto Acuron® seja de qualidade e confiabilidade incomparáveis.'
    }
  );

  const aboutUsTitle = getLocalizedContent('About Us', {
    de: 'Über uns',
    fr: 'À propos de nous',
    ja: '私たちについて',
    zh: '关于我们',
    pt: 'Sobre nós'
  });

  const ourImpactText = getLocalizedContent('Our Impact', {
    de: 'Unsere Wirkung',
    fr: 'Notre Impact',
    ja: '私たちの影響',
    zh: '我们的影响',
    pt: 'Nosso Impacto'
  });

  const satisfiedCustomersText = getLocalizedContent('Satisfied Customers', {
    de: 'Zufriedene Kunden',
    fr: 'Clients Satisfaits',
    ja: '満足した顧客',
    zh: '满意的客户',
    pt: 'Clientes Satisfeitos'
  });

  const productsText = getLocalizedContent('Products', {
    de: 'Produkte',
    fr: 'Produits',
    ja: '製品',
    zh: '产品',
    pt: 'Produtos'
  });

  const yearsExperienceText = getLocalizedContent('Years of Experience', {
    de: 'Jahre Erfahrung',
    fr: 'Années d\'Expérience',
    ja: '年の経験',
    zh: '年经验',
    pt: 'Anos de Experiência'
  });

  return (
    <section className="relative py-16 min-h-[900px] md:min-h-[650px] text-white overflow-hidden">
      {/* Simple animated gradient background behind content */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679] via-[#0C3864] to-[#145088]" />
        <div className="absolute -top-20 -left-20 w-[60vw] h-[60vw] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[70vw] h-[70vw] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-10 flex-grow flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex justify-start ml-8 mb-6 text-left">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight mb-3">
                  {ourMissionText}
                </h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white/95 leading-tight text-left">
                  <span className="relative">
                    {missionTitle.split(':')[0]}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-transparent"></span>
                  </span>
                  <br className="mt-2" /> 
                  <span className="text-accent-300">
                    {missionTitle.split(':')[1]}
                  </span>
                </h2>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-grow md:w-2/3">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 h-full">
                  <div className="p-6 md:p-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-base font-semibold text-white/90 leading-tight">
                            {innovationTitle}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 font-playfair leading-relaxed">
                          {innovationDesc}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <h3 className="text-base font-semibold text-white/90 leading-tight">
                            {trustedTitle}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 font-playfair leading-relaxed">
                          {trustedDesc}
                        </p>
                      </div>
                      
                      <div className="md:col-span-2 space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-base font-semibold text-white/90 leading-tight">
                            {certifiedTitle}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 font-playfair leading-relaxed">
                          {certifiedDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Impact Metrics */}
              <div className="md:w-1/3">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 h-full p-5">
                  <h3 className="text-base font-semibold text-white/90 mb-5 text-center">
                    {ourImpactText}
                  </h3>
                  <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-5">
                    <div className="flex-1 flex flex-col items-center text-center">
                      <Metric 
                        value={10000} 
                        label={satisfiedCustomersText} 
                        className="w-full" 
                      />
                    </div>
                    
                    {/* Divider */}
                    <div className="flex items-center justify-center">
                      <div className="hidden sm:block w-full h-px bg-white/10 my-0"></div>
                      <div className="block sm:hidden h-12 w-px bg-white/10 mx-0"></div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center text-center">
                      <Metric 
                        value={100} 
                        label={productsText} 
                        className="w-full" 
                      />
                    </div>
                    
                    {/* Divider */}
                    <div className="flex items-center justify-center">
                      <div className="hidden sm:block w-full h-px bg-white/10 my-0"></div>
                      <div className="block sm:hidden h-12 w-px bg-white/10 mx-0"></div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center text-center">
                      <Metric 
                        value={15} 
                        label={yearsExperienceText} 
                        className="w-full" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}