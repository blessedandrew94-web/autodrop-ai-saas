import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        {product.badge && <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">{product.badge}</span>}
        {product.compareAt && <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-{Math.round((1 - product.price/product.compareAt) * 100)}%</span>}
      </div>
      <div className="p-4">
        <span className="text-xs text-purple-600 font-medium uppercase tracking-wider">{product.category}</span>
        <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{product.title}</h3>
        <div className="flex items-center space-x-1 mt-2">{[1,2,3,4,5].map(i => <svg key={i} className={`w-4 h-4 ${i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}<span className="text-xs text-gray-400 ml-1">({product.reviews})</span></div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.compareAt && <span className="text-sm text-gray-400 line-through">${product.compareAt}</span>}
        </div>
      </div>
    </Link>
  );
}
export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Smart Products. <span className="text-yellow-300">AI-Curated.</span></h1>
            <p className="mt-6 text-lg md:text-xl text-white/80">Every product on AutoDrop AI is selected by our AI for quality, value, and wow-factor. No junk. Just the best finds.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all shadow-lg">Shop Best Sellers</a>
              <a href="/products" className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition">Browse All</a>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-2 text-gray-500">AI-curated picks our algorithms love</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900">Why AutoDrop AI?</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon:'🤖',title:'AI-Curated Products',desc:'Our AI scans millions of products to find only the best quality and value.'},{icon:'🚚',title:'Fast Free Shipping',desc:'Free shipping on all orders. Track your package every step of the way.'},{icon:'💎',title:'Premium Quality',desc:'Every product is vetted. If you don\'t love it, we\'ll make it right.'}].map((f,i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}