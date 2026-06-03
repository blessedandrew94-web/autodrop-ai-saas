import React from 'react';
import LandingPageShell from '@/components/LandingPageShell';
import { products } from '@/lib/products';
import { queryDb } from '@/lib/db';
import { SupplierRecommendation } from '@/types/product';
import Image from 'next/image';

async function getBestSupplier(productName: string): Promise<SupplierRecommendation | null> {
  const sql = `SELECT product_name, supplier, price, shipping_time_days, rating FROM sourcing WHERE product_name = '${productName.replace(/'/g, "''")}' ORDER BY price ASC, rating DESC LIMIT 1`;
  const results = await queryDb<SupplierRecommendation>(sql);
  return results.length > 0 ? results[0] : null;
}

export default async function CheckoutPage() {
  // For now, let's assume the user is checking out with the first product
  const product = products[0];
  const bestSupplier = await getBestSupplier(product.name);

  return (
    <LandingPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Complete Your Purchase</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="mt-4 w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment</h2>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Safe & Secure Native Checkout</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-300 rounded"></div>
                    <div className="w-8 h-5 bg-gray-300 rounded"></div>
                    <div className="w-8 h-5 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 py-4 px-8 rounded-xl text-lg font-bold text-white hover:bg-blue-700 shadow-lg transition-colors">
                  Pay Now
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              
              <div className="flex gap-4">
                <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-white border border-gray-100 shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">Qty: 1</p>
                  <p className="text-sm font-bold text-blue-600">${product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-3">
                  <span>Total</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>

              {/* Fulfillment Info (Integration Point) */}
              {bestSupplier && (
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 text-green-500">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Autonomous Fulfillment</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    This order will be automatically processed via <strong>{bestSupplier.supplier}</strong> for delivery in <strong>{bestSupplier.shipping_time_days} days</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </LandingPageShell>
  );
}
