# PostHog Environment Variables Setup

## Quick Setup Guide

### Step 1: Create PostHog Account

1. Go to [PostHog](https://posthog.com/)
2. Sign up for a free account (no credit card required)
3. Choose your hosting option:
   - **US Cloud** (Recommended for most): `https://us.i.posthog.com`
   - **EU Cloud** (For GDPR compliance): `https://eu.i.posthog.com`
   - **Self-hosted** (Enterprise): Your custom URL

### Step 2: Get Your API Key

1. After signing up, you'll be in your PostHog dashboard
2. Go to **Project Settings** (gear icon in the sidebar)
3. Look for **Project API Key** section
4. Copy the key (it starts with `phc_`)

### Step 3: Add Environment Variables

1. Open your `.env.local` file in the project root
2. Add the following lines:

```env
# PostHog Analytics Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

3. Replace `phc_your_actual_key_here` with your actual PostHog API key

### Step 4: Verify Setup

1. Save the `.env.local` file
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Open your browser's DevTools → Console
4. You should see: `PostHog initialized successfully`

---

## Environment Variables Explained

### `NEXT_PUBLIC_POSTHOG_KEY`

- **Required**: Yes
- **Description**: Your PostHog project API key
- **Format**: `phc_` followed by alphanumeric characters
- **Example**: `phc_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`
- **Where to find**: PostHog Dashboard → Project Settings → Project API Key
- **Note**: The `NEXT_PUBLIC_` prefix makes this available in the browser (required for client-side tracking)

### `NEXT_PUBLIC_POSTHOG_HOST`

- **Required**: Yes
- **Description**: The URL of your PostHog instance
- **Default**: `https://us.i.posthog.com`
- **Options**:
  - US Cloud: `https://us.i.posthog.com`
  - EU Cloud: `https://eu.i.posthog.com`
  - Self-hosted: Your custom PostHog URL
- **Example**: `https://us.i.posthog.com`

---

## Complete .env.local Example

```env
# ================================
# PostHog Analytics
# ================================
NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_posthog_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# ================================
# Other Services (Your existing config)
# ================================
OPENAI_API_KEY=your_openai_key
RESEND_API_KEY=your_resend_key
# ... other variables ...
```

---

## Testing Your Setup

### 1. Development Test

```bash
# Start development server
npm run dev

# Open http://localhost:3000
# Check browser console for PostHog initialization message
```

### 2. Verify in PostHog Dashboard

1. Go to your PostHog dashboard
2. Click **Live Events** (lightning bolt icon)
3. Navigate around your local site
4. You should see events appearing in real-time

### 3. Test Event Tracking

Open browser console and run:

```javascript
// Check if PostHog is loaded
console.log('PostHog loaded:', typeof posthog !== 'undefined');

// Manually trigger a test event
posthog.capture('test_event', { source: 'manual_test' });

// Check your distinct ID
console.log('Distinct ID:', posthog.get_distinct_id());

// Check feature flags
console.log('Feature Flags:', posthog.getFeatureFlags());
```

---

## Troubleshooting

### Error: "PostHog API key is missing"

**Solution**: 
1. Check that `.env.local` exists in project root
2. Verify the variable name is exactly `NEXT_PUBLIC_POSTHOG_KEY`
3. Ensure no extra spaces around the `=` sign
4. Restart your dev server after adding variables

### Error: "Network request failed"

**Solution**:
1. Check your internet connection
2. Verify the `NEXT_PUBLIC_POSTHOG_HOST` URL is correct
3. Check if your ad blocker is blocking PostHog
4. Try temporarily disabling ad blockers

### Events Not Appearing in Dashboard

**Solution**:
1. Wait 1-2 minutes (slight delay is normal)
2. Check you're viewing the correct project
3. Verify the date range in dashboard filters
4. Check browser console for errors

### CORS Errors

**Solution**:
1. Verify your domain is allowed in PostHog settings
2. For localhost, no CORS setup should be needed
3. For production, ensure your domain is configured

---

## Security Best Practices

### ✅ DO:
- Keep `.env.local` in `.gitignore` (it should already be there)
- Use different PostHog projects for development and production
- Rotate API keys if they're accidentally committed
- Use environment variables for all secrets

### ❌ DON'T:
- Commit `.env.local` to git
- Share your API keys publicly
- Use production keys in development
- Hard-code API keys in your code

---

## Multiple Environments

### Development

```env
# .env.local (for local development)
NEXT_PUBLIC_POSTHOG_KEY=phc_dev_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### Production (Vercel)

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - `NEXT_PUBLIC_POSTHOG_KEY`: Your production PostHog key
   - `NEXT_PUBLIC_POSTHOG_HOST`: `https://us.i.posthog.com`
5. Redeploy your application

### Staging (Optional)

Create a separate PostHog project for staging and use those credentials.

---

## PostHog Project Setup Checklist

- [ ] Created PostHog account
- [ ] Created project for Acuron Products
- [ ] Copied API key
- [ ] Added `NEXT_PUBLIC_POSTHOG_KEY` to `.env.local`
- [ ] Added `NEXT_PUBLIC_POSTHOG_HOST` to `.env.local`
- [ ] Restarted development server
- [ ] Verified PostHog initialization in console
- [ ] Tested event tracking in Live Events
- [ ] Set up production environment variables (Vercel)
- [ ] Created initial dashboard in PostHog

---

## Getting Your PostHog API Key (Step by Step)

### Visual Guide

1. **Sign In to PostHog**
   ```
   https://app.posthog.com/login
   ```

2. **Navigate to Project Settings**
   ```
   Sidebar → Settings (⚙️) → Project Settings
   ```

3. **Find Project API Key**
   ```
   Look for "Project API Key" section
   Copy the key (starts with "phc_")
   ```

4. **Copy to .env.local**
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=phc_[the_key_you_copied]
   ```

---

## Additional Configuration (Optional)

### Debug Mode (Development Only)

Add to `.env.local`:

```env
NEXT_PUBLIC_POSTHOG_DEBUG=true
```

Then update `PostHogProvider.tsx`:

```typescript
if (process.env.NEXT_PUBLIC_POSTHOG_DEBUG === 'true') {
  posthog.debug(true);
}
```

### Disable in Development

If you want to disable PostHog in development:

```env
NEXT_PUBLIC_POSTHOG_ENABLED=false
```

Update provider:

```typescript
if (process.env.NEXT_PUBLIC_POSTHOG_ENABLED === 'false') {
  return <>{children}</>;
}
```

---

## Quick Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_POSTHOG_KEY` | Yes | None | Your PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Yes | `https://us.i.posthog.com` | PostHog instance URL |
| `NEXT_PUBLIC_POSTHOG_DEBUG` | No | `false` | Enable debug logging |
| `NEXT_PUBLIC_POSTHOG_ENABLED` | No | `true` | Enable/disable tracking |

---

## Support

If you encounter issues:

1. **Check PostHog Status**: https://status.posthog.com
2. **PostHog Docs**: https://posthog.com/docs
3. **Community Forum**: https://posthog.com/questions
4. **PostHog Support**: In-app chat or support@posthog.com

---

## Next Steps

After setting up environment variables:

1. ✅ Environment variables configured
2. → Read `POSTHOG_SETUP.md` for usage examples
3. → Start tracking events in your components
4. → Create dashboards in PostHog
5. → Set up feature flags (optional)

---

**Last Updated**: January 2026

