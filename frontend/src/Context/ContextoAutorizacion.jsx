import React, { createContext, useState } from 'react';

// Create a context for authentication
export const ContextoAutorizacion = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(null);


  return (
    <ContextoAutorizacion.Provider value={{ usuarios, setUsuarios }}>
      {children}
    </ContextoAutorizacion.Provider>
  );
};
