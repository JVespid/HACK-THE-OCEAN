import React from 'react';
import './home.css'

import PiePagina from './../../piepagina/PiePagina';

const imgName = require.context('./../../assets/img/home', true)



function Home(props) {

  return (
    <>
      <div className="relative">
        <Encabezado />
      </div>
      <div className="relative">
        <Cuerpo />
      </div>
      <div className="relative">
        <PiePagina />
      </div>

    </>
  );
}


function Encabezado(props) {

  return (

    <div className="encabezado">

      <div className="encabezado-titulo">
        <h2> Contaminación  </h2>
      </div>
      <div className="encabezado-img">
        <img src={imgName(`./encavezado.png`)} alt="imagen del encabezado" />
      </div>

    </div>

  );

}








function Cuerpo(props) {

  return (
    <>
      <div className="Cuerpo-top">

        <div className="cuerpo-titulo">
          <h2>¿Sabías que el aire que respiras y la comida que ingieres <br /> a diario contiene sustancias tóxicas?</h2>
        </div>

        <div className="cuerpo-Capsulas">

          <CuerpoCapsulas
            textTop="En nuestra sangre hay"
            h2p1="300"
            h2p2="sustancias químicas"
            textBottom="contaminantes que no tenian 
            nuestros abuelos" />

          <CuerpoCapsulas
            textTop="La contaminación atmosférica provoca"
            h2p1="7 Millones de"
            h2p2="muertes"
            textBottom="Prematuras en el mundo" />

          <CuerpoCapsulas
            textTop="Cada año unos"
            h2p1="12,7"
            h2p2="millones"
            textBottom="de toneladas de plásticos
            acaban en el mar" />
        </div>

      </div>

      <div className="Cuerpo-bottom">
        <CuerpoButton />
      </div>

    </>
  );
}



function CuerpoCapsulas(props) {

  return (
    <>
      <div className="content-CCapsula">

        <div className="CCapsula-PTop ">
          <p> {props.textTop} </p>
        </div>

        <div className="CCapsula-h2">
          <h2>{props.h2p1} <br /> {props.h2p2} </h2>
        </div>

        <div className="CCapsula-PButton">
          <p>{props.textBottom}</p>
        </div>
      </div>
    </>
  );
}


function CuerpoButton(props) {

  return (
    <>
      <div className="CuerpoButton-p">
        <p>La contaminación de los mares y océanos es un problema grave que afecta <br />
          directamente a la vida silvestre de los hábitats oceánicos e, indirectamente, a la salud <br />
          humana. Los derrames de petróleo, residuos tóxicos, el vertido ilegal y la acumulación de <br />
          plásticos son sólo algunas de las muchas fuentes de contaminación.</p>
      </div>

      <div className="CuerpoButton-Cimg">

        <div className="CuerpoButton-img">
          <img src={imgName(`./cuerpo.png`)} alt="imagen de estadística" />
        </div>

      </div>

      <div className="CuerpoButton-referencia">
        <p> Densidad de los plásticos a nivel mundial para cada una de las cuatro clases de <br />
          tamaño (de 0,33 a 1,00 mm, de 1,01 a 4,75 mm, de 4,76 a 200 mm, y &gt;200 mm). <br /><br />

          Fuente: Plastic Pollution in the World's Oceans</p>
      </div>

    </>
  );
}








export default Home;