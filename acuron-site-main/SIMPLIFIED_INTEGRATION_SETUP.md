# Simplified Contact Form Integration

## 🎯 **3 Essential Integrations**
- **📊 Google Sheets** - Automatic data storage and organization
- **📧 Email** - Beautiful HTML notifications with inquiry details
- **📱 WhatsApp** - Instant mobile notifications

## 📁 **Simple Architecture**
```
Contact Form → /api/contact → [Google Sheets + Email + WhatsApp]
```

---

## ⚙️ **Environment Setup**

Create `.env.local` file with these variables:

```bash
# ===== EMAIL CONFIGURATION =====
# Choose one option:

# Option 1: Resend (Recommended)
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL=noreply@acuron.in

# Option 2: SendGrid 
# SENDGRID_API_KEY=SG.your_sendgrid_api_key_here

# Option 3: Gmail (Development)
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your_16_character_app_password

# Email Recipients
NOTIFICATION_EMAIL=sales@acuron.in
CC_EMAIL=info@acuron.in

# ===== GOOGLE SHEETS =====
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your_script_id/exec

# ===== WHATSAPP =====
WHATSAPP_API_URL=https://graph.facebook.com/v18.0/your_phone_number_id/messages
WHATSAPP_API_TOKEN=your_whatsapp_business_api_token
WHATSAPP_PHONE_NUMBER=+919820043274
```

---

## 🔧 **Quick Setup Guide**

### 📊 **1. Google Sheets (5 minutes)**

1. **Create a new Google Sheet** with these columns:
   ```
   A: Timestamp | B: Name | C: Organization | D: Email | E: Phone | F: Product Interest | G: Message | H: Source
   ```

2. **Create Google Apps Script:**
   - Go to [script.google.com](https://script.google.com)
   - Create new project
   - Replace default code with:

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
   - Copy the deployment URL to your `.env.local`

### 📧 **2. Email Setup (3 minutes)**

**Option A: Resend (Easiest)**
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Add to `.env.local`

**Option B: Gmail (Development)**
1. Enable 2FA on your Gmail
2. Generate App Password: Google Account → Security → App Passwords
3. Add credentials to `.env.local`

### 📱 **3. WhatsApp Setup (10 minutes)**

**Meta WhatsApp Business API:**
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create Business app
3. Add WhatsApp product
4. Get Phone Number ID and Access Token
5. Add to `.env.local`

**Alternative: Twilio WhatsApp**
1. Sign up at [twilio.com](https://twilio.com)
2. Get WhatsApp sandbox credentials
3. Add to `.env.local`

---

## 🧪 **Test Your Setup**

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Fill out your contact form** on the website

3. **Check results:**
   - ✅ **Email**: Check `sales@acuron.in` inbox
   - ✅ **Google Sheets**: Check new row added
   - ✅ **WhatsApp**: Check message on +91 98200 43274

4. **Debug if needed:**
   - Check browser console for errors
   - Check terminal for integration logs
   - Look for ✅ or ❌ status messages

---

## 📋 **What You Get**

### **📧 Professional Email Notifications:**
```
Subject: 🔔 New Inquiry from [Name] - [Organization]

Beautiful HTML email with:
• Customer details organized in cards
• Quick action buttons (Reply via Email, WhatsApp)
• Professional Acuron branding
• Mobile-responsive design
```

### **📊 Google Sheets Data:**
```
Timestamp | Name | Organization | Email | Phone | Product Interest | Message | Source
2024-01-15 10:30 | John Doe | ABC Hospital | john@abc.com | +1234567890 | Surgical | Need 100 units... | Acuron Website
```

### **📱 WhatsApp Notification:**
```
🔔 *New Inquiry from Acuron Website*

👤 *Name:* John Doe
🏢 *Organization:* ABC Hospital  
📧 *Email:* john@abc.com
📱 *Phone:* +1234567890
🎯 *Product Interest:* Surgical Products

💬 *Message:*
We need 100 units of surgical drapes...

⏰ *Received:* Jan 15, 2024 10:30 AM
```

---

## 🚀 **Production Deployment**

1. **Add environment variables to Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from your `.env.local`

2. **Deploy and test:**
   ```bash
   git add .
   git commit -m "Add contact form integrations"
   git push
   ```

---

## 🔧 **Troubleshooting**

### **Email not working?**
- Check API key is valid
- Verify sender email/domain
- Check spam folder

### **Google Sheets not updating?**
- Verify sheet ID in script
- Check script permissions
- Test webhook URL directly

### **WhatsApp not sending?**
- Verify phone number format (+countrycode)
- Check API token permissions
- Test with WhatsApp Business API testing tool

---

## 💡 **Pro Tips**

1. **Start with email only** - Get instant notifications working first
2. **Add Google Sheets next** - For organized data storage
3. **Add WhatsApp last** - For mobile alerts
4. **Test each integration individually** - Easier to debug
5. **Monitor your logs** - Check terminal output for success/failure

---

## 📞 **Support**

Need help? Contact:
- 📧 Email: tech@acuron.in  
- 📱 WhatsApp: +91 98200 43274

**🎉 Your streamlined lead capture system is ready to go!** 