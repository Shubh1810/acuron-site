'use client';

import { useEffect, useRef, useState } from 'react';

interface MetricProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  showDecimals?: boolean;
}

export default function Metric({ 
  value, 
  label, 
  suffix = '+', 
  className = '',
  showDecimals = false
}: MetricProps) {
  const [counter, setCounter] = useState(0);
  const [decimalPart, setDecimalPart] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  const [animationState, setAnimationState] = useState<'idle' | 'running' | 'finishing' | 'completed'>('idle');

  // Enhanced easing function for professional speedometer effect
  // This creates an exponential slowdown at the end
  const speedometerEasing = (t: number): number => {
    // Start fast, then dramatically slow down at the end
    // Combination of ease-out-cubic and exponential easing
    if (t >= 0.8) {
      // Last 20% of animation gets exponential slowdown
      const adjustedT = (t - 0.8) / 0.2; // Normalize to 0-1 range for the last 20%
      return 0.9 + (1 - Math.pow(1 - adjustedT, 5)) * 0.1; // Exponential approach to final value
    } else {
      // First 80% uses cubic easing for smooth acceleration
      const adjustedT = t / 0.8; // Normalize to 0-1 range for the first 80%
      return (1 - Math.pow(1 - adjustedT, 3)) * 0.9; // Cubic ease-out to 90% of value
    }
  };

  // Animation function with speedometer effect
  const animateCounter = () => {
    if (!isVisible) {
      setCounter(0);
      setDecimalPart(0);
      setAnimationState('idle');
      return;
    }
    
    setAnimationState('running');
    const duration = 3000; // Slower animation (3 seconds)
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = speedometerEasing(progress); // Apply specialized easing
      
      // Calculate the current value with easing
      const exactValue = easedProgress * value;
      const integerPart = Math.floor(exactValue);
      
      // For the speedometer effect, show decimal points during animation
      // but only when we're in the slowing down phase
      if (showDecimals && progress > 0.6) {
        // Extract decimal part (only show 1 decimal place)
        const decimal = Math.floor((exactValue - integerPart) * 10);
        setDecimalPart(decimal);
      } else {
        setDecimalPart(0);
      }
      
      setCounter(integerPart);
      
      // Update animation state for visual effects
      if (progress >= 0.8) {
        setAnimationState('finishing');
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we land exactly on the target value
        setCounter(value);
        setDecimalPart(0);
        // Add a small pulse effect when complete
        setAnimationState('completed');
        // Reset to idle after the pulse animation finishes
        setTimeout(() => setAnimationState('idle'), 600);
      }
    };
    
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setCounter(0); // Reset counter before animation
    setDecimalPart(0);
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
      <div 
        className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-300 via-lime-300 to-emerald-300 bg-clip-text text-transparent mb-1 transition-all duration-300
          ${animationState === 'running' ? 'scale-110' : ''}
          ${animationState === 'finishing' ? 'scale-105' : ''}
          ${animationState === 'completed' ? 'scale-110 animate-pulse' : ''}
        `}
      >
        {counter}
        {showDecimals && decimalPart > 0 && (
          <span className="text-base sm:text-lg md:text-xl">.{decimalPart}</span>
        )}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-white/50">{label}</div>
    </div>
  );
}
