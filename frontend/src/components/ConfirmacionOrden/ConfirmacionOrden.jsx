import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CheckoutForm = ({ onCheckout, cartItems }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState(1); // Example user ID, replace with actual user ID
  const [shippingDate, setShippingDate] = useState('2024-12-23'); // Example date, replace with actual date

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customerDetails = { 
      direccion_envio: address,
      telefono: phone,
      correo_electronico: email,
      fecha_envio: shippingDate,
      id_usuario: userId,
      id_estado: 1, // Assuming 1 is the initial state for a new order
      detalles: cartItems.map(item => ({
        cantidad: item.quantity,
        precio: item.precio,
        id_producto: item.idProducto
      }))
    };

   // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzM2MTAxOTA2LCJleHAiOjE3MzYxODgzMDZ9.Rez044A7QdsYfmwzO0DummV3P933iPLFx6lJYl5EGGo'
    try {
      const response = await fetch('http://localhost:3000/ordenes/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(customerDetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order placed successfully:', data);
        onCheckout(customerDetails);
      } else {
        console.error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>Detalles de Envío</Typography>
      <TextField
        label="Nombre Completo"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Correo"
        variant="outlined"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Teléfono"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">Confirmar Orden</Button>
    </Box>
  );
};

export default CheckoutForm;
