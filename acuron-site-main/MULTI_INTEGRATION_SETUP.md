# Multi-Integration Contact Form Setup

## 🚀 Overview
Your contact form now integrates with **4 powerful services** simultaneously:
- **📋 Tally** - Form management and data collection
- **📊 Google Sheets** - Data storage and analysis  
- **📱 WhatsApp** - Instant notifications
- **📧 Email** - Professional notifications with HTML templates

## 📁 Architecture

```
Contact Form → /api/contact → [Tally + Google Sheets + WhatsApp + Email]
```

All integrations run **in parallel** for maximum performance and reliability.

---

## ⚙️ Environment Setup

### 1. Create `.env.local` file:

```bash
# ===== EMAIL CONFIGURATION =====
# Option 1: Resend (Recommended)
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL=noreply@acuron.in

# Option 2: SendGrid (Alternative)
# SENDGRID_API_KEY=SG.your_sendgrid_api_key_here

# Option 3: Gmail (Fallback)
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your_16_character_app_password

# Email Recipients
NOTIFICATION_EMAIL=sales@acuron.in
CC_EMAIL=info@acuron.in

# ===== TALLY INTEGRATION =====
TALLY_WEBHOOK_URL=https://tally.so/r/your_form_id/webhook

# ===== GOOGLE SHEETS INTEGRATION =====
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your_script_id/exec

# ===== WHATSAPP INTEGRATION =====
# Option 1: WhatsApp Business API
WHATSAPP_API_URL=https://graph.facebook.com/v18.0/your_phone_number_id/messages
WHATSAPP_API_TOKEN=your_whatsapp_business_api_token
WHATSAPP_PHONE_NUMBER=+919820043274

# Option 2: Twilio WhatsApp (Alternative)
# WHATSAPP_API_URL=https://api.twilio.com/2010-04-01/Accounts/your_account_sid/Messages.json
# WHATSAPP_API_TOKEN=your_twilio_auth_token
```

---

## 🔧 Integration Setup Instructions

### 📋 1. Tally Setup

1. **Create Tally Form:**
   - Go to [tally.so](https://tally.so)
   - Create a new form with fields:
     - Name (Text)
     - Organization (Text)
     - Email (Email)
     - Phone (Text)
     - Product Interest (Select)
     - Message (Textarea)

2. **Setup Webhook:**
   - Go to your form settings
   - Navigate to "Integrations" → "Webhooks"
   - Add webhook URL: `https://yourdomain.com/api/contact`
   - Copy your webhook URL to `.env.local`

### 📊 2. Google Sheets Setup

1. **Create Google Sheet:**
   ```
   Column A: Timestamp
   Column B: Name
   Column C: Organization
   Column D: Email
   Column E: Phone
   Column F: Product Interest
   Column G: Message
   Column H: Source
   ```

2. **Create Google Apps Script:**
   - Open Google Apps Script: [script.google.com](https://script.google.com)
   - Create new project, paste this code:

   ```javascript
   function doPost(e) {
     try {
       const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
       const data = JSON.parse(e.postData.contents);
       
       sheet.appendRow([
         data.timestamp,
         data.name,
         data.organization,
         data.email,
         data.phone,
         data.productInterest,
         data.message,
         data.source
       ]);
       
       return ContentService.createTextOutput(JSON.stringify({success: true}))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

3. **Deploy as Web App:**
   - Click "Deploy" → "New Deployment"
   - Type: "Web app"
   - Execute as: "Me"
   - Access: "Anyone"
   - Copy deployment URL to `.env.local`

### 📱 3. WhatsApp Business API Setup

1. **Meta Business Account:**
   - Go to [developers.facebook.com](https://developers.facebook.com)
   - Create app → "Business" type
   - Add WhatsApp product

2. **Get Credentials:**
   - Phone Number ID from WhatsApp → Getting Started
   - Access Token from WhatsApp → Getting Started
   - Add to `.env.local`

3. **Alternative - Twilio WhatsApp:**
   - Sign up at [twilio.com](https://twilio.com)
   - Get WhatsApp sandbox number
   - Get Account SID and Auth Token

### 📧 4. Email Service Setup

#### Option A: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Verify your domain (acuron.in)
4. Add API key to `.env.local`

#### Option B: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key with Mail Send permissions
3. Verify sender email
4. Add API key to `.env.local`

#### Option C: Gmail (Development)
1. Enable 2FA on Gmail account
2. Generate App Password: Google Account → Security → App Passwords
3. Add credentials to `.env.local`

---

## 🧪 Testing

### Test Individual Components:

1. **Test Form Submission:**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "organization": "Test Company",
       "email": "test@example.com",
       "phone": "+1234567890",
       "productInterest": "surgical",
       "message": "This is a test message"
     }'
   ```

2. **Check Logs:**
   - Open browser console on form submission
   - Check terminal where Next.js is running
   - Look for ✅ success or ❌ error messages

3. **Verify Integrations:**
   - **Tally**: Check form responses
   - **Google Sheets**: Check new row added
   - **WhatsApp**: Check message received
   - **Email**: Check inbox for notification

---

## 🎨 Features

### Email Template Features:
- 🎨 **Professional HTML Design** with Acuron branding
- 📱 **Mobile Responsive** layout
- 🔗 **Quick Action Buttons** (Reply via Email, WhatsApp)
- 📊 **Structured Data Display** with priority indicators
- 🏢 **Company Footer** with contact information

### WhatsApp Features:
- 📱 **Formatted Messages** with emojis and structure
- ⚡ **Instant Notifications** to your business phone
- 📞 **Clickable Phone Numbers** and email addresses
- 🕒 **Timestamp** and source tracking

### Form Features:
- 🌐 **Multi-language Support** (6 languages)
- ✅ **Real-time Validation** and error handling
- 🔄 **Loading States** with spinner animation
- 📝 **Success/Error Messages** with proper localization
- 💾 **Form Reset** after successful submission

---

## 🔍 Troubleshooting

### Common Issues:

1. **Email Not Sending:**
   - Check API key validity
   - Verify sender domain
   - Check spam folder

2. **WhatsApp Not Working:**
   - Verify phone number format (+countrycode)
   - Check API token permissions
   - Ensure webhook verification (Meta)

3. **Google Sheets Not Updating:**
   - Check sheet ID in script
   - Verify script permissions
   - Test deployment URL directly

4. **Tally Integration Issues:**
   - Verify webhook URL format
   - Check field mapping
   - Test webhook manually

### Debug Commands:

```bash
# Check environment variables
echo $RESEND_API_KEY

# Test API endpoint
curl -I http://localhost:3000/api/contact

# Check logs
tail -f .next/trace
```

---

## 🚀 Production Deployment

### Vercel Environment Variables:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add all variables from `.env.local`
3. Deploy and test

### Security Best Practices:
- ✅ Use environment variables for all secrets
- ✅ Enable CORS only for your domain
- ✅ Validate all input data
- ✅ Use HTTPS for all webhooks
- ✅ Monitor API usage and limits

---

## 📈 Monitoring & Analytics

### Success Metrics:
- Form submission rate
- Integration success rate per service
- Response time monitoring
- Error rate tracking

### Logs to Monitor:
- `📨 Received contact form submission`
- `✅ Successfully sent to [Service]`
- `❌ [Service] integration error`
- `🔄 Integration Results`

---

## 💡 Advanced Features

### Future Enhancements:
- 🤖 **AI-powered Lead Scoring** based on inquiry content
- 📊 **Advanced Analytics Dashboard** with conversion tracking
- 🔔 **Slack/Discord Notifications** for team collaboration
- 📱 **SMS Notifications** via Twilio
- 🎯 **Automated Follow-up Sequences** based on product interest
- 🗄️ **CRM Integration** (Salesforce, HubSpot, Pipedrive)

### Custom Automations:
- Auto-assign leads based on product interest
- Priority scoring based on organization size
- Geographic routing for international inquiries
- Time-based follow-up reminders

---

## 🆘 Support

For technical support:
- 📧 Email: tech@acuron.in
- 📱 WhatsApp: +91 98200 43274
- 🌐 Documentation: [Your docs URL]

---

**🎉 Your multi-integration contact form is now ready to capture and process leads across all channels!** 