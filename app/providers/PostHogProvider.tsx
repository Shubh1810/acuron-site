'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from '@posthog/react';
import React, { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * PostHog Provider Component
 * 
 * Purpose: Initializes PostHog analytics and provides it to the entire app
 * Features:
 * - Auto-capture pageviews and clicks
 * - Session recording
 * - Feature flags
 * - Error tracking
 * - Performance monitoring
 */

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization in development (React StrictMode)
    if (isInitialized.current) return;

    const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    // Only initialize if API key is present
    if (!POSTHOG_KEY) {
      console.warn('PostHog API key is missing. Analytics will not be tracked.');
      return;
    }

    // Initialize PostHog with comprehensive configuration
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      
      // Use latest defaults for breaking changes
      defaults: '2025-11-30',
      
      // Enable autocapture for automatic event tracking
      autocapture: {
        dom_event_allowlist: ['click', 'submit', 'change'], // Only capture specific events
        url_allowlist: [window.location.origin], // Only track your domain
        element_allowlist: ['button', 'a', 'input', 'select', 'textarea'], // Track specific elements
        css_selector_allowlist: ['[data-track]'], // Track elements with data-track attribute
      },
      
      // Capture pageviews automatically (set to false if you want manual control)
      capture_pageview: false, // We'll handle this manually for better control
      
      // Session recording configuration
      session_recording: {
        recordCrossOriginIframes: false,
        recordHeaders: true,
        recordBody: true,
      },
      
      // Performance monitoring
      capture_performance: true,
      
      // Enable feature flags
      bootstrap: {
        featureFlags: {},
      },
      
      // Privacy settings
      respect_dnt: true, // Respect Do Not Track browser setting
      opt_out_capturing_by_default: false,
      
      // Advanced options
      loaded: (ph) => {
        // This callback runs after PostHog is fully loaded
        if (process.env.NODE_ENV === 'development') {
          console.log('PostHog initialized successfully');
          // Optionally enable debug mode in development
          ph.debug();
        }
      },
      
      // Persistence configuration
      persistence: 'localStorage+cookie',
      
      // Secure cookie settings
      secure_cookie: process.env.NODE_ENV === 'production',
      
      // Error handling
      on_xhr_error: (failedRequest) => {
        console.error('PostHog XHR Error:', failedRequest);
      },
    });

    isInitialized.current = true;

    // Cleanup on unmount
    return () => {
      // Don't reset in production to maintain session
      if (process.env.NODE_ENV === 'development') {
        posthog.reset();
      }
    };
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

/**
 * PageView Tracker Component
 * 
 * Tracks pageviews automatically on route changes
 * Add this component inside PostHogProvider in your layout
 */
function PostHogPageViewInternal() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      
      // Capture pageview with additional properties
      posthog.capture('$pageview', {
        $current_url: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageView() {
  return (
    <React.Suspense fallback={null}>
      <PostHogPageViewInternal />
    </React.Suspense>
  );
}

