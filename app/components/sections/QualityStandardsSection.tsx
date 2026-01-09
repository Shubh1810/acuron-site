'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useCountryStore } from '../../../lib/store';

export default function QualityStandardsSection() {
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };



  return (
    <section className="bg-white px-2 md:px-4 w-full max-w-[100vw] overflow-x-hidden">
      <div className="py-12 bg-[#0F4679] relative overflow-hidden rounded-3xl border-2 border-white/20">

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex justify-start ml-8">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                {getLocalizedContent('Quality Assurance Policy', {
                  de: 'Qualitätssicherungsrichtlinie',
                  fr: 'Politique d\'Assurance Qualité',
                  ja: '品質保証ポリシー',
                  zh: '质量保证政策',
                  pt: 'Política de Garantia de Qualidade'
                })}
              </h2>
            </div>
          </div>
          <div className="mt-6 ml-8">
            <p className="text-blue-100 max-w-2xl">
              {getLocalizedContent('At Acuron Products, quality is our top priority. We are committed to manufacturing and delivering superior surgical disposables and medical devices that meet international standards.', {
                de: 'Bei Acuron Products ist Qualität unsere oberste Priorität. Wir verpflichten uns zur Herstellung und Lieferung hochwertiger chirurgischer Einwegartikel.',
                fr: 'Chez Acuron Products, la qualité est notre priorité absolue. Nous nous engageons à fabriquer des dispositifs médicaux supérieurs.',
                ja: 'Acuron Productsでは、品質が最優先事項です。国際基準を満たす優れた外科用使い捨て製品の製造に取り組んでいます。',
                zh: '在Acuron Products，质量是我们的首要任务。我们致力于制造符合国际标准的优质外科一次性用品。',
                pt: 'Na Acuron Products, qualidade é nossa prioridade máxima. Estamos comprometidos em fabricar dispositivos médicos superiores.'
              })}
            </p>
          </div>
        </motion.div>

        {/* Quality Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {getLocalizedContent('Continuous Improvement', {
                de: 'Kontinuierliche Verbesserung',
                fr: 'Amélioration Continue',
                ja: '継続的改善',
                zh: '持续改进',
                pt: 'Melhoria Contínua'
              })}
            </h3>
            <p className="text-sm text-gray-600">
              {getLocalizedContent('Enhance product quality through R&D and innovation', {
                de: 'Produktqualität durch F&E und Innovation verbessern',
                fr: 'Améliorer la qualité des produits par R&D et innovation',
                ja: 'R&Dとイノベーションによる製品品質の向上',
                zh: '通过研发和创新提升产品质量',
                pt: 'Melhorar qualidade através de P&D e inovação'
              })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {getLocalizedContent('Global Compliance', {
                de: 'Globale Compliance',
                fr: 'Conformité Mondiale',
                ja: 'グローバル・コンプライアンス',
                zh: '全球合规',
                pt: 'Conformidade Global'
              })}
            </h3>
            <p className="text-sm text-gray-600">
              {getLocalizedContent('Adhere to international quality and safety standards', {
                de: 'Einhaltung internationaler Qualitäts- und Sicherheitsstandards',
                fr: 'Respecter les normes internationales de qualité et sécurité',
                ja: '国際的な品質・安全基準への準拠',
                zh: '遵循国际质量和安全标准',
                pt: 'Aderir aos padrões internacionais de qualidade e segurança'
              })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {getLocalizedContent('Strict Quality Control', {
                de: 'Strenge Qualitätskontrolle',
                fr: 'Contrôle Qualité Strict',
                ja: '厳格な品質管理',
                zh: '严格的质量控制',
                pt: 'Controle de Qualidade Rigoroso'
              })}
            </h3>
            <p className="text-sm text-gray-600">
              {getLocalizedContent('Ensure every product undergoes rigorous testing', {
                de: 'Jedes Produkt durchläuft strenge Tests',
                fr: 'Chaque produit subit des tests rigoureux',
                ja: '全ての製品に厳格なテストを実施',
                zh: '确保每个产品都经过严格测试',
                pt: 'Garantir que cada produto passe por testes rigorosos'
              })}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {getLocalizedContent('Customer Satisfaction', {
                de: 'Kundenzufriedenheit',
                fr: 'Satisfaction Client',
                ja: '顧客満足',
                zh: '客户满意',
                pt: 'Satisfação do Cliente'
              })}
            </h3>
            <p className="text-sm text-gray-600">
              {getLocalizedContent('Focus on delivering reliable products, timely service, and custom solutions', {
                de: 'Fokus auf zuverlässige Produkte, pünktlichen Service und maßgeschneiderte Lösungen',
                fr: 'Focus sur des produits fiables, service ponctuel et solutions personnalisées',
                ja: '信頼性の高い製品、タイムリーなサービス、カスタムソリューションの提供に注力',
                zh: '专注于提供可靠产品、及时服务和定制解决方案',
                pt: 'Foco em entregar produtos confiáveis, serviço pontual e soluções personalizadas'
              })}
            </p>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-100 max-w-3xl mx-auto">
            {getLocalizedContent('With advanced QC systems, a dedicated team, and a customer-centric approach, we aim to exceed expectations and maintain our reputation as a trusted name in the healthcare industry.', {
              de: 'Mit fortschrittlichen QC-Systemen, einem engagierten Team und einem kundenorientierten Ansatz wollen wir Erwartungen übertreffen.',
              fr: 'Avec des systèmes QC avancés, une équipe dédiée et une approche centrée sur le client, nous visons à dépasser les attentes.',
              ja: '先進的なQCシステム、専任チーム、顧客中心のアプローチにより、期待を上回り、信頼される企業としての評判を維持します。',
              zh: '凭借先进的质控系统、专业团队和以客户为中心的方法，我们致力于超越期望，保持在医疗行业的可信声誉。',
              pt: 'Com sistemas QC avançados, equipe dedicada e abordagem centrada no cliente, visamos superar expectativas e manter nossa reputação confiável.'
            })}
          </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
