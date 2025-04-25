'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollbarEffect from './components/ScrollbarEffect';
import GridBackground from './components/ui/grid-background';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';
import Metric from './components/ui/metric';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Animation on scroll functionality
  useEffect(() => {
    // Show loading screen for at least 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Animate counters
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 400; // Animation duration in milliseconds (much faster)
      const steps = 15; // Even fewer steps for speedometer-like jumps
      const stepTime = duration / steps;
      const increment = target / steps;
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.round(current).toString();
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target.toString() + (target === 500 || target === 20 ? '+' : '');
        }
      };
      
      updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    return () => {
      clearTimeout(loadingTimer);
      animatedElements.forEach(el => observer.unobserve(el));
      counters.forEach(counter => counterObserver.unobserve(counter));
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-sky-950 via-blue-900 to-sky-900 flex items-center justify-center z-50">
        <div className="relative w-full max-w-md px-6">
          {/* Background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with subtle animation */}
            <div className="relative w-[320px] h-[180px] mb-10 animate-fade-in">
              <Image
                src="/oglogo2.png"
                alt="Acuron Logo"
                fill
                className="object-contain scale-100 hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Subtle reflection effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-t from-sky-500/10 to-transparent blur-sm"></div>
            </div>
            
            {/* Elegant loading bar */}
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-sky-400 via-blue-500 to-teal-400">
                <div className="absolute inset-0 animate-loading-progress"></div>
              </div>
            </div>
            
            <p className="text-white/60 font-light tracking-wide text-center mb-4">
              Preparing innovative healthcare solutions
            </p>
            
            {/* Pulsing dots animation */}
            <div className="flex justify-center space-x-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-1"></span>
              <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-2"></span>
              <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse-delay-3"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <section className="py-16 px-8 bg-white" id="about">
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
                    priority
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
            
            <div className="mb-1 mt-2">
              <div className="relative">
                <h2 className="section-title text-3xl sm:text-5xl font-bold font-playfair bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent text-center">Tenders Awarded</h2>
              </div>
            </div>
            
            {/* Mobile view (horizontal scroll) */}
            <div className="sm:hidden w-full p-4">
              <div className="flex flex-wrap justify-center" role="region" aria-label="Tender logos">
                {Array.from({ length: 11 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`relative p-2 ${index % 2 === 0 ? 'drop-shadow-md' : 'drop-shadow-xl'} hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 w-[16.666%] ${index >= 6 ? 'w-[20%]' : ''} flex items-center justify-center`}
                  >
                    <Image 
                      src={`/tender${index + 1}.png`} 
                      alt={`Tender ${index + 1}`} 
                      width={200} 
                      height={200}
                      className="object-contain max-w-full max-h-full"
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop view (overlapping icons) */}
            <div className="relative w-full overflow-x-auto hidden sm:block py-4">
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
                      width={180} 
                      height={180} 
                      className="object-contain max-w-full max-h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

 {/* Mission Statement Section */}
 <section className="relative py-0 min-h-[1100px] md:min-h-[800px] text-white">
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
            <div className="relative z-10 flex flex-col h-full">
              <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 pt-8 pb-8 flex-grow flex flex-col justify-between">
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute -left-3 -top-3 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-teal-300/40 rounded-full blur-lg"></div>
                  
                  <div className="relative z-10 mb-2">
                    <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-white/10 backdrop-blur-sm rounded-full mb-2 border-l-2 border-accent-400">Our Mission</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight text-white/95 leading-tight">
                      <span className="relative">
                        We are committed 
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-transparent"></span>
                      </span>
                      <br /> to advancing Healthcare:
                      <br /> <span className="text-accent-300">connecting providers</span> with
                      <br /> essential Medical Solutions worldwide.
                    </h2>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4">
                  <div className="flex-grow md:w-2/3">
                    <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 h-full">
                      <div className="p-5 md:p-6 lg:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                          <div>
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h3 className="text-base font-semibold text-white/90">Innovation Driven</h3>
                            </div>
                            <p className="text-base text-white/80 pl-11 font-playfair">
                              At Acuron, innovation drives our commitment to healthcare excellence. Our dedicated R&D team consistently develops cutting-edge solutions, enhancing clinical efficiency and patient safety across India and beyond.
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                              <h3 className="text-base font-semibold text-white/90">Trusted Nationwide</h3>
                            </div>
                            <p className="text-base text-white/80 pl-11 font-playfair">
                              Trusted by renowned hospitals and healthcare institutions nationwide, including leading public hospitals, private healthcare groups, and government medical agencies.
                            </p>
                          </div>
                          
                          <div className="md:col-span-2">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-400/20 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-300" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h3 className="text-base font-semibold text-white/90">Internationally Certified</h3>
                            </div>
                            <p className="text-base text-white/80 pl-11 font-playfair">
                              Our rigorous adherence to international quality standards—ISO-certified, BIS-compliant, and globally recognized—ensures every Acuron® product is of unparalleled quality and reliability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 h-full p-5">
                      <h3 className="text-base font-semibold text-white/90 mb-4 text-center">Our Impact</h3>
                      <div className="flex flex-row sm:flex-col">
                        <div className="flex-1 p-2 sm:p-4 flex flex-col items-center text-center">
                          <Metric 
                            value={10000} 
                            label="Satisfied Customers" 
                            className="w-full" 
                          />
                        </div>
                        
                        {/* Mobile vertical divider, Desktop horizontal divider */}
                        <div className="flex items-center justify-center">
                          <div className="hidden sm:block w-full h-px bg-white/10 my-2"></div>
                          <div className="block sm:hidden h-12 w-px bg-white/10 mx-1"></div>
                        </div>
                        
                        <div className="flex-1 p-2 sm:p-4 flex flex-col items-center text-center">
                          <Metric 
                            value={500} 
                            label="Products" 
                            className="w-full" 
                          />
                        </div>
                        
                        {/* Mobile vertical divider, Desktop horizontal divider */}
                        <div className="flex items-center justify-center">
                          <div className="hidden sm:block w-full h-px bg-white/10 my-2"></div>
                          <div className="block sm:hidden h-12 w-px bg-white/10 mx-1"></div>
                        </div>
                        
                        <div className="flex-1 p-2 sm:p-4 flex flex-col items-center text-center">
                          <Metric 
                            value={20} 
                            label="Years of Experience" 
                            className="w-full" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradientAnimation>
        </section>

        {/* Our Impact Section - replaced with Doctor Testimonials and Visualizations */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-16">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">WHY HEALTHCARE PROFESSIONALS TRUST US</h2>
                <div className="w-28 h-1 bg-gradient-to-r from-[#158C07] to-[#0F4679] mx-auto mb-4"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our medical products are trusted by healthcare professionals worldwide for their quality, reliability, and innovation.
                </p>
              </div>

              {/* Doctor Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Testimonial 1 */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
                  <div className="flex items-start mb-4">
                    <div className="relative w-16 h-16 mr-4">
                      <div className="absolute inset-0 rounded-full bg-[#0F4679]/20"></div>
                      <Image 
                        src="/doctor1.png" 
                        alt="Dr. Sharma"
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-[#0F4679] object-cover relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Dr. Sharma</h3>
                      <p className="text-sm text-gray-600">Chief Surgeon, Apollo Hospital</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Acuron's surgical drapes provide exceptional barrier protection and fluid control. Their attention to quality makes them our first choice for critical procedures."
                  </p>
                  <div className="flex mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
                  <div className="flex items-start mb-4">
                    <div className="relative w-16 h-16 mr-4">
                      <div className="absolute inset-0 rounded-full bg-[#0F4679]/20"></div>
                      <Image 
                        src="/doctor2.png" 
                        alt="Dr. Patel"
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-[#0F4679] object-cover relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Dr. Patel</h3>
                      <p className="text-sm text-gray-600">Gynecologist, Manipal Hospitals</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The gynecology kits from Acuron are meticulously designed for precision and safety. Their consistent quality has improved our procedural outcomes significantly."
                  </p>
                  <div className="flex mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
                  <div className="flex items-start mb-4">
                    <div className="relative w-16 h-16 mr-4">
                      <div className="absolute inset-0 rounded-full bg-[#0F4679]/20"></div>
                      <Image 
                        src="/doctor3.png" 
                        alt="Dr. Reddy"
                        width={64}
                        height={64}
                        className="rounded-full border-2 border-[#0F4679] object-cover relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Dr. Reddy</h3>
                      <p className="text-sm text-gray-600">Director, AIIMS Orthopedics</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "For orthopedic surgeries, we need supplies that can withstand rigorous procedures. Acuron's products have never disappointed us in terms of durability and sterility."
                  </p>
                  <div className="flex mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Diversity & Credibility Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Diversity Visualization */}
                <div className="rounded-xl overflow-hidden relative min-h-[400px] shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679]/90 via-[#0D3C6B] to-[#102C4C] rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-md">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Product Diversity</h3>
                        
                        {/* Product Categories */}
                        <div className="space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">Surgical Kits</span>
                              <span className="text-white">98 products</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2.5">
                              <div className="bg-gradient-to-r from-blue-300 to-emerald-300 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">PPE Equipment</span>
                              <span className="text-white">125 products</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2.5">
                              <div className="bg-gradient-to-r from-blue-300 to-emerald-300 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">Orthopedic Supplies</span>
                              <span className="text-white">78 products</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2.5">
                              <div className="bg-gradient-to-r from-blue-300 to-emerald-300 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">Gynecology Kits</span>
                              <span className="text-white">64 products</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2.5">
                              <div className="bg-gradient-to-r from-blue-300 to-emerald-300 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credibility Visualization */}
                <div className="rounded-xl overflow-hidden relative min-h-[400px] shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#158C07]/90 via-[#0FB36D] to-[#0D5E3A] rounded-xl">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-md space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-2 text-center">Our Credibility</h3>
                        
                        {/* Credentials */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="bg-white/20 p-3 rounded-full inline-flex mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h4 className="text-white font-bold text-lg">ISO 13485</h4>
                            <p className="text-white/80 text-sm mt-1">Certified Quality Management System</p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="bg-white/20 p-3 rounded-full inline-flex mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="text-white font-bold text-lg">CE Marked</h4>
                            <p className="text-white/80 text-sm mt-1">EU Safety, Health & Environmental Requirements</p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="bg-white/20 p-3 rounded-full inline-flex mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h4 className="text-white font-bold text-lg">BIS Certified</h4>
                            <p className="text-white/80 text-sm mt-1">Bureau of Indian Standards</p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
                            <div className="bg-white/20 p-3 rounded-full inline-flex mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                              </svg>
                            </div>
                            <h4 className="text-white font-bold text-lg">FDA Registered</h4>
                            <p className="text-white/80 text-sm mt-1">US Food and Drug Administration</p>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Link href="/certificates" className="inline-block w-full py-3 px-6 text-center bg-white text-[#158C07] font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg">
                            View All Certifications
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-12 md:py-24 min-h-[1800px] sm:min-h-[1700px] md:min-h-[900px]">
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
            size="200%"
            containerClassName="absolute inset-0"
          >
            <div className="relative z-10 h-full flex items-start sm:items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 pb-28 sm:pb-20 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
                  {/* Left Column - Map and Company Info */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Company Logo and Heading */}
                    <div className="relative">
                      <div className="absolute -left-3 -top-3 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-teal-300/40 rounded-full blur-lg"></div>
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-white/10 backdrop-blur-sm rounded-full mb-2 border-l-2 border-accent-400 text-white">Contact Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-white/95 leading-tight mb-2">
                          Get in Touch
                          <span className="block text-lg md:text-xl text-accent-300 mt-2 font-normal">We&apos;re here to help you</span>
                        </h2>
                      </div>
                    </div>

                    {/* Google Maps Integration */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="aspect-[16/9]">
                        <iframe 
                          className="gmap_iframe absolute inset-0"
                          width="100%" 
                          height="100%"
                          frameBorder="0" 
                          scrolling="no" 
                          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pritesh comple&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>

                    {/* Contact Information Cards */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                      <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-4 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-accent-400/20 rounded-xl shrink-0">
                            <Image
                              src="/googlemaps.png"
                              alt="Google Maps Icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-white/90 font-semibold text-sm">Visit Us</h3>
                            <p className="text-white/70 text-sm mt-1 break-words">Gala No. 112,112,112 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India</p>
                          </div>
                        </div>
                      </div>
                      <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-4 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-accent-400/20 rounded-xl shrink-0">
                            <Image
                              src="/gmailicon.png"
                              alt="Gmail Icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-white/90 font-semibold text-sm">Email Us</h3>
                            <p className="text-white/70 text-sm mt-1 break-words">sales@acuron.in</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Call Us Card */}
                    <div className="mt-4">
                      <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-4 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-accent-400/20 rounded-xl shrink-0">
                            <Image
                              src="/contact.png"
                              alt="Contact Icon"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-white/90 font-semibold text-sm">Call Us</h3>
                            <p className="text-white/70 text-sm mt-1 break-words">+91 98200 72148</p>
                            <p className="text-white/70 text-sm mt-1 break-words">+91 98200 43274</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Inquiry Form */}
                  <div className="relative mt-6 lg:mt-0 lg:col-span-3">
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                      {/* Logo */}
                      <div className="flex justify-start mb-8">
                        <div className="relative w-[320px] sm:w-[400px] h-32 sm:h-36">
                          <Image 
                            src="/acuron.png" 
                            alt="Acuron Logo" 
                            fill
                            className="object-contain object-left mix-blend-multiply"
                            style={{ filter: 'brightness(0)' }}
                            priority
                          />
                        </div>
                      </div>

                      <form className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 text-sm transition-colors duration-200"
                              placeholder="Enter Name"
                              required
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Organization*</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 text-sm transition-colors duration-200"
                              placeholder="Company Name"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Email*</label>
                            <input 
                              type="email" 
                              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 text-sm transition-colors duration-200"
                              placeholder="email@example.com"
                              required
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input 
                              type="tel" 
                              className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 text-sm transition-colors duration-200"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-gray-700">Product Interest</label>
                          <select 
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 text-sm transition-colors duration-200"
                          >
                            <option value="" className="bg-white">Select product category</option>
                            <option value="surgical" className="bg-white">Surgical Products</option>
                            <option value="orthopedic" className="bg-white">Orthopedic Drapes</option>
                            <option value="gynecology" className="bg-white">Gynecology Drapes</option>
                            <option value="urology" className="bg-white">Urology Drapes</option>
                            <option value="protective" className="bg-white">Protective Equipment</option>
                            <option value="other" className="bg-white">Other</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-gray-700">Message</label>
                          <textarea 
                            rows={4}
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 resize-none text-sm transition-colors duration-200"
                            placeholder="Tell us about your requirements..."
                          ></textarea>
                        </div>

                        <div>
                          <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-xl opacity-80 bg-gradient-to-r from-[#158C07] via-[#0FB36D] to-[#3BB7EB] blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>
                            <button 
                              type="submit"
                              className="w-full relative bg-white text-gray-800 font-semibold py-3.5 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 overflow-hidden group"
                            >
                              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                              <span className="relative">Send Inquiry</span>
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 text-center mt-4">
                            By submitting this form, you agree to our{' '}
                            <Link href="/privacy" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">Privacy Policy</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradientAnimation>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-16 mt-0">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
              {/* Logo Column */}
              <div className="md:col-span-3">
                <div className="mb-2 sm:mb-6">
                  <Image 
                    src="/oglogo2.png" 
                    alt="Acuron Logo" 
                    width={150} 
                    height={60} 
                    className="h-auto"
                  />
                </div>
              </div>

              {/* Products Column */}
              <div className="md:col-span-3">
                <h3 className="text-xl mb-4 pb-2 border-b border-gray-700">Products</h3>
                <ul className="space-y-3 mt-6 text-sm">
                  <li><Link href="/products/surgical" className="hover:text-gray-300">Surgical Products</Link></li>
                  <li><Link href="/products/orthopedic-drapes" className="hover:text-gray-300">Orthopedic Drapes</Link></li>
                  <li><Link href="/products/gynecology-drapes" className="hover:text-gray-300">Gynecology Drapes</Link></li>
                  <li><Link href="/products/urology-drapes" className="hover:text-gray-300">Urology Drapes</Link></li>
                  <li><Link href="/products/protective" className="hover:text-gray-300">Protective Equipment</Link></li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="md:col-span-3">
                <h3 className="text-xl mb-4 pb-2 border-b border-gray-700">Connect</h3>
                <ul className="space-y-3 mt-6 text-sm">
                  <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                  <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                  <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                  <li><Link href="/news" className="hover:text-gray-300">News & Events</Link></li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  <Link href="https://www.instagram.com/acuron/" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.facebook.com/acuronproduct?mibextid=wwXIfr&mibextid=wwXIfr" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </Link>
                  <Link href="/social/twitter" className="hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/company/acuron-products/" className="hover:text-gray-300">
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