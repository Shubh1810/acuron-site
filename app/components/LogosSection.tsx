import Image from 'next/image';

const LogosSection = () => {
  const logos = [
    { src: '/gemm.png', alt: 'GEMM Certification', name: 'GEMM' },
    { src: '/iso134.webp', alt: 'ISO Certification', name: 'ISO' },
    { src: '/msmep.png', alt: 'MSME Certification', name: 'MSME' },
    { src: '/cdsco-logo.webp', alt: 'CDSCO Certification', name: 'CDSCO' },
    { src: '/nsic.png', alt: 'NSIC Certification', name: 'NSIC' },
    { src: '/ce-mark.png', alt: 'CE Mark Certification', name: 'CE Mark' },

    { src: '/who.png', alt: 'WHO Guidelines', name: 'WHO' },
    { src: '/Make_In_India.png', alt: 'Make In India', name: 'Make In India' },
    { src: '/atma.png', alt: 'ATMA Certification', name: 'ATMA' },
  ];

  return (
    <section className="bg-white py-2 sm:py-4 lg:py-6 -mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          {/* Left side text - left aligned on all screens */}
          <div className="flex-shrink-0 text-left">
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
              Recognized by leading organizations<br />
              and regulatory bodies worldwide
            </p>
          </div>
          
          {/* Right side logos - Significantly smaller on mobile */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center ${
                  logo.name === 'GEMM' 
                    ? 'h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24' 
                    : 'h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14'
                }`}
              >
                {logo.name === 'GEMM' ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={86}
                    className="max-w-full max-h-full object-contain opacity-70 transition-all duration-300 filter grayscale hover:grayscale-0 hover:opacity-100"
                    style={{ width: 'auto', height: 'auto' }}
                    sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 120px"
                  />
                ) : (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={36}
                    className="max-w-full max-h-full object-contain opacity-70 transition-all duration-300 filter grayscale hover:grayscale-0 hover:opacity-100"
                    style={{ width: 'auto', height: 'auto' }}
                    sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 120px"
                    unoptimized={logo.name === 'NSIC'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection; 