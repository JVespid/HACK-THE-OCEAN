import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'



function NabVar(props) {

  return (
    <>
      <div className="links-content">

        <div className="content-links">

          <div className="links">
            <ul className="ul-link">

                <Links to="/" valor="Home" />
                <Links to="/info" valor="Más Información" />
                <Links to="/ayudanos" valor="Ayúdanos" />

            </ul>
          </div>

        </div>

      </div>

    </>
  );

}


function Links(props) {

  return (
    <>

    <li className="li-link">
      <NavLink className="link" to={props.to} >{props.valor}</NavLink>
    </li>
    </>
  );

}



export default NabVar;