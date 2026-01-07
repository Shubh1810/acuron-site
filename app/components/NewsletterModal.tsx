'use client';

import { useState } from 'react';
import { X, Download, Mail, User, Building2, Phone } from 'lucide-react';
import { useCountryStore } from '../../lib/store';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function NewsletterModal({ isOpen, onClose, onSuccess }: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { selectedCountry } = useCountryStore();

  // Get localized content based on selected country
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

  const fullNameText = getLocalizedContent('Full Name', {
    de: 'Vollständiger Name',
    fr: 'Nom complet',
    ja: 'フルネーム',
    zh: '全名',
    pt: 'Nome Completo'
  });

  const emailAddressText = getLocalizedContent('Email Address', {
    de: 'E-Mail-Adresse',
    fr: 'Adresse e-mail',
    ja: 'メールアドレス',
    zh: '电子邮件地址',
    pt: 'Endereço de E-mail'
  });

  const phoneText = getLocalizedContent('Phone Number', {
    de: 'Telefonnummer',
    fr: 'Numéro de téléphone',
    ja: '電話番号',
    zh: '电话号码',
    pt: 'Número de Telefone'
  });

  const companyText = getLocalizedContent('Company/Organization', {
    de: 'Firma/Organisation',
    fr: 'Entreprise/Organisation',
    ja: '会社/組織',
    zh: '公司/组织',
    pt: 'Empresa/Organização'
  });

  const downloadNowText = getLocalizedContent('Download Catalog Now', {
    de: 'Katalog jetzt herunterladen',
    fr: 'Télécharger le catalogue maintenant',
    ja: '今すぐカタログをダウンロード',
    zh: '立即下载目录',
    pt: 'Baixar Catálogo Agora'
  });

  const enterNamePlaceholder = getLocalizedContent('Enter your full name', {
    de: 'Geben Sie Ihren vollständigen Namen ein',
    fr: 'Entrez votre nom complet',
    ja: 'フルネームを入力してください',
    zh: '输入您的全名',
    pt: 'Digite seu nome completo'
  });

  const enterEmailPlaceholder = getLocalizedContent('Enter your email address', {
    de: 'Geben Sie Ihre E-Mail-Adresse ein',
    fr: 'Entrez votre adresse e-mail',
    ja: 'メールアドレスを入力してください',
    zh: '输入您的电子邮件地址',
    pt: 'Digite seu endereço de e-mail'
  });

  const enterPhonePlaceholder = getLocalizedContent('Enter your phone number', {
    de: 'Geben Sie Ihre Telefonnummer ein',
    fr: 'Entrez votre numéro de téléphone',
    ja: '電話番号を入力してください',
    zh: '输入您的电话号码',
    pt: 'Digite seu número de telefone'
  });

  const enterCompanyPlaceholder = getLocalizedContent('Enter company name (optional)', {
    de: 'Firmenname eingeben (optional)',
    fr: 'Entrez le nom de l\'entreprise (optionnel)',
    ja: '会社名を入力してください（任意）',
    zh: '输入公司名称（可选）',
    pt: 'Digite o nome da empresa (opcional)'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    
    try {
      // Send newsletter signup to API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Newsletter signup successful:', result);
        
        // Trigger catalog download if available
        if (result.data?.catalogDownloadUrl) {
          const link = document.createElement('a');
          link.href = result.data.catalogDownloadUrl;
          link.download = 'Acuron-Medical-Catalog.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
        // Reset form and show success
        setFormData({ name: '', email: '', phone: '', company: '' });
        onSuccess();
      } else {
        console.error('❌ Newsletter signup failed:', result);
        alert(result.error || 'Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('❌ Newsletter signup error:', error);
      alert('Failed to sign up. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                {fullNameText} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={enterNamePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                {emailAddressText} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={enterEmailPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone size={16} className="inline mr-2" />
                {phoneText} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={enterPhonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
                required
              />
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 size={16} className="inline mr-2" />
                {companyText}
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={enterCompanyPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200 text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
            className="w-full mt-6 bg-gradient-to-r from-[#0F4679] to-[#1E5A8D] text-white font-semibold py-3 px-6 rounded-xl hover:from-[#0D3C6B] hover:to-[#16599D] transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Download size={18} />
                <span>{downloadNowText}</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            By downloading, you agree to receive updates about our medical products and services.
          </p>
        </div>
      </div>
    </div>
  );
} 