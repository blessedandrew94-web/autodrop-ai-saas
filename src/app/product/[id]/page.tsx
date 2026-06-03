import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/products';
import LandingPageShell from '@/components/LandingPageShell';
import { queryDb } from '@/lib/db';
import { SupplierRecommendation } from '@/types/product';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getBestSupplier(productName: string): Promise<SupplierRecommendation | null> {
  const sql = `SELECT product_name, supplier, price, shipping_time_days, rating FROM sourcing WHERE product_name = '${productName.replace(/'/g, "''")}' ORDER BY price ASC, rating DESC LIMIT 1`;
  const results = await queryDb<SupplierRecommendation>(sql);
  return results.length > 0 ? results[0] : null;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const bestSupplier = await getBestSupplier(product.name);

  return (
    <LandingPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-inner">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="mt-10 lg:mt-0 flex flex-col">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{product.name}</h1>
            
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {bestSupplier && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Best Price Found
                </span>
              )}
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Description</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* AI Sourcing Data (The Integration) */}
            {bestSupplier && (
              <div className="mt-8 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-5 w-5 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">AI Sourcing Intelligence</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-blue-700 font-medium">Verified Supplier</p>
                    <p className="text-blue-900 font-bold">{bestSupplier.supplier}</p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium">Shipping Time</p>
                    <p className="text-blue-900 font-bold">{bestSupplier.shipping_time_days} days</p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium">Supplier Rating</p>
                    <p className="text-blue-900 font-bold">{bestSupplier.rating}/5.0</p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium">Auto-Fulfillment</p>
                    <p className="text-blue-900 font-bold">Enabled</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <button className="w-full bg-blue-600 border border-transparent rounded-xl py-4 px-8 flex items-center justify-center text-lg font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {product.faq.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </LandingPageShell>
  );
}
