# PostHog Integration Examples for Acuron Products

## Real-World Implementation Examples

This guide shows how to integrate PostHog tracking into your existing Acuron Products components.

---

## Table of Contents

1. [Chatbot Tracking](#chatbot-tracking)
2. [Contact Form Tracking](#contact-form-tracking)
3. [Newsletter Tracking](#newsletter-tracking)
4. [Product Page Tracking](#product-page-tracking)
5. [Navigation Tracking](#navigation-tracking)
6. [Cookie Consent Integration](#cookie-consent-integration)
7. [Error Tracking](#error-tracking)

---

## Chatbot Tracking

### Track Chatbot Interactions

Update your `ChatbotWidget` or `ChatbotWithActions` component:

```typescript
// app/components/ChatbotWidget.tsx or ChatbotWithActions.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useState } from 'react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Track chatbot opened
    trackEvent.chatbotInteraction('opened');
  };

  const handleClose = () => {
    setIsOpen(false);
    // Track chatbot closed
    trackEvent.chatbotInteraction('closed');
  };

  const handleMessageSent = (message: string) => {
    // Track message sent
    trackEvent.chatbotInteraction('message_sent', message);
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp redirect from chatbot
    trackEvent.whatsappClick('chatbot');
  };

  return (
    <div>
      {/* Your chatbot UI */}
      <button onClick={handleOpen}>Open Chat</button>
      {isOpen && (
        <div>
          {/* Chatbot content */}
          <button onClick={handleClose}>Close</button>
          <button onClick={handleWhatsAppClick}>
            Continue on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## Contact Form Tracking

### Track Contact Form Submissions

Update your contact form component:

```typescript
// app/components/sections/ContactSection.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send form data
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track successful submission
        trackEvent.contactFormSubmitted({
          name: formData.name,
          email: formData.email,
          subject: formData.message.substring(0, 50), // First 50 chars
        });

        alert('Thank you! We will contact you soon.');
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Track failed submission
        trackEvent.formSubmit('contact_form', false, {
          error: 'Server error',
        });
      }
    } catch (error) {
      // Track error
      trackEvent.errorOccurred(
        'contact_form_submission',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  };

  const handleFieldFocus = (fieldName: string) => {
    // Track field interaction (optional)
    trackEvent.formSubmit('contact_form_field_focus', true, {
      field: fieldName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        onFocus={() => handleFieldFocus('name')}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        onFocus={() => handleFieldFocus('email')}
        required
      />
      {/* Other fields */}
      <button type="submit">Send Message</button>
    </form>
  );
}
```

### Track Contact Form API

Update your API route to track server-side:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { PostHog } from 'posthog-node';

// Initialize PostHog for server-side tracking
const posthog = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY!,
  { host: process.env.NEXT_PUBLIC_POSTHOG_HOST }
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Your existing logic to send email/save data
    // ...

    // Track server-side event
    posthog.capture({
      distinctId: body.email, // Use email as identifier
      event: 'contact_form_server_processed',
      properties: {
        name: body.name,
        has_phone: !!body.phone,
        message_length: body.message.length,
        timestamp: new Date().toISOString(),
      },
    });

    // Shutdown PostHog client
    await posthog.shutdown();

    return NextResponse.json({ success: true });
  } catch (error) {
    // Track error
    posthog.capture({
      distinctId: 'system',
      event: 'contact_form_server_error',
      properties: {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    });

    await posthog.shutdown();

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
```

---

## Newsletter Tracking

### Track Newsletter Subscriptions

Update your newsletter component:

```typescript
// app/components/ui/NewsletterWithActions.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useState } from 'react';

export default function NewsletterWithActions() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Track successful subscription
        trackEvent.newsletterSubscribed(email);

        alert('Successfully subscribed!');
        setEmail('');
      } else {
        // Track failed subscription
        trackEvent.formSubmit('newsletter', false, {
          error: 'Invalid email',
        });
      }
    } catch (error) {
      trackEvent.errorOccurred(
        'newsletter_subscription',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  };

  return (
    <form onSubmit={handleSubscribe}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

---

## Product Page Tracking

### Track Product Views and Interactions

```typescript
// app/products/[id]/page.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useEffect } from 'react';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: 'Surgical Gown',
    category: 'PPE',
    // ... other product details
  };

  // Track product view on page load
  useEffect(() => {
    trackEvent.productViewed(product.id, product.name, product.category);
  }, [product.id]);

  const handleCatalogDownload = () => {
    // Track catalog download
    trackEvent.catalogDownload(product.id);
    
    // Download logic
    window.open('/acuron-brochure.pdf', '_blank');
  };

  const handleInquiry = (type: 'whatsapp' | 'email') => {
    // Track inquiry
    trackEvent.productInquiry(product.id, product.name, type);

    if (type === 'whatsapp') {
      trackEvent.whatsappClick('product_page');
      window.open('https://wa.me/919820043274', '_blank');
    }
  };

  const handleScrollToSpecs = () => {
    // Track section view
    trackEvent.pageSection('product_specifications', 'viewed');
    
    // Scroll logic
    document.getElementById('specifications')?.scrollIntoView();
  };

  return (
    <div>
      <h1>{product.name}</h1>
      
      <button onClick={handleCatalogDownload}>
        Download Catalog
      </button>

      <button onClick={() => handleInquiry('whatsapp')}>
        Inquire on WhatsApp
      </button>

      <button onClick={() => handleInquiry('email')}>
        Email Us
      </button>

      <button onClick={handleScrollToSpecs}>
        View Specifications
      </button>

      <div id="specifications">
        {/* Specifications content */}
      </div>
    </div>
  );
}
```

### Track Product List/Grid

```typescript
// app/products/page.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    
    // Track filter usage
    trackEvent.filterApplied('category', category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Track search (debounce this in production)
    if (query.length > 2) {
      const resultsCount = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
      ).length;
      
      trackEvent.searchPerformed(query, resultsCount);
    }
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div>
        <button onClick={() => handleCategoryFilter('all')}>All</button>
        <button onClick={() => handleCategoryFilter('PPE')}>PPE</button>
        <button onClick={() => handleCategoryFilter('surgical')}>Surgical</button>
      </div>

      {/* Product grid */}
    </div>
  );
}
```

---

## Navigation Tracking

### Track Important Navigation Events

```typescript
// app/components/Header.tsx or TransparentNavbar.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import Link from 'next/link';

export default function Header() {
  const handleNavClick = (linkName: string, linkUrl: string) => {
    trackEvent.linkClick(linkUrl, linkName);
  };

  return (
    <nav>
      <Link 
        href="/"
        onClick={() => handleNavClick('Home', '/')}
      >
        Home
      </Link>

      <Link 
        href="/products"
        onClick={() => handleNavClick('Products', '/products')}
      >
        Products
      </Link>

      <Link 
        href="/faq"
        onClick={() => handleNavClick('FAQ', '/faq')}
      >
        FAQ
      </Link>

      <button
        onClick={() => {
          trackEvent.buttonClick('Download Catalog', {
            location: 'header',
          });
          window.open('/acuron-brochure.pdf', '_blank');
        }}
      >
        Download Catalog
      </button>
    </nav>
  );
}
```

---

## Cookie Consent Integration

### Integrate PostHog with Cookie Consent

Update your `CookieBanner` component:

```typescript
// app/components/CookieBanner.tsx
'use client';

import { privacy } from '@/app/lib/posthog-utils';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'declined') {
      // User declined, opt out of PostHog
      privacy.optOut();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Ensure PostHog is enabled
    privacy.optIn();
    
    // Track consent
    trackEvent.buttonClick('Accept Cookies', {
      consent_type: 'all',
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Opt out of PostHog tracking
    privacy.optOut();
    
    // Note: This event won't be tracked since user opted out
    console.log('User declined analytics cookies');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p>
          We use cookies to enhance your experience and analyze site usage.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## Error Tracking

### Track Errors in API Routes

```typescript
// app/api/some-route/route.ts
import { NextResponse } from 'next/server';
import { PostHog } from 'posthog-node';

const posthog = new PostHog(
  process.env.NEXT_PUBLIC_POSTHOG_KEY!,
  { host: process.env.NEXT_PUBLIC_POSTHOG_HOST }
);

export async function POST(request: Request) {
  try {
    // Your logic here
    const result = await someOperation();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    // Track error in PostHog
    posthog.capture({
      distinctId: 'system',
      event: 'api_error',
      properties: {
        endpoint: '/api/some-route',
        error_type: error instanceof Error ? error.name : 'Unknown',
        error_message: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
    });

    await posthog.shutdown();

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## Scroll Tracking

### Track Section Views on Scroll

```typescript
// app/components/sections/AboutSection.tsx
'use client';

import { trackEvent } from '@/app/lib/posthog-utils';
import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            // Track section view
            trackEvent.pageSection('about_section', 'viewed');
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      {/* About content */}
    </section>
  );
}
```

---

## Feature Flags Example

### Use Feature Flags for A/B Testing

```typescript
// app/components/sections/ProductPreviewSection.tsx
'use client';

import { featureFlags } from '@/app/lib/posthog-utils';
import { useState, useEffect } from 'react';

export default function ProductPreviewSection() {
  const [showNewLayout, setShowNewLayout] = useState(false);

  useEffect(() => {
    // Wait for feature flags to load
    featureFlags.onFeatureFlagsReady(() => {
      const newLayout = featureFlags.isEnabled('new_product_layout');
      setShowNewLayout(newLayout);

      // Track which variant user sees
      trackEvent.abTest.trackExposure('new_product_layout', newLayout ? 'new' : 'old');
    });
  }, []);

  if (showNewLayout) {
    return <NewProductLayout />;
  }

  return <OldProductLayout />;
}
```

---

## User Identification Example

### Identify Users After Form Submission

```typescript
// After successful contact form submission
import { identifyUser, setUserProperties } from '@/app/lib/posthog-utils';

const handleContactSubmit = async (formData: any) => {
  // Submit form
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    // Identify user in PostHog
    identifyUser(formData.email, {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      userType: formData.businessType || 'individual',
      first_contact_date: new Date().toISOString(),
    });

    // Set additional properties
    setUserProperties({
      last_contact_date: new Date().toISOString(),
      contact_method: 'form',
    });
  }
};
```

---

## Performance Tracking

### Track Page Load Performance

```typescript
// app/page.tsx or any page component
'use client';

import { performance } from '@/app/lib/posthog-utils';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Track page load time after component mounts
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        performance.trackPageLoad('Home Page');
      });
    }
  }, []);

  return (
    <main>
      {/* Your content */}
    </main>
  );
}
```

---

## Summary Checklist

Integration checklist for your Acuron Products site:

- [ ] Add tracking to ChatbotWidget
- [ ] Add tracking to ContactSection form
- [ ] Add tracking to Newsletter subscription
- [ ] Add tracking to Product pages
- [ ] Add navigation tracking to Header/Nav
- [ ] Integrate with Cookie consent banner
- [ ] Add error tracking to API routes
- [ ] Add scroll tracking to important sections
- [ ] Set up feature flags (optional)
- [ ] Add user identification
- [ ] Track performance metrics

---

## Best Practices Reminder

1. **Don't Over-Track**: Only track meaningful user actions
2. **Respect Privacy**: Always respect user consent
3. **Add Context**: Include relevant properties with events
4. **Test Locally**: Verify tracking works in development
5. **Check Dashboard**: Create insights for tracked events

---

**Need Help?** Check `POSTHOG_SETUP.md` for detailed documentation.

