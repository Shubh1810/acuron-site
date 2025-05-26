'use client';

import Link from 'next/link';
import { ColourfulText } from './ui/colorful-text';
import { useCountryStore } from '../../lib/store';
import { TextGenerateEffect } from "./ui/textgenerateeffect";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const localizedTitle = getLocalizedContent(title, {
    de: "Revolutionierung der medizinischen Versorgung mit Präzision und Sorgfalt.",
    fr: "Révolutionner l'approvisionnement médical avec précision et soin.",
    ja: "精密さとケアで医療供給を革命化する。",
    zh: "以精准和关怀革新医疗供应。",
    pt: "Revolucionando o fornecimento médico com precisão e cuidado."
  });

  const localizedSubtitle = getLocalizedContent(subtitle, {
    de: "Indiens vertrauenswürdiger Hersteller von ISO-zertifizierten PSA- und medizinischen Einwegprodukten und -kits, der Krankenhäuser landesweit stärkt.",
    fr: "Fabricant de confiance de l'Inde d'EPI certifiés ISO et de produits et kits médicaux jetables, autonomisant les hôpitaux à l'échelle nationale.",
    ja: "ISO認証のPPEおよび医療用使い捨て製品とキットのインドの信頼できるメーカーで、全国の病院を支援しています。",
    zh: "印度值得信赖的ISO认证PPE和医疗一次性产品及套件制造商，为全国医院提供支持。",
    pt: "Fabricante confiável da Índia de EPI certificados pela ISO e produtos e kits médicos descartáveis, capacitando hospitais em todo o país."
  });

  const localizedCtaText = getLocalizedContent(ctaText, {
    de: "PRODUKTE ERKUNDEN",
    fr: "EXPLORER LES PRODUITS",
    ja: "製品を探索",
    zh: "探索产品",
    pt: "EXPLORAR PRODUTOS"
  });

  // Define the key phrases to highlight in each language
  const getKeyPhraseAndParts = () => {
    if (selectedCountry.useEnglishContent) {
      const parts = localizedTitle.split("Medical Supply");
      return {
        keyPhrase: "Medical Supply",
        titleParts: parts,
        hasKeyPhrase: parts.length > 1
      };
    }

    // Define key phrases for each language
    const keyPhrases: Record<string, string> = {
      de: "medizinischen Versorgung", // "medical supply/care" in German
      fr: "approvisionnement médical", // "medical supply" in French
      ja: "医療供給", // "medical supply" in Japanese
      zh: "医疗供应", // "medical supply" in Chinese
      pt: "fornecimento médico" // "medical supply" in Portuguese
    };

    const keyPhrase = keyPhrases[selectedCountry.language];
    if (keyPhrase) {
      const parts = localizedTitle.split(keyPhrase);
      return {
        keyPhrase,
        titleParts: parts,
        hasKeyPhrase: parts.length > 1
      };
    }

    // Fallback if no key phrase found
    return {
      keyPhrase: "",
      titleParts: [localizedTitle],
      hasKeyPhrase: false
    };
  };

  const { keyPhrase, titleParts, hasKeyPhrase } = getKeyPhraseAndParts();
  
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/main.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {hasKeyPhrase ? (
              <>
                {titleParts[0]}
                <span className="whitespace-nowrap">
                  <ColourfulText text={keyPhrase} />
                </span>
                {titleParts[1]}
              </>
            ) : (
              localizedTitle
            )}
          </h1>
          <TextGenerateEffect words={localizedSubtitle} className="text-lg sm:text-xl mb-8 text-gray-100 font-rubik" />
          <div className="inline-block relative">
            <Link 
              href={ctaLink}
              className="inline-block bg-white text-[#0F4679] font-bold py-3 px-10 rounded-full border-2 border-[#158C07] hover:bg-gray-50 transition-colors duration-300 shadow-md"
            >
              {localizedCtaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F4679] to-transparent pointer-events-none" style={{ height: '50%' }} />
    </div>
  );
};

export default HeroSection; 