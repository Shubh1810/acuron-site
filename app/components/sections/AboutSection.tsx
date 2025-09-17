'use client';

import Image from 'next/image';
import { useCountryStore } from '../../../lib/store';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const { selectedCountry } = useCountryStore();
  const imageRef = useRef<HTMLDivElement>(null);
  const [glowProgress, setGlowProgress] = useState(0);

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



  return (
    <section className="py-16 px-6 bg-white" id="about-us-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-start mb-12 ml-8">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight">
              {aboutUsTitle}
            </h2>
          </div>
        </div>
        
        {/* Centered Image with Why Choose Us Overlay */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-5xl" ref={imageRef}>
            <div className="relative h-[45vh] md:h-[50vh] lg:h-[55vh] overflow-hidden rounded-lg">
              <Image 
                src="/about-us.JPEG" 
                alt="Acuron Products India founders and leadership team showcasing medical supplies manufacturing expertise" 
                fill
                className="relative z-10 border-transparent rounded-lg object-cover opacity-10"
                style={{
                  maskImage: `
                    linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 5%, black 85%, transparent 100%)
                  `,
                  WebkitMaskImage: `
                    linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
                    linear-gradient(to bottom, transparent 0%, black 5%, black 85%, transparent 100%)
                  `,
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                  objectPosition: 'center top'
                }}
                priority
              />
              
              {/* Why Choose Us Content Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-3 md:p-8">
                <div className="text-left max-w-3xl overflow-y-auto max-h-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0F4679] mb-2 md:mb-4 font-sans leading-tight text-left">
                    {whyChooseTitle}
                  </h3>
                  <div className="space-y-2 md:space-y-4">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-sans leading-snug md:leading-relaxed text-left">
                      {aboutParagraph1}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-sans leading-snug md:leading-relaxed text-left">
                      {aboutParagraph2}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-sans leading-snug md:leading-relaxed text-left">
                      {aboutParagraph3}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-sans leading-snug md:leading-relaxed font-medium text-left">
                      {aboutParagraph4}
                    </p>
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