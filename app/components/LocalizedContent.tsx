'use client';

import { useCountryStore } from '../../lib/store';

// Example component showing how to use localized content
export default function LocalizedContent() {
  const { selectedCountry, shouldUseEnglishContent } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  // Example: Hero section title with localized versions
  const heroTitle = getLocalizedContent(
    "Revolutionizing Medical Supply with Precision & Care.", // English (used for IN, US, GB)
    {
      de: "Revolutionierung der medizinischen Versorgung mit Präzision und Sorgfalt.",
      fr: "Révolutionner l'approvisionnement médical avec précision et soin.",
      ja: "精密さとケアで医療供給を革命化する。",
      zh: "以精准和关怀革新医疗供应。",
      pt: "Revolucionando o fornecimento médico com precisão e cuidado."
    }
  );

  // Example: Subtitle with localized versions
  const heroSubtitle = getLocalizedContent(
    "India's trusted manufacturer of ISO-certified PPE and medical disposable products and kits, empowering hospitals nationwide.", // English
    {
      de: "Indiens vertrauenswürdiger Hersteller von ISO-zertifizierten PSA- und medizinischen Einwegprodukten und -kits, der Krankenhäuser landesweit stärkt.",
      fr: "Fabricant de confiance de l'Inde d'EPI certifiés ISO et de produits et kits médicaux jetables, autonomisant les hôpitaux à l'échelle nationale.",
      ja: "ISO認証のPPEおよび医療用使い捨て製品とキットのインドの信頼できるメーカーで、全国の病院を支援しています。",
      zh: "印度值得信赖的ISO认证PPE和医疗一次性产品及套件制造商，为全国医院提供支持。",
      pt: "Fabricante confiável da Índia de EPI certificados pela ISO e produtos e kits médicos descartáveis, capacitando hospitais em todo o país."
    }
  );

  // Example: Button text
  const ctaText = getLocalizedContent(
    "EXPLORE PRODUCTS", // English
    {
      de: "PRODUKTE ERKUNDEN",
      fr: "EXPLORER LES PRODUITS",
      ja: "製品を探索",
      zh: "探索产品",
      pt: "EXPLORAR PRODUTOS"
    }
  );

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="mb-4">
        <span className="text-sm text-gray-600">
          Selected Country: {selectedCountry.name} ({selectedCountry.code})
          {shouldUseEnglishContent() && " (Using English Content)"}
        </span>
      </div>
      
      <h1 className="text-2xl font-bold mb-2">{heroTitle}</h1>
      <p className="text-gray-700 mb-4">{heroSubtitle}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {ctaText}
      </button>
    </div>
  );
} 