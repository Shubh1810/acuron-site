# Environment Variables Setup

## Quick Setup for Email Testing

Create a `.env.local` file in the `acuron-site` directory and add your Resend API key:

```bash
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here

# Email Configuration (uses verified Resend domain)
RESEND_FROM_EMAIL=Acuron <onboarding@resend.dev>
NOTIFICATION_EMAIL=sales@acuron.in
CC_EMAIL=viresh@acuron.in

# WhatsApp Configuration (FREE method)
WHATSAPP_PHONE_NUMBER=919820043274

# OpenAI Configuration (for chatbot)
OPENAI_API_KEY=your_openai_key_here
```

## For Production (acuron-site.vercel.app)

Add these environment variables in your Vercel dashboard:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add the same variables as above with your actual API keys

## Domain Verification (Optional)

To use your own domain (acuron.in) instead of onboarding@resend.dev:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add and verify `acuron.in`
3. Update `RESEND_FROM_EMAIL` to `Acuron <noreply@acuron.in>`

## Testing

1. Add your real Resend API key to `.env.local`
2. Start the dev server: `npm run dev`
3. Test the contact form at http://localhost:3000
4. Check your email for notifications

## Integration Status

- ✅ **Email**: Using Resend SDK with verified domain
- ⏳ **Google Sheets**: Optional (webhook URL needed)
- ⏳ **WhatsApp**: Optional (API credentials needed)

The form will work with just the email integration enabled. 