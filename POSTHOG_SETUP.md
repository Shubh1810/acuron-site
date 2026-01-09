# PostHog Analytics Setup Guide

## 🦔 Complete PostHog Integration for Acuron Products

This guide explains how PostHog analytics is configured in your Next.js application with a robust, production-ready setup.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Architecture](#architecture)
5. [Features Enabled](#features-enabled)
6. [Usage Examples](#usage-examples)
7. [Privacy & Compliance](#privacy--compliance)
8. [Troubleshooting](#troubleshooting)
9. [Best Practices](#best-practices)

---

## Overview

PostHog is a powerful open-source product analytics platform that provides:
- **Event tracking** - Track user actions and behaviors
- **Session recording** - Watch real user sessions to identify UX issues
- **Feature flags** - Roll out features gradually and A/B test
- **Error tracking** - Monitor and debug production errors
- **Performance monitoring** - Track page load times and web vitals
- **User identification** - Understand who your users are
- **Surveys** - Collect user feedback directly in your app

---

## Installation

### 1. Install PostHog Packages

```bash
npm install posthog-js posthog-node
```

Or with yarn:

```bash
yarn add posthog-js posthog-node
```

### 2. Install Type Definitions (Already included with posthog-js)

TypeScript types are automatically included with `posthog-js`.

---

## Environment Variables

### Required Environment Variables

Create or update your `.env.local` file with the following variables:

```env
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### How to Get Your PostHog Credentials

1. **Sign up for PostHog**: Visit [PostHog](https://posthog.com/) and create an account (free tier available)
2. **Create a Project**: Create a new project for your website
3. **Get API Key**: 
   - Go to Project Settings → Project API Key
   - Copy the key (starts with `phc_`)
4. **Choose Host**:
   - US Cloud: `https://us.i.posthog.com`
   - EU Cloud: `https://eu.i.posthog.com`
   - Self-hosted: Your custom PostHog URL

### Environment File Example

```bash
# .env.local
NEXT_PUBLIC_POSTHOG_KEY=phc_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Note: NEXT_PUBLIC_ prefix makes these variables accessible in the browser
```

---

## Architecture

### File Structure

```
acuron-site/
├── app/
│   ├── providers/
│   │   └── PostHogProvider.tsx        # PostHog initialization & provider
│   ├── components/
│   │   └── PostHogErrorBoundary.tsx   # Error tracking component
│   ├── lib/
│   │   └── posthog-utils.ts           # Utility functions for tracking
│   └── layout.tsx                      # Root layout with PostHog integration
└── .env.local                          # Environment variables (not in git)
```

### Components Explanation

#### 1. **PostHogProvider** (`app/providers/PostHogProvider.tsx`)
- Initializes PostHog with configuration
- Provides PostHog instance to the entire app
- Handles pageview tracking automatically
- Prevents double initialization in development

#### 2. **PostHogErrorBoundary** (`app/components/PostHogErrorBoundary.tsx`)
- Catches React errors and reports them to PostHog
- Displays user-friendly error fallback UI
- Tracks unhandled errors and promise rejections

#### 3. **PostHog Utilities** (`app/lib/posthog-utils.ts`)
- Centralized functions for tracking custom events
- Type-safe wrappers for PostHog methods
- Business-specific tracking functions

---

## Features Enabled

### ✅ Auto-Capture Events
- Button clicks
- Form submissions
- Link clicks
- Input changes
- Custom elements with `data-track` attribute

### ✅ Session Recording
- Records user sessions for replay
- Captures console logs
- Records network requests
- Respects privacy settings

### ✅ Performance Monitoring
- Page load times
- Core Web Vitals
- Custom performance metrics

### ✅ Feature Flags
- A/B testing capabilities
- Gradual feature rollouts
- User-specific features

### ✅ Error Tracking
- React error boundary integration
- Unhandled error capture
- Promise rejection tracking
- Detailed error context

### ✅ Privacy Controls
- Respects Do Not Track (DNT)
- Opt-in/opt-out functionality
- Cookie consent integration
- GDPR compliant

---

## Usage Examples

### Basic Event Tracking

```typescript
import { trackEvent } from '@/app/lib/posthog-utils';

// Track button click
trackEvent.buttonClick('Download Catalog', {
  product_id: 'surgical-gown-001',
  location: 'product_page'
});

// Track form submission
trackEvent.formSubmit('Contact Form', true, {
  form_location: 'footer'
});

// Track product view
trackEvent.productViewed('prod_123', 'Surgical Gown', 'PPE');
```

### User Identification

```typescript
import { identifyUser } from '@/app/lib/posthog-utils';

// When user logs in or provides info
identifyUser('user_12345', {
  email: 'hospital@example.com',
  name: 'Hospital Admin',
  company: 'City General Hospital',
  userType: 'hospital'
});
```

### Feature Flags

```typescript
import { featureFlags } from '@/app/lib/posthog-utils';

// Check if feature is enabled
const showNewCatalog = featureFlags.isEnabled('new_catalog_ui');

// Get multivariate flag value
const buttonColor = featureFlags.getValue('checkout_button_color');

// Use in component
function ProductPage() {
  const [showFeature, setShowFeature] = useState(false);

  useEffect(() => {
    featureFlags.onFeatureFlagsReady(() => {
      setShowFeature(featureFlags.isEnabled('enhanced_product_view'));
    });
  }, []);

  return showFeature ? <EnhancedView /> : <StandardView />;
}
```

### Track Custom Events in Components

```typescript
// In a product component
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';

export function ProductCard({ product }) {
  const handleViewDetails = () => {
    trackEvent.productViewed(
      product.id,
      product.name,
      product.category
    );
  };

  const handleInquiry = () => {
    trackEvent.productInquiry(
      product.id,
      product.name,
      'whatsapp'
    );
  };

  return (
    <div>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={handleInquiry}>Inquire on WhatsApp</button>
    </div>
  );
}
```

### Track Form Submissions

```typescript
// In contact form
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';

export function ContactForm() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackEvent.contactFormSubmitted({
          name: formData.name,
          email: formData.email,
          subject: formData.subject
        });
      }
    } catch (error) {
      trackEvent.errorOccurred('form_submission', error.message);
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Session Recording Control

```typescript
import { sessionRecording } from '@/app/lib/posthog-utils';

// Start recording
sessionRecording.start();

// Stop recording (e.g., on sensitive pages)
sessionRecording.stop();

// Check if recording is active
const isRecording = sessionRecording.isActive();

// Get session URL for support
const sessionUrl = sessionRecording.getUrl();
```

---

## Privacy & Compliance

### GDPR Compliance

PostHog is GDPR compliant by default. Our setup includes:

1. **Cookie Consent Integration**: Works with your existing `CookieBanner` component
2. **Opt-out Mechanism**: Users can opt out of tracking
3. **Data Retention**: Configure in PostHog dashboard
4. **Right to Deletion**: Users can request data deletion

### Implementing Opt-In/Opt-Out

```typescript
import { privacy } from '@/app/lib/posthog-utils';

// In your cookie consent component
function handleCookieConsent(accepted: boolean) {
  if (accepted) {
    privacy.optIn();
  } else {
    privacy.optOut();
  }
}

// Check opt-out status
const hasOptedOut = privacy.hasOptedOut();
```

### Do Not Track (DNT)

PostHog automatically respects the browser's DNT setting. This is configured in the provider:

```typescript
respect_dnt: true, // Already set in PostHogProvider
```

---

## Troubleshooting

### PostHog Not Tracking Events

1. **Check Environment Variables**:
   ```bash
   # Verify .env.local has correct values
   echo $NEXT_PUBLIC_POSTHOG_KEY
   ```

2. **Check Browser Console**:
   - Open DevTools → Console
   - Look for PostHog initialization message
   - Enable debug mode: Call `posthog.debug()` in console

3. **Verify Network Requests**:
   - Open DevTools → Network
   - Filter by "posthog" or "i.posthog.com"
   - Check if requests are being sent

4. **Check Ad Blockers**:
   - Some ad blockers block PostHog
   - Try with blockers disabled
   - Consider implementing a reverse proxy

### Events Not Appearing in Dashboard

- **Wait Time**: Events can take 1-2 minutes to appear
- **Project Selection**: Ensure you're viewing the correct project
- **Date Range**: Check dashboard date filter

### TypeScript Errors

If you get TypeScript errors, ensure `posthog-js` is installed correctly:

```bash
npm install --save-dev @types/node
```

### Hydration Errors

The provider is wrapped with `'use client'` directive to prevent hydration issues. If you still experience them:

1. Ensure PostHog is only initialized on the client
2. Check that `suppressHydrationWarning` is set in layout
3. Use `useEffect` for feature flag checks

---

## Best Practices

### 1. Track Meaningful Events

Don't track everything—focus on events that provide actionable insights:

✅ **Good Events**:
- Product views and inquiries
- Form completions
- Download actions
- Critical user journeys

❌ **Avoid**:
- Every mouse movement
- Scroll events without purpose
- Redundant events

### 2. Use Descriptive Event Names

```typescript
// ❌ Bad
posthog.capture('click');

// ✅ Good
trackEvent.buttonClick('Download Product Catalog', {
  product: 'surgical-gown',
  location: 'product_page'
});
```

### 3. Add Context with Properties

Always include relevant properties:

```typescript
trackEvent.productViewed(productId, productName, {
  category: 'PPE',
  price: 299,
  in_stock: true,
  source: 'search_results'
});
```

### 4. Identify Users Appropriately

Only identify when you have meaningful user information:

```typescript
// ✅ Good - User provided info
identifyUser('user_123', {
  email: 'contact@hospital.com',
  company: 'City Hospital',
  userType: 'hospital'
});

// ❌ Bad - No useful information
identifyUser('anonymous_123');
```

### 5. Use Feature Flags for Gradual Rollouts

```typescript
// Create feature flag in PostHog dashboard
// Then use in code:
if (featureFlags.isEnabled('new_checkout_flow')) {
  return <NewCheckout />;
}
return <OldCheckout />;
```

### 6. Monitor Performance

Track custom performance metrics:

```typescript
import { performance } from '@/app/lib/posthog-utils';

// Track page load
useEffect(() => {
  performance.trackPageLoad('Product Catalog');
}, []);

// Track custom timing
const startTime = Date.now();
// ... do something ...
const endTime = Date.now();
performance.trackTiming('data_fetch', 'products', endTime - startTime);
```

### 7. Respect User Privacy

```typescript
// Before sensitive operations
sessionRecording.stop();

// After sensitive operations
sessionRecording.start();
```

---

## PostHog Dashboard Setup

### 1. Create Insights

1. Go to **Insights** in PostHog
2. Click **New Insight**
3. Select event type (e.g., `product_viewed`)
4. Choose visualization (trends, funnels, retention)
5. Save and add to dashboard

### 2. Set Up Funnels

Track conversion flows:

```
1. Page View (Homepage)
2. Product Viewed
3. Contact Form Opened
4. Contact Form Submitted
```

### 3. Create Dashboards

Recommended dashboards:

- **Overview Dashboard**: Key metrics, user count, page views
- **Product Analytics**: Product views, inquiries, popular items
- **Form Performance**: Form submissions, abandonment rate
- **Error Tracking**: Error counts, affected users
- **Performance**: Page load times, web vitals

### 4. Set Up Alerts

Create alerts for:
- Sudden drops in form submissions
- Increase in error rates
- Page load time spikes

---

## Advanced Configuration

### Server-Side Tracking (Optional)

For server-side events (e.g., API calls, background jobs):

```typescript
// app/api/some-route/route.ts
import { PostHog } from 'posthog-node';

const posthog = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY!,
  { host: process.env.NEXT_PUBLIC_POSTHOG_HOST }
);

export async function POST(request: Request) {
  // Track server-side event
  posthog.capture({
    distinctId: 'user_123',
    event: 'server_action_completed',
    properties: {
      action: 'data_export',
      success: true
    }
  });

  // Always shutdown when done
  await posthog.shutdown();
}
```

### Reverse Proxy (Recommended for Production)

To avoid ad blockers, set up a reverse proxy:

1. Update `next.config.js`:
```javascript
async rewrites() {
  return [
    {
      source: '/ingest/:path*',
      destination: 'https://us.i.posthog.com/:path*',
    },
  ];
}
```

2. Update PostHogProvider:
```typescript
api_host: '/ingest',
```

---

## Support & Resources

### PostHog Resources
- [PostHog Documentation](https://posthog.com/docs)
- [Next.js Integration Guide](https://posthog.com/docs/libraries/next-js)
- [PostHog Community](https://posthog.com/questions)

### Acuron Internal
- Check `POSTHOG_ENV_SETUP.md` for environment configuration
- See `posthog-utils.ts` for available tracking functions
- Review `PostHogProvider.tsx` for initialization details

---

## Changelog

### v1.0.0 (January 2026)
- ✅ Initial PostHog setup
- ✅ Auto-capture configuration
- ✅ Session recording enabled
- ✅ Error boundary integration
- ✅ Feature flags support
- ✅ Performance monitoring
- ✅ Privacy controls
- ✅ Comprehensive utility functions
- ✅ TypeScript support

---

## Next Steps

1. ✅ Install PostHog packages
2. ⚠️ Add environment variables to `.env.local`
3. ⚠️ Create PostHog project and get API key
4. ⚠️ Test tracking in development
5. ⚠️ Create insights and dashboards
6. ⚠️ Set up feature flags (optional)
7. ⚠️ Deploy to production

---

## Questions?

For issues or questions:
1. Check this documentation
2. Review PostHog logs in browser console
3. Check PostHog's status page: https://status.posthog.com
4. Contact PostHog support: https://posthog.com/support

---

**Built with ❤️ for Acuron Products India**

