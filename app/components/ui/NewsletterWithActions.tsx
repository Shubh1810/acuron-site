'use client';

import { useActionState, useOptimistic } from 'react';
import { X, Download, Mail, User, Building2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useCountryStore } from '../../../lib/store';

// Define newsletter form state
interface NewsletterFormState {
  status: 'idle' | 'pending' | 'success' | 'error';
  message?: string;
  errors?: {
    name?: string;
    email?: string;
  };
}

// Define newsletter subscription data
interface NewsletterSubscription {
  id: string;
  name: string;
  email: string;
  company?: string;
  timestamp: Date;
  status: 'pending' | 'success' | 'failed';
}

// Server Action for newsletter signup
async function subscribeToNewsletter(
  prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const phone = formData.get('phone') as string;

  // Validation
  const errors: NonNullable<NewsletterFormState['errors']> = {};
  
  if (!name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the errors below',
      errors,
    };
  }

  try {
    // Call the newsletter API to save to Google Sheets
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || '',
        company: company?.trim() || '',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Subscription failed');
    }

    // Trigger catalog download if available
    if (result.data?.catalogDownloadUrl) {
      // Create download link
      const link = document.createElement('a');
      link.href = result.data.catalogDownloadUrl;
      link.download = 'Acuron-Medical-Catalog.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    return {
      status: 'success',
      message: 'Successfully subscribed! Your catalog download has started.',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.',
    };
  }
}

interface NewsletterWithActionsProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function NewsletterWithActions({ isOpen, onClose, onSuccess }: NewsletterWithActionsProps) {
  const { selectedCountry } = useCountryStore();
  
  // Use React 19's useActionState
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, {
    status: 'idle' as const,
  });

  // Use useOptimistic for immediate subscription feedback
  const [optimisticSubscriptions, addOptimisticSubscription] = useOptimistic(
    [] as NewsletterSubscription[],
    (currentSubscriptions, newSubscription: NewsletterSubscription) => [
      ...currentSubscriptions,
      newSubscription,
    ]
  );

  // Handle form submission with optimistic updates
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;

    // Add optimistic subscription
    const optimisticSub: NewsletterSubscription = {
      id: Date.now().toString(),
      name: name || 'Anonymous',
      email: email || '',
      company: company || undefined,
      timestamp: new Date(),
      status: 'pending',
    };

    addOptimisticSubscription(optimisticSub);

    // Call the server action
    await formAction(formData);
    
    // Handle success
    if (state.status === 'success') {
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
    }
  };

  // Localization helper
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const downloadCatalogText = getLocalizedContent('Download Medical Catalog', {
    de: 'Medizinischen Katalog herunterladen',
    fr: 'Télécharger le catalogue médical',
    ja: '医療カタログをダウンロード',
    zh: '下载医疗目录',
    pt: 'Baixar Catálogo Médico'
  });

  const subscribeNewsletterText = getLocalizedContent(
    'Subscribe to our newsletter to receive the latest updates on medical products and innovations.',
    {
      de: 'Abonnieren Sie unseren Newsletter, um die neuesten Updates zu medizinischen Produkten und Innovationen zu erhalten.',
      fr: 'Abonnez-vous à notre newsletter pour recevoir les dernières mises à jour sur les produits médicaux et les innovations.',
      ja: '医療製品とイノベーションの最新情報を受け取るために、ニュースレターを購読してください。',
      zh: '订阅我们的时事通讯，获取医疗产品和创新的最新更新。',
      pt: 'Inscreva-se em nossa newsletter para receber as últimas atualizações sobre produtos médicos e inovações.'
    }
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0F4679] to-[#1E5A8D] rounded-full">
            <Download size={28} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            {downloadCatalogText}
          </h2>
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {subscribeNewsletterText}
          </p>
        </div>

        {/* Success/Error Messages */}
        {state.message && (
          <div className={`mx-6 mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
            state.status === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {state.status === 'success' ? (
              <CheckCircle size={16} className="text-green-600" />
            ) : (
              <AlertCircle size={16} className="text-red-600" />
            )}
            <span>{state.message}</span>
          </div>
        )}

        {/* Optimistic Subscriptions Display */}
        {optimisticSubscriptions.length > 0 && (
          <div className="mx-6 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-blue-800">
              <Loader2 size={14} className="animate-spin" />
              <span>Processing subscription for {optimisticSubscriptions[optimisticSubscriptions.length - 1].name}...</span>
            </div>
          </div>
        )}

        {/* Form */}
        <form action={handleSubmit} className="px-6 pb-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                {getLocalizedContent('Full Name', {
                  de: 'Vollständiger Name',
                  fr: 'Nom complet',
                  ja: 'フルネーム',
                  zh: '全名',
                  pt: 'Nome Completo'
                })} *
              </label>
              <input
                type="text"
                name="name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  state.errors?.name ? 'border-red-300' : 'border-gray-200'
                } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm`}
                placeholder={getLocalizedContent('Enter your full name', {
                  de: 'Geben Sie Ihren vollständigen Namen ein',
                  fr: 'Entrez votre nom complet',
                  ja: 'フルネームを入力してください',
                  zh: '输入您的全名',
                  pt: 'Digite seu nome completo'
                })}
                disabled={isPending}
              />
              {state.errors?.name && (
                <p className="mt-1 text-xs text-red-600">{state.errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                {getLocalizedContent('Email Address', {
                  de: 'E-Mail-Adresse',
                  fr: 'Adresse e-mail',
                  ja: 'メールアドレス',
                  zh: '电子邮件地址',
                  pt: 'Endereço de E-mail'
                })} *
              </label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-3 rounded-xl border ${
                  state.errors?.email ? 'border-red-300' : 'border-gray-200'
                } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm`}
                placeholder={getLocalizedContent('Enter your email address', {
                  de: 'Geben Sie Ihre E-Mail-Adresse ein',
                  fr: 'Entrez votre adresse e-mail',
                  ja: 'メールアドレスを入力してください',
                  zh: '输入您的电子邮件地址',
                  pt: 'Digite seu endereço de e-mail'
                })}
                disabled={isPending}
              />
              {state.errors?.email && (
                <p className="mt-1 text-xs text-red-600">{state.errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getLocalizedContent('Phone Number', {
                  de: 'Telefonnummer',
                  fr: 'Numéro de téléphone',
                  ja: '電話番号',
                  zh: '电话号码',
                  pt: 'Número de Telefone'
                })} (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
                placeholder={getLocalizedContent('Enter your phone number', {
                  de: 'Geben Sie Ihre Telefonnummer ein',
                  fr: 'Entrez votre numéro de téléphone',
                  ja: '電話番号を入力してください',
                  zh: '输入您的电话号码',
                  pt: 'Digite seu número de telefone'
                })}
                disabled={isPending}
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 size={16} className="inline mr-2" />
                {getLocalizedContent('Company/Organization', {
                  de: 'Firma/Organisation',
                  fr: 'Entreprise/Organisation',
                  ja: '会社/組織',
                  zh: '公司/组织',
                  pt: 'Empresa/Organização'
                })}
              </label>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
                placeholder={getLocalizedContent('Enter company name (optional)', {
                  de: 'Firmenname eingeben (optional)',
                  fr: 'Entrez le nom de l\'entreprise (optionnel)',
                  ja: '会社名を入力してください（任意）',
                  zh: '输入公司名称（可选）',
                  pt: 'Digite o nome da empresa (opcional)'
                })}
                disabled={isPending}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                isPending
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#0F4679] to-[#158C07] hover:from-[#0D3A65] hover:to-[#126E06] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isPending ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  {getLocalizedContent('Subscribing...', {
                    de: 'Abonnieren...',
                    fr: 'Inscription...',
                    ja: '購読中...',
                    zh: '订阅中...',
                    pt: 'Inscrevendo...'
                  })}
                </div>
              ) : (
                getLocalizedContent('Download Catalog Now', {
                  de: 'Katalog jetzt herunterladen',
                  fr: 'Télécharger le catalogue maintenant',
                  ja: '今すぐカタログをダウンロード',
                  zh: '立即下载目录',
                  pt: 'Baixar Catálogo Agora'
                })
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 