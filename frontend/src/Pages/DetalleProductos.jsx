import React, { useContext, useEffect, useState } from 'react';
import { ProductosContexto } from '../Context/ProductosContexto';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/DetalleProductos/DetalleProductos'; // Ensure correct import path

const DetalleProductos = () => {
  const { idProducto } = useParams();
  const { productos, loading, error } = useContext(ProductosContexto);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    if (productos.length > 0) {
      const productoEncontrado = productos.find((item) => item.idProducto === parseInt(idProducto));
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      }
    }
  }, [idProducto, productos]);

  console.log("Products:", productos); // Debug log to check if products are being set

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ProductCard product={producto} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetalleProductos;
