import React, { useContext, useEffect, useState } from 'react';
import { ProductosContexto } from '../../Context/ProductosContexto'; // Import the context

const NuevosProductos = () => {
  const { productos, loading, error } = useContext(ProductosContexto);
  const [nuevos ,setNuevos] = useState([]);

  useEffect(() => {
    if (productos.length > 0) {
      const topProductos = productos.slice(0, 7);
      setNuevos(topProductos);
    }
  }, [productos]);
  
  console.log("Products:", productos); // Debug log to check if products are being set

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Nuevos Productos</h2>
      {nuevos.length > 0 ? (
        <ul>
          {nuevos.map((producto) => (
            <li key={producto.idProducto}>
              <h3>{producto.nombre_producto}</h3>
              <h3>{producto.precio}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default NuevosProductos;
