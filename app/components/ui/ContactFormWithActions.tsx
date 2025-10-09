'use client';

import { useActionState, useOptimistic, useTransition } from 'react';
import { Mail, User, Building2, Phone, Package, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

// Define the form state interface
interface ContactFormState {
  status: 'idle' | 'pending' | 'success' | 'error';
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    organization?: string;
    message?: string;
  };
}

// Define the form data interface
interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  phone?: string;
  productInterest: string;
  message: string;
}

// Server Action - This will be called from the client
async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate network delay for demo
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Extract form data
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    organization: formData.get('organization') as string,
    phone: formData.get('phone') as string,
    productInterest: formData.get('productInterest') as string,
    message: formData.get('message') as string,
  };

  // Basic validation
  const errors: NonNullable<ContactFormState['errors']> = {};
  
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.organization.trim()) {
    errors.organization = 'Organization is required';
  }
  
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the errors below',
      errors,
    };
  }

  try {
    // Call your existing API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'React 19 Actions Form',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return {
      status: 'success',
      message: 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you within 24 hours.',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to submit your inquiry. Please try again or contact us directly.',
    };
  }
}

interface ContactFormWithActionsProps {
  onSuccess?: () => void;
}

export default function ContactFormWithActions({ onSuccess }: ContactFormWithActionsProps) {
  // Use React 19's useActionState for form handling
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: 'idle' as const,
  });

  // Use useOptimistic for immediate UI feedback
  const [optimisticSubmissions, addOptimisticSubmission] = useOptimistic(
    [] as Array<{ id: string; name: string; timestamp: Date }>,
    (currentSubmissions, newSubmission: { id: string; name: string; timestamp: Date }) => [
      ...currentSubmissions,
      newSubmission,
    ]
  );

  // Handle form submission with optimistic updates
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    
    // Add optimistic submission
    addOptimisticSubmission({
      id: Date.now().toString(),
      name: name || 'Anonymous',
      timestamp: new Date(),
    });

    // Call the server action
    await formAction(formData);
    
    // Trigger success callback if provided
    if (state.status === 'success' && onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600">
          Send us your inquiry and we'll respond within 24 hours
        </p>
      </div>

      {/* Success/Error Messages */}
      {state.message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          state.status === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {state.status === 'success' ? (
            <CheckCircle size={20} className="text-green-600" />
          ) : (
            <AlertCircle size={20} className="text-red-600" />
          )}
          <span className="font-medium">{state.message}</span>
        </div>
      )}

      {/* Optimistic Submissions Display */}
      {optimisticSubmissions.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Recent Submissions:</h3>
          {optimisticSubmissions.map((submission) => (
            <div key={submission.id} className="text-sm text-blue-600">
              {submission.name} - {submission.timestamp.toLocaleTimeString()}
            </div>
          ))}
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User size={16} className="inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            className={`w-full px-4 py-3 rounded-xl border ${
              state.errors?.name ? 'border-red-300' : 'border-gray-200'
            } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200`}
            placeholder="Enter your full name"
            disabled={isPending}
          />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail size={16} className="inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            className={`w-full px-4 py-3 rounded-xl border ${
              state.errors?.email ? 'border-red-300' : 'border-gray-200'
            } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200`}
            placeholder="Enter your email address"
            disabled={isPending}
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
          )}
        </div>

        {/* Organization Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 size={16} className="inline mr-2" />
            Organization *
          </label>
          <input
            type="text"
            name="organization"
            className={`w-full px-4 py-3 rounded-xl border ${
              state.errors?.organization ? 'border-red-300' : 'border-gray-200'
            } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200`}
            placeholder="Enter your organization name"
            disabled={isPending}
          />
          {state.errors?.organization && (
            <p className="mt-1 text-sm text-red-600">{state.errors.organization}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone size={16} className="inline mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200"
            placeholder="Enter your phone number"
            disabled={isPending}
          />
        </div>

        {/* Product Interest Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Package size={16} className="inline mr-2" />
            Product Interest
          </label>
          <input
            type="text"
            name="productInterest"
            placeholder="Enter product category or name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200"
            disabled={isPending}
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            className={`w-full px-4 py-3 rounded-xl border ${
              state.errors?.message ? 'border-red-300' : 'border-gray-200'
            } focus:border-[#0F4679] focus:ring-2 focus:ring-[#0F4679]/20 transition-colors duration-200`}
            placeholder="Tell us about your inquiry..."
            disabled={isPending}
          />
          {state.errors?.message && (
            <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
            isPending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#0F4679] to-[#158C07] hover:from-[#0D3A65] hover:to-[#126E06] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          }`}
        >
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            'Send Inquiry'
          )}
        </button>
      </form>
    </div>
  );
} 