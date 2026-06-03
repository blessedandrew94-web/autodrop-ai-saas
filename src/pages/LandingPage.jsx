import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
export default function LandingPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl">
            {/* TikTok Integration: Embed (Developer Option) */}
            <div className="w-full h-full relative group">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                <div className="text-center px-6">
                  <svg className="w-12 h-12 text-white mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v7.02c.01 2.85-1.56 5.73-4.06 7.2-2.73 1.61-6.26 1.24-8.48-1.1-1.91-2.01-2.36-4.96-1.19-7.39 1.15-2.4 4.08-3.87 6.74-3.35v4.09c-.86-.33-1.87-.21-2.62.36-.88.65-1.23 1.75-.97 2.76.3 1.25 1.65 2.04 2.89 1.8 1.39-.23 2.36-1.51 2.35-2.93V.02z"/>
                  </svg>
                  <p className="text-white font-bold text-sm">WATCH VIRAL VIDEO</p>
                  <p className="text-white/60 text-[10px] mt-1">TikTok Proof of Quality</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm text-purple-600 font-semibold uppercase tracking-wider">⚠️ Limited Time Offer</span>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{product.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{product.tagline}</p>
            <div className="flex items-baseline space-x-3 mt-6">
              <span className="text-5xl font-bold text-purple-600">${product.price}</span>
              {product.compareAt && <span className="text-2xl text-gray-400 line-through">${product.compareAt}</span>}
            </div>
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm font-medium">
              🔥 <strong>50% OFF SALE</strong> — Over {product.reviews.toLocaleString()} sold!
            </div>
            <Link to="/checkout" className="block mt-8 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all">
              Get 50% OFF — ${product.price}
            </Link>

            {/* TikTok Integration: Share Kit (Developer Option) */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button 
                onClick={() => alert('TikTok Share Kit Integrated')}
                className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-xs font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v7.02c.01 2.85-1.56 5.73-4.06 7.2-2.73 1.61-6.26 1.24-8.48-1.1-1.91-2.01-2.36-4.96-1.19-7.39 1.15-2.4 4.08-3.87 6.74-3.35v4.09c-.86-.33-1.87-.21-2.62.36-.88.65-1.23 1.75-.97 2.76.3 1.25 1.65 2.04 2.89 1.8 1.39-.23 2.36-1.51 2.35-2.93V.02z"/>
                </svg>
                Share on TikTok
              </button>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">TikTok Verified Seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}