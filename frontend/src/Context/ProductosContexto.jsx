import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const ProductosContexto = createContext();

// Set your backend API base URL here
const API_URL = 'http://localhost:3000/productos/';  // Adjust this URL based on your backend endpoint

// Create a Provider component to manage products
const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API when component mounts
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        // Check if the response data contains the expected format
        const responseData = response.data;

        // Get the key name dynamically (in your case it should be like 'JSON_F52E2B61-18A1-11d1-B105-00805F49916B')
        const key = Object.keys(responseData)[0]; // You may want to check if there's only one key
        
        // Parse the stringified JSON data inside the key
        const parsedData = JSON.parse(responseData[key]);

        // Check if the parsedData contains the expected 'Datos' field, which should hold the product array
        if (parsedData && parsedData.Datos) {
          setProductos(parsedData.Datos); // Assuming 'Datos' holds the products array
        } else {
          setProductos([]); // If 'Datos' is not found, set an empty array
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);  // Log the error for debugging
        setError(err.message);  // Set error message to display on the UI
        setLoading(false);  // Stop the loading state
      });
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <ProductosContexto.Provider value={{ productos, loading, error }}>
      {children}  {/* Wraps your app and gives access to the context */}
    </ProductosContexto.Provider>
  );
};

export { ProductosContexto, ProductsProvider };
