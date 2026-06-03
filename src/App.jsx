import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import LandingPage from './pages/LandingPage';
import Links from './pages/Links';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // TikTok Integration: Pixel (Developer Option)
    // In production, this would initialize the TikTok Pixel SDK
    console.log(`[TikTok Pixel] PageView: ${location.pathname}`);
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/links" element={<Links />} />
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders/:id" element={<OrderTracking />} />
        <Route path="/landing/:slug" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}