import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => ({
        ...prev,
        [product.id]: prev[product.id]
          ? { ...prev[product.id], quantity: prev[product.id].quantity + quantity }
          : { ...product, quantity },
      }));
  };

  const removeFromCart = (itemId, removeAll = false) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      if (!prev[itemId]) return prev;

    if (removeAll) {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    }

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
