'use client';

import { useState, useEffect } from 'react';
import { X, Shield, Settings, BarChart3, Target, Cookie } from 'lucide-react';
import { useCountryStore } from '../../lib/store';

interface CookieBannerProps {
  className?: string;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieBanner({ className = '' }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true,
    functional: true
  });
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const cookieTitle = getLocalizedContent('We use cookies', {
    de: 'Wir verwenden Cookies',
    fr: 'Nous utilisons des cookies',
    ja: 'Cookieを使用しています',
    zh: '我们使用Cookie',
    pt: 'Usamos cookies'
  });

  const cookieDescription = getLocalizedContent(
    'We use cookies to enhance your experience and analyze site traffic.',
    {
      de: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Site-Traffic zu analysieren.',
      fr: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.',
      ja: 'エクスペリエンスを向上させ、サイトトラフィックを分析するためにCookieを使用しています。',
      zh: '我们使用Cookie来增强您的体验并分析网站流量。',
      pt: 'Usamos cookies para melhorar sua experiência e analisar o tráfego do site.'
    }
  );

  const acceptAllText = getLocalizedContent('Accept All', {
    de: 'Alle akzeptieren',
    fr: 'Tout accepter',
    ja: 'すべて受け入れる',
    zh: '全部接受',
    pt: 'Aceitar Tudo'
  });

  const rejectAllText = getLocalizedContent('Reject All', {
    de: 'Alle ablehnen',
    fr: 'Tout rejeter',
    ja: 'すべて拒否',
    zh: '全部拒绝',
    pt: 'Rejeitar Tudo'
  });

  const customizeText = getLocalizedContent('Customize', {
    de: 'Anpassen',
    fr: 'Personnaliser',
    ja: 'カスタマイズ',
    zh: '自定义',
    pt: 'Personalizar'
  });

  const essentialCookiesText = getLocalizedContent('Essential Cookies', {
    de: 'Wesentliche Cookies',
    fr: 'Cookies essentiels',
    ja: '必須Cookie',
    zh: '必要Cookie',
    pt: 'Cookies Essenciais'
  });

  const analyticsCookiesText = getLocalizedContent('Analytics Cookies', {
    de: 'Analyse-Cookies',
    fr: 'Cookies d\'analyse',
    ja: '分析Cookie',
    zh: '分析Cookie',
    pt: 'Cookies de Análise'
  });

  const marketingCookiesText = getLocalizedContent('Marketing Cookies', {
    de: 'Marketing-Cookies',
    fr: 'Cookies de marketing',
    ja: 'マーケティングCookie',
    zh: '营销Cookie',
    pt: 'Cookies de Marketing'
  });

  const functionalCookiesText = getLocalizedContent('Functional Cookies', {
    de: 'Funktionale Cookies',
    fr: 'Cookies fonctionnels',
    ja: '機能的Cookie',
    zh: '功能Cookie',
    pt: 'Cookies Funcionais'
  });

  const essentialDescription = getLocalizedContent(
    'Required for basic site functionality and security.',
    {
      de: 'Erforderlich für grundlegende Site-Funktionalität und Sicherheit.',
      fr: 'Nécessaire pour les fonctionnalités de base du site et la sécurité.',
      ja: '基本的なサイト機能とセキュリティに必要です。',
      zh: '基本网站功能和安全所必需的。',
      pt: 'Necessário para funcionalidade básica do site e segurança.'
    }
  );

  const analyticsDescription = getLocalizedContent(
    'Help us improve our website by analyzing usage patterns.',
    {
      de: 'Helfen Sie uns, unsere Website durch die Analyse von Nutzungsmustern zu verbessern.',
      fr: 'Aidez-nous à améliorer notre site web en analysant les modèles d\'utilisation.',
      ja: '使用パターンを分析してウェブサイトの改善にご協力ください。',
      zh: '通过分析使用模式帮助我们改进网站。',
      pt: 'Ajude-nos a melhorar nosso site analisando padrões de uso.'
    }
  );

  const marketingDescription = getLocalizedContent(
    'Used for personalized ads and marketing campaigns.',
    {
      de: 'Wird für personalisierte Anzeigen und Marketingkampagnen verwendet.',
      fr: 'Utilisé pour les publicités personnalisées et les campagnes marketing.',
      ja: 'パーソナライズされた広告とマーケティングキャンペーンに使用されます。',
      zh: '用于个性化广告和营销活动。',
      pt: 'Usado para anúncios personalizados e campanhas de marketing.'
    }
  );

  const functionalDescription = getLocalizedContent(
    'Enable enhanced functionality and personalization features.',
    {
      de: 'Ermöglichen erweiterte Funktionalität und Personalisierungsfunktionen.',
      fr: 'Permettent des fonctionnalités améliorées et des fonctions de personnalisation.',
      ja: '拡張機能とパーソナライゼーション機能を有効にします。',
      zh: '启用增强功能和个性化功能。',
      pt: 'Habilitam funcionalidades aprimoradas e recursos de personalização.'
    }
  );

  const privacyPolicyText = getLocalizedContent('Privacy Policy', {
    de: 'Datenschutzrichtlinie',
    fr: 'Politique de confidentialité',
    ja: 'プライバシーポリシー',
    zh: '隐私政策',
    pt: 'Política de Privacidade'
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('acuron-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: Date.now()
    };
    
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(allAccepted));
    
    // Enable all scripts
    enableAnalytics();
    enableMarketing();
    enableFunctional();
    
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: Date.now()
    };
    
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(onlyEssential));
    
    // Disable non-essential scripts
    disableAnalytics();
    disableMarketing();
    disableFunctional();
    
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const customPreferences = {
      ...preferences,
      timestamp: Date.now()
    };
    
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(customPreferences));
    
    // Apply preferences
    if (preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    
    if (preferences.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
    
    if (preferences.functional) {
      enableFunctional();
    } else {
      disableFunctional();
    }
    
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const enableAnalytics = () => {
    // Enable Google Analytics or other analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const enableMarketing = () => {
    // Enable marketing/advertising cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  const enableFunctional = () => {
    // Enable functional cookies (language preferences, UI customizations, etc.)
    if (typeof window !== 'undefined') {
      // Enable functional features like chat widgets, social media embeds, etc.
      console.log('Functional cookies enabled');
    }
  };

  const disableAnalytics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const disableMarketing = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  const disableFunctional = () => {
    if (typeof window !== 'undefined') {
      // Disable functional features
      console.log('Functional cookies disabled');
    }
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Compact Cookie Bar - Full Width Bottom */}
      <div className={`fixed bottom-0 left-0 right-0 z-[80] ${className}`}>
        {!showDetails ? (
          // Minimal compact bar
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 sm:gap-6">
              {/* Left: Icon + Message */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-700 truncate">
                  {cookieDescription}{' '}
                  <a
                    href="/cookies"
                    className="text-[#0066FF] hover:text-[#0052CC] underline underline-offset-2 font-medium"
                  >
                    Learn more
                  </a>
                </p>
              </div>

              {/* Right: Action buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleCustomize}
                  className="hidden sm:inline-flex px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Customize"
                >
                  {customizeText}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  {rejectAllText}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-3 py-1.5 text-xs font-medium bg-[#0066FF] text-white hover:bg-[#0052CC] transition-colors"
                >
                  {acceptAllText}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile: Customize button as full-width link below */}
            <div className="sm:hidden border-t border-gray-100 px-4 py-2">
              <button
                onClick={handleCustomize}
                className="w-full text-center text-xs font-medium text-[#0066FF] hover:text-[#0052CC]"
              >
                {customizeText}
              </button>
            </div>
          </div>
        ) : (
          // Detailed preferences modal overlay
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div className="bg-white w-full sm:max-w-2xl sm:rounded-lg shadow-2xl max-h-[90vh] overflow-hidden">
              <div className="p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1.5">
                      Cookie preferences
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Choose which types of cookies you want to allow. You can change these settings at any time.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cookie Options */}
                <div className="space-y-3 mb-5 max-h-[50vh] overflow-y-auto pr-2">
                  {/* Essential Cookies */}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                    <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {essentialCookiesText}
                        </span>
                        <span className="text-xs text-emerald-600 font-medium px-2 py-0.5 bg-emerald-50 rounded">Required</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {essentialDescription}
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                    <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {analyticsCookiesText}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={preferences.analytics}
                            onChange={(e) => updatePreference('analytics', e.target.checked)}
                          />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0066FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0066FF]"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {analyticsDescription}
                      </p>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                    <Settings className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {functionalCookiesText}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={preferences.functional}
                            onChange={(e) => updatePreference('functional', e.target.checked)}
                          />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0066FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0066FF]"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {functionalDescription}
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                    <Target className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {marketingCookiesText}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={preferences.marketing}
                            onChange={(e) => updatePreference('marketing', e.target.checked)}
                          />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0066FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0066FF]"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {marketingDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-[#0066FF] text-white text-sm font-medium py-2.5 px-4 hover:bg-[#0052CC] transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2.5 text-sm font-medium text-gray-800 border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    {rejectAllText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}