import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = (usuario) => {
    setUsuarios((prev) => [...prev, usuario]);
  };

  return (
    <UserContext.Provider value={{ usuarios, adicionarUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
