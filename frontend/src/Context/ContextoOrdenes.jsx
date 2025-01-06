import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const OrdenesContext = createContext();

export const useOrdenes = () => useContext(OrdenesContext);

export const OrdenesProvider = ({ children }) => {
  const [ordenes, setOrdenes] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // To store any errors

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ordenes'); // Adjust URL as needed
        console.log('Response:', response);

        const key = "JSON_F52E2B61-18A1-11d1-B105-00805F49916B";
        if (response.data) {
          console.log('Response Data:', response.data);
        } else {
          console.log('No response data');
        }

        if (response.data && response.data[key]) {
          console.log('JSON Key Found:', response.data[key]);
          const parsedData = JSON.parse(response.data[key]);
          console.log('Parsed Data:', parsedData);
          setOrdenes(parsedData.Datos || []);
        } else {
          console.log('No valid data found');
          setOrdenes([]);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error.message);
      }
    };

    fetchOrdenes();
  }, []);

  const actualizarEstadoOrden = async (id, nuevoEstado) => {
    try {
      const ordenesActualizadas = await axios.put('http://localhost:3000/ordenes', { Datos: [{ idOrden: id, estado: nuevoEstado }] });
      const resultado = ordenesActualizadas.data;

      if (resultado.Estado === 'Completado') {
        setOrdenes((prevOrdenes) =>
          prevOrdenes.map((orden) =>
            orden.idOrden === id ? { ...orden, id_estado: nuevoEstado } : orden
          )
        );
      } else {
        console.error('Error actualizando estado de la orden:', resultado.Mensaje);
      }
    } catch (error) {
      console.error('Error actualizando estado de la orden:', error);
    }
  };

  return (
    <OrdenesContext.Provider value={{ ordenes, actualizarEstadoOrden, error }}>
      {children}
    </OrdenesContext.Provider>
  );
};
