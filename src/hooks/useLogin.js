import { useContext } from 'react';
import { LoginContext } from './LoginContext';

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
};
