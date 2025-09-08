// Security utilities for input validation and sanitization

// HTML escape function to prevent XSS
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\//g, "&#x2F;");
}

// Email validation with strict RFC compliance
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Phone number validation (international format)
export function isValidPhone(phone: string): boolean {
  // Allow international format with + and digits, spaces, hyphens, parentheses
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7 && cleanPhone.length <= 15;
}

// Sanitize input to prevent injection attacks
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/\r\n|\r|\n/g, '\n'); // Normalize line endings
}

// Validate contact form data
export interface ContactFormValidation {
  isValid: boolean;
  errors: string[];
  sanitizedData?: {
    name: string;
    organization: string;
    email: string;
    phone: string;
    productInterest: string;
    message: string;
  };
}

export function validateContactForm(data: any): ContactFormValidation {
  const errors: string[] = [];
  
  // Required field validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  if (!data.organization || typeof data.organization !== 'string' || data.organization.trim().length === 0) {
    errors.push('Organization is required');
  } else if (data.organization.trim().length > 200) {
    errors.push('Organization name must be less than 200 characters');
  }
  
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email.trim())) {
    errors.push('Invalid email format');
  }
  
  // Optional field validation
  if (data.phone && typeof data.phone === 'string' && data.phone.trim().length > 0) {
    if (!isValidPhone(data.phone.trim())) {
      errors.push('Invalid phone number format');
    }
  }
  
  if (data.message && typeof data.message === 'string' && data.message.trim().length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }
  
  if (data.productInterest && typeof data.productInterest === 'string' && data.productInterest.trim().length > 100) {
    errors.push('Product interest must be less than 100 characters');
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors };
  }
  
  // Return sanitized data
  return {
    isValid: true,
    errors: [],
    sanitizedData: {
      name: sanitizeInput(data.name.trim(), 100),
      organization: sanitizeInput(data.organization.trim(), 200),
      email: data.email.trim().toLowerCase(),
      phone: data.phone ? sanitizeInput(data.phone.trim(), 20) : '',
      productInterest: data.productInterest ? sanitizeInput(data.productInterest.trim(), 100) : '',
      message: data.message ? sanitizeInput(data.message.trim(), 5000) : '',
    }
  };
}

// Rate limiting helper (simple in-memory store for development)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Clean up old rate limit records
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 300000); // Clean up every 5 minutes 