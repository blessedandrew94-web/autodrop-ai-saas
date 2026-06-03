import React from 'react';
export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2, 2026</p>
      <div className="space-y-6">
        <section><h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2><p>We collect name, email, shipping address, and payment information to process orders. Browsing data via cookies for analytics.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">2. TikTok Integration</h2><p>When connecting TikTok, we request public profile access and video posting permissions solely for features you explicitly initiate.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">3. Data Sharing</h2><p>We share data with payment processors (PayPal, Stripe), suppliers (AliExpress, CJ Dropshipping), and shipping carriers.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">4. Contact</h2><p>support@autodropai.com</p></section>
      </div>
    </div>
  );
}