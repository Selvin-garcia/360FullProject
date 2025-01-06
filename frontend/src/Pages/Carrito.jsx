import React from 'react';
import { useCart } from '../Context/ContextoCarrito';
import Cart from '../components/Carrito/Carrito';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const CartPage = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Cart
      cartItems={cartItems}
      onRemove={removeItemFromCart}
      onUpdateQuantity={updateItemQuantity}
      onCheckout={handleCheckout}
    />
  );
};

export default CartPage;
