import Link from 'next/link';
import { ColourfulText } from './ui/colorful-text';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  // Split the title to apply the ColourfulText only to "Medical Supply"
  const titleParts = title.split("Medical Supply");
  
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image - Mobile Responsive */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/main.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5)' // Darkens the image for better text visibility
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {titleParts[0]}
            <span className="whitespace-nowrap"><ColourfulText text="Medical Supply" /></span>
            {titleParts[1]}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100 font-rubik">
            {subtitle}
          </p>
          <div className="inline-block relative">
            <Link 
              href={ctaLink}
              className="inline-block bg-white text-[#0F4679] font-bold py-3 px-10 rounded-full border-2 border-[#158C07] hover:bg-gray-50 transition-colors duration-300 shadow-md"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Optional overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F4679] to-transparent pointer-events-none" style={{ height: '50%' }} />
    </div>
  );
};

export default HeroSection; 