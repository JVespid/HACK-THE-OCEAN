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

      <div className="cuerpo">

        
        <div className="info-cuerpo-text-top">

          <div className="info-cuerpo-titulo">
            <h2>El problema</h2>
          </div>

          <div className="info-cuerpo-text1">
            <p>Hoy en día muchos de los productos que son
              consumidos generan contaminación directa por
              su producción o bien indirecta, por su degradación
              en el medio ambiente, un ejemplo el plástico, quien
              ha inundado nuestras vidas literalmente. Encontramos
              sustancias contaminantes en el aire que respiramos,
              nuestra comida, nuestra ropa, los cosméticos
              y nuestros mares</p>
          </div>

          <div className="info-cuerpo-text2">
            <p>Convivimos a diario con la contaminación atmosférica,
              debido al trafico y a las emisiones de las industrias. la
              contaminación del aire es responsable de un elevado
              numero de muertes prematuras y enfermedades
              respiratorias en nuestras ciudades</p>
          </div>

        </div>
        <div className="info-cuerpo-img-top">

        </div>

      </div>

    </>
  );
}




export default Info;