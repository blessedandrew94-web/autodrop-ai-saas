import React, { createContext, useState, useEffect } from 'react';
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => { try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; } });
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(items)); }, [items]);
  const addToCart = (product) => { setItems(prev => { const e = prev.find(i => i.id === product.id); return e ? prev.map(i => i.id === product.id ? {...i, qty: i.qty+1} : i) : [...prev, {...product, qty: 1}]; }); };
  const updateQty = (id, qty) => { if (qty <= 0) return setItems(p => p.filter(i => i.id !== id)); setItems(p => p.map(i => i.id === id ? {...i, qty} : i)); };
  const removeItem = (id) => setItems(p => p.filter(i => i.id !== id));
  const clearCart = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return <CartContext.Provider value={{items, addToCart, updateQty, removeItem, clearCart, total, count}}>{children}</CartContext.Provider>;
}
export default CartContext;