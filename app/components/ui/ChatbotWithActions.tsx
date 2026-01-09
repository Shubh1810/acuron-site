'use client';

import React, { useActionState, useOptimistic, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2, Bot, User, MessageCircle } from 'lucide-react';

// Define message types
interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  status?: 'pending' | 'sent' | 'failed';
}

// Define chat state
interface ChatState {
  status: 'idle' | 'pending' | 'success' | 'error';
  message?: string;
  lastResponse?: string;
}

// Server Action for sending messages
async function sendChatMessage(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const message = formData.get('message') as string;
  
  if (!message.trim()) {
    return {
      status: 'error',
      message: 'Message cannot be empty',
    };
  }

  try {
    // Call your existing chat API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.trim(),
        conversation: [], // You can pass conversation history here
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    
    return {
      status: 'success',
      lastResponse: data.reply,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to send message. Please try again.',
      lastResponse: 'I apologize for the technical issue. Please contact our sales team directly at +91 93229 61664 or email sales@acuron.in for immediate assistance.',
    };
  }
}

export default function ChatbotWithActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I am your Acuron virtual Healthcare Assistant, specializing in our range of medical supplies. Whether you have questions about specifications, usage, or inquiries, I'm here to support you. How can I assist you today?",
      timestamp: new Date(),
      status: 'sent',
    }
  ]);

  // Use React 19's useActionState for message handling
  const [state, formAction, isPending] = useActionState(sendChatMessage, {
    status: 'idle' as const,
  });

  // Use useOptimistic for immediate message updates
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, newMessage: ChatMessage) => [...currentMessages, newMessage]
  );

  // Handle form submission with optimistic updates
  const handleSubmit = async (formData: FormData) => {
    const messageContent = formData.get('message') as string;
    
    if (!messageContent.trim()) return;

    // Create optimistic user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent,
      timestamp: new Date(),
      status: 'pending',
    };

    // Add optimistic user message
    addOptimisticMessage(userMessage);

    // Clear the form
    const form = document.getElementById('chat-form') as HTMLFormElement;
    if (form) form.reset();

    // Call the server action
    await formAction(formData);
  };

  // Handle successful message response
  useEffect(() => {
    if (state.status === 'success' && state.lastResponse) {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: state.lastResponse,
        timestamp: new Date(),
        status: 'sent',
      };

      // Update the actual messages state
      setMessages(prev => {
        const userMessages = prev.filter(m => m.type === 'user');
        const lastUserMessage = userMessages[userMessages.length - 1];
        
        // Update the last user message status to 'sent'
        const updatedMessages = prev.map(m => 
          m.id === lastUserMessage?.id ? { ...m, status: 'sent' as const } : m
        );
        
        return [...updatedMessages, botResponse];
      });
    }
  }, [state.status, state.lastResponse]);

  // Handle error state
  useEffect(() => {
    if (state.status === 'error' && state.lastResponse) {
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: state.lastResponse,
        timestamp: new Date(),
        status: 'sent',
      };

      setMessages(prev => [...prev, errorResponse]);
    }
  }, [state.status, state.lastResponse]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-radial from-[#158C07] via-[#158C07]/90 to-[#0F6007] rounded-full shadow-2xl hover:shadow-[#158C07]/25 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/10"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-[#158C07] via-[#158C07]/90 to-[#0F6007] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Online Status Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#158C07] rounded-full border-2 border-white animate-pulse shadow-lg"></div>
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <MessageCircle size={32} className="text-white" />
              )}
            </motion.div>
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-75"></div>
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#158C07]/10 to-[#0F6007]/10 px-6 py-4 border-b border-gray-100/50">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-[#158C07] to-[#0F6007] flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#158C07] rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-[#158C07] text-lg">Acuron Assistant</h3>
                  <p className="text-gray-600 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Online • React 19 Powered
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {optimisticMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[70%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      msg.type === 'user' 
                        ? 'bg-[#0F4679] text-white' 
                        : 'bg-[#158C07] text-white'
                    }`}>
                      {msg.type === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    
                    {/* Message Bubble */}
                    <div className={`px-4 py-2 text-sm font-rubik rounded-2xl relative ${
                      msg.type === 'user'
                        ? 'bg-[#0F4679] text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}>
                      {msg.content}
                      
                      {/* Status Indicator for User Messages */}
                      {msg.type === 'user' && (
                        <div className="absolute -bottom-1 -right-1">
                          {msg.status === 'pending' && (
                            <Loader2 size={12} className="text-gray-300 animate-spin" />
                          )}
                          {msg.status === 'sent' && (
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-white" />
                          )}
                          {msg.status === 'failed' && (
                            <div className="w-3 h-3 bg-red-500 rounded-full border border-white" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isPending && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-2 max-w-[70%]">
                    <div className="w-6 h-6 rounded-full bg-[#158C07] flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 text-sm font-rubik">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100/50">
              <form id="chat-form" action={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  name="message"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#158C07] focus:ring-2 focus:ring-[#158C07]/20 transition-colors duration-200 text-sm"
                  disabled={isPending}
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    isPending
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#158C07] hover:bg-[#126E06] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  {isPending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 