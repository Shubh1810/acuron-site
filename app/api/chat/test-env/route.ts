import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensures the route is not statically exported

export async function GET() {
  console.log('[Test Env API] GET request received.');

  const hasOpenAIKey = !!process.env.OPENAI_API_KEY;
  const openAIKeyPrefix = process.env.OPENAI_API_KEY?.substring(0, 10) + '...';

  const hasNextPublicKey = !!process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const nextPublicKeyPrefix = process.env.NEXT_PUBLIC_OPENAI_API_KEY?.substring(0, 10) + '...';
  
  const hasVercelKey = !!process.env.VERCEL_OPENAI_API_KEY;
  const vercelKeyPrefix = process.env.VERCEL_OPENAI_API_KEY?.substring(0, 10) + '...';

  // Try to get the key that would be used by the chat API
  const resolvedApiKeyByChatLogic = process.env.OPENAI_API_KEY ||
                                process.env.NEXT_PUBLIC_OPENAI_API_KEY ||
                                process.env.VERCEL_OPENAI_API_KEY;
  const resolvedApiKeyPrefix = resolvedApiKeyByChatLogic?.substring(0,10) + '...';

  const responsePayload = {
    Checks: {
      OPENAI_API_KEY: {
        exists: hasOpenAIKey,
        prefix: hasOpenAIKey ? openAIKeyPrefix : 'Not found'
      },
      NEXT_PUBLIC_OPENAI_API_KEY: {
        exists: hasNextPublicKey,
        prefix: hasNextPublicKey ? nextPublicKeyPrefix : 'Not found'
      },
      VERCEL_OPENAI_API_KEY: {
        exists: hasVercelKey,
        prefix: hasVercelKey ? vercelKeyPrefix : 'Not found'
      },
      RESOLVED_API_KEY_BY_CHAT_LOGIC: {
        exists: !!resolvedApiKeyByChatLogic,
        prefix: resolvedApiKeyByChatLogic ? resolvedApiKeyPrefix : 'Not found' 
      }
    },
    NODE_ENV: process.env.NODE_ENV,
    ALL_ENV_KEYS: Object.keys(process.env) // Be cautious with this in public repos
  };

  console.log('[Test Env API] Response payload:', JSON.stringify(responsePayload, null, 2));
  return NextResponse.json(responsePayload);
} 