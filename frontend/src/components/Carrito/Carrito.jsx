import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, IconButton, Box, Button } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const Cart = ({ cartItems, onRemove, onUpdateQuantity, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Grid container spacing={4}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <Grid item xs={12} key={item.idProducto}>
              <Card sx={{ display: 'flex', mb: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={`http://localhost:3000/productos/imagenes/${item.foto}`}
                  alt={item.nombre_producto}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5">{item.nombre_producto}</Typography>
                    <Typography variant="body1">${item.precio}</Typography>
                    <Typography variant="body2" color="textSecondary">{item.marca}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Typography variant="body2">Cantidad:</Typography>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(item.idProducto, parseInt(e.target.value))}
                        min="1"
                        style={{ width: 60, marginLeft: 10, marginRight: 10 }}
                      />
                      <IconButton onClick={() => onRemove(item.idProducto)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">El carrito esta vacio.</Typography>
        )}
      </Grid>
      {cartItems.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Total: Q{calculateTotal()}</Typography>
          <Button variant="contained" color="primary" onClick={onCheckout}>Confirmacion de orden</Button>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
