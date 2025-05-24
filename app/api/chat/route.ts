import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Define the expected request body structure
interface ChatRequestBody {
  message: string;
  conversation: Array<{ type: 'user' | 'bot'; content: string; timestamp: string }>;
}

// Define the expected response body structure
interface ChatResponseBody {
  reply: string;
}

export const dynamic = 'force-dynamic'; // Ensures the route is not statically exported

export async function POST(request: Request) {
  try {
    const body: ChatRequestBody = await request.json();
    const { message, conversation } = body;

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return NextResponse.json<ChatResponseBody>(
        { reply: 'I apologize, but the AI service is not configured. Please contact our sales team directly at +91 98200 72148 or email sales@acuron.in for immediate assistance.' },
        { status: 500 }
      );
    }

    // Format conversation history for OpenAI
    const messages = [
      {
        role: 'system' as const,
        content: `You are a helpful customer service assistant for Acuron, a medical supplies company. 
        You help customers with:
        - Product information about medical supplies
        - Pricing inquiries
        - Order status and support
        - General medical supply questions
        
        Company contact information:
        - Phone: +91 98200 72148
        - Email: sales@acuron.in
        - Website: acuron.in
        
        Be friendly, professional, and helpful. If you can't answer a specific question, direct them to contact the sales team.`
      },
      // Add conversation history
      ...conversation.map(msg => ({
        role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      // Add current message
      {
        role: 'user' as const,
        content: message
      }
    ];

    console.log('Sending request to OpenAI with message:', message);

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-nano-2025-04-14',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const gptReply = completion.choices[0]?.message?.content || 'I apologize, but I encountered an issue. Please contact our sales team at +91 98200 72148 for assistance.';

    console.log('OpenAI response:', gptReply);

    return NextResponse.json<ChatResponseBody>({ reply: gptReply });

  } catch (error) {
    console.error('Error processing chat request:', error);
    
    // Provide helpful fallback response
    const fallbackMessage = 'I apologize for the technical issue. For immediate assistance with medical supplies, please contact our sales team directly at +91 98200 72148 or email sales@acuron.in. We\'re here to help with all your medical supply needs!';
    
    return NextResponse.json<ChatResponseBody>(
      { reply: fallbackMessage },
      { status: 500 }
    );
  }
} 