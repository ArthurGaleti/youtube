import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuSwap } from './contexts/menu.Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuSwap>
      <App />
    </MenuSwap>
  </React.StrictMode>
);