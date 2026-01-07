import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '../../lib/security-utils';

interface NewsletterFormData {
  formType: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  timestamp: string;
  source: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .substring(0, 500); // Limit length
}

// Validate newsletter form data
function validateNewsletterForm(data: any): { isValid: boolean; errors?: string[]; sanitizedData?: any } {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push('Valid email is required');
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Sanitize all inputs
  const sanitizedData = {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    phone: data.phone ? sanitizeInput(data.phone) : '',
    company: data.company ? sanitizeInput(data.company) : '',
  };

  return { isValid: true, sanitizedData };
}

// Send newsletter signup to Google Sheets
async function sendToGoogleSheets(data: NewsletterFormData) {
  try {
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!googleSheetsWebhookUrl) {
      console.error('❌ Google Sheets webhook URL not configured');
      throw new Error('Google Sheets webhook URL not configured. Please check GOOGLE_SHEETS_SETUP.md');
    }

    // Format data for Google Sheets with Indian timezone
    const sheetData = {
      formType: 'newsletter',
      timestamp: new Date(data.timestamp).toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'short',
        timeStyle: 'short'
      }),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      source: data.source
    };

    console.log('📤 Sending newsletter signup to Google Sheets...');

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
        console.log('✅ Successfully saved newsletter signup to Google Sheets:', result);
        return { success: true, data: result };
      } catch {
        console.log('✅ Successfully saved newsletter signup to Google Sheets');
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

// Generate catalog download link
function getCatalogDownloadLink(): string {
  // This should point to your actual catalog PDF
  return '/acuron-brochure.pdf';
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Rate limiting: 3 requests per 5 minutes per IP (stricter for newsletter)
    if (!checkRateLimit(clientIP, 3, 300000)) {
      console.warn(`⚠️ Rate limit exceeded for newsletter signup from IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Too many signup attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    console.log('📧 Received newsletter signup from IP:', clientIP);

    // Validate and sanitize input
    const validation = validateNewsletterForm(body);
    if (!validation.isValid) {
      console.warn('⚠️ Invalid newsletter form data:', validation.errors);
      return NextResponse.json(
        { error: 'Invalid form data', details: validation.errors },
        { status: 400 }
      );
    }

    const sanitizedData = validation.sanitizedData!;

    // Prepare data for Google Sheets
    const newsletterData: NewsletterFormData = {
      formType: 'newsletter',
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      company: sanitizedData.company,
      timestamp: new Date().toISOString(),
      source: 'Acuron Website Newsletter Modal'
    };

    // Save to Google Sheets
    const sheetsResult = await sendToGoogleSheets(newsletterData);

    if (sheetsResult.success) {
      console.log('✅ Newsletter signup saved successfully to Google Sheets');
      
      const catalogLink = getCatalogDownloadLink();
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for subscribing! Your catalog download is ready.',
        data: {
          savedToSheets: true,
          catalogDownloadUrl: catalogLink,
          subscribedEmail: sanitizedData.email
        }
      });
    } else {
      console.error('❌ Failed to save newsletter signup to Google Sheets:', sheetsResult.error);
      throw new Error(sheetsResult.error || 'Failed to save data');
    }

  } catch (error) {
    console.error('❌ Newsletter signup error:', error);
    
    // Don't expose internal error details to client in production
    return NextResponse.json(
      { 
        error: 'Failed to process signup. Please try again or contact us at sales@acuron.in',
        // Only include error details in development
        ...(process.env.NODE_ENV === 'development' && { 
          details: error instanceof Error ? error.message : 'Unknown error' 
        })
      },
      { status: 500 }
    );
  }
}

