import React from 'react';
import LandingPageShell from '@/components/LandingPageShell';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { queryDb } from '@/lib/db';
import Link from 'next/link';

async function getTrendingProducts() {
  const trends = await queryDb<{ product_name: string }>(
    "SELECT product_name FROM trends ORDER BY score DESC LIMIT 3"
  );
  
  // Map trend names to our rich product data
  return trends.map(trend => 
    products.find(p => p.name.toLowerCase() === trend.product_name.toLowerCase())
  ).filter(Boolean);
}

export default async function Home() {
  const trendingProducts = await getTrendingProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <LandingPageShell>
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 mb-6">
                Powered by AutoDrop AI
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                The Future of <span className="text-blue-600">Dropshipping</span> is Autonomous.
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                Discover high-conversion products, sourced and fulfilled automatically. No more manual work, just growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#trending" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-colors">
                  Shop Trending
                </Link>
                <Link href="/checkout" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-lg font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                  <div className="absolute inset-0 flex items-center justify-center text-blue-600 opacity-20">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.243a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM16.243 16.243a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      {trendingProducts.length > 0 && (
        <section id="trending" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Trending Now</h2>
                <p className="mt-2 text-lg text-gray-500">Real-time AI detected viral products.</p>
              </div>
              <Link href="/" className="hidden sm:block text-blue-600 font-bold hover:text-blue-700">
                View all Trends &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingProducts.map((product) => (
                product && <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Grid */}
      <section id="featured" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">All Products</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Browse our curated collection of high-potential products ready for fulfillment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">Ready to automate your empire?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Monitoring</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">Instant</div>
              <div className="text-blue-100">Sourcing Sync</div>
            </div>
          </div>
        </div>
      </section>
    </LandingPageShell>
  );
}
