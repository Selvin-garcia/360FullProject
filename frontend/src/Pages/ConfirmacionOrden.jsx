import React from 'react';
import { useCart } from '../Context/ContextoCarrito'; // Ensure correct import
import Cart from '../components/Carrito/Carrito'; // Ensure correct import
import CheckoutForm from '../components/ConfirmacionOrden/ConfirmacionOrden'; // Ensure correct import
import { Container, Grid, Typography } from '@mui/material';

const CheckoutPage = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity, placeOrder } = useCart();

  const handleCheckout = (customerDetails) => {
    placeOrder(customerDetails);
    console.log('Order placed with details:', customerDetails);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Cart
            cartItems={cartItems}
            onRemove={removeItemFromCart}
            onUpdateQuantity={updateItemQuantity}
            onCheckout={() => {}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckoutForm onCheckout={handleCheckout} cartItems={cartItems} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
