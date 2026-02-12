'use client';

import Image from 'next/image';
import { useCountryStore } from '@/lib/store';

// About Us Section Component - Neumorphic Minimal Design (localized)

const AboutUsSection = () => {
  const { selectedCountry } = useCountryStore();

  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const aboutUsLabel = getLocalizedContent('About Us', {
    de: 'Über uns',
    fr: 'À propos de nous',
    ja: '私たちについて',
    zh: '关于我们',
    pt: 'Sobre nós',
  });

  const whyChooseLine1 = getLocalizedContent('Why Choose', {
    de: 'Warum wählen',
    fr: 'Pourquoi choisir',
    ja: 'なぜ選ぶ',
    zh: '为什么选择',
    pt: 'Por que escolher',
  });
  const whyChooseLine2 = getLocalizedContent('Us?', {
    de: 'uns?',
    fr: 'nous ?',
    ja: '私たち？',
    zh: '我们？',
    pt: 'nós?',
  });

  const paragraph1 = getLocalizedContent(
    'At Acuron® Products, our dedication to excellence, innovation, and superior quality positions us as a trusted partner in the healthcare industry. Our state-of-the-art manufacturing facility operates under stringent international quality standards, ensuring reliable, ISO-certified products.',
    {
      de: 'Bei Acuron® Products positioniert uns unser Engagement für Exzellenz, Innovation und überlegene Qualität als vertrauenswürdigen Partner in der Gesundheitsbranche. Unsere hochmoderne Produktionsstätte arbeitet unter strengen internationalen Qualitätsstandards und gewährleistet zuverlässige, ISO-zertifizierte Produkte.',
      fr: 'Chez Acuron® Products, notre dévouement à l\'excellence, à l\'innovation et à la qualité supérieure nous positionne comme un partenaire de confiance dans l\'industrie de la santé. Notre installation de fabrication de pointe fonctionne selon des normes de qualité internationales strictes, garantissant des produits fiables et certifiés ISO.',
      ja: 'Acuron® Productsでは、卓越性、革新性、優れた品質への献身により、ヘルスケア業界における信頼できるパートナーとしての地位を確立しています。最先端の製造施設は厳格な国際品質基準の下で運営され、信頼性の高いISO認証製品を保証しています。',
      zh: '在Acuron® Products，我们对卓越、创新和优质品质的奉献使我们成为医疗保健行业值得信赖的合作伙伴。我们最先进的制造设施在严格的国际质量标准下运营，确保可靠的ISO认证产品。',
      pt: 'Na Acuron® Products, nossa dedicação à excelência, inovação e qualidade superior nos posiciona como um parceiro confiável na indústria de saúde. Nossa instalação de fabricação de última geração opera sob rigorosos padrões internacionais de qualidade, garantindo produtos confiáveis e certificados pela ISO.',
    }
  );

  const paragraph2 = getLocalizedContent(
    'With a team of over 100 skilled professionals, we deliver exceptional customer service alongside cost-effective solutions tailored to meet the specific demands of intensivists, surgeons, gynecologists, neonatologists, and diverse healthcare professionals.',
    {
      de: 'Mit einem Team von über 100 qualifizierten Fachkräften bieten wir außergewöhnlichen Kundenservice sowie kostengünstige Lösungen, die auf die spezifischen Anforderungen von Intensivmedizinern, Chirurgen, Gynäkologen, Neonatologen und verschiedenen Gesundheitsfachkräften zugeschnitten sind.',
      fr: 'Avec une équipe de plus de 100 professionnels qualifiés, nous offrons un service client exceptionnel ainsi que des solutions rentables adaptées pour répondre aux demandes spécifiques des intensivistes, chirurgiens, gynécologues, néonatologistes et divers professionnels de la santé.',
      ja: '100名以上の熟練した専門家からなるチームで、集中治療医、外科医、婦人科医、新生児科医、および多様な医療従事者の特定の要求に応えるためにカスタマイズされた費用対効果の高いソリューションとともに、卓越したカスタマーサービスを提供しています。',
      zh: '拥有100多名技术熟练的专业人员团队，我们提供卓越的客户服务以及量身定制的成本效益解决方案，以满足重症监护医师、外科医生、妇科医生、新生儿科医生和各种医疗保健专业人员的特定需求。',
      pt: 'Com uma equipe de mais de 100 profissionais qualificados, oferecemos atendimento excepcional ao cliente junto com soluções econômicas personalizadas para atender às demandas específicas de intensivistas, cirurgiões, ginecologistas, neonatologistas e diversos profissionais de saúde.',
    }
  );

  const paragraph3 = getLocalizedContent(
    'Our robust global distribution network guarantees timely delivery, while our commitment to integrity, sustainability, and continuous improvement assures partners of our lasting reliability.',
    {
      de: 'Unser robustes globales Vertriebsnetzwerk garantiert pünktliche Lieferung, während unser Engagement für Integrität, Nachhaltigkeit und kontinuierliche Verbesserung den Partnern unsere dauerhafte Zuverlässigkeit zusichert.',
      fr: 'Notre réseau de distribution mondial robuste garantit une livraison en temps opportun, tandis que notre engagement envers l\'intégrité, la durabilité et l\'amélioration continue assure aux partenaires de notre fiabilité durable.',
      ja: '堅牢なグローバル流通ネットワークにより適時配送を保証し、誠実性、持続可能性、継続的改善への取り組みにより、パートナーに対する永続的な信頼性を保証しています。',
      zh: '我们强大的全球分销网络保证及时交付，而我们对诚信、可持续性和持续改进的承诺向合作伙伴保证了我们持久的可靠性。',
      pt: 'Nossa robusta rede de distribuição global garante entrega pontual, enquanto nosso compromisso com integridade, sustentabilidade e melhoria contínua assegura aos parceiros nossa confiabilidade duradoura.',
    }
  );

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background: aboutbg.jpeg only, rotated 90° counter-clockwise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[100vmax] h-[100vmax] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]"
          style={{
            backgroundImage: 'url(/aboutbg.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Two Column Layout - tighter to fit bg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE - Content */}
          <div className="relative z-10 order-2 lg:order-1">
            
            {/* Section Label - Neumorphic Style */}
            <div className="inline-flex items-center gap-3 mb-3 sm:mb-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-[8px_8px_16px_rgba(148,163,184,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] border border-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#0F4679] to-teal-600 shadow-lg shadow-[#0F4679]/30" />
              <span className="text-xs sm:text-sm font-semibold text-[#0F4679] uppercase tracking-wider">{aboutUsLabel}</span>
            </div>

            {/* Main Heading - smaller to fit bg */}
            <h2 className="lato-regular section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight mb-4">
              <span className="block">{whyChooseLine1}</span>
              <span className="block">{whyChooseLine2}</span>
            </h2>

            {/* Description Text - Clean Typography (localized) */}
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed mb-6 sm:mb-8">
              <p className="text-sm sm:text-base">
                {paragraph1}
              </p>
              <p className="text-sm sm:text-base">
                {paragraph2}
              </p>
              <p className="text-sm sm:text-base">
                {paragraph3}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - Image matches left column height */}
          <div className="relative order-1 lg:order-2 h-full min-h-[200px] sm:min-h-[280px]">
            
            {/* Main Image Container - same height as text block */}
            <div className="relative w-full h-full rounded-2xl sm:rounded-[2rem] bg-white shadow-lg overflow-hidden group">
              
              {/* Image - dnaa.jpeg */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="relative w-full h-full">
                  <Image
                    src="/gloveabout.jpeg"
                    alt="Acuron Healthcare"
                    fill
                    className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Fallback gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679]/5 to-teal-600/10 pointer-events-none" />
              </div>

              {/* Floating Accent Element - Top Right */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-teal-500/30 blur-2xl" />
              
              {/* Floating Accent Element - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-gradient-to-br from-[#0F4679]/20 to-blue-600/20 blur-2xl" />

            </div>

            {/* Decorative Floating Element - Behind Image */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 blur-2xl opacity-50 -z-10" />
            <div className="absolute -top-4 -right-4 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#0F4679]/10 to-blue-200 blur-xl opacity-40 -z-10" />

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;