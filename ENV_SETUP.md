# Environment Variables Setup

## 🚀 Quick Setup (Google Sheets - Recommended)

The primary data storage for form submissions is **Google Sheets** - it's free, unlimited, and doesn't require any paid API keys!

### Step 1: Set up Google Sheets Integration

1. Follow the complete guide in `GOOGLE_SHEETS_SETUP.md`
2. Get your Google Apps Script Web App URL
3. Create a `.env.local` file in the `acuron-site` directory:

```bash
# ✅ REQUIRED: Google Sheets Integration (FREE & PRIMARY)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# 🤖 REQUIRED: OpenAI Configuration (for chatbot)
OPENAI_API_KEY=your_openai_key_here

# 📱 OPTIONAL: WhatsApp Configuration (for manual follow-up links)
WHATSAPP_PHONE_NUMBER=919820043274
```

### Step 2: Start Development Server

```bash
npm run dev
```

All form submissions will now be saved to your Google Sheet automatically!

---

## 📧 Optional: Email Notifications (Resend)

If you want to receive email notifications in addition to Google Sheets storage, you can add Resend:

```bash
# OPTIONAL: Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Acuron <onboarding@resend.dev>
NOTIFICATION_EMAIL=sales@acuron.in
CC_EMAIL=viresh@acuron.in
```

**Note**: Email notifications are completely optional. The forms work perfectly with just Google Sheets integration.

---

## 🌐 For Production Deployment (Vercel)

Add environment variables in your Vercel dashboard:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add these required variables:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
OPENAI_API_KEY=your_openai_key_here
```

4. (Optional) Add Resend variables for email notifications

---

## ✅ Integration Status

- ✅ **Google Sheets**: Primary data storage (FREE, unlimited submissions)
- ✅ **WhatsApp**: Manual follow-up links generated (FREE)
- ⏳ **Email (Resend)**: Optional notifications (requires paid API key)

---

## 🧪 Testing Your Setup

1. Ensure `GOOGLE_SHEETS_WEBHOOK_URL` is set in `.env.local`
2. Start dev server: `npm run dev`
3. Test the contact form at http://localhost:3000
4. Check your Google Sheet - new submissions should appear automatically!
5. For newsletter, click "Download Catalog" and submit the form

---

## 📊 Where to View Submissions

- **Contact Form submissions**: Check your "Contact Form" sheet in Google Sheets
- **Newsletter signups**: Check your "Newsletter Signups" sheet in Google Sheets
- Access anytime at: [Google Sheets](https://sheets.google.com/)

---

## 🔒 Security Notes

- All environment variables in `.env.local` are kept secret (not committed to Git)
- Rate limiting is enabled on all forms (5 requests per minute for contact, 3 per 5 minutes for newsletter)
- All inputs are sanitized before storage
- Google Sheets Web App URL is public but only accepts POST requests with validated data

---

## 🆘 Troubleshooting

### Forms not saving to Google Sheets?

1. Verify `GOOGLE_SHEETS_WEBHOOK_URL` is correct in `.env.local`
2. Check that your Google Apps Script is deployed as a Web App with "Anyone" access
3. Ensure sheet names match exactly: "Contact Form" and "Newsletter Signups"
4. See detailed troubleshooting in `GOOGLE_SHEETS_SETUP.md`

### Need Help?

- **Google Sheets Setup**: See `GOOGLE_SHEETS_SETUP.md`
- **Chatbot Setup**: See `CHATBOT_SETUP.md`
- **Cookie Banner**: See `COOKIE_BANNER_SETUP.md` 