import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConexionSubirDatos from './conexion(no tocar)';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <ConexionSubirDatos />

  </React.StrictMode>
);
