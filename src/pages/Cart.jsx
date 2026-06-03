import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
export default function Cart() {
  const { items, updateQty, removeItem, total } = React.useContext(CartContext);
  if (items.length === 0) return <div className="max-w-7xl mx-auto px-4 py-20 text-center"><span className="text-6xl">🛒</span><h2 className="text-2xl font-bold mt-4">Your Cart is Empty</h2><p className="text-gray-500 mt-2">Looks like you haven\'t added anything yet.</p><Link to="/" className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition">Shop Now</Link></div>;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="mt-8 space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover bg-gray-50" />
            <div className="flex-1 min-w-0">
              <Link to={`/products/${item.slug}`} className="font-medium text-gray-900 hover:text-purple-600">{item.title}</Link>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center border rounded-lg">
              <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-1 text-gray-500 hover:text-gray-700">−</button>
              <span className="px-3 py-1 font-medium">{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 text-gray-500 hover:text-gray-700">+</button>
            </div>
            <p className="font-bold w-20 text-right">${(item.price * item.qty).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-100 pt-6">
        <div className="flex justify-between text-lg"><span className="font-medium">Subtotal</span><span className="font-bold">${total.toFixed(2)}</span></div>
        <p className="text-sm text-gray-500 mt-1">Free shipping on all orders</p>
        <Link to="/checkout" className="block mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-full text-center hover:shadow-lg transition">Proceed to Checkout</Link>
      </div>
    </div>
  );
}