import Link from 'next/link';

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-start ml-8">
              <div className="relative">
                <h2 className="section-heading text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight">
                  Why Healthcare Professionals Trust Us
                </h2>
              </div>
            </div>
            <div className="mt-6 ml-8">
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                Our medical products are trusted by healthcare professionals worldwide for their quality, reliability, and innovation.
              </p>
            </div>
          </div>

          {/* Doctor Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
              <div className="flex items-start mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <div className="w-16 h-16 rounded-full bg-[#0F4679]/10 border-2 border-[#0F4679]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0F4679]/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Dr. Sharma</h3>
                  <p className="text-sm text-gray-600">Apollo Hospital</p>
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
                  <div className="w-16 h-16 rounded-full bg-[#0F4679]/10 border-2 border-[#0F4679]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0F4679]/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Dr. Patel</h3>
                  <p className="text-sm text-gray-600">Manipal Hospitals</p>
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
                  <div className="w-16 h-16 rounded-full bg-[#0F4679]/10 border-2 border-[#0F4679]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0F4679]/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Dr. Reddy</h3>
                  <p className="text-sm text-gray-600">AIIMS Orthopedics</p>
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
        </div>
      </div>
    </section>
  );
} 