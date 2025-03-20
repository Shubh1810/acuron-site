import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/medical-1.jpg"
          alt="Medical Background"
          fill
          priority
          className="object-cover brightness-50"  // Darkens the image for better text visibility
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">
            {subtitle}
          </p>
          <Link 
            href={ctaLink}
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Optional overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSection; 