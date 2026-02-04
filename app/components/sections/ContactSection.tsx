'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCountryStore } from '../../../lib/store';
import { trackEvent } from '../../lib/posthog-utils';

export default function ContactSection() {
  const { selectedCountry } = useCountryStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  // Localization
  const getLocalizedContent = (englishText: string, translations: Record<string, string>) => {
    if (selectedCountry.useEnglishContent) {
      return englishText;
    }
    return translations[selectedCountry.language] || englishText;
  };

  const textContent = {
    getInTouch: getLocalizedContent('Get in Touch', { de: 'Kontakt aufnehmen', fr: 'Entrer en contact', ja: 'お問い合わせ', zh: '取得联系', pt: 'Entre em Contato' }),
    hereToHelp: getLocalizedContent("We're here to help you", { de: 'Wir helfen Ihnen gerne', fr: 'Nous sommes là pour vous aider', ja: 'お手伝いいたします', zh: '我们在这里为您提供帮助', pt: 'Estamos aqui para ajudá-lo' }),
    visitUs: getLocalizedContent('Manufacturing Plant', { de: 'Produktionsstätte', fr: 'Usine', ja: '製造工場', zh: '制造工厂', pt: 'Planta' }),
    headOffice: getLocalizedContent('Corporate Office', { de: 'Unternehmenszentrale', fr: 'Siège Social', ja: '本社', zh: '企業オフィス', pt: 'Sede' }),
    emailUs: getLocalizedContent('Email Us', { de: 'E-Mail', fr: 'E-mail', ja: 'メール', zh: '邮件', pt: 'E-mail' }),
    callUs: getLocalizedContent('Call Us', { de: 'Anrufen', fr: 'Appel', ja: '電話', zh: '致电', pt: 'Ligue' }),
    sendInquiry: getLocalizedContent('Send Inquiry', { de: 'Senden', fr: 'Envoyer', ja: '送信', zh: '发送', pt: 'Enviar' }),
    privacy: getLocalizedContent('By submitting this form, you agree to our', { de: 'Sie stimmen zu', fr: 'Vous acceptez', ja: '同意する', zh: '同意', pt: 'Você concorda' }),
    privacyPolicy: getLocalizedContent('Privacy Policy', { de: 'Datenschutz', fr: 'Confidentialité', ja: 'プライバシー', zh: '隐私', pt: 'Privacidade' }),
    success: getLocalizedContent('Thank you! Your inquiry has been submitted successfully. We will contact you soon.', { de: 'Danke!', fr: 'Merci!', ja: 'ありがとうございます', zh: '谢谢', pt: 'Obrigado!' }),
    error: getLocalizedContent('Sorry, there was an error submitting your inquiry. Please try again or contact us directly.', { de: 'Fehler', fr: 'Erreur', ja: 'エラー', zh: '错误', pt: 'Erro' }),
    labels: {
      name: getLocalizedContent('Full Name*', { de: 'Name*', fr: 'Nom*', ja: '名前*', zh: '姓名*', pt: 'Nome*' }),
      org: getLocalizedContent('Organization*', { de: 'Organisation*', fr: 'Organisation*', ja: '組織*', zh: '组织*', pt: 'Organização*' }),
      email: getLocalizedContent('Email*', { de: 'E-Mail*', fr: 'E-mail*', ja: 'メール*', zh: '邮箱*', pt: 'E-mail*' }),
      phone: getLocalizedContent('Phone', { de: 'Telefon', fr: 'Téléphone', ja: '電話', zh: '电话', pt: 'Telefone' }),
      product: getLocalizedContent('Product Interest', { de: 'Interesse', fr: 'Intérêt', ja: '関心', zh: '兴趣', pt: 'Interesse' }),
      message: getLocalizedContent('Message', { de: 'Nachricht', fr: 'Message', ja: 'メッセージ', zh: '消息', pt: 'Mensagem' })
    },
    placeholders: {
        name: getLocalizedContent('Enter Name', { de: 'Name', fr: 'Nom', ja: '名前', zh: '姓名', pt: 'Nome' }),
        org: getLocalizedContent('Company Name', { de: 'Firma', fr: 'Entreprise', ja: '会社名', zh: '公司', pt: 'Empresa' }),
        product: getLocalizedContent('Select product category', { de: 'Kategorie', fr: 'Catégorie', ja: 'カテゴリ', zh: '类别', pt: 'Categoria' }),
        message: getLocalizedContent('Tell us about your requirements...', { de: 'Anforderungen...', fr: 'Exigences...', ja: 'ご要望...', zh: '要求...', pt: 'Requisitos...' })
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackEvent.contactFormSubmitted({ name: formData.name, email: formData.email, subject: formData.productInterest });
        setFormData({ name: '', organization: '', email: '', phone: '', productInterest: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      trackEvent.formSubmit('contact_form', false, { error_message: 'Error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 bg-[#0F4679] overflow-hidden" id="contact-us-section">
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '30px 30px' }}>
      </div>

      {/* NEW: Fluid Green Northern Lights Halo - Bottom Right */}
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-t from-[#158C07] via-[#0FB36D] to-transparent opacity-30 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-10 right-0 w-[400px] h-[400px] bg-emerald-400/20 blur-[80px] animate-pulse pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Map & Info */}
          <div className="lg:col-span-5 space-y-6 text-white">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {textContent.getInTouch}
              </h2>
              <p className="text-blue-100 text-lg">
                {textContent.hereToHelp}
              </p>
            </div>

            {/* Info Card - Rounded & Minimal */}
            <div className="bg-white text-gray-900 border-2 border-black rounded-3xl overflow-hidden shadow-xl">
              {/* Map Section */}
              <div className="h-48 w-full border-b-2 border-black relative grayscale-[50%] hover:grayscale-0 transition-all duration-500">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0" 
                  scrolling="no" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3382007688183!2d72.82973997439017!3d19.13666768208044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73f095ce8ed%3A0x6bb63e63bffbda45!2sKuber%20Complex!5e0!3m2!1sen!2sin!4v1760012941486!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Details List */}
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-1 gap-5">
                    {/* Plant */}
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl border border-black flex items-center justify-center bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-1">{textContent.visitUs}</h3>
                            <p className="text-sm text-gray-600 leading-snug">Gala No. 112-114, Pritesh Complex, Dapoda Road, Bhiwandi, Thane - 421302, India</p>
                        </div>
                    </div>

                    {/* Office */}
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl border border-black flex items-center justify-center bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-1">{textContent.headOffice}</h3>
                            <p className="text-sm text-gray-600 leading-snug">138D, Kuber Complex, New Link Road, Andheri West, Mumbai - 400053, India</p>
                        </div>
                    </div>

                    {/* Contact Methods Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                         <div className="group">
                            <h3 className="font-bold text-xs uppercase tracking-wider mb-1 text-gray-500">{textContent.emailUs}</h3>
                            <a href="mailto:sales@acuron.in" className="text-black font-semibold hover:underline">sales@acuron.in</a>
                         </div>
                         <div className="group">
                            <h3 className="font-bold text-xs uppercase tracking-wider mb-1 text-gray-500">{textContent.callUs}</h3>
                            <a href="tel:+919322961664" className="text-black font-semibold hover:underline">+91 93229 61664</a>
                         </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form - Compact & Rounded */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 border-2 border-black rounded-3xl relative z-10">
              {/* Logo - Smaller container */}
              <div className="mb-6 w-[180px] h-12 relative">
                <Image src="/acprod.png" alt="Acuron Logo" fill className="object-contain object-left" priority />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.name}</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={textContent.placeholders.name}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.org}</label>
                    <input 
                      type="text" name="organization" value={formData.organization} onChange={handleInputChange} required placeholder={textContent.placeholders.org}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.email}</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.phone}*</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.product}</label>
                  <input 
                    type="text" name="productInterest" value={formData.productInterest} onChange={handleInputChange} placeholder={textContent.placeholders.product}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wide ml-1">{textContent.labels.message}</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder={textContent.placeholders.message}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-0 outline-none resize-none transition-colors duration-300 placeholder:text-gray-400 text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-bold text-center">✅ {textContent.success}</div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm font-bold text-center">❌ {textContent.error}</div>
                  )}

                  {/* RESTORED ORIGINAL BUTTON */}
                  <div className="relative group mt-2">
                    <div className="absolute -inset-0.5 rounded-xl opacity-80 bg-gradient-to-r from-[#158C07] via-[#0FB36D] to-[#3BB7EB] blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                      <span className="relative text-sm flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          textContent.sendInquiry
                        )}
                      </span>
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    {textContent.privacy} <Link href="/privacy" className="text-white hover:underline">{textContent.privacyPolicy}</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}