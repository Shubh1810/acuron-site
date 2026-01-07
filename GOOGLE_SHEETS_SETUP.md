# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration to collect form submissions from your website.

## 📋 Overview

All form submissions (Contact Form, Newsletter Signups) are automatically saved to Google Sheets without using any email service. This provides:
- ✅ Free and unlimited submissions
- ✅ Real-time data in Google Sheets
- ✅ Easy data export and analysis
- ✅ No third-party email service needed

## 🚀 Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it **"Acuron Website Submissions"**

### Step 2: Create Two Sheets

#### Sheet 1: "Contact Form" 
Create a sheet named **"Contact Form"** with these column headers in Row 1:

| Timestamp | Name | Organization | Email | Phone | Product Interest | Message | Source |
|-----------|------|--------------|-------|-------|------------------|---------|--------|

#### Sheet 2: "Newsletter Signups"
Create a sheet named **"Newsletter Signups"** with these column headers in Row 1:

| Timestamp | Name | Email | Phone | Company | Source |
|-----------|------|-------|-------|---------|--------|

### Step 3: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following code:

```javascript
// Google Apps Script for Acuron Website Form Submissions
// This script receives form data and saves it to appropriate sheets

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Determine which sheet to use based on formType
    let targetSheet;
    let rowData = [];
    
    if (data.formType === 'contact') {
      targetSheet = sheet.getSheetByName('Contact Form');
      if (!targetSheet) {
        throw new Error('Contact Form sheet not found');
      }
      
      // Prepare row data for contact form
      rowData = [
        data.timestamp || new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
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
      if (!targetSheet) {
        throw new Error('Newsletter Signups sheet not found');
      }
      
      // Prepare row data for newsletter
      rowData = [
        data.timestamp || new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.company || '',
        data.source || 'Website'
      ];
    } else {
      throw new Error('Invalid form type');
    }
    
    // Append the row to the sheet
    targetSheet.appendRow(rowData);
    
    // Optional: Send email notification (uncomment if needed)
    // sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        formType: data.formType
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Send email notification when form is submitted
function sendEmailNotification(data) {
  const recipient = 'sales@acuron.in'; // Change this to your email
  let subject = '';
  let body = '';
  
  if (data.formType === 'contact') {
    subject = `🔔 New Contact Form Submission from ${data.name}`;
    body = `
      New contact form submission received:
      
      Name: ${data.name}
      Organization: ${data.organization}
      Email: ${data.email}
      Phone: ${data.phone}
      Product Interest: ${data.productInterest}
      Message: ${data.message}
      Source: ${data.source}
      Timestamp: ${data.timestamp}
    `;
  } else if (data.formType === 'newsletter') {
    subject = `📧 New Newsletter Signup from ${data.name}`;
    body = `
      New newsletter signup received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.company}
      Source: ${data.source}
      Timestamp: ${data.timestamp}
    `;
  }
  
  // Send email
  try {
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: body
    });
  } catch (emailError) {
    console.error('Email notification failed:', emailError);
    // Don't throw error - we still want to save to sheet
  }
}

// Test function - you can run this to test the script
function testDoPost() {
  const testData = {
    formType: 'contact',
    timestamp: new Date().toLocaleString(),
    name: 'Test User',
    organization: 'Test Company',
    email: 'test@example.com',
    phone: '+91 1234567890',
    productInterest: 'Surgical Drapes',
    message: 'This is a test message',
    source: 'Website Test'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log(result.getContent());
}
```

4. Click **Save** (💾 icon)
5. Name your project: **"Acuron Form Handler"**

### Step 4: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Acuron Form Submissions"
   - **Execute as**: "Me (your email)"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. **Important**: Copy the **Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
7. Click **Done**

### Step 5: Update Your Environment Variables

1. Open your `.env.local` file in the `acuron-site` directory
2. Add this line with your Web App URL:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Save the file

### Step 6: Test the Integration

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

2. Test the contact form on your website
3. Check your Google Sheet - new submissions should appear automatically!

## 🔒 Security Notes

- The Web App URL is public, but it only accepts POST requests
- Data validation happens on your server before sending to Google Sheets
- Rate limiting is implemented to prevent abuse
- All user inputs are sanitized before storage

## 📧 Optional: Enable Email Notifications

If you want to receive email notifications when forms are submitted:

1. In the Google Apps Script editor, uncomment this line:
   ```javascript
   // sendEmailNotification(data);
   ```
   Change it to:
   ```javascript
   sendEmailNotification(data);
   ```

2. Update the recipient email in the `sendEmailNotification` function
3. Save and deploy a new version

## 🎯 Data Access

- Access your submissions anytime at: [Google Sheets](https://sheets.google.com/)
- Export to Excel, CSV, or PDF for reports
- Create charts and analytics directly in Google Sheets
- Set up Google Data Studio for advanced dashboards

## 🔧 Troubleshooting

### Forms are not saving to Google Sheets

1. **Check the Web App URL**: Make sure it's correct in `.env.local`
2. **Check Sheet Names**: Ensure sheets are named exactly:
   - "Contact Form"
   - "Newsletter Signups"
3. **Check Column Headers**: They must match exactly (case-sensitive)
4. **Check Apps Script Permissions**: 
   - Go to Apps Script editor
   - Run the `testDoPost` function
   - Authorize the script when prompted

### "Permission denied" error

1. Re-deploy the web app
2. Make sure "Who has access" is set to "Anyone"
3. Clear your browser cache

### Data appears in wrong format

- Check that your column headers are in Row 1
- Ensure headers match the exact names specified above

## 📊 Sample Data View

Your Google Sheet will automatically populate like this:

**Contact Form Sheet:**
```
| Timestamp            | Name      | Organization | Email           | Phone         | Product Interest | Message       | Source  |
|---------------------|-----------|--------------|-----------------|---------------|------------------|---------------|---------|
| 1/7/2026, 2:30 PM   | John Doe  | ABC Hospital | john@abc.com    | +91 123456789 | Surgical Drapes  | Need quote    | Website |
```

**Newsletter Signups Sheet:**
```
| Timestamp            | Name      | Email           | Phone         | Company      | Source  |
|---------------------|-----------|-----------------|---------------|--------------|---------|
| 1/7/2026, 2:35 PM   | Jane Smith| jane@xyz.com    | +91 987654321 | XYZ Medical  | Website |
```

## 🎉 You're All Set!

Your forms are now connected to Google Sheets. All submissions will be saved automatically without any email service dependencies!

## 🤝 Support

If you need help, check:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)

