import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'



function NabVar(props) {

  return (
    <>
      <div className="links-content">
    
      <div className="circulo">
        
        <Burger />
        <Links/>

      </div>

      </div>

    </>
  );

}


function Burger(props) {

  return (
    <>
      <div className="burger-circulo">

        <div className="burger-contain">

          <div className="burger-linea"></div>
          <div className="burger-linea"></div>
          <div className="burger-linea"></div>

        </div>

      </div>

    </>
  );

}

function Links(props) {

  return (
    <>
    <div className="content-links">
      <div className="links">
        <ul className="ul-link">
          <Link to="/" valor="Home" />
          <Link to="/info" valor="Más Información" />
          <Link to="/ayudanos" valor="Ayúdanos" />

        </ul>
      </div>
    </div>
    </>
  );

}




function Link(props) {
  return (
    <>
      <li className="li-link">
        <NavLink className="link" to={props.to} >{props.valor}</NavLink>
      </li>
    </>
  );

}

export default NabVar;