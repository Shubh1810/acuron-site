'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientWrapperProps {
  children: React.ReactNode;
}

const LOADING_SCREEN_SESSION_KEY = 'hasShownAcuronLoadingScreen';

export default function ClientWrapper({ children }: ClientWrapperProps) {
  // Initialize isLoading to true for the first render to match the server.
  const [isLoading, setIsLoading] = useState(true);

  // Loading screen logic
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!sessionStorage.getItem(LOADING_SCREEN_SESSION_KEY)) {
        // Not shown before in this session: show for 1.5s and set session key.
        const loadingTimer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        sessionStorage.setItem(LOADING_SCREEN_SESSION_KEY, 'true');
        return () => clearTimeout(loadingTimer); // Cleanup timer
      } else {
        // Already shown in this session: hide loading screen immediately.
        setIsLoading(false);
      }
    }
  }, []); // Empty dependency array: run once on mount

  // Animation on scroll functionality
  useEffect(() => {
    // Only run animation setup if not loading, to prevent trying to find elements that aren't rendered yet.
    if (isLoading) return;

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    const counters = document.querySelectorAll('.counter');
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 400; 
      const steps = 15; 
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
      animatedElements.forEach(el => observer.unobserve(el));
      counters.forEach(counter => counterObserver.unobserve(counter));
    };
  }, [isLoading]); // Re-run animation setup when isLoading changes from true to false.

  return (
    <>
      {children}
      <LoadingScreen isVisible={isLoading} />
    </>
  );
} 