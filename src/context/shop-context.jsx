import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCartItems((prev) => ({
        ...prev,
        [product.id]: prev[product.id]
          ? { ...prev[product.id], quantity: prev[product.id].quantity + 1 }
          : { ...product, quantity: 1 },
      }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const newQuantity = prev[itemId].quantity - 1;
      if (newQuantity <= 0) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }

      return {
        ...prev,
        [itemId]: { ...prev[itemId], quantity: newQuantity },
      };
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
