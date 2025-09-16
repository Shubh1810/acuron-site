import React from 'react';
import Header from './components/Header';
import TransparentNavbar from './components/TransparentNavbar';
import HeroSection from './components/HeroSection';
import GridBackground from './components/ui/grid-background';
import AboutSection from './components/sections/AboutSection';
import EventsSection from './components/sections/EventsSection';
import MissionSection from './components/sections/MissionSection';
import ProductPreviewSection from './components/sections/ProductPreviewSection';
import QualityStandardsSection from './components/sections/QualityStandardsSection';
import TendersSection from './components/sections/TendersSection';
import DistributionSection from './components/sections/DistributionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import LogosSection from './components/LogosSection';
import SectionDivider from './components/ui/SectionDivider';
import { TextGenerateEffect } from './components/ui/textgenerateeffect';
import { generatePageMetadata, pageKeywords } from './lib/seo-utils';

// SEO Metadata with proper keywords
export const metadata = generatePageMetadata({
  title: 'Medical Supplies & Surgical Wear Manufacturer',
  description: 'Leading manufacturer of ISO-certified surgical supplies, PPE equipment, 3-ply masks, N95 masks, and medical disposables. Wide distribution network across India with global exports.',
  path: '/',
  keywords: [...pageKeywords.home],
});

export default function Home() {
  return (
    <>
      <GridBackground />
      <div className="sticky top-0 z-[60]">
        <Header />
        <TransparentNavbar isHeroSection={false} /> {/* Remove hero conditional since wrapper is sticky */}
      </div>
      <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
        <HeroSection 
          title="Revolutionizing Medical Supply with Precision & Care."
          subtitle="India's trusted manufacturer of ISO-certified PPE and medical disposable products and kits, empowering hospitals nationwide."
          ctaText="EXPLORE PRODUCTS"
          ctaLink="/products"
        />

        <LogosSection />
        <SectionDivider />
        <MissionSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <QualityStandardsSection />
        <SectionDivider />
        <ProductPreviewSection />
        <SectionDivider />
        <TendersSection />
        <SectionDivider />
        <DistributionSection />
        <SectionDivider />
        <EventsSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
} 