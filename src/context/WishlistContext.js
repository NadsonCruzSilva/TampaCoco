'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('mdc-wishlist');
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mdc-wishlist', JSON.stringify(items));
  }, [items]);

  const addItem = (productId) => {
    setItems(prev => prev.includes(productId) ? prev : [...prev, productId]);
  };

  const removeItem = (productId) => {
    setItems(prev => prev.filter(id => id !== productId));
  };

  const toggleItem = (productId) => {
    if (items.includes(productId)) {
      removeItem(productId);
    } else {
      addItem(productId);
    }
  };

  const isFavorite = (productId) => items.includes(productId);

  const totalFavorites = items.length;

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, toggleItem, isFavorite, totalFavorites }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
}
