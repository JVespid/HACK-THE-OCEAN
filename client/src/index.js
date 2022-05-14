import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ConexionSubirDatos from './conexion(no tocar)';
import { HashRouter, Switch, Route } from 'react-router-dom';


import NavBar from './/componentes/NavBar/NavBar';

import Home from './paginas/1home/home'
import Info from './paginas/2info/info'
import Ayuda from './paginas/3ayuda/ayuda'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  < HashRouter>
      <NavBar className = "links-content"></NavBar>
      <Switch>
        <Route path='/' component = {Home} /> 
        <Route path='/info' component = {Info} />  
        <Route path='/ayudanos' component = {Ayuda} /> 
      </Switch>
    </HashRouter>


  </React.StrictMode>
);
