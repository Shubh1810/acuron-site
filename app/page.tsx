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