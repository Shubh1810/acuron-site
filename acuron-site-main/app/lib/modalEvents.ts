// Custom event system for triggering newsletter modal from anywhere in the app

export const NEWSLETTER_MODAL_EVENT = 'open-newsletter-modal';

export const triggerNewsletterModal = () => {
  const event = new CustomEvent(NEWSLETTER_MODAL_EVENT);
  window.dispatchEvent(event);
};

export const useNewsletterModalTrigger = (callback: () => void) => {
  const handleEvent = () => {
    callback();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener(NEWSLETTER_MODAL_EVENT, handleEvent);
    
    return () => {
      window.removeEventListener(NEWSLETTER_MODAL_EVENT, handleEvent);
    };
  }
  
  return () => {};
};
