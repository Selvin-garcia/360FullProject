import React, { useContext, useEffect, useState } from 'react';
import { ProductosContexto } from '../../Context/ProductosContexto'; // Import the context
import MultiActionAreaCard from '../ProductCard/ProductCard'; // Import the reusable component
import { Grid, Typography, Box } from '@mui/material';
import { useCart } from '../../Context/ContextoCarrito'; // Import the cart context

const CategoriaAlimentos = () => {
  const { productos, loading, error } = useContext(ProductosContexto);
  const { addItemToCart } = useCart(); // Access the addItemToCart function from the cart context
  const [inicio, setInicio] = useState([]);

  useEffect(() => {
    const filteredProductos = productos.filter(producto => producto.id_categoria_producto === 2); 
    const topProductos = filteredProductos.slice(0, 1);
    
      setInicio(topProductos);
    
  }, [productos]);

  const handleAddToCart = (producto) => {
    addItemToCart(producto);
    console.log(`${producto.nombre_producto} agregado al carrito.`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box sx={{ padding: 2 ,marginTop: '80px'  }} >
      <Typography variant="h4" gutterBottom>
        Productos Principales Alimentos
      </Typography>
      {inicio.length > 0 ? (
        <Grid container spacing={2}>
          {inicio.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.idProducto}>
              <MultiActionAreaCard
                producto={producto}
                handleAddToCart={() => handleAddToCart(producto)}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No hay productos disponibles</Typography>
      )}
    </Box>
  );
};

export default CategoriaAlimentos;
