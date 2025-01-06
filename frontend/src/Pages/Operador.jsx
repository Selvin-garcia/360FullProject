import React from 'react';
import { OrdenesProvider } from '../Context/ContextoOrdenes'; // Ensure the correct relative path
import DashboardOperador from '../components/Operador/DashboardOperador';

const OperadorPage = () => (
  <OrdenesProvider>
    <DashboardOperador />
  </OrdenesProvider>
);

export default OperadorPage;
