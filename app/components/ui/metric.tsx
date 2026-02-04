'use client';

import { useEffect, useRef, useState } from 'react';

interface MetricProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  labelClassName?: string;
}

export default function Metric({ 
  value, 
  label, 
  suffix = '+', 
  className = '',
  labelClassName = 'text-white/50'
}: MetricProps) {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Simple easing function for smooth animation
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Animation function with smooth easing
  const animateCounter = () => {
    if (!isVisible) {
      setCounter(0);
      return;
    }
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Calculate the current value with easing
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(easedProgress * value);
      setCounter(currentValue);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we land exactly on the target value
        setCounter(value);
      }
    };
    
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setCounter(0); // Reset counter before animation
    animationRef.current = requestAnimationFrame(animate);
  };

  // Set up intersection observer
  useEffect(() => {
    if (!counterRef.current) return;

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before the element is fully visible
    });

    observerRef.current.observe(counterRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      // Clean up any ongoing animations
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Trigger animation when visibility changes
  useEffect(() => {
    animateCounter();
    
    return () => {
      // Clean up any ongoing animations
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, value]);

  return (
    <div className={`flex flex-col items-center ${className}`} ref={counterRef}>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-1">
        {counter}
        {suffix}
      </div>
      <div className={`text-xs sm:text-sm md:text-base ${labelClassName}`}>{label}</div>
    </div>
  );
}
