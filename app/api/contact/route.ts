import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, checkRateLimit } from '../../lib/security-utils';

interface ContactFormData {
  formType: string;
  name: string;
  organization: string;
  email: string;
  phone?: string;
  productInterest: string;
  message: string;
  timestamp: string;
  source: string;
}

// Google Sheets Integration - Primary data storage
async function sendToGoogleSheets(data: ContactFormData) {
  try {
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!googleSheetsWebhookUrl) {
      console.error('❌ Google Sheets webhook URL not configured');
      throw new Error('Google Sheets webhook URL not configured. Please check GOOGLE_SHEETS_SETUP.md');
    }

    // Format data for Google Sheets with Indian timezone
    const sheetData = {
      formType: 'contact',
      timestamp: new Date(data.timestamp).toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'short',
        timeStyle: 'short'
      }),
      name: data.name,
      organization: data.organization,
      email: data.email,
      phone: data.phone || '',
      productInterest: data.productInterest || 'Not specified',
      message: data.message || 'No message',
      source: data.source
    };

    console.log('📤 Sending data to Google Sheets...');

    const response = await fetch(googleSheetsWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    const responseText = await response.text();

    if (response.ok) {
      try {
        const result = JSON.parse(responseText);
        console.log('✅ Successfully saved to Google Sheets:', result);
        return { success: true, data: result };
      } catch {
        console.log('✅ Successfully saved to Google Sheets');
      return { success: true };
      }
    } else {
      throw new Error(`Google Sheets API error: ${response.status} - ${responseText}`);
    }
  } catch (error) {
    console.error('❌ Google Sheets integration error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Optional: Generate WhatsApp notification link (does not send automatically)
function generateWhatsAppLink(data: ContactFormData): string {
  const whatsappPhoneNumber = process.env.WHATSAPP_PHONE_NUMBER || '919820043274';
  
    const message = `🔔 *New Inquiry from Acuron Website*

👤 *Name:* ${data.name}
🏢 *Organization:* ${data.organization}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'Not provided'}
🎯 *Product Interest:* ${data.productInterest || 'Not specified'}

💬 *Message:*
${data.message || 'No additional message'}

⏰ *Received:* ${new Date(data.timestamp).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
📍 *Source:* ${data.source}`;

    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
  console.log('📱 WhatsApp notification link:', whatsappLink);
  
  return whatsappLink;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Rate limiting: 5 requests per minute per IP
    if (!checkRateLimit(clientIP, 5, 60000)) {
      console.warn(`⚠️ Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    console.log('📨 Received contact form submission from IP:', clientIP);

    // Comprehensive input validation and sanitization
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      console.warn('⚠️ Invalid form data:', validation.errors);
      return NextResponse.json(
        { error: 'Invalid form data', details: validation.errors },
        { status: 400 }
      );
    }

    const sanitizedData = validation.sanitizedData!;

    // Prepare data for Google Sheets
    const contactData: ContactFormData = {
      formType: 'contact',
      name: sanitizedData.name,
      organization: sanitizedData.organization,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      productInterest: sanitizedData.productInterest,
      message: sanitizedData.message,
      timestamp: new Date().toISOString(),
      source: 'Acuron Website Contact Form'
    };

    // Save to Google Sheets (primary data storage)
    const sheetsResult = await sendToGoogleSheets(contactData);

    if (sheetsResult.success) {
      console.log('✅ Contact form data saved successfully to Google Sheets');
      
      // Generate WhatsApp link for manual follow-up (optional)
      const whatsappLink = generateWhatsAppLink(contactData);
      
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your inquiry has been submitted successfully. We will contact you soon.',
        data: {
          savedToSheets: true,
          whatsappLink: whatsappLink
        }
      });
    } else {
      console.error('❌ Failed to save to Google Sheets:', sheetsResult.error);
      throw new Error(sheetsResult.error || 'Failed to save data');
    }

  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    
    // Don't expose internal error details to client in production
    return NextResponse.json(
      { 
        error: 'Failed to submit inquiry. Please try again or contact us directly at sales@acuron.in',
        // Only include error details in development
        ...(process.env.NODE_ENV === 'development' && { 
          details: error instanceof Error ? error.message : 'Unknown error' 
        })
      },
      { status: 500 }
    );
  }
} 