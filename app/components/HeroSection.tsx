import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = '/images/hero-background.jpg',
}) => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-blue-900 opacity-80"></div>
      
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image 
            src={backgroundImage} 
            alt="Medical professionals" 
            fill 
            style={{objectFit: 'cover'}} 
            priority 
            className="opacity-40"
          />
        </div>
      )}
      
      <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-down">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
          {subtitle}
        </p>
        <Link 
          href={ctaLink} 
          className="btn-primary w-fit animate-fade-in"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection; 