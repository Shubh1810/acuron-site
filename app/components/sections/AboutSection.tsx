'use client';

import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const { selectedCountry } = useCountryStore();
  const tendersRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [glowProgress, setGlowProgress] = useState(0);

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

    if (tendersRef.current) {
      observer.observe(tendersRef.current);
    }

    return () => {
      if (tendersRef.current) {
        observer.unobserve(tendersRef.current);
      }
    };
  }, []);

  // Scroll-based glow animation for image
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate progress based on element's position in viewport
        const startTrigger = windowHeight * 0.8; // Start when element is 80% in view
        const endTrigger = windowHeight * 0.2;   // Complete when element is 20% from top
        
        if (elementTop <= startTrigger && elementTop >= endTrigger) {
          const progress = (startTrigger - elementTop) / (startTrigger - endTrigger);
          setGlowProgress(Math.min(Math.max(progress, 0), 1));
        } else if (elementTop < endTrigger) {
          setGlowProgress(1);
        } else {
          setGlowProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const aboutUsTitle = getLocalizedContent('About Us', {
    de: 'Über uns',
    fr: 'À propos de nous',
    ja: '私たちについて',
    zh: '关于我们',
    pt: 'Sobre nós'
  });

  const whyChooseTitle = getLocalizedContent('Why Choose Acuron?', {
    de: 'Warum Acuron wählen?',
    fr: 'Pourquoi choisir Acuron ?',
    ja: 'なぜAcuronを選ぶのか？',
    zh: '为什么选择Acuron？',
    pt: 'Por que escolher a Acuron?'
  });

  const aboutParagraph1 = getLocalizedContent(
    'At Acuron® Products, our dedication to excellence, innovation, and superior quality positions us as a trusted partner in the healthcare industry. Our state-of-the-art manufacturing facility operates under stringent international quality standards, ensuring reliable, ISO-certified products.',
    {
      de: 'Bei Acuron® Products positioniert uns unser Engagement für Exzellenz, Innovation und überlegene Qualität als vertrauenswürdigen Partner in der Gesundheitsbranche. Unsere hochmoderne Produktionsstätte arbeitet unter strengen internationalen Qualitätsstandards und gewährleistet zuverlässige, ISO-zertifizierte Produkte.',
      fr: 'Chez Acuron® Products, notre dévouement à l\'excellence, à l\'innovation et à la qualité supérieure nous positionne comme un partenaire de confiance dans l\'industrie de la santé. Notre installation de fabrication de pointe fonctionne selon des normes de qualité internationales strictes, garantissant des produits fiables et certifiés ISO.',
      ja: 'Acuron® Productsでは、卓越性、革新性、優れた品質への献身により、ヘルスケア業界における信頼できるパートナーとしての地位を確立しています。最先端の製造施設は厳格な国際品質基準の下で運営され、信頼性の高いISO認証製品を保証しています。',
      zh: '在Acuron® Products，我们对卓越、创新和优质品质的奉献使我们成为医疗保健行业值得信赖的合作伙伴。我们最先进的制造设施在严格的国际质量标准下运营，确保可靠的ISO认证产品。',
      pt: 'Na Acuron® Products, nossa dedicação à excelência, inovação e qualidade superior nos posiciona como um parceiro confiável na indústria de saúde. Nossa instalação de fabricação de última geração opera sob rigorosos padrões internacionais de qualidade, garantindo produtos confiáveis e certificados pela ISO.'
    }
  );

  const aboutParagraph2 = getLocalizedContent(
    'With a team of over 100 skilled professionals, we deliver exceptional customer service alongside cost-effective solutions tailored to meet the specific demands of intensivists, surgeons, gynecologists, neonatologists, and diverse healthcare professionals.',
    {
      de: 'Mit einem Team von über 100 qualifizierten Fachkräften bieten wir außergewöhnlichen Kundenservice sowie kostengünstige Lösungen, die auf die spezifischen Anforderungen von Intensivmedizinern, Chirurgen, Gynäkologen, Neonatologen und verschiedenen Gesundheitsfachkräften zugeschnitten sind.',
      fr: 'Avec une équipe de plus de 100 professionnels qualifiés, nous offrons un service client exceptionnel ainsi que des solutions rentables adaptées pour répondre aux demandes spécifiques des intensivistes, chirurgiens, gynécologues, néonatologistes et divers professionnels de la santé.',
      ja: '100名以上の熟練した専門家からなるチームで、集中治療医、外科医、婦人科医、新生児科医、および多様な医療従事者の特定の要求に応えるためにカスタマイズされた費用対効果の高いソリューションとともに、卓越したカスタマーサービスを提供しています。',
      zh: '拥有100多名技术熟练的专业人员团队，我们提供卓越的客户服务以及量身定制的成本效益解决方案，以满足重症监护医师、外科医生、妇科医生、新生儿科医生和各种医疗保健专业人员的特定需求。',
      pt: 'Com uma equipe de mais de 100 profissionais qualificados, oferecemos atendimento excepcional ao cliente junto com soluções econômicas personalizadas para atender às demandas específicas de intensivistas, cirurgiões, ginecologistas, neonatologistas e diversos profissionais de saúde.'
    }
  );

  const aboutParagraph3 = getLocalizedContent(
    'Our robust global distribution network guarantees timely delivery, while our commitment to integrity, sustainability, and continuous improvement assures partners of our lasting reliability.',
    {
      de: 'Unser robustes globales Vertriebsnetzwerk garantiert pünktliche Lieferung, während unser Engagement für Integrität, Nachhaltigkeit und kontinuierliche Verbesserung den Partnern unsere dauerhafte Zuverlässigkeit zusichert.',
      fr: 'Notre réseau de distribution mondial robuste garantit une livraison en temps opportun, tandis que notre engagement envers l\'intégrité, la durabilité et l\'amélioration continue assure aux partenaires de notre fiabilité durable.',
      ja: '堅牢なグローバル流通ネットワークにより適時配送を保証し、誠実性、持続可能性、継続的改善への取り組みにより、パートナーに対する永続的な信頼性を保証しています。',
      zh: '我们强大的全球分销网络保证及时交付，而我们对诚信、可持续性和持续改进的承诺向合作伙伴保证了我们持久的可靠性。',
      pt: 'Nossa robusta rede de distribuição global garante entrega pontual, enquanto nosso compromisso com integridade, sustentabilidade e melhoria contínua assegura aos parceiros nossa confiabilidade duradoura.'
    }
  );

  const aboutParagraph4 = getLocalizedContent(
    'Choosing Acuron means choosing innovative healthcare solutions backed by proven expertise and unwavering quality.',
    {
      de: 'Acuron zu wählen bedeutet, innovative Gesundheitslösungen zu wählen, die von bewährter Expertise und unerschütterlicher Qualität unterstützt werden.',
      fr: 'Choisir Acuron signifie choisir des solutions de santé innovantes soutenues par une expertise éprouvée et une qualité inébranlable.',
      ja: 'Acuronを選ぶということは、実証された専門知識と揺るぎない品質に支えられた革新的なヘルスケアソリューションを選ぶことを意味します。',
      zh: '选择Acuron意味着选择由经过验证的专业知识和坚定不移的质量支持的创新医疗保健解决方案。',
      pt: 'Escolher a Acuron significa escolher soluções inovadoras de saúde apoiadas por expertise comprovada e qualidade inabalável.'
    }
  );

  const tendersAwardedTitle = getLocalizedContent('Tenders Awarded', {
    de: 'Ausschreibungen gewonnen',
    fr: 'Appels d\'offres attribués',
    ja: '受賞した入札',
    zh: '获得的招标',
    pt: 'Licitações Concedidas'
  });

  return (
    <section className="py-16 px-6 bg-white" id="about-us-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="section-title text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight">
              {aboutUsTitle}
            </h2>
          </div>
        </div>
        
        {/* Founders Image and About Text */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/2 relative" ref={imageRef}>
            {/* Liquid Blue-Green Glow Effect */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(6, 182, 212, ${0.3 * glowProgress}) 0%, 
                  rgba(59, 130, 246, ${0.4 * glowProgress}) 25%,
                  rgba(16, 185, 129, ${0.3 * glowProgress}) 50%,
                  rgba(34, 197, 94, ${0.2 * glowProgress}) 75%,
                  rgba(14, 165, 233, ${0.3 * glowProgress}) 100%)`,
                filter: `blur(${4 + glowProgress * 6}px)`,
                opacity: glowProgress,
                transition: 'all 0.2s ease-out',
                transform: `scale(${1 + glowProgress * 0.02})`
              }}
            ></div>
            
            {/* Subtle Edge Glow */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                boxShadow: `
                  0 0 ${glowProgress * 15}px rgba(6, 182, 212, ${glowProgress * 0.2}),
                  0 0 ${glowProgress * 30}px rgba(59, 130, 246, ${glowProgress * 0.15}),
                  0 0 ${glowProgress * 45}px rgba(16, 185, 129, ${glowProgress * 0.1})
                `,
                opacity: glowProgress,
                transition: 'all 0.2s ease-out'
              }}
            ></div>
            
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <Image 
                src="/about-us.JPEG" 
                alt="Acuron Products India founders and leadership team showcasing medical supplies manufacturing expertise" 
                width={500} 
                height={500} 
                className="w-full h-full relative z-10 border-transparent rounded-lg object-cover object-top"
                style={{
                  maskImage: `
                    linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)
                  `,
                  WebkitMaskImage: `
                    linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)
                  `,
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 font-sakamoto leading-tight">
              {whyChooseTitle}
            </h3>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-gray-700 font-rubik leading-relaxed">
              {aboutParagraph1}
              </p>
              <p className="text-base md:text-lg text-gray-700 font-rubik leading-relaxed">
              {aboutParagraph2}
              </p>
              <p className="text-base md:text-lg text-gray-700 font-rubik leading-relaxed">
              {aboutParagraph3}
            </p>
              <p className="text-base md:text-lg text-gray-700 font-rubik leading-relaxed font-medium">
              {aboutParagraph4}
            </p>
            </div>
          </div>
        </div>
        
        {/* Tenders Section */}
        <div 
          ref={tendersRef}
          className={`mb-6 mt-6 transition-all duration-800 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
          }`}
          style={{
            transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
          }}
        >
          <div className="relative mb-10">
            <h2 className={`section-title text-3xl sm:text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-center leading-tight transition-all duration-900 delay-100 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-12'
            }`}
            style={{
              transitionTimingFunction: isVisible ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
            }}>
              {tendersAwardedTitle}
            </h2>
          </div>
        </div>
        
        {/* Mobile view (grid layout) */}
        <div className="sm:hidden w-full p-2">
          <div className="flex flex-wrap justify-center" role="region" aria-label="Tender logos">
            {Array.from({ length: 11 }).map((_, index) => (
              <div 
                key={index} 
                className={`relative p-2 ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 w-[16.666%] ${index >= 6 ? 'w-[20%]' : ''} flex items-center justify-center`}
              >
                <Image 
                  src={`/tender${index + 1}.png`} 
                  alt={`Tender ${index + 1}`} 
                  width={120} 
                  height={120}
                  className="object-contain max-w-full max-h-full"
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop view (overlapping icons) */}
        <div className="relative w-full overflow-x-auto hidden sm:block py-6">
          <div className="flex flex-nowrap min-w-max justify-center pb-4 px-8" role="region" aria-label="Tender logos">
            {Array.from({ length: 11 }).map((_, index) => (
              <div 
                key={index} 
                className={`relative flex-shrink-0 ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl hover:scale-110 hover:z-10 transition-all duration-300 p-0 border-0 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center`}
                style={{ marginLeft: index === 0 ? '0' : '-50px' }}
              >
                <Image 
                  src={`/tender${index + 1}.png`} 
                  alt={`Tender ${index + 1}`} 
                  width={160} 
                  height={160} 
                  className="object-contain max-w-full max-h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 