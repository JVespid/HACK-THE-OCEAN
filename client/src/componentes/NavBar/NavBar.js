import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import './navbar.css'

const imgName = require.context('./../../../public/assets/img', true, /\.png\.jpg\.ajpg$/);


function NabVar(props) {

  return (
    <>
      <div className="links-content">

        <div className="content-links">

          <div className="links">
            <ul className="ul-link">
              
              <li className="li-link">
                <Links to="/" valor="Home" />
              </li>
              <li className="li-link">
                <Links to="/info" valor="Más Información" />
              </li>
              <li className="li-link">
                <Links to="/ayudanos" valor="Ayúdanos" />
              </li>

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

      <Link className="link" to={props.to} >{props.valor}</Link>

    </>
  );

}



export default NabVar;