# 🚀 Quick Start: Google Sheets Integration (5 Minutes)

## TL;DR
Your forms now save to Google Sheets instead of sending emails. Here's how to set it up in 5 minutes.

---

## ⚡ Super Quick Setup

### 1. Create Google Sheet (1 minute)

Go to [sheets.google.com](https://sheets.google.com) and create a new sheet named **"Acuron Website Submissions"**

Create two sheets inside with these EXACT names and columns:

**Sheet 1: "Contact Form"**
```
Timestamp | Name | Organization | Email | Phone | Product Interest | Message | Source
```

**Sheet 2: "Newsletter Signups"**
```
Timestamp | Name | Email | Phone | Company | Source
```

### 2. Add Google Apps Script (2 minutes)

1. In your sheet: **Extensions → Apps Script**
2. Delete existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    let targetSheet, rowData;
    
    if (data.formType === 'contact') {
      targetSheet = sheet.getSheetByName('Contact Form');
      rowData = [
        data.timestamp || new Date().toLocaleString(),
        data.name || '',
        data.organization || '',
        data.email || '',
        data.phone || '',
        data.productInterest || '',
        data.message || '',
        data.source || 'Website'
      ];
    } else if (data.formType === 'newsletter') {
      targetSheet = sheet.getSheetByName('Newsletter Signups');
      rowData = [
        data.timestamp || new Date().toLocaleString(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.company || '',
        data.source || 'Website'
      ];
    }
    
    targetSheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (name it "Acuron Form Handler")

### 3. Deploy Web App (1 minute)

1. Click **Deploy → New deployment**
2. Click gear icon ⚙️ → Select **Web app**
3. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### 4. Update Environment Variable (30 seconds)

In your project, create/update `.env.local`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_URL_HERE/exec
OPENAI_API_KEY=your_openai_key_here
```

### 5. Test It! (30 seconds)

```bash
npm run dev
```

Go to http://localhost:3000, submit a form, and check your Google Sheet!

---

## ✅ That's It!

Your forms are now connected to Google Sheets. Every submission automatically appears in your spreadsheet.

---

## 🎯 What Happens Now?

### When someone submits the Contact Form:
1. ✅ Data is validated and sanitized
2. ✅ Saved to "Contact Form" sheet instantly
3. ✅ User sees success message
4. ✅ You can view it in Google Sheets

### When someone signs up for Newsletter:
1. ✅ Data is validated and sanitized
2. ✅ Saved to "Newsletter Signups" sheet instantly
3. ✅ Catalog PDF download starts automatically
4. ✅ User sees success message
5. ✅ You can view it in Google Sheets

---

## 🔍 View Your Submissions

Just go to your Google Sheet anytime: [sheets.google.com](https://sheets.google.com)

All submissions appear in real-time!

---

## 💡 Pro Tips

### Export Data
- **File → Download → CSV** or Excel
- Use for reports, email marketing, etc.

### Share with Team
- Click **Share** button in Google Sheets
- Add team members' emails

### Create Analytics
- Use Google Sheets formulas
- Create pivot tables and charts
- Track conversion rates

### Set Up Notifications
- **Tools → Notification rules**
- Get notified on new submissions

---

## 🆘 Troubleshooting

**Forms not saving?**
- ✅ Check Web App URL in `.env.local`
- ✅ Make sure sheet names are EXACT: "Contact Form" and "Newsletter Signups"
- ✅ Verify Apps Script is deployed with "Anyone" access

**"Permission denied" error?**
- ✅ Re-deploy the web app
- ✅ Make sure "Who has access" = "Anyone"

**Still stuck?**
- See detailed guide: `GOOGLE_SHEETS_SETUP.md`

---

## 📚 More Information

- **Full Setup Guide**: `GOOGLE_SHEETS_SETUP.md`
- **Migration Details**: `INTEGRATION_MIGRATION.md`
- **Environment Setup**: `ENV_SETUP.md`

---

## 🎉 You're Done!

Enjoy free, unlimited form submissions with Google Sheets! 🎊

No more paying for email APIs. All your data is organized, exportable, and easy to analyze.

**Questions?** Check `GOOGLE_SHEETS_SETUP.md` for detailed troubleshooting.

