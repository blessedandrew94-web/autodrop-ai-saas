import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition">Go Home</Link>
    </div>
  );
}