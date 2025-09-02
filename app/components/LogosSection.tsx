import Image from 'next/image';

const LogosSection = () => {
  const logos = [
    { src: '/gemm.png', alt: 'GEMM Certification', name: 'GEMM' },
    { src: '/ce-mark.png', alt: 'CE Mark Certification', name: 'CE Mark' },
    { src: '/cdsco-logo.webp', alt: 'CDSCO Certification', name: 'CDSCO' },
    { src: '/NSIC.PNG', alt: 'NSIC Certification', name: 'NSIC' },
    { src: '/msmep.png', alt: 'MSME Certification', name: 'MSME' },
    { src: '/who.png', alt: 'WHO Guidelines', name: 'WHO' },
    { src: '/Make_In_India.png', alt: 'Make In India', name: 'Make In India' },
    { src: '/atma.png', alt: 'ATMA Certification', name: 'ATMA' },
    { src: '/isop.png', alt: 'ISO Certification', name: 'ISO' },
  ];

  return (
    <section className="bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left side text */}
          <div className="flex-shrink-0">
            <p className="text-gray-500 text-xs md:text-sm lg:text-base leading-relaxed">
              Recognized by leading organizations<br />
              and regulatory bodies worldwide
            </p>
          </div>
          
          {/* Right side logos */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-end gap-3 md:gap-4 lg:gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center ${logo.name === 'GEMM' ? 'h-10 md:h-12 lg:h-14' : 'h-8 md:h-10 lg:h-12'}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={70}
                  height={50}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection; 