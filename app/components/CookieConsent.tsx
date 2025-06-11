'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react';
import { useCountryStore } from '../../lib/store';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookieConsent() {
  const { selectedCountry } = useCountryStore();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false
  });

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
    'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
    {
      de: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie unserer Verwendung von Cookies zu.',
      fr: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, fournir du contenu personnalisé et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.',
      ja: 'ブラウジング体験を向上させ、パーソナライズされたコンテンツを提供し、トラフィックを分析するためにCookieを使用しています。「すべて受け入れる」をクリックすると、Cookieの使用に同意したことになります。',
      zh: '我们使用Cookie来增强您的浏览体验，提供个性化内容并分析我们的流量。点击"全部接受"，即表示您同意我们使用Cookie。',
      pt: 'Usamos cookies para melhorar sua experiência de navegação, fornecer conteúdo personalizado e analisar nosso tráfego. Ao clicar em "Aceitar Todos", você consente com o uso de cookies.'
    }
  );

  const acceptAllText = getLocalizedContent('Accept All', {
    de: 'Alle akzeptieren',
    fr: 'Tout accepter',
    ja: 'すべて受け入れる',
    zh: '全部接受',
    pt: 'Aceitar Todos'
  });

  const rejectAllText = getLocalizedContent('Reject All', {
    de: 'Alle ablehnen',
    fr: 'Tout rejeter',
    ja: 'すべて拒否',
    zh: '全部拒绝',
    pt: 'Rejeitar Todos'
  });

  const customizeText = getLocalizedContent('Customize', {
    de: 'Anpassen',
    fr: 'Personnaliser',
    ja: 'カスタマイズ',
    zh: '自定义',
    pt: 'Personalizar'
  });

  const cookieSettingsTitle = getLocalizedContent('Cookie Settings', {
    de: 'Cookie-Einstellungen',
    fr: 'Paramètres des cookies',
    ja: 'Cookie設定',
    zh: 'Cookie设置',
    pt: 'Configurações de Cookies'
  });

  const necessaryCookiesText = getLocalizedContent('Necessary Cookies', {
    de: 'Notwendige Cookies',
    fr: 'Cookies nécessaires',
    ja: '必要なCookie',
    zh: '必要的Cookie',
    pt: 'Cookies Necessários'
  });

  const analyticsCookiesText = getLocalizedContent('Analytics Cookies', {
    de: 'Analyse-Cookies',
    fr: 'Cookies analytiques',
    ja: '分析Cookie',
    zh: '分析Cookie',
    pt: 'Cookies de Análise'
  });

  const marketingCookiesText = getLocalizedContent('Marketing Cookies', {
    de: 'Marketing-Cookies',
    fr: 'Cookies marketing',
    ja: 'マーケティングCookie',
    zh: '营销Cookie',
    pt: 'Cookies de Marketing'
  });

  const preferencesCookiesText = getLocalizedContent('Preference Cookies', {
    de: 'Präferenz-Cookies',
    fr: 'Cookies de préférence',
    ja: '設定Cookie',
    zh: '偏好Cookie',
    pt: 'Cookies de Preferência'
  });

  const savePreferencesText = getLocalizedContent('Save Preferences', {
    de: 'Einstellungen speichern',
    fr: 'Enregistrer les préférences',
    ja: '設定を保存',
    zh: '保存偏好',
    pt: 'Salvar Preferências'
  });

  const privacyPolicyText = getLocalizedContent('Privacy Policy', {
    de: 'Datenschutzrichtlinie',
    fr: 'Politique de confidentialité',
    ja: 'プライバシーポリシー',
    zh: '隐私政策',
    pt: 'Política de Privacidade'
  });

  // Check if consent was already given
  useEffect(() => {
    const consent = localStorage.getItem('acuron-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setCookiePreferences(savedPreferences);
      // Apply saved preferences
      applyConsent(savedPreferences);
    }
  }, []);

  // Apply consent to actual cookies/scripts
  const applyConsent = (preferences: CookiePreferences) => {
    // Analytics (Google Analytics)
    if (preferences.analytics) {
      // Enable Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    } else {
      // Disable Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }

    // Marketing (Facebook Pixel, Google Ads)
    if (preferences.marketing) {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'granted'
        });
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'denied'
        });
      }
    }

    // Preferences (Language, country selection - always allowed as necessary)
    // These are handled by our app and stored in localStorage
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('acuron-cookie-consent-date', new Date().toISOString());
    applyConsent(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(onlyNecessary));
    localStorage.setItem('acuron-cookie-consent-date', new Date().toISOString());
    applyConsent(onlyNecessary);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('acuron-cookie-consent', JSON.stringify(cookiePreferences));
    localStorage.setItem('acuron-cookie-consent-date', new Date().toISOString());
    applyConsent(cookiePreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Backdrop */}
      {showSettings && (
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="absolute inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#0F4679]/10 rounded-xl">
                  <Settings className="w-6 h-6 text-[#0F4679]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{cookieSettingsTitle}</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-800">{necessaryCookiesText}</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Required</span>
                  </div>
                  <p className="text-sm text-gray-600">Essential for website functionality, security, and basic features.</p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">{analyticsCookiesText}</h4>
                  </div>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      cookiePreferences.analytics ? 'bg-[#0F4679]' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      cookiePreferences.analytics ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">{marketingCookiesText}</h4>
                  </div>
                  <p className="text-sm text-gray-600">Used to deliver relevant advertisements and track campaign performance.</p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      cookiePreferences.marketing ? 'bg-[#0F4679]' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      cookiePreferences.marketing ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Preference Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-800">{preferencesCookiesText}</h4>
                  </div>
                  <p className="text-sm text-gray-600">Remember your language and country preferences.</p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => togglePreference('preferences')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      cookiePreferences.preferences ? 'bg-[#0F4679]' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      cookiePreferences.preferences ? 'translate-x-7' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-[#0F4679] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#0D3C6B] transition-colors"
              >
                {savePreferencesText}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-[#158C07] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#0FB36D] transition-colors"
              >
                {acceptAllText}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Banner - Floating Horizontal Banner */}
      {!showSettings && (
        <div className="absolute bottom-6 left-6 right-1/2 pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl">
            <div className="px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-4">
                {/* Left side - Content */}
                <div className="flex items-start sm:items-center space-x-3 flex-1 min-w-0">
                  <div className="p-2 bg-[#0F4679]/10 rounded-lg shrink-0">
                    <Cookie className="w-5 h-5 text-[#0F4679]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{cookieTitle}</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cookieDescription.split('.')[0]}. {' '}
                      <a href="/privacy" className="text-[#0F4679] hover:underline font-medium">
                        {privacyPolicyText}
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Right side - Action buttons */}
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-[#0F4679] border border-gray-300 hover:border-[#0F4679] rounded-lg transition-colors"
                  >
                    {customizeText}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-[#0F4679] border border-gray-300 hover:border-[#0F4679] rounded-lg transition-colors"
                  >
                    {rejectAllText}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-1.5 bg-[#0F4679] text-white text-xs font-medium rounded-lg hover:bg-[#0D3C6B] transition-colors"
                  >
                    {acceptAllText}
                  </button>
                  
                  {/* Close button */}
                  <button
                    onClick={handleRejectAll}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors ml-1"
                    title="Close"
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 