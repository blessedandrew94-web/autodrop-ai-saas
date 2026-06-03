import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">AutoDrop AI</h3>
            <p className="mt-2 text-sm text-gray-500">Smart products. AI-curated. Delivered to your door.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-gray-500 hover:text-gray-700">Home</Link>
              <Link to="/cart" className="block text-gray-500 hover:text-gray-700">Cart</Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link to="/terms" className="block text-gray-500 hover:text-gray-700">Terms of Service</Link>
              <Link to="/privacy" className="block text-gray-500 hover:text-gray-700">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} AutoDrop AI. All rights reserved.</div>
      </div>
    </footer>
  );
}