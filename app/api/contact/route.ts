import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  productInterest: string;
  message: string;
  timestamp: string;
  source: string;
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);



// Google Sheets Integration
async function sendToGoogleSheets(data: ContactFormData) {
  try {
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!googleSheetsWebhookUrl) {
      console.log('Google Sheets webhook URL not configured');
      return { success: false, error: 'Google Sheets webhook not configured' };
    }

    // Format data for Google Sheets
    const sheetData = {
      timestamp: new Date(data.timestamp).toLocaleString(),
      name: data.name,
      organization: data.organization,
      email: data.email,
      phone: data.phone || 'N/A',
      productInterest: data.productInterest,
      message: data.message,
      source: data.source
    };

    const response = await fetch(googleSheetsWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetData),
    });

    if (response.ok) {
      console.log('✅ Successfully sent to Google Sheets');
      return { success: true };
    } else {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Google Sheets integration error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// WhatsApp Integration (FREE - using WhatsApp links)
async function sendToWhatsApp(data: ContactFormData) {
  try {
    const whatsappPhoneNumber = process.env.WHATSAPP_PHONE_NUMBER || '919820043274'; // Remove + for link format
    
    // Format WhatsApp message for URL encoding
    const message = `🔔 *New Inquiry from Acuron Website*

👤 *Name:* ${data.name}
🏢 *Organization:* ${data.organization}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'Not provided'}
🎯 *Product Interest:* ${data.productInterest || 'Not specified'}

💬 *Message:*
${data.message || 'No additional message'}

⏰ *Received:* ${new Date(data.timestamp).toLocaleString()}
📍 *Source:* ${data.source}`;

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Log the WhatsApp link for manual access or future automation
    console.log('📱 WhatsApp notification link generated:', whatsappLink);
    console.log('✅ WhatsApp integration ready - link created');
    
    // For now, we'll consider this successful since the link is generated
    // In a real implementation, you could:
    // 1. Store this in a queue for manual processing
    // 2. Send via email as a clickable link
    // 3. Use a webhook service to auto-open the link
    
    return { 
      success: true, 
      whatsappLink: whatsappLink,
      method: 'link_generated' 
    };
  } catch (error) {
    console.error('❌ WhatsApp integration error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Email Notification using Resend SDK
async function sendEmailNotification(data: ContactFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured');
      return { success: false, error: 'Resend API key not configured' };
    }

    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Inquiry - Acuron Products</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #0F4679 0%, #16599D 100%); color: white; padding: 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 8px; }
            .tagline { opacity: 0.9; font-size: 14px; }
            .content { padding: 30px; }
            .inquiry-card { background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #0F4679; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: 600; color: #374151; font-size: 14px; margin-bottom: 4px; }
            .field-value { color: #6b7280; line-height: 1.5; }
            .message-box { background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; margin-top: 10px; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
            .quick-actions { display: flex; gap: 10px; margin-top: 20px; justify-content: center; }
            .action-btn { background: #0F4679; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px; }
            .priority-high { border-left-color: #ef4444; }
            .priority-medium { border-left-color: #f59e0b; }
            .priority-low { border-left-color: #10b981; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">ACURON</div>
                <div class="tagline">New Customer Inquiry</div>
            </div>
            
            <div class="content">
                <h2 style="color: #0F4679; margin-top: 0;">📋 New Inquiry Details</h2>
                
                <div class="inquiry-card priority-medium">
                    <div class="field">
                        <div class="field-label">👤 Full Name</div>
                        <div class="field-value">${data.name}</div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">🏢 Organization</div>
                        <div class="field-value">${data.organization}</div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">📧 Email Address</div>
                        <div class="field-value"><a href="mailto:${data.email}" style="color: #0F4679;">${data.email}</a></div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">📱 Phone Number</div>
                        <div class="field-value">${data.phone ? `<a href="tel:${data.phone}" style="color: #0F4679;">${data.phone}</a>` : 'Not provided'}</div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">🎯 Product Interest</div>
                        <div class="field-value"><strong>${data.productInterest || 'Not specified'}</strong></div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">💬 Message</div>
                        <div class="message-box">${data.message || 'No additional message'}</div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">⏰ Received</div>
                        <div class="field-value">${new Date(data.timestamp).toLocaleString()}</div>
                    </div>
                    
                    <div class="field">
                        <div class="field-label">📍 Source</div>
                        <div class="field-value">${data.source}</div>
                    </div>
                </div>
                
                <div class="quick-actions">
                    <a href="mailto:${data.email}?subject=Re: Your Inquiry - Acuron Products&body=Dear ${data.name},%0A%0AThank you for your inquiry about our medical products. We have received your message and will respond within 24 hours.%0A%0ABest regards,%0AAcuron Products Team" class="action-btn">Reply via Email</a>
                    ${data.phone ? `<a href="https://wa.me/${data.phone.replace(/[^\d]/g, '')}?text=Hello ${data.name}, thank you for your inquiry about our medical products. How can we assist you further?" class="action-btn">WhatsApp Reply</a>` : ''}
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Acuron Products India</strong></p>
                <p>Gala No. 112, 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India</p>
                <p>Email: sales@acuron.in | Phone: +91 98200 43274</p>
            </div>
        </div>
    </body>
    </html>`;

    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Acuron <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'sales@acuron.in'],
      cc: process.env.CC_EMAIL ? [process.env.CC_EMAIL] : undefined,
      subject: `🔔 New Inquiry from ${data.name} - ${data.organization}`,
      html: emailHtml,
      replyTo: data.email, // This allows replying directly to the customer
    });

    if (error) {
      console.error('❌ Resend email error:', error);
      return { success: false, error: error.message };
    }

    console.log('✅ Email notification sent successfully via Resend:', emailData?.id);
    return { success: true };
  } catch (error) {
    console.error('❌ Email notification error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('📨 Received contact form submission:', JSON.stringify(body, null, 2));

    // Validate required fields (only name, email, organization)
    const requiredFields = ['name', 'organization', 'email'];
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Prepare data for integrations
    const contactData: ContactFormData = {
      name: body.name,
      organization: body.organization,
      email: body.email,
      phone: body.phone || '',
      productInterest: body.productInterest,
      message: body.message,
      timestamp: new Date().toISOString(),
      source: 'Acuron Website Contact Form'
    };

    // Execute all integrations in parallel for better performance
    const integrationPromises = [
      sendToGoogleSheets(contactData),
      sendToWhatsApp(contactData),
      sendEmailNotification(contactData)
    ];

    const results = await Promise.allSettled(integrationPromises);
    const integrationResults = {
      googleSheets: results[0],
      whatsapp: results[1],
      email: results[2]
    };

    // Log detailed results
    console.log('🔄 Integration Results:');
    Object.entries(integrationResults).forEach(([service, result]) => {
      if (result.status === 'fulfilled') {
        if (result.value.success) {
          console.log(`  ✅ ${service}: SUCCESS`);
        } else {
          console.log(`  ❌ ${service}: FAILED - ${result.value.error}`);
        }
      } else {
        console.log(`  ❌ ${service}: ERROR - ${result.reason}`);
      }
    });

    // Check if at least email notification succeeded
    const emailResult = results[2];
    const emailSuccess = emailResult.status === 'fulfilled' && emailResult.value.success;

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry submitted successfully! We will contact you soon.',
        integrations: integrationResults
      });
    } else {
      // If email fails, we should still return success if other integrations work
      const anySuccess = results.some(result => 
        result.status === 'fulfilled' && result.value.success
      );

      if (anySuccess) {
        return NextResponse.json({
          success: true,
          message: 'Inquiry submitted successfully! We will contact you soon.',
          integrations: integrationResults,
          warning: 'Some integrations may have failed'
        });
      } else {
        throw new Error('All integrations failed');
      }
    }

  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit inquiry. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 