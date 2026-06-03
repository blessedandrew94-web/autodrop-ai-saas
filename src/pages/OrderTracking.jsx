import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function OrderTracking() {
  const { id } = useParams();
  const steps = [
    { label: 'Order Confirmed', time: 'June 1, 2026', done: true },
    { label: 'Payment Verified', time: 'June 1, 2026', done: true },
    { label: 'Processing at Warehouse', time: 'June 2, 2026', done: true },
    { label: 'Shipped', time: 'Pending', done: false },
    { label: 'Delivered', time: 'Pending', done: false },
  ];
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="text-purple-600 font-medium hover:text-purple-700">← Back to Store</Link>
      <h1 className="text-3xl font-bold mt-4">Order #{id || 'AD-20240601'}</h1>
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-8">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.done ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {step.done ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg> : <span className="text-sm font-medium">{i + 1}</span>}
                </div>
                {i < steps.length - 1 && <div className={`w-0.5 h-12 ${step.done ? 'bg-green-300' : 'bg-gray-200'}`} />}
              </div>
              <div className="pb-8"><h3 className={`font-semibold ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</h3><p className="text-sm text-gray-500">{step.time}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}