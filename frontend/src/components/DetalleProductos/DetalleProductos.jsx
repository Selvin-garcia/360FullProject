import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useCart } from '../../Context/ContextoCarrito'; // Ensure correct import

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCart(); // Access the addItemToCart function from the cart context

  const handleAddToCart = () => {
    addItemToCart(product); // Add the product to the cart
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.nombre_producto}
        height="400"
        image={`http://localhost:3000/productos/imagenes/${product.foto}`} 
      />
      
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.nombre_producto}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Q{product.precio}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {product.marca}
        </Typography>
        <Box mt={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddToCart} // Handle the button click
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
