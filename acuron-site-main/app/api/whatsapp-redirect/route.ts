import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const message = searchParams.get('message');
  const phone = searchParams.get('phone') || '919820043274';
  
  if (!message) {
    return NextResponse.json({ error: 'Message parameter required' }, { status: 400 });
  }
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  // Return HTML that auto-redirects to WhatsApp
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Opening WhatsApp...</title>
      <meta http-equiv="refresh" content="0;url=${whatsappUrl}">
    </head>
    <body>
      <p>Opening WhatsApp...</p>
      <script>
        setTimeout(() => {
          window.location.href = "${whatsappUrl}";
        }, 100);
      </script>
    </body>
    </html>
  `;
    
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
} 