import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollbarEffect from './components/ScrollbarEffect';
import GridBackground from './components/ui/grid-background';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import ProductPreviewSection from './components/sections/ProductPreviewSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ClientWrapper from './components/ClientWrapper';
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
    <ClientWrapper>
      <GridBackground />
      <Header />
      <ScrollbarEffect />
      <main className="min-h-screen pt-[110px]">
        <HeroSection 
          title="Revolutionizing Medical Supply with Precision & Care."
          subtitle="India's trusted manufacturer of ISO-certified PPE and medical disposable products and kits, empowering hospitals nationwide."
          ctaText="EXPLORE PRODUCTS"
          ctaLink="/products"
        />

        <AboutSection />
        <MissionSection />
        <ProductPreviewSection />
        <ContactSection />
        <Footer />
      </main>
    </ClientWrapper>
  );
} 