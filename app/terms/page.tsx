import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Acuron Products',
  description: 'Terms and Conditions for Acuron Products - Your trusted partner in medical disposables and protective equipment.',
  openGraph: {
    title: 'Terms and Conditions | Acuron Products',
    description: 'Terms and Conditions for Acuron Products - Your trusted partner in medical disposables and protective equipment.',
    type: 'website',
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl opacity-90">
            Please read these terms and conditions carefully before using our services
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Acuron Products (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) 
              govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acuron Products is a leading manufacturer and supplier of medical disposables, protective equipment, 
              and healthcare solutions. Our commitment is to provide high-quality products that meet international standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing our website or purchasing our products, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these terms, 
              you must not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Products and Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">3.1 Product Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide accurate product descriptions, specifications, and pricing. However, we do not warrant 
                  that product descriptions or other content is accurate, complete, reliable, or error-free.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">3.2 Product Availability</h3>
                <p className="text-gray-700 leading-relaxed">
                  All products are subject to availability. We reserve the right to discontinue any product at any time 
                  without prior notice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">3.3 Quality Standards</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our products comply with relevant international standards including ISO 13485, CE marking, 
                  and other applicable regulatory requirements.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Orders and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.1 Order Processing</h3>
                <p className="text-gray-700 leading-relaxed">
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
                  any order for any reason at our sole discretion.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.2 Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prices are subject to change without notice. The price charged will be the price in effect at the time the order is placed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.3 Payment Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms will be specified in individual quotations or purchase agreements. 
                  We accept various payment methods as specified in our sales documentation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Delivery</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">5.1 Delivery Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Delivery times are estimates only and may vary based on product availability, shipping destination, 
                  and other factors beyond our control.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">5.2 Risk of Loss</h3>
                <p className="text-gray-700 leading-relaxed">
                  Risk of loss and title for products pass to you upon delivery to the carrier unless otherwise specified 
                  in writing.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Acuron Products and is protected by intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Acuron Products shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claim arising out of or relating to these Terms shall not exceed the amount 
              paid by you for the products or services giving rise to such claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">8.1 Product Warranties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We warrant that our products will conform to their specifications and be free from defects in material 
                  and workmanship under normal use for the period specified in product documentation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">8.2 Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Except as expressly stated herein, all products and services are provided &quot;as is&quot; without warranties 
                  of any kind, either express or implied.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Acuron Products from any claims, damages, losses, or expenses 
              arising out of your use of our products or services, or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
              its conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
              on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Acuron Products</strong></p>
              <p className="text-gray-700 mb-2">Email: sales@acuron.in</p>
              <p className="text-gray-700 mb-2">Phone: +91 98200 43274</p>
              <p className="text-gray-700">Address: Gala No. 112, 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India</p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Back to Home
              </Link>
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                Privacy Policy
              </Link>
              <Link href="/#contact-us-section" className="text-blue-600 hover:text-blue-800 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
