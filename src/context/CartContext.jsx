import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const configString = JSON.stringify({
        customizations: item.customizations || [],
        note: item.note || ""
      });
      
      const cartItemId = `${item.id}-${configString}`;
      const existing = prev.find((x) => x.cartItemId === cartItemId);
      
      if (existing) {
        return prev.map((x) => x.cartItemId === cartItemId ? { ...x, quantity: x.quantity + 1 } : x);
      }
      
      const customizationPrice = (item.customizations || []).reduce((sum, c) => sum + c.price, 0);
      const finalPrice = item.price + customizationPrice;

      return [...prev, { 
        ...item, 
        cartItemId, 
        finalPrice,
        quantity: 1 
      }];
    });
    setIsCartOpen(true); 
  };

  const removeFromCart = (cartItemId) => setCart((prev) => prev.filter((x) => x.cartItemId !== cartItemId));
  
  const updateQuantity = (cartItemId, amount) => {
    setCart((prev) => prev.map((x) => {
      if (x.cartItemId === cartItemId) {
        const newQ = x.quantity + amount;
        return newQ > 0 ? { ...x, quantity: newQ } : x;
      }
      return x;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setIsCartOpen(false);
    setIsOrderSuccess(true);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, 
      isCartOpen, setIsCartOpen, clearCart, isOrderSuccess, setIsOrderSuccess 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);