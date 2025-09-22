import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Acuron Products',
  description: 'Cookie Policy for Acuron Products - Learn how we use cookies and similar technologies on our website.',
  openGraph: {
    title: 'Cookie Policy | Acuron Products',
    description: 'Cookie Policy for Acuron Products - Learn how we use cookies and similar technologies on our website.',
    type: 'website',
  },
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl opacity-90">
            Learn how we use cookies and similar technologies to enhance your experience
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Acuron Products, we use cookies and similar technologies to enhance your browsing experience, 
              analyze website traffic, and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900 mb-2">Essential Cookies</h3>
                <p className="text-blue-800 leading-relaxed mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4">
                  <li>Session management and security</li>
                  <li>Shopping cart functionality</li>
                  <li>Form submission and user preferences</li>
                  <li>Load balancing and technical operations</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-green-900 mb-2">Performance Cookies</h3>
                <p className="text-green-800 leading-relaxed mb-2">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information.
                </p>
                <ul className="list-disc list-inside text-green-700 space-y-1 ml-4">
                  <li>Page visit statistics and user behavior</li>
                  <li>Website performance monitoring</li>
                  <li>Error tracking and diagnostics</li>
                  <li>Speed and functionality improvements</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-yellow-900 mb-2">Functional Cookies</h3>
                <p className="text-yellow-800 leading-relaxed mb-2">
                  These cookies enable enhanced functionality and personalization.
                </p>
                <ul className="list-disc list-inside text-yellow-700 space-y-1 ml-4">
                  <li>Language and region preferences</li>
                  <li>Remembering your choices and settings</li>
                  <li>Personalized content and recommendations</li>
                  <li>Social media integration</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-purple-900 mb-2">Marketing Cookies</h3>
                <p className="text-purple-800 leading-relaxed mb-2">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
                <ul className="list-disc list-inside text-purple-700 space-y-1 ml-4">
                  <li>Targeted advertising and remarketing</li>
                  <li>Social media advertising</li>
                  <li>Campaign effectiveness measurement</li>
                  <li>Third-party advertising networks</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services that set cookies on our website. These include:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Helps us understand website usage and improve user experience.
                </p>
                <Link href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 text-sm">
                  Google Privacy Policy →
                </Link>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Social Media Platforms</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Enable social sharing and integration with social media platforms.
                </p>
                <p className="text-sm text-gray-500">Facebook, LinkedIn, Instagram</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Customer Support</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Live chat and customer support functionality.
                </p>
                <p className="text-sm text-gray-500">WhatsApp Business, Chatbot services</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Payment Processing</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Secure payment processing and fraud prevention.
                </p>
                <p className="text-sm text-gray-500">Payment gateway providers</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How to Manage Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.1 Cookie Banner</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you first visit our website, you&apos;ll see a cookie banner where you can choose which types of cookies to accept. 
                  You can change your preferences at any time by clicking the cookie settings link in our footer.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.2 Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Block all cookies or specific types of cookies</li>
                  <li>Delete existing cookies from your device</li>
                  <li>Set your browser to notify you when cookies are being sent</li>
                  <li>Use private/incognito browsing mode</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4.3 Browser-Specific Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium mb-2">Chrome</h4>
                    <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium mb-2">Firefox</h4>
                    <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">Preferences → Privacy → Cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium mb-2">Edge</h4>
                    <p className="text-sm text-gray-600">Settings → Cookies and Site Permissions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Impact of Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please note that disabling certain cookies may affect your experience on our website:
            </p>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <ul className="list-disc list-inside text-amber-800 space-y-2">
                <li>Some features may not work properly or may be unavailable</li>
                <li>You may need to re-enter information more frequently</li>
                <li>Personalization features may not function as expected</li>
                <li>Website performance may be affected</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Retention</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Session Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are temporary and are deleted when you close your browser.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Persistent Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies remain on your device for a specified period or until you delete them. 
                  The retention period varies depending on the cookie&apos;s purpose, typically ranging from 30 days to 2 years.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
              or legal requirements. We will notify you of any significant changes by posting the updated policy on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
              <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium">
                ← Back to Home
              </Link>
              <Link href="/privacy" className="text-purple-600 hover:text-purple-800 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-600 hover:text-purple-800 font-medium">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
