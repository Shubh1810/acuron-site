import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import Metric from '../ui/metric';

export default function MissionSection() {
  return (
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
                        value={100} 
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
                        value={15} 
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
  );
}