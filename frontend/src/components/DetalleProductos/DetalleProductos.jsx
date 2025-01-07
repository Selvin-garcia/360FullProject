import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useCart } from '../../Context/ContextoCarrito'; // Ensure correct import

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCart(); // Access the addItemToCart function from the cart context

  const handleAddToCart = () => {
    addItemToCart(product); // Add the product to the cart
  };

  return (
    <Card sx={{ mt: '80px' }}>
      <CardMedia
        component="img"
        alt={product.nombre_producto}
        image={`http://localhost:3000/productos/imagenes/${product.foto}`}
        sx={{
          height: '300px', // Adjust height as needed
          objectFit: 'contain', // Ensures the image fits without cropping
        }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.nombre_producto}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Precio: Q{product.precio}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Marca: {product.marca}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Stock: {product.stock}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Codigo: {product.codigo}
        </Typography>
        <Box mt={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddToCart} // Handle the button click
          >
            Agregar al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
