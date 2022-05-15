import React from 'react';
import './info.css'

import PiePagina from './../../piepagina/PiePagina';
const imgName = require.context('./../../assets/img/info', true)

function Info(props) {

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
    <>

      <div className="encabezado">

        <div className="info-encabezado-titulo">
          <h2> Contaminación <br /> El problema y la solución  </h2>
        </div>
        <div className="encabezado-img">
          <img src={imgName(`./encabezado.webp`)} alt="imagen del encabezado" />
        </div>

      </div>

    </>
  );
}

function Cuerpo(props) {

  return (
    <>

      <div className="info-cuerpo-top">
        <CuerpoTop />
      </div>
      <hr></hr>
      <div className="info-cuerpo-bottom">
        <CuerpoBottom />
      </div>

    </>
  );
}

function CuerpoTop(props) {

  return (

    <>

      <div className="info-cuerpo-text-top">

        <div className="info-cuerpo-titulo">
          <h2>El problema:</h2>
        </div>

        <div className="info-cuerpo-text">
          <div className="info-cuerpo-p">
            <p>Hoy en día muchos de los productos que son
              consumidos generan contaminación directa por
              su producción o bien indirecta, por su degradación
              en el medio ambiente, un ejemplo el plástico, quien
              ha inundado nuestras vidas literalmente. Encontramos
              sustancias contaminantes en el aire que respiramos,
              nuestra comida, nuestra ropa, los cosméticos
              y nuestros mares</p>
          </div>
          <div className="info-cuerpo-img">
            <img src={imgName('./pato.webp')} alt="Un pato cuak (¯\(*u*)\_)" />
          </div>
        </div>

    
        <div className="info-cuerpo-text">
          <div className="info-cuerpo-p">
            <p>Convivimos a diario con la contaminación atmosférica,
              debido al trafico y a las emisiones de las industrias. la
              contaminación del aire es responsable de un elevado
              numero de muertes prematuras y enfermedades
              respiratorias en nuestras ciudades</p>
          </div>
          <div className="info-cuerpo-img">
            <img src={imgName('./botellas.jpg')} alt="imagen que representa la contaminación mostrando una parte de una playa llena de botellas de plástico, suceso impactante que realmente esta pasando en esta sociedad " />
          </div>
        </div>

      </div>

    </>



  )

}

function CuerpoBottom(props) {
  return (
    <>
      <div className="info-Cuerpo-bottom-texts">

        <div className="info-cuerpo-titulo">
          <h2> La solución: </h2>
        </div>
        <div className="info-Cuerpo-bottom-p">
          <p>La contaminación de nuestros mares puede combatirse de
            forma efectiva mejorando los modelos de movilidad
            en nuestras ciudades, para hacerlas mas sanas y
            sostenibles, generando menos CO2</p>
        </div>
        <div className="info-Cuerpo-bottom-p">
          <p>La reducción en el consumo y producción de plasticos
            de un solo uso es prioritario y urgente, estando al
            tanto de como se gestionan los residuos por parte de
            las empresas, para que no lo hagan en los mares</p>
        </div>
        <div className="info-Cuerpo-bottom-p">
          <p>Es necesario apoyar a las cambañas de limpieza de las
            playas, para que estas no esten llenas de basura y
            termine matando mas fauna.</p>
        </div>

      </div>
      <div className="info-cuerpo-img-bottom">
        <img src={imgName('./malteada.jpg')} alt="imagen que representa la contaminación mostrando una parte de una playa llena de botellas de plástico, suceso impactante que realmente esta pasando en esta sociedad " />
      </div>

    </>


  )
}




export default Info;