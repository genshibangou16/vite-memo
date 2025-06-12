import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Memo from './components/Memo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memo />
  </StrictMode>,
);
