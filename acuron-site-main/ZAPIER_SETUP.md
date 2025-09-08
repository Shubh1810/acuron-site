# Zapier Webhook Integration Setup

## Overview
Your contact form is now connected to Zapier! Every form submission goes through a secure server-side API route that forwards data to your Zapier webhook, avoiding CORS issues.

## Environment Setup

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/21114959/uyi2n3t/
```

## Architecture

```
Contact Form → /api/contact → Zapier Webhook → Your Automation
```

- **Client-side form** collects user data
- **Server-side API route** (`/app/api/contact/route.ts`) handles submission
- **Zapier webhook** receives the processed data
- **Your automation** processes the lead

## What Gets Sent to Zapier

The form sends a JSON payload with these fields:
- `name` - Full name from the form
- `organization` - Company/organization name  
- `email` - Email address
- `phone` - Phone number (optional)
- `productInterest` - Selected product category
- `message` - Message text
- `timestamp` - ISO timestamp of submission
- `source` - Always "Acuron Website Contact Form"

## Example Payload

```json
{
  "name": "John Doe",
  "organization": "Healthcare Corp",
  "email": "john@example.com", 
  "phone": "+1-555-0123",
  "productInterest": "surgical",
  "message": "Interested in your surgical products...",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "Acuron Website Contact Form"
}
```

## Testing

1. Fill out the contact form on your website
2. Check browser console for success/error logs
3. Check your Zapier webhook logs at: https://zapier.com/app/history
4. Verify the data was received correctly

## Debugging

If you encounter issues:

1. **Check the browser console** for error messages
2. **Check server logs** in your terminal where Next.js is running
3. **Test the API route directly** using a tool like Postman:
   ```bash
   POST http://localhost:3000/api/contact
   Content-Type: application/json
   
   {
     "name": "Test User",
     "organization": "Test Corp",
     "email": "test@example.com",
     "phone": "+1-555-0123",
     "productInterest": "surgical",
     "message": "Test message"
   }
   ```

## Features

✅ **Client-side validation** - Required fields are enforced  
✅ **Loading states** - Button shows spinner while submitting  
✅ **Success/error messages** - User feedback after submission  
✅ **Form reset** - Clears form after successful submission  
✅ **Auto-hide messages** - Status messages disappear after 5 seconds  
✅ **Multi-language support** - All text is localized  
✅ **Error handling** - Graceful fallback if webhook fails  

## Webhook URL

Your current webhook: `https://hooks.zapier.com/hooks/catch/21114959/uyi2n3t/`

Status: ✅ **Active** (tested successfully)

## Next Steps

1. Set up your Zapier automation (email notifications, CRM integration, etc.)
2. Test the full flow from form submission to your desired actions
3. Monitor webhook logs for any delivery issues

---

**Note**: The webhook URL is hardcoded as a fallback, but using the environment variable is recommended for security and flexibility. 