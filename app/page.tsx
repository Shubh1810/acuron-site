'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollbarEffect from './components/ScrollbarEffect';

export default function Home() {
  // Animation on scroll functionality
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <ScrollbarEffect />
      <main className="min-h-screen pt-[120px]">
        <HeroSection 
          title="ADVANCING MEDICAL CARE WORLDWIDE"
          subtitle="Our connectivity network delivers essential medical products where they&apos;re needed most."
          ctaText="EXPLORE PRODUCTS"
          ctaLink="/products"
        />

        {/* Navigation Dots */}
        <div className="flex justify-center -mt-12 relative z-20">
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <button 
                key={index} 
                className={`h-3 w-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* What&apos;s Trending Section */}
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <h2 className="section-title">WHAT&apos;S TRENDING</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="card hover-lift animate-on-scroll" style={{ transitionDelay: `${(item - 1) * 100}ms` }}>
                  <div className="h-64 gradient-bg"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Featured Product {item}</h3>
                    <p className="text-gray-600 mb-4">
                      High-quality disposable medical products with advanced connectivity features.
                    </p>
                    <Link href={`/product/${item}`} className="text-teal-600 font-semibold hover:text-teal-800 transition-colors duration-300 flex items-center">
                      Learn more 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We are committed to advancing healthcare: connecting providers with essential medical solutions worldwide.
            </h2>
            <p className="text-xl md:text-2xl">
              Imagine the impact of reliable medical supplies in every healthcare setting.
            </p>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR IMPACT</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
                  Delivering essential care worldwide
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Through our extensive distribution network, Acuron Products ensures that healthcare 
                  providers have access to high-quality disposable medical products when and where they need them.
                </p>
                <Link href="/impact" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-bold py-3 px-8 rounded-md inline-block transition duration-300">
                  See how
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-teal-800 to-blue-900 min-h-[400px] rounded-lg">
                {/* Placeholder for your impact image */}
              </div>
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Product Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Surgical', 'Diagnostic', 'Monitoring', 'Protective'].map((category) => (
                <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-teal-700 to-blue-800"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category} Products</h3>
                    <Link href={`/category/${category.toLowerCase()}`} className="text-teal-600 font-semibold hover:text-teal-800">
                      View all →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your medical supply chain?</h2>
            <p className="text-xl mb-8">
              Join thousands of healthcare providers who trust Acuron Products for reliable, high-quality medical supplies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-teal-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-md inline-block transition duration-300">
                CONTACT SALES
              </Link>
              <Link href="/catalog" className="border-2 border-white text-white hover:bg-white hover:text-teal-900 font-bold py-3 px-8 rounded-md inline-block transition duration-300">
                VIEW CATALOG
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Acuron</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-teal-300">Our Story</Link></li>
                  <li><Link href="/leadership" className="hover:text-teal-300">Leadership</Link></li>
                  <li><Link href="/locations" className="hover:text-teal-300">Global Locations</Link></li>
                  <li><Link href="/responsibility" className="hover:text-teal-300">Corporate Responsibility</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><Link href="/products/surgical" className="hover:text-teal-300">Surgical Products</Link></li>
                  <li><Link href="/products/diagnostic" className="hover:text-teal-300">Diagnostic Tools</Link></li>
                  <li><Link href="/products/monitoring" className="hover:text-teal-300">Monitoring Devices</Link></li>
                  <li><Link href="/products/protective" className="hover:text-teal-300">Protective Equipment</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/healthcare" className="hover:text-teal-300">For Healthcare Professionals</Link></li>
                  <li><Link href="/resources/distributors" className="hover:text-teal-300">For Distributors</Link></li>
                  <li><Link href="/resources/training" className="hover:text-teal-300">Training Materials</Link></li>
                  <li><Link href="/resources/support" className="hover:text-teal-300">Product Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="hover:text-teal-300">Contact Us</Link></li>
                  <li><Link href="/careers" className="hover:text-teal-300">Careers</Link></li>
                  <li><Link href="/news" className="hover:text-teal-300">News & Events</Link></li>
                  <li><Link href="/investors" className="hover:text-teal-300">Investor Relations</Link></li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  {/* Social Media Icons */}
                  {['facebook', 'twitter', 'linkedin', 'youtube'].map((social) => (
                    <Link key={social} href={`/social/${social}`} className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-600">
                      <span className="sr-only">{social}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                  © {new Date().getFullYear()} Acuron Products. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                  <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
                  <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 