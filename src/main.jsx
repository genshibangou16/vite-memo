import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Memo from './components/Memo.jsx';
import { LoginProvider } from './hooks/LoginProvider.jsx';
import LoginButton from './components/LoginButton.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <header>
        <LoginButton />
      </header>
      <Memo />
    </LoginProvider>
  </StrictMode>,
);
