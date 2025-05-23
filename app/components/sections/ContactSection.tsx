'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';

export default function ContactSection() {
  return (
    <section className="relative py-12 md:py-24 min-h-[1800px] sm:min-h-[1700px] md:min-h-[900px]" id="contact-us-section">
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
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 lg:h-full">
              {/* Left Column - Map and Company Info */}
              <div className="lg:col-span-2 flex flex-col space-y-6">
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

                {/* Contact Information Cards - Auto-expand to fill remaining space */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-4">
                    <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-4 hover:bg-white/10 transition-colors duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-accent-400/20 rounded-xl shrink-0">
                          <svg className="w-6 h-6 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
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
                          <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white/90 font-semibold text-sm">Email Us</h3>
                          <p className="text-white/70 text-sm mt-1 break-words">sales@acuron.in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call Us Card */}
                  <div className="backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl border border-white/10 p-4 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-accent-400/20 rounded-xl shrink-0">
                        <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
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
              <div className="relative mt-6 lg:mt-0 lg:col-span-3 flex">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 w-full flex flex-col">
                  {/* Logo */}
                  <div className="flex justify-start mb-8">
                    <div className="relative w-[240px] sm:w-[280px] h-24 sm:h-28">
                      <Image 
                        src="/acprod.png" 
                        alt="Acuron Logo" 
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>
                  </div>

                  <form className="space-y-5 flex-1 flex flex-col">
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

                    <div className="space-y-1.5 flex-1">
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-400 resize-none text-sm transition-colors duration-200 flex-1 min-h-[100px]"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <div className="mt-auto">
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
  );
} 