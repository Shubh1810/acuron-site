import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Acuron Products',
  description: 'Privacy Policy for Acuron Products - Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Acuron Products',
    description: 'Privacy Policy for Acuron Products - Learn how we collect, use, and protect your personal information.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Acuron Products (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website or services, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Company information and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Inquiry and support request details</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>IP address and location information</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website and search terms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, analyze website traffic, 
                  and improve our services. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To process orders and manage customer relationships</li>
              <li>To communicate with you about products, services, and updates</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To improve our website, products, and services</li>
              <li>To analyze usage patterns and website performance</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.1 Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in operating 
                  our business, such as payment processors, shipping companies, and IT service providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.2 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  as part of the business transaction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.3 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information when required by law, court order, or to protect our rights, 
                  property, or safety, or that of others.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.4 Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with your explicit consent or as otherwise described at the time of collection.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training</li>
              <li>Secure hosting and data storage facilities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
              comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, 
              we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">7.1 Access and Correction</h3>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, update, or correct your personal information. 
                  Contact us to request access to your data or make corrections.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">7.2 Data Portability</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may request a copy of your personal information in a structured, commonly used format.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">7.3 Deletion</h3>
                <p className="text-gray-700 leading-relaxed">
                  You may request deletion of your personal information, subject to legal and contractual obligations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">7.4 Marketing Communications</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can opt-out of marketing communications at any time by following the unsubscribe instructions 
                  in our emails or contacting us directly.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal information 
              from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, 
              operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy 
              on our website and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Acuron Products - Privacy Officer</strong></p>
              <p className="text-gray-700 mb-2">Email: privacy@acuron.in</p>
              <p className="text-gray-700 mb-2">Phone: +91 98200 43274</p>
              <p className="text-gray-700">Address: Gala No. 112, 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India</p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-green-600 hover:text-green-800 font-medium">
                ← Back to Home
              </Link>
              <Link href="/terms" className="text-green-600 hover:text-green-800 font-medium">
                Terms and Conditions
              </Link>
              <Link href="/#contact-us-section" className="text-green-600 hover:text-green-800 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}