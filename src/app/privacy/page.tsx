import React from 'react';
import LandingPageShell from '@/components/LandingPageShell';

export default function PrivacyPage() {
  return (
    <LandingPageShell>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p>At AutoDrop AI, we value your privacy. This policy explains how we collect and use your data.</p>
          
          <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We collect information you provide during checkout, including your name, email address, and shipping address, to process and fulfill your orders.</p>

          <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p>Your information is used solely to facilitate fulfillment via our AI-sourced suppliers and to provide updates on your order status.</p>

          <h2 className="text-xl font-bold text-gray-900">3. Data Sharing</h2>
          <p>We share necessary shipping details with our fulfillment partners. We do not sell your personal data to third parties for marketing purposes.</p>

          <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
          <p>We use cookies to enhance your browsing experience and remember your cart items.</p>

          <h2 className="text-xl font-bold text-gray-900">5. Your Rights</h2>
          <p>You have the right to request access to or deletion of your personal information at any time by contacting our support team.</p>
        </div>
      </div>
    </LandingPageShell>
  );
}
