import React from 'react';
import { CartProvider } from './contexts/CartContext';
import App from './App';
export default function Root() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}