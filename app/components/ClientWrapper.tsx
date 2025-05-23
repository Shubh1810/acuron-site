'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Animation on scroll functionality
  useEffect(() => {
    // Show loading screen for at least 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Animate counters
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 400; // Animation duration in milliseconds (much faster)
      const steps = 15; // Even fewer steps for speedometer-like jumps
      const stepTime = duration / steps;
      const increment = target / steps;
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.round(current).toString();
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target.toString() + (target === 500 || target === 20 ? '+' : '');
        }
      };
      
      updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    return () => {
      clearTimeout(loadingTimer);
      animatedElements.forEach(el => observer.unobserve(el));
      counters.forEach(counter => counterObserver.unobserve(counter));
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen isVisible={true} />;
  }

  return <>{children}</>;
} 