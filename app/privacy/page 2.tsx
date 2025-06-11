'use client';

import { useCountryStore } from '../../lib/store';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';

export default function PrivacyPolicy() {
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const privacyPolicyTitle = getLocalizedContent('Privacy Policy', {
    de: 'Datenschutzrichtlinie',
    fr: 'Politique de Confidentialité',
    ja: 'プライバシーポリシー',
    zh: '隐私政策',
    pt: 'Política de Privacidade'
  });

  const lastUpdated = getLocalizedContent('Last updated: December 2024', {
    de: 'Zuletzt aktualisiert: Dezember 2024',
    fr: 'Dernière mise à jour : Décembre 2024',
    ja: '最終更新：2024年12月',
    zh: '最后更新：2024年12月',
    pt: 'Última atualização: Dezembro de 2024'
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {privacyPolicyTitle}
            </h1>
            <p className="text-gray-600">{lastUpdated}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                  <p className="text-gray-700">When you submit inquiries through our contact forms, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Full name and professional title</li>
                    <li>Email address and phone number</li>
                    <li>Organization/company name</li>
                    <li>Business address and location</li>
                    <li>Product interests and inquiry details</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Technical Information</h3>
                  <p className="text-gray-700">We automatically collect certain technical information when you visit our website:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>IP address and geographic location</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website and search terms</li>
                    <li>Device information and screen resolution</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Business Communications</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Respond to your inquiries and provide product information</li>
                    <li>Send quotations and technical specifications</li>
                    <li>Process orders and coordinate deliveries</li>
                    <li>Provide customer support and after-sales service</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Website Improvement</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Analyze website usage and user behavior</li>
                    <li>Improve website performance and user experience</li>
                    <li>Personalize content based on your preferences</li>
                    <li>Ensure website security and prevent fraud</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">3. Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Essential Cookies</h3>
                  <p className="text-gray-700">These cookies are necessary for the website to function properly:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Session management and security</li>
                    <li>Language and country preferences</li>
                    <li>Contact form functionality</li>
                    <li>Cookie consent preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Analytics Cookies</h3>
                  <p className="text-gray-700">With your consent, we use analytics tools to understand how visitors use our website:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Google Analytics - Website traffic and user behavior</li>
                    <li>Vercel Analytics - Performance monitoring</li>
                    <li>Page views, bounce rates, and user flows</li>
                    <li>Geographic distribution of visitors</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Marketing Cookies</h3>
                  <p className="text-gray-700">These cookies help us deliver relevant content and measure advertising effectiveness:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Social media integrations (LinkedIn, Facebook)</li>
                    <li>Remarketing and targeted advertising</li>
                    <li>Campaign performance tracking</li>
                    <li>Cross-platform user identification</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">4. Data Sharing and Third Parties</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">We do not sell, rent, or trade your personal information. We may share your data only in these specific circumstances:</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Service Providers</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Email service providers (for sending inquiries to our team)</li>
                    <li>Web hosting services (Vercel, AWS)</li>
                    <li>Analytics providers (Google, Vercel)</li>
                    <li>Customer support tools</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Legal Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>When required by law or legal proceedings</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>To prevent fraud or security threats</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">5. Data Security</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>SSL/TLS encryption for all data transmission</li>
                    <li>Secure data storage with access controls</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">6. Your Rights and Choices</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Cookie Management</h3>
                  <p className="text-gray-700">You can control your cookie preferences at any time:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Use our cookie preference center on the website</li>
                    <li>Adjust your browser settings to block or delete cookies</li>
                    <li>Opt out of analytics tracking</li>
                    <li>Disable marketing cookies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800">Data Rights (GDPR)</h3>
                  <p className="text-gray-700">If you are in the European Union, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal data</li>
                    <li>Restrict processing of your data</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">7. International Data Transfers</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">As a global medical supplies manufacturer, we may transfer your data internationally:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Data is primarily stored in India and may be transferred to our international partners</li>
                    <li>We ensure appropriate safeguards for international transfers</li>
                    <li>Third-party services may process data in various countries</li>
                    <li>We comply with applicable data protection laws</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">8. Data Retention</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">We retain your information for as long as necessary:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Contact inquiries: 3 years for business follow-up</li>
                    <li>Customer data: Duration of business relationship + 7 years</li>
                    <li>Website analytics: 26 months (Google Analytics default)</li>
                    <li>Cookie data: Based on your consent preferences</li>
                    <li>Legal compliance: As required by applicable laws</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">9. Children's Privacy</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">Our website is intended for business professionals and medical industry stakeholders. We do not knowingly collect personal information from children under 16 years of age.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">10. Changes to This Policy</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">We may update this Privacy Policy periodically. We will notify you of any material changes by:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending email notifications for significant changes</li>
                    <li>Requesting renewed consent when required</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F4679] mb-4">11. Contact Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Acuron Products India</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email:</strong> privacy@acuron.in</p>
                      <p><strong>Phone:</strong> +91 98200 43274</p>
                      <p><strong>Address:</strong> Gala No. 112, 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India</p>
                    </div>
                  </div>

                  <p className="text-gray-700">For data protection inquiries specifically related to GDPR compliance, please email: <a href="mailto:gdpr@acuron.in" className="text-[#0F4679] hover:underline">gdpr@acuron.in</a></p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 