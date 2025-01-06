import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const OrdenesContext = createContext();

export const useOrdenes = () => useContext(OrdenesContext);

export const OrdenesProvider = ({ children }) => {
  const [ordenes, setOrdenes] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // To store any errors
  const API_URL =  'http://localhost:3000/ordenes';

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const response = await axios.get(API_URL);
        const key = "JSON_F52E2B61-18A1-11d1-B105-00805F49916B";

        if (response.data && response.data[key]) {
          const parsedData = JSON.parse(response.data[key]);
          setOrdenes(parsedData.Datos || []);
        } else {
          console.warn('Invalid or missing data key in response:', response.data);
          setOrdenes([]);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError(error.response?.data?.message || error.message || 'Error fetching orders.');
      }
    };

    fetchOrdenes();
  }, [API_URL]);

  const actualizarEstadoOrden = async (id, nuevoEstado) => {
    try {
      const ordenesActualizadas = await axios.put(API_URL, {
        Datos: [{ idOrden: id, estado: nuevoEstado }],
      });

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
