# Chatbot Setup Guide

## Overview
The chatbot is now connected to OpenAI's GPT-4o-mini model and provides intelligent responses about Acuron Products' medical supplies and services.

## Setup Instructions

### 1. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the generated API key

### 2. Configure Environment Variables
1. Create a file named `.env.local` in the `acuron-site` directory
2. Add the following content:
```
OPENAI_API_KEY=your_actual_api_key_here
```
3. Replace `your_actual_api_key_here` with the API key from step 1

### 3. Restart Development Server
After adding the environment variable:
```bash
npm run dev
```

## Features

### Intelligent Responses
- Responds to questions about Acuron Products and services
- Provides contact information and company details
- Handles product inquiries professionally
- Maintains conversation context

### User Experience
- Loading states with animated indicators
- Real-time responses (typically 1-3 seconds)
- Error handling with fallback messages
- Professional medical industry tone

### Fallback Handling
- If OpenAI API fails, provides helpful fallback response
- Always includes contact information for direct assistance
- Graceful error handling for network issues

## Cost Management

### Token Limits
- Max tokens per response: 300
- Keeps responses concise and relevant
- Reduces API costs

### Model Configuration
- Uses GPT-4o-mini (cost-effective model)
- Temperature: 0.7 (balanced creativity)
- Includes conversation history for context

## Security
- API key stored securely in environment variables
- No sensitive data logged
- Proper error handling prevents information leakage

## Support
If you encounter issues:
1. Check that `.env.local` file exists with correct API key
2. Verify OpenAI account has credits
3. Check browser console for error messages
4. Restart development server after environment changes 