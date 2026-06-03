import React from 'react';
export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2, 2026</p>
      <div className="space-y-6">
        <section><h2 className="text-xl font-semibold mt-8">1. Acceptance of Terms</h2><p>By accessing or using AutoDrop AI ("the Platform"), you agree to be bound by these Terms of Service.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">2. Description of Service</h2><p>AutoDrop AI is an AI-powered dropshipping platform that sources, markets, and delivers products directly to consumers.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">3. Orders & Payment</h2><p>All orders are subject to acceptance. We accept PayPal, Stripe, and other supported payment gateways.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">4. Shipping & Delivery</h2><p>Shipping times vary by product. Estimated delivery times are provided at checkout.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">5. Returns & Refunds</h2><p>30-day return policy for damaged or defective items. Contact support to initiate a return.</p></section>
        <section><h2 className="text-xl font-semibold mt-8">6. Contact</h2><p>support@autodropai.com</p></section>
      </div>
    </div>
  );
}