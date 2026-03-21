'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('helmeto-cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('helmeto-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, color, size, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.id === product.id && i.color === color && i.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color,
        size,
        quantity,
        brand: product.brand
      }];
    });
  };

  const removeItem = (id, color, size) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.color === color && i.size === size)));
  };

  const updateQuantity = (id, color, size, quantity) => {
    if (quantity <= 0) return removeItem(id, color, size);
    setItems(prev => prev.map(i =>
      i.id === id && i.color === color && i.size === size ? { ...i, quantity } : i
    ));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      totalItems, totalPrice, isOpen, setIsOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
