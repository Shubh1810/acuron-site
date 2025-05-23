import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScrollbarEffect from './components/ScrollbarEffect';
import GridBackground from './components/ui/grid-background';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ClientWrapper from './components/ClientWrapper';

export default function Home() {
  return (
    <ClientWrapper>
      <GridBackground />
      <Header />
      <ScrollbarEffect />
      <main className="min-h-screen pt-[110px]">
        <HeroSection 
          title="Revolutionizing Medical Supply with Precision & Care."
          subtitle="India's trusted manufacturer of clinically-certified PPE and medical disposable products and kits, empowering hospitals nationwide."
          ctaText="EXPLORE PRODUCTS"
          ctaLink="/products"
        />

        <AboutSection />
        <MissionSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </ClientWrapper>
  );
} 