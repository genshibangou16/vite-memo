import React, { useState } from 'react';
import { LoginContext } from './LoginContext';

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <LoginContext.Provider value={{ toggleLogin, isLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
