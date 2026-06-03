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
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
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
          </div>
        </div>
      </div>
    </div>
  );
}