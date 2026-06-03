import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Links() {
  // Assume the first product is the "current" trending one as requested
  const featuredProduct = products[0];

  const trackClick = (productId, type) => {
    // Placeholder for tracking metrics
    console.log(`[Analytics] ${type} click tracked for product: ${productId}`);
    // In a real scenario, this would call an API or update a database
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-sans text-gray-900">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-1 mb-4 shadow-lg">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
             <span className="text-2xl font-bold text-purple-600 italic">DD</span>
          </div>
        </div>
        <h1 className="text-xl font-bold">@DensVibez</h1>
        <p className="text-gray-500 text-sm mt-1 text-center max-w-[250px]">
          TikTok Made Me Buy It! 🚀 <br /> Problem-solving gadgets you need.
        </p>
      </div>

      {/* Featured/Trending Product (Dynamic) */}
      <div className="w-full max-w-md mb-6">
        <Link 
          to={`/landing/${featuredProduct.slug}`}
          onClick={() => trackClick(featuredProduct.id, 'featured')}
          className="group block bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="relative aspect-[16/9]">
            <img 
              src={featuredProduct.image} 
              alt={featuredProduct.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse uppercase tracking-tight">
              🔥 Trending Now
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-4 text-white">
               <div className="text-xs font-medium opacity-90">Featured Product</div>
               <div className="font-bold text-lg leading-tight">{featuredProduct.title}</div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-purple-600 font-bold text-lg">${featuredProduct.price}</span>
              <span className="text-xs text-gray-400 line-through">${featuredProduct.compareAt}</span>
            </div>
            <span className="bg-purple-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm group-hover:bg-purple-700 transition-colors">
              SHOP NOW
            </span>
          </div>
        </Link>
      </div>

      {/* Main Links Container */}
      <div className="w-full max-w-md space-y-3">
        {/* TikTok Integration: Login with TikTok (Developer Option) */}
        <a
          href="/tiktok/login"
          onClick={() => trackClick('admin', 'tiktok-login')}
          className="flex items-center justify-center gap-3 bg-black text-white py-4 px-6 rounded-xl text-center font-bold text-sm transition-all hover:bg-gray-900 shadow-lg border-2 border-white/10 mb-6"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v7.02c.01 2.85-1.56 5.73-4.06 7.2-2.73 1.61-6.26 1.24-8.48-1.1-1.91-2.01-2.36-4.96-1.19-7.39 1.15-2.4 4.08-3.87 6.74-3.35v4.09c-.86-.33-1.87-.21-2.62.36-.88.65-1.23 1.75-.97 2.76.3 1.25 1.65 2.04 2.89 1.8 1.39-.23 2.36-1.51 2.35-2.93V.02z"/>
          </svg>
          Log in with TikTok
        </a>

        {products.slice(1).map(product => (
          <Link
            key={product.id}
            to={`/landing/${product.slug}`}
            onClick={() => trackClick(product.id, 'link')}
            className="flex items-center bg-white hover:bg-gray-50 border border-gray-100 p-2 rounded-xl transition-all active:scale-[0.99] shadow-sm"
          >
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
              <img src={product.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="ml-4 flex-1 pr-4">
              <div className="font-bold text-gray-800 text-sm leading-tight">{product.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">${product.price}</div>
            </div>
            <div className="text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
        
        {/* Secondary Call to Actions */}
        <Link
          to="/"
          className="block bg-white hover:bg-gray-50 border border-gray-200 py-4 px-6 rounded-xl text-center font-bold text-sm transition-all shadow-sm text-gray-700"
        >
          View Full Catalog
        </Link>

        <a
          href="https://tiktok.com/@densvibez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black text-white py-4 px-6 rounded-xl text-center font-bold text-sm transition-all hover:opacity-90 shadow-sm"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v7.02c.01 2.85-1.56 5.73-4.06 7.2-2.73 1.61-6.26 1.24-8.48-1.1-1.91-2.01-2.36-4.96-1.19-7.39 1.15-2.4 4.08-3.87 6.74-3.35v4.09c-.86-.33-1.87-.21-2.62.36-.88.65-1.23 1.75-.97 2.76.3 1.25 1.65 2.04 2.89 1.8 1.39-.23 2.36-1.51 2.35-2.93V.02z"/>
          </svg>
          Follow us on TikTok
        </a>
      </div>

      {/* Footer / Branding */}
      <div className="mt-auto pt-16 pb-4 text-gray-400 text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
        <span>DensDrop OS</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>Secure Commerce</span>
      </div>
    </div>
  );
}
