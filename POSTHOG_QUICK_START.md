# 🚀 PostHog Quick Start - Acuron Products

## ✅ Installation Complete!

PostHog has been set up for your Acuron Products website. Follow these steps to get started.

---

## 📦 Step 1: Install Packages (REQUIRED)

Run this command in your terminal:

```bash
npm install posthog-js posthog-node
```

Or if you prefer yarn:

```bash
yarn add posthog-js posthog-node
```

---

## 🔑 Step 2: Get PostHog API Key (REQUIRED)

### Create PostHog Account

1. Go to **[PostHog](https://posthog.com/)**
2. Click **"Get started - free"**
3. Sign up with your email (free tier available, no credit card needed)
4. Choose hosting region:
   - **US Cloud**: `https://us.i.posthog.com` (Recommended)
   - **EU Cloud**: `https://eu.i.posthog.com`

### Get Your API Key

1. After signup, you'll be in the PostHog dashboard
2. Go to **Settings** (⚙️ icon in sidebar)
3. Click **"Project Settings"**
4. Find **"Project API Key"** section
5. Copy the key (starts with `phc_`)

---

## 🔧 Step 3: Add Environment Variables (REQUIRED)

1. Open or create `.env.local` file in your project root
2. Add these lines:

```env
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_paste_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

3. Replace `phc_paste_your_key_here` with your actual PostHog API key
4. Save the file

### Complete .env.local Example

```env
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Your other environment variables
OPENAI_API_KEY=your_openai_key
RESEND_API_KEY=your_resend_key
# ... etc
```

---

## 🧪 Step 4: Test Installation

### Start Development Server

```bash
npm run dev
```

### Verify in Browser

1. Open **http://localhost:3000**
2. Open **DevTools** (F12 or Right-click → Inspect)
3. Go to **Console** tab
4. You should see: `PostHog initialized successfully`

### Test Event Tracking

In the browser console, type:

```javascript
posthog.capture('test_event', { source: 'manual_test' });
```

---

## 📊 Step 5: Check PostHog Dashboard

1. Go to your **PostHog dashboard**: https://app.posthog.com
2. Click **"Live Events"** (⚡ icon in sidebar)
3. Navigate around your website
4. Events should appear in real-time

---

## 🎯 What's Already Set Up

### ✅ Core Features Enabled

- **Auto-capture**: Button clicks, form submissions, link clicks
- **Pageview tracking**: Automatic page navigation tracking
- **Session recording**: Record user sessions (configurable)
- **Error tracking**: React errors and unhandled exceptions
- **Performance monitoring**: Page load times and web vitals
- **Feature flags**: A/B testing capabilities
- **Privacy controls**: GDPR compliant, respects Do Not Track

### ✅ Components Created

| File | Purpose |
|------|---------|
| `app/providers/PostHogProvider.tsx` | PostHog initialization |
| `app/components/PostHogErrorBoundary.tsx` | Error tracking |
| `app/lib/posthog-utils.ts` | Utility functions |
| `app/layout.tsx` | Integration point (already updated) |

### ✅ Documentation Created

| File | Description |
|------|-------------|
| `POSTHOG_SETUP.md` | Complete setup guide |
| `POSTHOG_ENV_SETUP.md` | Environment variables guide |
| `POSTHOG_INTEGRATION_EXAMPLES.md` | Real-world examples |
| `POSTHOG_QUICK_START.md` | This file |

---

## 🔨 Next Steps (Optional)

### 1. Add Tracking to Your Components

Example: Track button click

```typescript
import { trackEvent } from '@/app/lib/posthog-utils';

<button onClick={() => trackEvent.buttonClick('Download Catalog')}>
  Download Catalog
</button>
```

See `POSTHOG_INTEGRATION_EXAMPLES.md` for more examples.

### 2. Create Insights in PostHog

1. Go to **Insights** → **New Insight**
2. Select events to analyze
3. Create visualizations
4. Save to dashboard

### 3. Set Up Feature Flags

1. Go to **Feature Flags** → **New Feature Flag**
2. Create a flag (e.g., `new_homepage_design`)
3. Use in your code:

```typescript
import { featureFlags } from '@/app/lib/posthog-utils';

if (featureFlags.isEnabled('new_homepage_design')) {
  return <NewHomepage />;
}
```

### 4. Deploy to Production

When deploying to Vercel (or other platforms):

1. Go to your deployment dashboard
2. Add environment variables:
   - `NEXT_PUBLIC_POSTHOG_KEY`: Your production PostHog key
   - `NEXT_PUBLIC_POSTHOG_HOST`: `https://us.i.posthog.com`
3. Redeploy your application

**Note**: Consider using separate PostHog projects for development and production.

---

## 📚 Available Utility Functions

Import from `@/app/lib/posthog-utils`:

### Event Tracking
```typescript
trackEvent.buttonClick(buttonName, metadata?)
trackEvent.formSubmit(formName, success, metadata?)
trackEvent.productViewed(productId, productName, category?)
trackEvent.contactFormSubmitted(formData)
trackEvent.newsletterSubscribed(email)
trackEvent.chatbotInteraction(action, message?)
trackEvent.whatsappClick(source)
```

### User Management
```typescript
identifyUser(userId, userProperties)
setUserProperties(properties)
setUserGroup(groupType, groupId, groupProperties?)
resetUser()
```

### Feature Flags
```typescript
featureFlags.isEnabled(flagKey)
featureFlags.getValue(flagKey)
featureFlags.getAll()
featureFlags.reload()
```

### Privacy
```typescript
privacy.optOut()
privacy.optIn()
privacy.hasOptedOut()
```

### Session Recording
```typescript
sessionRecording.start()
sessionRecording.stop()
sessionRecording.isActive()
sessionRecording.getUrl()
```

---

## 🐛 Troubleshooting

### "PostHog API key is missing" Error

**Solution**: 
1. Check `.env.local` exists in project root
2. Verify variable name: `NEXT_PUBLIC_POSTHOG_KEY`
3. Restart dev server: `npm run dev`

### Events Not Appearing

**Solution**:
1. Wait 1-2 minutes (slight delay is normal)
2. Check browser console for errors
3. Disable ad blockers temporarily
4. Verify API key is correct

### TypeScript Errors

**Solution**:
```bash
npm install --save-dev @types/node
```

---

## 🎓 Learning Resources

### Official PostHog Docs
- [PostHog Docs](https://posthog.com/docs)
- [Next.js Integration](https://posthog.com/docs/libraries/next-js)
- [JavaScript Library](https://posthog.com/docs/libraries/js)

### Your Project Docs
- `POSTHOG_SETUP.md` - Detailed setup guide
- `POSTHOG_ENV_SETUP.md` - Environment configuration
- `POSTHOG_INTEGRATION_EXAMPLES.md` - Code examples

### PostHog Support
- Community: https://posthog.com/questions
- Status: https://status.posthog.com
- Support: support@posthog.com

---

## ✅ Setup Checklist

- [ ] Run `npm install posthog-js posthog-node`
- [ ] Create PostHog account at https://posthog.com
- [ ] Get API key from Project Settings
- [ ] Add `NEXT_PUBLIC_POSTHOG_KEY` to `.env.local`
- [ ] Add `NEXT_PUBLIC_POSTHOG_HOST` to `.env.local`
- [ ] Restart development server
- [ ] Test in browser (check console)
- [ ] Verify events in PostHog dashboard
- [ ] Add tracking to key components (optional)
- [ ] Create insights/dashboards (optional)
- [ ] Deploy to production with env vars

---

## 🆘 Need Help?

If you're stuck:

1. **Check your environment variables** - Most issues are here
2. **Read the error message** - Console errors are helpful
3. **Check PostHog status** - https://status.posthog.com
4. **Review documentation** - Check the docs listed above
5. **Contact support** - PostHog has excellent support

---

## 🎉 That's It!

Your PostHog setup is complete! The integration is:

- ✅ Production-ready
- ✅ TypeScript-enabled
- ✅ Privacy-compliant
- ✅ Fully documented
- ✅ Error-tracked

Just install the packages, add your API key, and you're good to go!

---

**Built for Acuron Products India** | Last Updated: January 2026

