import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function NabVar(props){

    return(
        <>

        <div className="links">

        <Links to="/" valor = "Home" />
        <Links to="/info" valor = "Más Información" />
        <Links to="/ayudanos" valor = "Ayúdanos" />

        </div>

        </>
    );

}


function Links(props) {

    return(
        <>

        <Link className="link" to={props.to} >{props.valor}</Link>

        </>
    );

}



export default NabVar;