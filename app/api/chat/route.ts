import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful customer service assistant for Acuron Products, a leading manufacturer of ISO-certified medical supplies and PPE equipment in India. 

Company Information:
- Acuron Products specializes in surgical wear, medical disposables, 3-ply masks, N95 masks, surgical gowns, bouffant caps, razors, and medical equipment
- Located in Bhiwandi, Maharashtra, India (Gala No. 112,112,112 1st Floor, B/10, Pritesh Complex, Dapoda Road, Bhiwandi - 421302)
- Contact: +91 98200 72148, +91 98200 43274
- Email: viresh@acuron.in
- Products include: PPE equipment, surgical supplies, medical disposables, orthopedic drapes, gynecology supplies, urology products
- ISO certified with exports globally
- Wide distribution network across India

Key Instructions:
- Be professional, helpful, and knowledgeable about medical supplies
-priority should be getting user to his answer as concise as possible, with least tokens generated and focus on cost cutting but not compromising on getting everything relevant to satisfy customer out there
- Provide accurate information about Acuron's products and services
- For specific technical questions or bulk orders, suggest contacting the sales team
- Keep responses very concise but informative only when a confusion, relevant enough for random user to have in this industry is detected
- If you don't know something specific, direct them to contact the company directly
- Always maintain a friendly, professional tone suitable for healthcare professionals`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversation } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Prepare conversation history for OpenAI
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(conversation || []).map((msg: any) => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-nano-2025-04-14',
      messages: messages as any,
      max_tokens: 300,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const reply = completion.choices[0]?.message?.content || 
      'I apologize, but I encountered an issue. Please contact our sales team at +91 98200 72148 for immediate assistance.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Fallback response
    const fallbackResponse = "Thank you for your message. Our customer service team will assist you shortly. For immediate assistance, please call +91 98200 72148 or email sales@acuron.in.";
    
    return NextResponse.json({ reply: fallbackResponse });
  }
} 