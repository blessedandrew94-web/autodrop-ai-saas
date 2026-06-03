import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import CartContext from '../contexts/CartContext';
export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = React.useContext(CartContext);
  const [added, setAdded] = React.useState(false);
  if (!product) return <div className="max-w-7xl mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold">Product Not Found</h2><Link to="/" className="text-purple-600 mt-4 inline-block">← Back to Home</Link></div>;
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const handleAdd = () => { addToCart(product); setAdded(true); setTimeout(() => setAdded(false), 2000); };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-gray-500 mb-8"><Link to="/" className="hover:text-purple-600">Home</Link><span className="mx-2">/</span><span className="text-gray-900">{product.title}</span></nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden"><img src={product.image} alt={product.title} className="w-full h-full object-cover" /></div>
        <div>
          <span className="text-sm text-purple-600 font-medium uppercase tracking-wider">{product.category}</span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-2 text-lg text-gray-500">{product.tagline}</p>
          <div className="flex items-center mt-4 space-x-1">{[1,2,3,4,5].map(i => <svg key={i} className={`w-5 h-5 ${i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}<span className="text-sm text-gray-400 ml-2">({product.reviews} reviews)</span></div>
          <div className="flex items-baseline space-x-3 mt-6">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            {product.compareAt && <span className="text-xl text-gray-400 line-through">${product.compareAt}</span>}
            {product.compareAt && <span className="text-sm bg-red-100 text-red-600 font-medium px-2 py-1 rounded">Save ${(product.compareAt - product.price).toFixed(2)}</span>}
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2">{product.benefits.map((b,i) => <li key={i} className="flex items-start space-x-2"><svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span className="text-gray-600">{b}</span></li>)}</ul>
          </div>
          <button onClick={handleAdd} className={`mt-8 w-full py-4 rounded-full font-bold text-lg transition-all ${added ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:scale-[1.02]'}`}>
            {added ? '✓ Added to Cart!' : 'Add to Cart — $' + product.price}
          </button>
        </div>
      </div>
    </div>
  );
}