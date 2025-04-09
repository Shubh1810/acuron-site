'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollbarEffect from './components/ScrollbarEffect';
import GridBackground from './components/ui/grid-background';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';


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
      <GridBackground />
      <Header />
      <ScrollbarEffect />
      <main className="min-h-screen pt-[110px]">
        <HeroSection 
          title="Revolutionizing Medical Supply with Precision & Care."
          subtitle="India's trusted manufacturer of clinically-certified PPE and medical disposable products and kits, empowering hospitals nationwide."
          ctaText="EXPLORE PRODUCTS"
          ctaLink="/products"
        />

        {/* About Us and Why Choose Acuron? Section */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <h2 className="section-title text-5xl font-bold font-playfair bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">About Us</h2>
              </div>
            </div>
            
            {/* Founders Image and About Text */}
            <div className="flex flex-col md:flex-row gap-10 mb-16">
              <div className="md:w-2/5 relative">
                <div className="absolute inset-0 bg-sky-400/50 rounded-full blur-3xl transform scale-125 animate-pulse"></div>
                <div className="relative">
                  <Image 
                    src="/group-ac.png" 
                    alt="Acuron Founders" 
                    width={500} 
                    height={350} 
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <h3 className="text-5xl font-bold text-gray-800 mb-4 font-sakamoto">Why Choose Acuron?</h3>
                <p className="text-xl text-gray-700 mb-6 font-playfair">
                  At Acuron® Products, our dedication to excellence, innovation, and superior quality positions us as a trusted partner in the healthcare industry. Our state-of-the-art manufacturing facility operates under stringent international quality standards, ensuring reliable, ISO-certified products. 
                  <br/><br/>
                  With a team of over 100 skilled professionals, we deliver exceptional customer service alongside cost-effective solutions tailored to meet the specific demands of intensivists, surgeons, gynecologists, neonatologists, and diverse healthcare professionals. 
                  <br/><br/>
                  Our robust global distribution network guarantees timely delivery, while our commitment to integrity, sustainability, and continuous improvement assures partners of our lasting reliability.
                </p>
                <p className="text-xl text-gray-700 font-playfair">
                  Choosing Acuron means choosing innovative healthcare solutions backed by proven expertise and unwavering quality.
                </p>
              </div>
            </div>
            
            <div className="mb-1 ml-8 sm:ml-8">
              <div className="relative">
                <h2 className="section-title text-3xl sm:text-5xl font-bold font-playfair bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-center sm:text-left">Tenders Awarded</h2>
              </div>
            </div>
            
            {/* Mobile view (static display) */}
            <div className="relative w-full block sm:hidden p-0">
              <div className="flex flex-wrap justify-center">
                {Array.from({ length: 11 }).map((_, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl transition-all duration-300 p-0 w-[16.666%] h-[70px] flex items-center justify-center ${index >= 6 ? 'w-[20%]' : ''}`}>
                    <Image 
                      src={`/tender${index + 1}.png`} 
                      alt={`Tender ${index + 1}`} 
                      width={300} 
                      height={300} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop view (animated scrolling) */}
            <div className="relative w-full overflow-hidden hidden sm:block">
              <div className="flex flex-nowrap gap-8" role="region" aria-label="Tender logos" style={{ ["--animation-duration" as string]: "40s" }}>
                <div className="flex items-center gap-4 md:gap-12 animate-scroll" style={{ ["--animation-direction" as string]: "forwards" }}>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <div key={index} className={`relative flex-shrink-0 ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl transition-all duration-300 p-2 md:p-4 w-40 md:w-48 h-40 md:h-48 flex items-center justify-center`}>
                      <Image 
                        src={`/tender${index + 1}.png`} 
                        alt={`Tender ${index + 1}`} 
                        width={200} 
                        height={200} 
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless scrolling */}
                <div className="flex items-center gap-4 md:gap-12 animate-scroll ml-4" style={{ ["--animation-direction" as string]: "forwards" }}>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <div key={index} className={`relative flex-shrink-0 ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl transition-all duration-300 p-2 md:p-4 w-40 md:w-48 h-40 md:h-48 flex items-center justify-center`}>
                      <Image 
                        src={`/tender${index + 1}.png`} 
                        alt={`Tender ${index + 1}`} 
                        width={200} 
                        height={200}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="relative py-32 min-h-[600px] text-white">
          <BackgroundGradientAnimation 
            gradientBackgroundStart="rgb(10, 61, 98)" 
            gradientBackgroundEnd="rgb(15, 70, 110)"
            firstColor="18, 113, 255"
            secondColor="80, 210, 255"
            thirdColor="30, 160, 230"
            fourthColor="20, 120, 200"
            fifthColor="90, 180, 250"
            pointerColor="100, 220, 255"
            blendingValue="soft-light"
            size="150%"
            containerClassName="absolute inset-0"
          >
            <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
                We are committed to advancing healthcare: connecting providers with essential medical solutions worldwide.
              </h2>
              <p className="text-lg md:text-xl font-playfair mb-8">
                Imagine the impact of reliable medical supplies in every healthcare setting.
              </p>
              <p className="text-base md:text-lg font-playfair mb-8">
                At Acuron, we're dedicated to creating a future where quality healthcare materials are accessible to all medical professionals, ensuring better patient care across the globe.
              </p>
              <p className="text-base md:text-lg font-playfair mb-8">
                Our commitment extends beyond simply providing products - we're fostering a global ecosystem where healthcare professionals can access the tools they need to deliver exceptional care, regardless of location or resources.
              </p>
              <div className="flex flex-wrap gap-5 mt-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-base">Highest quality standards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base">Global distribution network</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base">Cost-effective solutions</span>
                </div>
              </div>
            </div>
          </BackgroundGradientAnimation>
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
                <p className="text-lg text-gray-700 mb-8 font-playfair">
                  Through our extensive distribution network, Acuron Products ensures that healthcare 
                  providers have access to high-quality disposable medical products when and where they need them.
                </p>
                <Link href="/impact" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white font-bold py-3 px-8 rounded-md inline-block transition duration-300">
                  See how
                </Link>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden relative min-h-[400px]">
                <BackgroundGradientAnimation 
                  gradientBackgroundStart="rgb(5, 70, 90)" 
                  gradientBackgroundEnd="rgb(5, 50, 80)"
                  firstColor="0, 150, 170"
                  secondColor="20, 120, 160"
                  thirdColor="40, 80, 130"
                  fourthColor="10, 100, 140"
                  fifthColor="30, 90, 120"
                  interactive={false}
                  size="120%"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-opacity-90 text-center p-6">
                      <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                      <p className="font-playfair">Serving healthcare facilities across 25+ countries with essential medical products</p>
                    </div>
                  </div>
                </BackgroundGradientAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Product Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Surgical', 'Diagnostic', 'Monitoring', 'Protective'].map((category, index) => (
                <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <BackgroundGradientAnimation 
                        gradientBackgroundStart={index % 2 === 0 ? "rgb(5, 70, 90)" : "rgb(10, 60, 85)"} 
                        gradientBackgroundEnd={index % 2 === 0 ? "rgb(5, 50, 80)" : "rgb(5, 40, 70)"}
                        firstColor={index === 0 ? "0, 160, 180" : index === 1 ? "0, 140, 200" : index === 2 ? "20, 130, 190" : "10, 150, 180"}
                        secondColor={index === 0 ? "20, 140, 170" : index === 1 ? "30, 120, 180" : index === 2 ? "40, 110, 170" : "20, 130, 170"}
                        thirdColor={index === 0 ? "40, 120, 160" : index === 1 ? "50, 100, 160" : index === 2 ? "60, 90, 150" : "30, 110, 160"}
                        interactive={false}
                        size="150%"
                        blendingValue="normal"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                        {index === 0 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
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
        <section className="relative py-24 min-h-[350px] text-white">
          <BackgroundGradientAnimation 
            gradientBackgroundStart="rgb(15, 60, 90)" 
            gradientBackgroundEnd="rgb(0, 40, 70)"
            firstColor="0, 130, 180"
            secondColor="0, 180, 170"
            thirdColor="30, 130, 180"
            fourthColor="60, 90, 150"
            fifthColor="10, 90, 150"
            pointerColor="0, 210, 200"
            size="130%"
            blendingValue="soft-light"
            containerClassName="absolute inset-0"
          >
            <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-12 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your medical supply chain?</h2>
              <p className="text-xl mb-10 font-playfair">
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
          </BackgroundGradientAnimation>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Logo Column */}
              <div className="md:col-span-3">
                <div className="mb-6">
                  <Image 
                    src="/logggo.png" 
                    alt="Acuron Logo" 
                    width={150} 
                    height={60} 
                    className="h-auto"
                  />
                </div>
              </div>

              {/* About Us Column */}
              <div className="md:col-span-3">
                <h3 className="text-xl mb-4 pb-2 border-b border-gray-700">About us</h3>
                <ul className="space-y-3 mt-6 text-sm">
                  <li><Link href="/about" className="hover:text-gray-300">Our Story</Link></li>
                  <li><Link href="/leadership" className="hover:text-gray-300">Leadership</Link></li>
                  <li><Link href="/locations" className="hover:text-gray-300">Global Locations</Link></li>
                  <li><Link href="/responsibility" className="hover:text-gray-300">Corporate Responsibility</Link></li>
                </ul>
              </div>

              {/* Products Column */}
              <div className="md:col-span-3">
                <h3 className="text-xl mb-4 pb-2 border-b border-gray-700">Products</h3>
                <ul className="space-y-3 mt-6 text-sm">
                  <li><Link href="/products/surgical" className="hover:text-gray-300">Surgical Products</Link></li>
                  <li><Link href="/products/diagnostic" className="hover:text-gray-300">Diagnostic Tools</Link></li>
                  <li><Link href="/products/monitoring" className="hover:text-gray-300">Monitoring Devices</Link></li>
                  <li><Link href="/products/protective" className="hover:text-gray-300">Protective Equipment</Link></li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="md:col-span-3">
                <h3 className="text-xl mb-4 pb-2 border-b border-gray-700">Connect</h3>
                <ul className="space-y-3 mt-6 text-sm">
                  <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                  <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                  <li><Link href="/news" className="hover:text-gray-300">News & Events</Link></li>
                  <li><Link href="/investors" className="hover:text-gray-300">Investor Relations</Link></li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  <Link href="/social/youtube" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                  </Link>
                  <Link href="/social/facebook" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </Link>
                  <Link href="/social/twitter" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </Link>
                  <Link href="/social/linkedin" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal Footer */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                  © {new Date().getFullYear()} Acuron Products. All rights reserved.
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-gray-300">Terms of Use</Link>
                  <Link href="/cookies" className="hover:text-gray-300">Cookie Policy</Link>
                  <Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 