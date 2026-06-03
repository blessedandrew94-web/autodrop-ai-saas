import React from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
export default function Checkout() {
  const { items, total, clearCart } = React.useContext(CartContext);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', address: '', city: '', zip: '', country: 'US' });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); clearCart(); };
  if (items.length === 0 && !submitted) return <div className="max-w-7xl mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold">Your cart is empty</h2><Link to="/" className="text-purple-600 mt-4 inline-block">← Shop Now</Link></div>;
  if (submitted) return <div className="max-w-2xl mx-auto px-4 py-20 text-center"><span className="text-6xl">✅</span><h1 className="text-3xl font-bold mt-4">Order Confirmed!</h1><p className="text-gray-500 mt-2">Thank you for your purchase. You\'ll receive a confirmation email shortly.</p><Link to="/" className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-3 rounded-full">Continue Shopping</Link></div>;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-semibold">Shipping Information</h2>
          <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required placeholder="Street Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input required placeholder="ZIP Code" value={form.zip} onChange={e => setForm({...form, zip: e.target.value})} className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <select value={form.country} onChange={e => setForm({...form, country: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
          <div className="border-t pt-4 mt-6">
            <h2 className="text-lg font-semibold mb-3">Payment</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">💳 <strong>PayPal</strong> integration active. You\'ll be redirected to complete payment.</div>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-full hover:shadow-lg transition">Pay ${total.toFixed(2)} — Place Order</button>
        </form>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">{items.map(item => <div key={item.id} className="flex justify-between text-sm"><span>{item.title} × {item.qty}</span><span className="font-medium">${(item.price * item.qty).toFixed(2)}</span></div>)}</div>
          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span>Shipping</span><span className="text-green-600">Free</span></div>
            <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}