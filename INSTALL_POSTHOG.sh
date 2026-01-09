#!/bin/bash

# PostHog Installation Script for Acuron Products
# This script automates the PostHog setup process

echo "🦔 PostHog Installation for Acuron Products"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Step 1: Install packages
echo "📦 Step 1: Installing PostHog packages..."
echo ""
npm install posthog-js posthog-node

if [ $? -eq 0 ]; then
    echo "✅ PostHog packages installed successfully!"
else
    echo "❌ Failed to install PostHog packages."
    exit 1
fi

echo ""
echo "=========================================="
echo ""

# Step 2: Check for .env.local
if [ ! -f ".env.local" ]; then
    echo "⚠️  Step 2: .env.local file not found"
    echo "Creating .env.local file..."
    touch .env.local
    echo ""
    echo "# PostHog Configuration" >> .env.local
    echo "NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here" >> .env.local
    echo "NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com" >> .env.local
    echo ""
    echo "✅ .env.local file created!"
    echo ""
    echo "⚠️  IMPORTANT: You need to add your PostHog API key!"
    echo "   1. Go to https://posthog.com and sign up"
    echo "   2. Get your API key from Project Settings"
    echo "   3. Replace 'phc_your_key_here' in .env.local with your actual key"
else
    echo "✅ Step 2: .env.local file found"
    
    # Check if PostHog variables are present
    if grep -q "NEXT_PUBLIC_POSTHOG_KEY" .env.local; then
        echo "✅ PostHog environment variables already configured"
    else
        echo "⚠️  PostHog variables not found in .env.local"
        echo "Adding PostHog configuration..."
        echo "" >> .env.local
        echo "# PostHog Configuration" >> .env.local
        echo "NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here" >> .env.local
        echo "NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com" >> .env.local
        echo ""
        echo "⚠️  IMPORTANT: You need to add your PostHog API key!"
        echo "   1. Go to https://posthog.com and sign up"
        echo "   2. Get your API key from Project Settings"
        echo "   3. Replace 'phc_your_key_here' in .env.local with your actual key"
    fi
fi

echo ""
echo "=========================================="
echo ""

# Step 3: Verify files
echo "📁 Step 3: Verifying PostHog files..."
echo ""

files_to_check=(
    "app/providers/PostHogProvider.tsx"
    "app/components/PostHogErrorBoundary.tsx"
    "app/lib/posthog-utils.ts"
)

all_files_exist=true
for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - MISSING"
        all_files_exist=false
    fi
done

echo ""

if [ "$all_files_exist" = true ]; then
    echo "✅ All PostHog files are present!"
else
    echo "❌ Some PostHog files are missing. Please check the setup."
    exit 1
fi

echo ""
echo "=========================================="
echo ""

# Step 4: Summary
echo "🎉 Installation Complete!"
echo ""
echo "Next Steps:"
echo "1. Get your PostHog API key:"
echo "   • Sign up at https://posthog.com"
echo "   • Go to Project Settings → Project API Key"
echo "   • Copy the key (starts with 'phc_')"
echo ""
echo "2. Update .env.local with your API key:"
echo "   • Open .env.local"
echo "   • Replace 'phc_your_key_here' with your actual key"
echo ""
echo "3. Restart your development server:"
echo "   • Stop the server (Ctrl+C)"
echo "   • Run: npm run dev"
echo ""
echo "4. Verify installation:"
echo "   • Open http://localhost:3000"
echo "   • Check browser console for 'PostHog initialized successfully'"
echo ""
echo "5. Read the documentation:"
echo "   • POSTHOG_QUICK_START.md - Quick setup guide"
echo "   • README_POSTHOG.md - Complete overview"
echo ""
echo "=========================================="
echo ""
echo "For help, see: POSTHOG_QUICK_START.md"
echo ""

