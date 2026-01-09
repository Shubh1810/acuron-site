# PostHog Event Tracking - Complete Implementation

## 📊 Overview

Your Acuron website now has comprehensive PostHog analytics tracking implemented across all major user interactions. This document outlines every event being captured.

---

## ✅ Implemented Events by Category

### 1. **Page Navigation**
- **Event**: `$pageview`
- **Location**: `app/providers/PostHogProvider.tsx`
- **Triggered**: Automatically on every page navigation
- **Properties**:
  - `$current_url`: Full page URL with query parameters
  - `page_title`: Document title

---

### 2. **Contact Form Submissions**
- **Location**: `app/components/sections/ContactSection.tsx`

#### Success Events:
- **Event**: `contact_form_submitted`
  - **Properties**:
    - `form_type`: "contact"
    - `has_subject`: Boolean (whether product interest was specified)

- **Event**: `form_submitted`
  - **Properties**:
    - `form_name`: "contact_form"
    - `success`: true
    - `has_product_interest`: Boolean
    - `has_organization`: Boolean
    - `message_length`: Number of characters

#### Error Events:
- **Event**: `form_submitted`
  - **Properties**:
    - `form_name`: "contact_form"
    - `success`: false
    - `error_message`: Error description

---

### 3. **Newsletter & Catalog Downloads**
- **Location**: `app/components/NewsletterModal.tsx`

#### Success Events:
- **Event**: `newsletter_subscribed`
  - **Properties**:
    - `timestamp`: ISO timestamp

- **Event**: `catalog_downloaded`
  - **Properties**:
    - `product_id`: undefined (global catalog)
    - `timestamp`: ISO timestamp

- **Event**: `form_submitted`
  - **Properties**:
    - `form_name`: "catalog_download_form"
    - `success`: true
    - `has_company`: Boolean

#### Error Events:
- **Event**: `form_submitted`
  - **Properties**:
    - `form_name`: "catalog_download_form"
    - `success`: false
    - `error_message`: Error description

---

### 4. **Chatbot Interactions**
- **Location**: `app/components/ChatbotWidget.tsx`

#### Events:
- **Event**: `chatbot_interaction`
  - **Action Types**:
    - `"opened"`: User opened chatbot
    - `"closed"`: User closed chatbot
    - `"message_sent"`: User sent a message
      - **Property**: `has_message`: true
    - `"response_received"`: Bot successfully responded
    - `"error_occurred"`: Bot encountered an error

- **Event**: `button_clicked`
  - **Properties**:
    - `button_name`: "chatbot_open"

- **Event**: `error_occurred` (on chatbot errors)
  - **Properties**:
    - `error_type`: "chatbot_error"
    - `error_message`: Error description

---

### 5. **Product Pages**
- **Location**: `app/products/[slug]/page.tsx`

#### Events:
- **Event**: `product_viewed`
  - **Triggered**: When user lands on a product page
  - **Properties**:
    - `product_id`: Product slug
    - `product_name`: Full product name
    - `category`: Product category

- **Event**: `product_inquiry`
  - **Triggered**: When user clicks "Get Quote" or "Contact" buttons
  - **Properties**:
    - `product_id`: Product slug
    - `product_name`: Full product name
    - `inquiry_type`: "get_quote" or "contact"

- **Event**: `button_clicked`
  - **Properties**:
    - `button_name`: "product_get_quote" or "product_contact"
    - `product_name`: Product name
    - `product_id`: Product slug

---

### 6. **Auto-Capture Events**
- **Location**: `app/providers/PostHogProvider.tsx` (configuration)
- **Enabled Elements**:
  - Button clicks
  - Form submissions
  - Input changes
  - Link clicks
  - Elements with `data-track` attribute

---

## 🔧 Available Utility Functions

All tracking functions are available in `app/lib/posthog-utils.ts`:

### User Tracking:
- `trackEvent.buttonClick(buttonName, metadata?)`
- `trackEvent.formSubmit(formName, success, metadata?)`
- `trackEvent.linkClick(linkUrl, linkText)`

### Product Tracking:
- `trackEvent.productViewed(productId, productName, category?)`
- `trackEvent.productInquiry(productId, productName, inquiryType)`
- `trackEvent.catalogDownload(productId?)`

### Communication:
- `trackEvent.contactFormSubmitted(formData)`
- `trackEvent.newsletterSubscribed(email)`
- `trackEvent.chatbotInteraction(action, message?)`
- `trackEvent.whatsappClick(source)` *(ready for when WhatsApp buttons are added)*

### Navigation:
- `trackEvent.pageSection(sectionName, action)`

### Error Tracking:
- `trackEvent.errorOccurred(errorType, errorMessage, metadata?)`

### User Identification:
- `identifyUser(userId, userProperties?)`
- `setUserProperties(properties)`
- `setUserGroup(groupType, groupId, groupProperties?)`

### Feature Flags:
- `featureFlags.isEnabled(flagKey)`
- `featureFlags.getValue(flagKey)`
- `featureFlags.reload()`

### Session Recording:
- `sessionRecording.start()`
- `sessionRecording.stop()`
- `sessionRecording.isActive()`
- `sessionRecording.getUrl()`

---

## 🧪 Testing Your Events

### Method 1: Browser Console (Development Mode)
1. Open your website in development mode
2. Open browser DevTools Console
3. PostHog debug mode is **automatically enabled**
4. You'll see logs like:
   ```
   [PostHog.js] capture {event: "button_clicked", properties: {...}}
   ```

### Method 2: Network Tab
1. Open DevTools → Network tab
2. Filter by "decide" or "e" (PostHog endpoints)
3. Perform actions on your site
4. Check for POST requests to PostHog endpoints
5. Inspect payload to see event data

### Method 3: PostHog Dashboard
1. Go to https://us.posthog.com (or your PostHog host)
2. Navigate to **Activity** → **Events**
3. You should see events appearing in real-time
4. Filter by event names listed above

### Method 4: Force a Test Event
Open browser console and run:
```javascript
// Test button click
posthog.capture('test_button_click', { test: true, timestamp: new Date() });

// Test form submission
posthog.capture('test_form_submit', { form_name: 'test', success: true });

// Check if PostHog is working
console.log('PostHog User ID:', posthog.get_distinct_id());
```

---

## 🐛 Troubleshooting

### If Events Don't Appear:

1. **Check PostHog initialization**:
   ```javascript
   // In browser console
   console.log(window.posthog ? 'PostHog loaded' : 'PostHog NOT loaded');
   ```

2. **Check environment variables**:
   ```bash
   cat .env.local | grep POSTHOG
   ```
   Should show:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=phc_...
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

3. **Verify Project ID in PostHog Dashboard**:
   - Go to PostHog → Settings → Project
   - Confirm the project key matches your `.env.local`

4. **Check Ad Blockers**:
   - Disable browser ad blockers
   - Some ad blockers block PostHog tracking

5. **Check Date Range in Dashboard**:
   - PostHog defaults to "Last 7 days"
   - Change to "Today" or "Last hour" to see recent events

---

## 📈 PostHog Configuration Details

### Current Setup:
- **API Host**: `https://us.i.posthog.com`
- **Defaults Version**: `2025-11-30` (Latest breaking changes)
- **Auto-capture**: ✅ Enabled (click, submit, change events)
- **Session Recording**: ✅ Enabled
- **Performance Monitoring**: ✅ Enabled
- **Feature Flags**: ✅ Enabled
- **Debug Mode**: ✅ Enabled (Development only)

### Privacy Settings:
- **Respect DNT**: ✅ Enabled
- **Secure Cookies**: ✅ Enabled (Production only)
- **Persistence**: localStorage + cookie

---

## 🎯 Key Event Names for Dashboard

When creating insights or filtering in PostHog, use these exact event names:

**Core Events:**
- `$pageview`
- `contact_form_submitted`
- `form_submitted`
- `newsletter_subscribed`
- `catalog_downloaded`
- `product_viewed`
- `product_inquiry`
- `button_clicked`
- `chatbot_interaction`
- `error_occurred`

---

## 🚀 Next Steps

1. **Verify Events**: Open your site and perform actions, then check PostHog dashboard
2. **Create Dashboards**: Build custom dashboards in PostHog for key metrics
3. **Set Up Alerts**: Configure alerts for important events (form submissions, errors)
4. **Feature Flags**: Start using feature flags for A/B testing
5. **Session Recordings**: Review user session recordings to improve UX

---

## 📝 Notes

- All tracking respects user privacy and GDPR compliance
- Events are batched and sent efficiently
- Session recordings can be reviewed at: PostHog Dashboard → Recordings
- Feature flags can be managed at: PostHog Dashboard → Feature Flags

---

**Last Updated**: January 9, 2026
**PostHog Version**: Latest (posthog-js)
**Implementation Status**: ✅ Complete

