import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Navbar } from "./components/Navbar/Navbar";
import PieDePagina from "./components/PieDePagina/PieDePagina";
import Home from "./Pages/Home";
import CategoriaAlimentosPage from "./Pages/Alimentos";
import LoginPage from "./Pages/Login";
import CartPage from "./Pages/Carrito";
import OperadorPage from "./Pages/Operador";
import CheckoutPage from "./Pages/ConfirmacionOrden";
import DetalleProductos from "./Pages/DetalleProductos";
import { ContextoAutorizacion, AuthProvider } from './Context/ContextoAutorizacion';
import { ProductsProvider } from './Context/ProductosContexto'; // Import ProductosProvider
import { CartProvider } from './Context/ContextoCarrito'; // Import CartProvider
import { OrdenesProvider } from './Context/ContextoOrdenes'; // Import OrdersProvider

const AppRoutes = () => {
  const { usuarios } = useContext(ContextoAutorizacion); // Access the context here
  const location = useLocation();

  return (
    <>
      {usuarios && usuarios.id_rol !== 1 && <Navbar />}
      <Routes>
        {usuarios ? (
          <>
            {usuarios.id_rol === 1 ? (
              <>
                <Route path="/operador" element={
                  <OrdenesProvider> {/* Wrap OperadorPage with OrdersProvider */}
                    <OperadorPage />
                  </OrdenesProvider>
                } />
                <Route path="*" element={<Navigate to="/operador" />} />
              </>
            ) : (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/alimentos" element={< CategoriaAlimentosPage />} />

                <Route path="/producto/:idProducto" element={<DetalleProductos />} />
                <Route path="/cart" element={<CartPage />} /> {/* Add the CartPage route */}
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <ProductsProvider> {/* Wrap with ProductosProvider */}
        <CartProvider>
          <Router>
            <AppRoutes />
            <PieDePagina />
          </Router>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
