
import React from 'react';

import './piepagina.css'

function PiePagina (props) {

    return(
        <div className="piePagina">
            <PiePaginaTop />
            <PiePaginaBottom />
        </div>

    )

}

function PiePaginaTop(props){
    return(
        <>
        <div className="piePagina-top">
            <h2> Hack The Ocean </h2>
        </div>
        </>
    )
}


function PiePaginaBottom(props){
    return(
        <>
        <div className="piePagina-bottom">
            <div className="equipo-name">
                <h2>Algorithm ocean</h2>
            </div>
            <div className="equipo-link">
                <a href="https://github.com/JVespid/hakaton.git" target="_blank" without rel="noreferrer" > Links a GitHUb </a>
            </div>
            <div className="equipo-anio">
                <h2>2022</h2>
            </div>
        </div>
        </>
    )
}




export default PiePagina;