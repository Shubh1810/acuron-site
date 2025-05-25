import { create } from 'zustand';

export interface Country {
  code: string;
  name: string;
  language: string;
  useEnglishContent: boolean;
}

// Define countries with their language preferences
export const countries: Country[] = [
  { code: 'in', name: 'India', language: 'en', useEnglishContent: true },
  { code: 'us', name: 'USA', language: 'en', useEnglishContent: true },
  { code: 'gb', name: 'UK', language: 'en', useEnglishContent: true },
  { code: 'de', name: 'Deutsche', language: 'de', useEnglishContent: false },
  { code: 'fr', name: 'Français', language: 'fr', useEnglishContent: false },
  { code: 'jp', name: '日本語', language: 'ja', useEnglishContent: false },
  { code: 'cn', name: '中国人', language: 'zh', useEnglishContent: false },
  { code: 'br', name: 'Brazil', language: 'pt', useEnglishContent: false },
];

// Define a default country (India)
const defaultCountry: Country = countries[0]; // India

interface CountryState {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  getCurrentLanguage: () => string;
  shouldUseEnglishContent: () => boolean;
}

export const useCountryStore = create<CountryState>((set, get) => ({
  selectedCountry: defaultCountry,
  setSelectedCountry: (country: Country) => set({ selectedCountry: country }),
  getCurrentLanguage: () => get().selectedCountry.language,
  shouldUseEnglishContent: () => get().selectedCountry.useEnglishContent,
})); 