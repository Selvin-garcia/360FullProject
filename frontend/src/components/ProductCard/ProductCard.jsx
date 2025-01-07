import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // Import the icon
import { useNavigate } from 'react-router-dom';


export default function MultiActionAreaCard({ producto, handleAddToCart }) {
      
    const navigate = useNavigate();

    const handleNavigate = () => { 
        navigate(`/producto/${producto.idProducto}`); // Navigate to the user details page };
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleNavigate}>
        <CardMedia
          component="img"
          height="300"
          image={`http://localhost:3000/productos/imagenes/${producto.foto}`} // Usar imagen del producto dinámicamente
          alt={producto.nombre_producto || 'Imagen del Producto'} // Usar el nombre del producto como texto alternativo si está disponible
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre_producto || 'Nombre del Producto'} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.marca || 'Descripción del producto aquí.'} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            stock:
            {producto.stock || 'Stock del producto aqui.'} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            precio: Q
            {producto.precio || 'precio del producto aqui.'} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleAddToCart(producto)}
          startIcon={<AddShoppingCartIcon />} // Add the icon to the button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
  );
}
