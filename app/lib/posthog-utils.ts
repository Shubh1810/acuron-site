import posthog from 'posthog-js';

/**
 * PostHog Utility Functions
 * 
 * Purpose: Centralized functions for tracking custom events, user properties, and feature flags
 * Usage: Import these functions throughout your app for consistent tracking
 */

/**
 * Track Custom Events
 */
export const trackEvent = {
  // User Actions
  buttonClick: (buttonName: string, metadata?: Record<string, any>) => {
    posthog.capture('button_clicked', {
      button_name: buttonName,
      ...metadata,
    });
  },

  formSubmit: (formName: string, success: boolean, metadata?: Record<string, any>) => {
    posthog.capture('form_submitted', {
      form_name: formName,
      success,
      ...metadata,
    });
  },

  linkClick: (linkUrl: string, linkText: string) => {
    posthog.capture('link_clicked', {
      link_url: linkUrl,
      link_text: linkText,
    });
  },

  // Product-specific events
  productViewed: (productId: string, productName: string, category?: string) => {
    posthog.capture('product_viewed', {
      product_id: productId,
      product_name: productName,
      category,
    });
  },

  productInquiry: (productId: string, productName: string, inquiryType: string) => {
    posthog.capture('product_inquiry', {
      product_id: productId,
      product_name: productName,
      inquiry_type: inquiryType,
    });
  },

  catalogDownload: (productId?: string) => {
    posthog.capture('catalog_downloaded', {
      product_id: productId,
      timestamp: new Date().toISOString(),
    });
  },

  // Communication events
  contactFormSubmitted: (formData: { name: string; email: string; subject?: string }) => {
    posthog.capture('contact_form_submitted', {
      form_type: 'contact',
      has_subject: !!formData.subject,
    });
  },

  newsletterSubscribed: (email: string) => {
    posthog.capture('newsletter_subscribed', {
      timestamp: new Date().toISOString(),
    });
  },

  chatbotInteraction: (action: string, message?: string) => {
    posthog.capture('chatbot_interaction', {
      action,
      has_message: !!message,
    });
  },

  whatsappClick: (source: string) => {
    posthog.capture('whatsapp_clicked', {
      source,
    });
  },

  // Navigation events
  pageSection: (sectionName: string, action: 'viewed' | 'scrolled') => {
    posthog.capture('page_section', {
      section_name: sectionName,
      action,
    });
  },

  // Search and filter events
  searchPerformed: (query: string, resultsCount: number) => {
    posthog.capture('search_performed', {
      query,
      results_count: resultsCount,
    });
  },

  filterApplied: (filterType: string, filterValue: string) => {
    posthog.capture('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
    });
  },

  // Error events
  errorOccurred: (errorType: string, errorMessage: string, metadata?: Record<string, any>) => {
    posthog.capture('error_occurred', {
      error_type: errorType,
      error_message: errorMessage,
      ...metadata,
    });
  },
};

/**
 * Identify User
 * Call this when a user logs in or provides identifying information
 */
export const identifyUser = (
  userId: string,
  userProperties?: {
    email?: string;
    name?: string;
    company?: string;
    phone?: string;
    userType?: 'hospital' | 'distributor' | 'individual' | 'other';
    [key: string]: any;
  }
) => {
  posthog.identify(userId, userProperties);
};

/**
 * Set User Properties
 * Update user properties without changing the user ID
 */
export const setUserProperties = (properties: Record<string, any>) => {
  posthog.people.set(properties);
};

/**
 * Group User (for B2B analytics)
 * Group users by organization, hospital, etc.
 */
export const setUserGroup = (
  groupType: 'company' | 'hospital' | 'organization',
  groupId: string,
  groupProperties?: Record<string, any>
) => {
  posthog.group(groupType, groupId, groupProperties);
};

/**
 * Reset User Session
 * Call this on logout
 */
export const resetUser = () => {
  posthog.reset();
};

/**
 * Feature Flags
 */
export const featureFlags = {
  // Check if a feature flag is enabled
  isEnabled: (flagKey: string): boolean => {
    return posthog.isFeatureEnabled(flagKey) ?? false;
  },

  // Get feature flag value (for multivariate flags)
  getValue: (flagKey: string): string | boolean | undefined => {
    return posthog.getFeatureFlag(flagKey);
  },

  // Get all active feature flags
  getAll: (): Record<string, string | boolean> => {
    return posthog.getActiveFlags() || {};
  },

  // Reload feature flags (useful after user identification)
  reload: async (): Promise<void> => {
    await posthog.reloadFeatureFlags();
  },

  // Register callback for when feature flags are loaded
  onFeatureFlagsReady: (callback: () => void) => {
    posthog.onFeatureFlags(callback);
  },
};

/**
 * Session Recording
 */
export const sessionRecording = {
  // Start session recording
  start: () => {
    posthog.startSessionRecording();
  },

  // Stop session recording
  stop: () => {
    posthog.stopSessionRecording();
  },

  // Check if session recording is active
  isActive: (): boolean => {
    return posthog.sessionRecordingStarted();
  },

  // Get session recording URL
  getUrl: (): string | undefined => {
    return posthog.get_session_replay_url();
  },
};

/**
 * Opt In/Out
 */
export const privacy = {
  // Opt out of tracking
  optOut: () => {
    posthog.opt_out_capturing();
  },

  // Opt in to tracking
  optIn: () => {
    posthog.opt_in_capturing();
  },

  // Check if user has opted out
  hasOptedOut: (): boolean => {
    return posthog.has_opted_out_capturing();
  },
};

/**
 * Performance Tracking
 */
export const performance = {
  // Track page load time
  trackPageLoad: (pageName: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      posthog.capture('page_load_time', {
        page_name: pageName,
        load_time_ms: pageLoadTime,
        dom_ready_time: perfData.domContentLoadedEventEnd - perfData.navigationStart,
      });
    }
  },

  // Track custom timing
  trackTiming: (category: string, variable: string, time: number) => {
    posthog.capture('custom_timing', {
      category,
      variable,
      time_ms: time,
    });
  },
};

/**
 * A/B Testing Helper
 */
export const abTest = {
  // Get variant for a test
  getVariant: (testName: string, defaultVariant: string = 'control'): string => {
    const variant = posthog.getFeatureFlag(testName);
    return typeof variant === 'string' ? variant : defaultVariant;
  },

  // Track experiment exposure
  trackExposure: (testName: string, variant: string) => {
    posthog.capture('experiment_exposure', {
      experiment_name: testName,
      variant,
    });
  },
};

/**
 * Surveys
 */
export const surveys = {
  // Get active surveys for current user
  getActiveSurveys: () => {
    // Note: This method requires surveys to be enabled in PostHog
    // Returns undefined if surveys feature is not available
    try {
      return (posthog as any).getActiveMatchingSurveys?.() || [];
    } catch (error) {
      console.warn('Surveys feature not available:', error);
      return [];
    }
  },
};

/**
 * Debug Helper (Development only)
 */
export const debug = {
  // Enable debug mode
  enable: () => {
    if (process.env.NODE_ENV === 'development') {
      posthog.debug(true);
    }
  },

  // Disable debug mode
  disable: () => {
    posthog.debug(false);
  },

  // Log current state
  logState: () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog State:', {
        distinctId: posthog.get_distinct_id(),
        sessionId: posthog.get_session_id(),
        featureFlags: posthog.getActiveFlags(),
        isOptedOut: posthog.has_opted_out_capturing(),
      });
    }
  },
};

export default {
  trackEvent,
  identifyUser,
  setUserProperties,
  setUserGroup,
  resetUser,
  featureFlags,
  sessionRecording,
  privacy,
  performance,
  abTest,
  surveys,
  debug,
};

