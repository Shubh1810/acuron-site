'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings, BarChart3, Target } from 'lucide-react';
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
    <div className={`fixed z-50 ${className}`}>
      {/* Main Banner */}
      <div 
        className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl 
                   w-[340px] sm:w-[380px] mx-4 mb-4
                   transition-all duration-500 ease-out transform
                   hover:shadow-xl hover:scale-[1.02]"
        style={{
          bottom: '20px',
          left: '20px',
          maxHeight: showDetails ? '500px' : '200px'
        }}
      >
        {/* Header */}
        <div className="p-5 pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#0F4679]/10 rounded-lg">
                <Cookie className="w-4 h-4 text-[#0F4679]" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                {cookieTitle}
              </h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            {cookieDescription}
          </p>

          {/* Cookie Categories (when expanded) */}
          {showDetails && (
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {/* Essential Cookies */}
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-900">
                      {essentialCookiesText}
                    </span>
                    <span className="text-xs text-green-600 font-medium">Required</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {essentialDescription}
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-900">
                      {analyticsCookiesText}
                    </span>
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#0F4679] rounded border-gray-300 focus:ring-[#0F4679] focus:ring-2" 
                      checked={preferences.analytics}
                      onChange={(e) => updatePreference('analytics', e.target.checked)}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {analyticsDescription}
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Settings className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-900">
                      {functionalCookiesText}
                    </span>
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#0F4679] rounded border-gray-300 focus:ring-[#0F4679] focus:ring-2" 
                      checked={preferences.functional}
                      onChange={(e) => updatePreference('functional', e.target.checked)}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {functionalDescription}
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Target className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-900">
                      {marketingCookiesText}
                    </span>
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#0F4679] rounded border-gray-300 focus:ring-[#0F4679] focus:ring-2" 
                      checked={preferences.marketing}
                      onChange={(e) => updatePreference('marketing', e.target.checked)}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {marketingDescription}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            {showDetails ? (
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#0F4679] text-white text-xs font-medium py-2 px-3 rounded-lg 
                             hover:bg-[#0A3356] transition-colors duration-200"
                  >
                    {acceptAllText}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg 
                             hover:bg-gray-200 transition-colors duration-200"
                  >
                    {rejectAllText}
                  </button>
                </div>
                <button
                  onClick={handleSavePreferences}
                  className="w-full bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg 
                           hover:bg-green-700 transition-colors duration-200"
                >
                  Save Preferences
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-[#0F4679] text-white text-xs font-medium py-2.5 px-4 rounded-lg 
                           hover:bg-[#0A3356] transition-colors duration-200"
                >
                  {acceptAllText}
                </button>
                <button
                  onClick={handleCustomize}
                  className="p-2.5 text-gray-600 hover:text-[#0F4679] transition-colors duration-200"
                  title={customizeText}
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Privacy Policy Link */}
          <div className="text-center mt-3 pt-3 border-t border-gray-100">
            <div className="flex justify-center space-x-4">
              <a 
                href="/privacy" 
                className="text-xs text-[#0F4679] hover:underline transition-colors duration-200"
              >
                {privacyPolicyText}
              </a>
              <a 
                href="/cookies" 
                className="text-xs text-[#0F4679] hover:underline transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 