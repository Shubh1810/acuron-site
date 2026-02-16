"use client";
import { motion } from 'motion/react';
import { trackEvent } from '../lib/posthog-utils';

export default function WhatsAppWidget() {
  const phoneNumber = "919322961664"; // Your business WhatsApp number (with country code, no + or spaces)
  const defaultMessage = "Hello! I'm interested in learning more about Acuron's medical supplies.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    
    // Track WhatsApp click
    trackEvent.buttonClick('whatsapp_widget');
    trackEvent.whatsappClick('widget');
    
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-24 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-gradient-radial from-[#25D366] via-[#25D366]/90 to-[#128C7E] rounded-full shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/10"
        aria-label="Contact us on WhatsApp"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#25D366] via-[#25D366]/90 to-[#128C7E] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <svg 
            className="w-8 h-8 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-75"></div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
        Chat on WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900/95 rotate-45"></div>
      </div>
    </motion.div>
  );
}
