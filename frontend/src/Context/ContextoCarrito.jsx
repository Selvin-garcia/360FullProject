import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(null);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.idProducto === product.idProducto);
      if (existingItem) {
        return prevItems.map(item =>
          item.idProducto === product.idProducto
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (idProducto) => {
    setCartItems((prevItems) => prevItems.filter(item => item.idProducto !== idProducto));
  };

  const updateItemQuantity = (idProducto, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.idProducto === idProducto ? { ...item, quantity } : item
      )
    );
  };

  const placeOrder = (customerDetails) => {
    setOrder({ items: cartItems, customer: customerDetails });
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity of items in cart

  return (
    <CartContext.Provider value={{ cartItems, order, addItemToCart, removeItemFromCart, updateItemQuantity, placeOrder, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
