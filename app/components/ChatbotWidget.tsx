"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m here to help you with medical supplies. How can I assist you today?',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          conversation: messages.map(msg => ({
            ...msg,
            timestamp: msg.timestamp.toISOString()
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botResponse = {
        type: 'bot',
        content: data.reply,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback response
      const errorResponse = {
        type: 'bot',
        content: 'I apologize for the technical issue. Please contact our sales team directly at +91 98200 72148 or email sales@acuron.in for immediate assistance.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
          className="group relative w-16 h-16 bg-gradient-to-br from-[#0F4679] to-[#158C07] rounded-2xl shadow-2xl hover:shadow-[#0F4679]/25 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/10"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4679] to-[#158C07] rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
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
                <Image
                  src="/products/Customer Service Chat Icon.png"
                  alt="Customer Service Chat"
                  width={32}
                  height={32}
                  className="filter brightness-0 invert"
                />
              )}
            </motion.div>
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-ping opacity-75"></div>
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
            <div className="bg-gradient-to-r from-[#0F4679]/10 to-[#158C07]/10 px-6 py-4 border-b border-gray-100/50">
              <div className="flex items-center space-x-3">
                {/* Profile Picture with Online Status */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src="/image.png"
                      alt="Acuron Assistant Profile"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#158C07] rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-[#0F4679] text-lg">Acuron Assistant</h3>
                  <p className="text-gray-600 text-xs">Customer Service • Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 text-sm font-rubik ${
                      msg.type === 'user'
                        ? 'bg-[#0F4679] text-white rounded-2xl rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 text-sm font-rubik">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100/50 bg-white/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  style={{ fontSize: '16px' }}
                  className="flex-1 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F4679]/20 text-sm font-rubik placeholder-gray-400 disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                  className="w-10 h-10 bg-[#0F4679] text-white rounded-2xl hover:bg-[#0D3A64] hover:shadow-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 