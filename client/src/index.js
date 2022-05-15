import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import ConexionSubirDatos from './conexion(no tocar)';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';


import NavBar from './componentes/NavBar/NavBar';

import Home from './paginas/1home/home'
import Info from './paginas/2info/info'
import Ayuda from './paginas/3ayuda/ayuda'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element = {<Home/>} /> 
        <Route path='/info' element = {<Info/>} />  
        <Route path='/ayudanos' element = {<Ayuda/>} /> 
      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);
