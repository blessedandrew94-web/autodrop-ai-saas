import React from 'react';
import LandingPageShell from '@/components/LandingPageShell';

export default function TermsPage() {
  return (
    <LandingPageShell>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p>Welcome to AutoDrop AI. By using our services, you agree to the following terms and conditions.</p>
          
          <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>By accessing or using our storefronts or fulfillment services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

          <h2 className="text-xl font-bold text-gray-900">2. Description of Service</h2>
          <p>AutoDrop AI provides an autonomous e-commerce platform that manages product discovery, sourcing, and fulfillment. We act as an intermediary between you and various third-party suppliers.</p>

          <h2 className="text-xl font-bold text-gray-900">3. User Obligations</h2>
          <p>You agree to provide accurate information during the checkout process and to use the service only for lawful purposes.</p>

          <h2 className="text-xl font-bold text-gray-900">4. Limitation of Liability</h2>
          <p>AutoDrop AI is not liable for any indirect, incidental, or consequential damages arising out of the use of our platform or products sourced through our partners.</p>

          <h2 className="text-xl font-bold text-gray-900">5. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </LandingPageShell>
  );
}
