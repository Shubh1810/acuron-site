# PostHog Analytics Integration - Complete Setup

## 🦔 Overview

This document provides a complete overview of the PostHog analytics integration for Acuron Products India website.

**Status**: ✅ Integration Complete - Pending Package Installation & API Key Configuration

---

## 📋 What Has Been Set Up

### 1. Core Components

#### **PostHog Provider** (`app/providers/PostHogProvider.tsx`)
- Initializes PostHog on application load
- Configures auto-capture, session recording, and performance monitoring
- Handles pageview tracking automatically
- Prevents double initialization in development
- Includes comprehensive configuration options

#### **Error Boundary** (`app/components/PostHogErrorBoundary.tsx`)
- Catches React errors and reports to PostHog
- Displays user-friendly error fallback UI
- Tracks unhandled errors and promise rejections
- Includes component stack traces for debugging

#### **Utility Library** (`app/lib/posthog-utils.ts`)
- Type-safe wrapper functions for PostHog
- Custom event tracking functions
- User identification and management
- Feature flag helpers
- Session recording controls
- Privacy controls (opt-in/opt-out)
- Performance tracking helpers
- A/B testing utilities

### 2. Integration Points

#### **Root Layout** (`app/layout.tsx`)
Updated to include:
- PostHog provider wrapping the entire app
- Error boundary for comprehensive error tracking
- Automatic pageview tracking component

### 3. Documentation

Four comprehensive documentation files:

1. **`POSTHOG_QUICK_START.md`** - Quick setup guide (START HERE)
2. **`POSTHOG_ENV_SETUP.md`** - Environment variables configuration
3. **`POSTHOG_SETUP.md`** - Complete feature documentation
4. **`POSTHOG_INTEGRATION_EXAMPLES.md`** - Real-world code examples

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Packages

```bash
npm install posthog-js posthog-node
```

### Step 2: Get PostHog API Key

1. Sign up at [PostHog.com](https://posthog.com/)
2. Get your API key from Project Settings
3. Copy the key (starts with `phc_`)

### Step 3: Configure Environment

Add to `.env.local`:

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Restart server and you're done! ✅

**Full instructions**: See `POSTHOG_QUICK_START.md`

---

## 🎯 Features Enabled

| Feature | Status | Description |
|---------|--------|-------------|
| Auto-capture | ✅ Enabled | Automatically tracks clicks, form submissions |
| Pageview Tracking | ✅ Enabled | Tracks page navigation automatically |
| Session Recording | ✅ Enabled | Records user sessions (configurable) |
| Error Tracking | ✅ Enabled | Catches and reports all errors |
| Performance Monitoring | ✅ Enabled | Tracks page load times, web vitals |
| Feature Flags | ✅ Enabled | A/B testing and gradual rollouts |
| User Identification | ✅ Ready | Track identified users |
| Custom Events | ✅ Ready | Track business-specific events |
| Privacy Controls | ✅ Enabled | GDPR compliant, DNT support |

---

## 📁 File Structure

```
acuron-site/
├── app/
│   ├── providers/
│   │   └── PostHogProvider.tsx          # PostHog initialization
│   ├── components/
│   │   └── PostHogErrorBoundary.tsx     # Error tracking
│   ├── lib/
│   │   └── posthog-utils.ts             # Utility functions
│   └── layout.tsx                        # Integration point (updated)
│
├── Documentation/
│   ├── POSTHOG_QUICK_START.md           # Quick start guide ⭐
│   ├── POSTHOG_ENV_SETUP.md             # Environment setup
│   ├── POSTHOG_SETUP.md                 # Complete documentation
│   ├── POSTHOG_INTEGRATION_EXAMPLES.md  # Code examples
│   └── README_POSTHOG.md                # This file
│
├── .env.local                            # Environment variables (you need to create)
└── package.json                          # Dependencies (updated)
```

---

## 🔧 Configuration

### Current Configuration

**Auto-capture Settings**:
- ✅ Button clicks
- ✅ Form submissions
- ✅ Input changes
- ✅ Link clicks
- ✅ Custom elements with `data-track` attribute

**Privacy Settings**:
- ✅ Respects Do Not Track (DNT)
- ✅ Opt-out functionality
- ✅ Cookie consent integration
- ✅ GDPR compliant

**Performance Settings**:
- ✅ Page load time tracking
- ✅ Web vitals monitoring
- ✅ Custom performance metrics

**Session Recording**:
- ✅ Records user sessions
- ✅ Captures console logs
- ✅ Records network requests
- ⚠️ Configurable (can be disabled on sensitive pages)

---

## 📊 Available Tracking Functions

### Quick Reference

```typescript
import { trackEvent } from '@/app/lib/posthog-utils';

// Track events
trackEvent.buttonClick('Button Name', { metadata });
trackEvent.productViewed(productId, productName, category);
trackEvent.contactFormSubmitted(formData);
trackEvent.newsletterSubscribed(email);
trackEvent.chatbotInteraction(action, message);
trackEvent.whatsappClick(source);

// User management
identifyUser(userId, { email, name, company });
setUserProperties({ role: 'admin' });
resetUser(); // On logout

// Feature flags
const isEnabled = featureFlags.isEnabled('feature_name');
const variant = featureFlags.getValue('ab_test');

// Privacy
privacy.optOut(); // Opt out of tracking
privacy.optIn();  // Opt in to tracking

// Session recording
sessionRecording.stop(); // Stop on sensitive pages
sessionRecording.start(); // Resume recording
```

**Full API**: See `app/lib/posthog-utils.ts`

---

## 💡 Usage Examples

### Example 1: Track Button Click

```typescript
import { trackEvent } from '@/app/lib/posthog-utils';

<button onClick={() => {
  trackEvent.buttonClick('Download Catalog', {
    location: 'product_page',
    product_id: 'surgical-gown-001'
  });
}}>
  Download Catalog
</button>
```

### Example 2: Track Form Submission

```typescript
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
      });
    }
  } catch (error) {
    trackEvent.errorOccurred('form_submission', error.message);
  }
};
```

### Example 3: Feature Flag

```typescript
import { featureFlags } from '@/app/lib/posthog-utils';

function ProductPage() {
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    featureFlags.onFeatureFlagsReady(() => {
      setShowNew(featureFlags.isEnabled('new_product_ui'));
    });
  }, []);

  return showNew ? <NewUI /> : <OldUI />;
}
```

**More examples**: See `POSTHOG_INTEGRATION_EXAMPLES.md`

---

## 🔒 Privacy & Compliance

### GDPR Compliance

✅ **Privacy by Default**:
- Respects browser Do Not Track (DNT) setting
- Opt-out mechanism available
- Cookie consent integration ready
- Data retention configurable in PostHog

### Integration with Cookie Banner

Your existing `CookieBanner` component can be integrated:

```typescript
import { privacy } from '@/app/lib/posthog-utils';

const handleAccept = () => {
  privacy.optIn();
  // ... rest of your logic
};

const handleDecline = () => {
  privacy.optOut();
  // ... rest of your logic
};
```

**Full example**: See `POSTHOG_INTEGRATION_EXAMPLES.md` → Cookie Consent section

---

## 🎨 Recommended Tracking for Acuron Products

### High Priority

1. **Product Events**
   - Product page views
   - Catalog downloads
   - Product inquiries (WhatsApp, email)
   - Category filtering

2. **Form Events**
   - Contact form submissions
   - Newsletter subscriptions
   - Quote requests

3. **Navigation Events**
   - Key page views
   - Important button clicks
   - WhatsApp redirects

4. **Chatbot Events**
   - Chat opened/closed
   - Messages sent
   - WhatsApp handoff

### Medium Priority

5. **Engagement Events**
   - Section views (About, Mission, etc.)
   - Testimonial interactions
   - Certificate views

6. **Search & Filter**
   - Product searches
   - Filter applications
   - Sort changes

### Low Priority

7. **Performance Metrics**
   - Page load times
   - Image load times
   - API response times

**Implementation guide**: See `POSTHOG_INTEGRATION_EXAMPLES.md`

---

## 📈 PostHog Dashboard Setup

### Recommended Dashboards

1. **Overview Dashboard**
   - Total users
   - Page views
   - Top pages
   - Geographic distribution

2. **Product Analytics**
   - Product views by category
   - Most viewed products
   - Product inquiry rate
   - Catalog download rate

3. **Form Performance**
   - Form submission rate
   - Form abandonment
   - Field completion rate
   - Newsletter signup rate

4. **User Journey**
   - Entry pages
   - Exit pages
   - Common paths
   - Bounce rate

5. **Error Tracking**
   - Error count over time
   - Most common errors
   - Affected users
   - Error locations

6. **Performance**
   - Page load times
   - Slowest pages
   - Web vitals (LCP, FID, CLS)

**Setup instructions**: See `POSTHOG_SETUP.md` → PostHog Dashboard Setup

---

## 🧪 Testing Checklist

### Development Testing

- [ ] PostHog initializes without errors
- [ ] Console shows "PostHog initialized successfully"
- [ ] Events appear in PostHog Live Events
- [ ] Pageviews are tracked on navigation
- [ ] Custom events fire correctly
- [ ] Error boundary catches test errors
- [ ] Feature flags load properly

### Production Testing

- [ ] Environment variables are set in Vercel/hosting
- [ ] PostHog loads on production domain
- [ ] Events track correctly in production
- [ ] Session recording works (if enabled)
- [ ] No console errors
- [ ] Privacy controls work
- [ ] Ad blockers don't completely break site

**Testing guide**: See `POSTHOG_SETUP.md` → Troubleshooting

---

## 🚢 Deployment

### Vercel Deployment

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=phc_your_production_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```
5. Redeploy

### Other Platforms

Add the same environment variables to your hosting platform's environment configuration.

**Tip**: Use separate PostHog projects for development and production.

---

## 🔍 Troubleshooting

### Common Issues

**"PostHog API key is missing"**
- Check `.env.local` file exists
- Verify variable name: `NEXT_PUBLIC_POSTHOG_KEY`
- Restart dev server

**Events not appearing**
- Wait 1-2 minutes for processing
- Check browser console for errors
- Disable ad blockers
- Verify correct project in PostHog

**TypeScript errors**
- Run: `npm install --save-dev @types/node`

**Hydration warnings**
- Already handled with `'use client'` directives
- Ensure `suppressHydrationWarning` is in layout

**Full troubleshooting guide**: See `POSTHOG_SETUP.md` → Troubleshooting

---

## 📚 Documentation Guide

Choose the right document for your needs:

| Document | When to Use |
|----------|-------------|
| **POSTHOG_QUICK_START.md** | First-time setup, getting started |
| **POSTHOG_ENV_SETUP.md** | Configuring environment variables |
| **POSTHOG_SETUP.md** | Understanding features, configuration |
| **POSTHOG_INTEGRATION_EXAMPLES.md** | Adding tracking to components |
| **README_POSTHOG.md** (this file) | Overview and reference |

---

## 🎓 Learning Path

### Day 1: Setup
1. Read `POSTHOG_QUICK_START.md`
2. Install packages
3. Configure environment
4. Test basic tracking

### Day 2: Implementation
1. Read `POSTHOG_INTEGRATION_EXAMPLES.md`
2. Add tracking to 2-3 key components
3. Test in development
4. Check PostHog dashboard

### Week 1: Optimization
1. Read `POSTHOG_SETUP.md` fully
2. Create dashboards in PostHog
3. Set up feature flags (optional)
4. Deploy to production

### Ongoing: Analysis
1. Review PostHog insights weekly
2. Adjust tracking based on needs
3. Create new insights as needed
4. Optimize user experience based on data

---

## 🆘 Support Resources

### PostHog Resources
- [Official Documentation](https://posthog.com/docs)
- [Next.js Integration Guide](https://posthog.com/docs/libraries/next-js)
- [Community Forum](https://posthog.com/questions)
- [Status Page](https://status.posthog.com)

### Project Documentation
- Quick Start: `POSTHOG_QUICK_START.md`
- Environment Setup: `POSTHOG_ENV_SETUP.md`
- Complete Guide: `POSTHOG_SETUP.md`
- Code Examples: `POSTHOG_INTEGRATION_EXAMPLES.md`

### Getting Help
1. Check relevant documentation file
2. Review browser console for errors
3. Check PostHog status page
4. Search PostHog community forum
5. Contact PostHog support

---

## 📊 Metrics to Track

### Business Metrics
- Product inquiry conversion rate
- Form submission rate
- Newsletter signup rate
- Catalog download rate
- WhatsApp click-through rate

### User Experience
- Page load times
- Bounce rate
- Session duration
- Pages per session
- Error rates

### Product Analytics
- Most viewed products
- Most inquired products
- Popular categories
- Search queries
- Filter usage

**How to track**: See `POSTHOG_INTEGRATION_EXAMPLES.md`

---

## ✅ Final Checklist

### Setup Phase
- [ ] Read `POSTHOG_QUICK_START.md`
- [ ] Install PostHog packages
- [ ] Create PostHog account
- [ ] Add environment variables
- [ ] Test in development
- [ ] Verify in PostHog dashboard

### Integration Phase
- [ ] Read `POSTHOG_INTEGRATION_EXAMPLES.md`
- [ ] Add tracking to key components
- [ ] Test each integration
- [ ] Review tracked events in PostHog

### Deployment Phase
- [ ] Set production environment variables
- [ ] Deploy to production
- [ ] Test on production site
- [ ] Create PostHog dashboards

### Optimization Phase
- [ ] Review analytics weekly
- [ ] Create insights based on data
- [ ] Set up alerts (optional)
- [ ] Implement A/B tests (optional)

---

## 🎉 Next Steps

You're all set! Here's what to do next:

1. **Install packages**: `npm install posthog-js posthog-node`
2. **Get API key**: Sign up at https://posthog.com
3. **Configure env**: Add to `.env.local`
4. **Test**: Restart server and verify
5. **Integrate**: Add tracking to components (optional)
6. **Deploy**: Set production env vars
7. **Analyze**: Create insights and dashboards

**Start here**: Open `POSTHOG_QUICK_START.md`

---

## 📝 Notes

- **PostHog is free** for up to 1M events/month
- **GDPR compliant** out of the box
- **Privacy-focused** - no PII required
- **Self-hostable** if needed
- **Open source** - full transparency

---

## 🤝 Contributing

If you add new tracking functions or improve the integration:

1. Update `app/lib/posthog-utils.ts`
2. Add examples to `POSTHOG_INTEGRATION_EXAMPLES.md`
3. Update this README if needed
4. Test thoroughly before committing

---

## 📅 Changelog

### v1.0.0 - January 2026
- ✅ Initial PostHog setup complete
- ✅ Provider component created
- ✅ Error boundary implemented
- ✅ Utility library created
- ✅ Root layout integrated
- ✅ Comprehensive documentation
- ✅ Real-world examples
- ⚠️ Pending: Package installation
- ⚠️ Pending: API key configuration

---

**Built with care for Acuron Products India** 🏥

Last updated: January 9, 2026

