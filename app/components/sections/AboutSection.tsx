import Image from 'next/image';

export default function AboutSection() {
  return (
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
                alt="Acuron Products India founders and leadership team showcasing medical supplies manufacturing expertise" 
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
  );
} 