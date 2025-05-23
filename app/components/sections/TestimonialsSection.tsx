import Link from 'next/link';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
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
  );
} 