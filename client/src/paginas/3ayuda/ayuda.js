import React, { useState } from 'react';
import Axios from 'axios'
import './ayuda.css'

import PiePagina from './../../piepagina/PiePagina';


const imgName = require.context('./../../assets/img/ayuda', true)

export default function Ayuda(props) {


  const host = '/';

  return (
    <>


      <div className="relative">
        <Encabezado />
      </div>



      <div className="relative">

        <div className="ayuda-titulo">
          <h2>Ellos son los últimos que han ayudado a planeta <br />
            ¡Gracias a ellos podremos hacer un cambio!</h2>

        </div>

        <TablaDonaciones host={host} />
      </div>


      <div className="relative">

        <DatosUsuario host={host} />

      </div>


      <div className="relative">
        <DatosTarjetas host={host} />
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
        <h2> ¿Puedes hacer un cambio?  </h2>
      </div>
      <div className="encabezado-img">
        <img src={imgName(`./encabezado.jpg`)} alt="imagen del encabezado" />
      </div>

    </div>

  );

}









//----------------------------------------------------------------Parte BackEnd

function TablaDonaciones(props) {

  const [datos, setDatos] = useState([])
  const [i, setI] = useState(0)


  const ObtencionLista = () => {

    try {
      Axios.post(`${props.host}getIDonaciones`, {

      }).then(response => {
        Axios.post(`${props.host}getDonaciones`, {
          envio: response.data[0].id

        }).then(response => {
          if (i === 0) {
            setDatos(response.data)
            setI(1)
          }
        })

      })

    } catch (err) {
      console.log(err)
    }

  }

  const iterador = () => {
    setI(0);
  }

  ObtencionLista();


  return (
    <>

      <div className="contenedor-ultimasDonaciones">


        <div className="contenedor-datos">

          <div className="content-Datos">

            <div className="datos id">

              <ul className="ul-datos ud">
                <li className="li-datos ld"><p className="p-datos">Nombre del donador</p></li>
                <li className="li-datos ld"><p className="p-datos">Donación echa</p></li>
                <li className="li-datos ld"><p className="p-datos">Mensaje del Donador</p></li>
              </ul>

            </div>

            {datos.map((val, key) => {
              return (

                <div className="datos">

                  <ul className="ul-datos">
                    <li className="li-datos"><p className="p-datos">{val.NombreDonador}</p> </li>
                    <li className="li-datos"><p className="p-datos">{val.Pago}</p></li>
                    <li className="li-datos"><p className="p-datos">{val.MSG}</p></li>
                  </ul>

                </div>

              )
            })}

          </div>

          <div className="btn-actualizar">
            <button onClick={iterador}>Actualizar</button>
          </div>

        </div>


      </div>
    </>

  )

}

function DatosUsuario(props) {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [correo, setCorreo] = useState("");

  const VaciarInputs = () => {

    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.value = '';
    })
  }


  const setDatos = () => {
    VaciarInputs();
    try {
      Axios.post(`${props.host}setDatosUsuario`, {
  
        nombre: nombre,
        edad: edad,
        correo: correo
  
      }).then(() => {
  
        console.log("Datos recibidos con éxito");
      })
      
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <div className="contenedor-DatosUsuario">
        <div className="ayuda-titulo-cuerpo">
          <h2> Ingresa tus datos para participar en futuras jornadas de limpieza </h2>
        </div>

        <div className="p-preguntas">

          <div className="preguntas">
            <div><label htmlFor="nombre">Ingresa tu nombre</label></div>
            <div><input type="text" id="nombre" placeholder="Nombre completo:" onChange={(e) => {
              setNombre(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="edad">Ingresa tu edad</label></div>
            <div><input type="number" id="edad" placeholder="18:" onChange={(e) => {
              setEdad(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="corre">Ingresa tu Correo Electrónico</label></div>
            <div><input type="mail" id="corre" placeholder="ejemplo@corporacion.com" onChange={(e) => {
              setCorreo(e.target.value)
            }} /></div>
          </div>
          <div className="btnFrom"><button onClick={setDatos}> Enviar mis Datos Para Ayudar </button></div>



        </div>
      </div>
    </>
  );

}

function DatosTarjetas(props) {

  const [nombre, setNombre] = useState("");
  const [nombreDonador, setNombreDonador] = useState("");
  const [NumeroTarjeta, setNumeroTarjeta] = useState(0)
  const [fecha, setFecha] = useState("")
  const [CVV, setCVV] = useState("")
  const [pago, setPago] = useState(0)
  const [msg, setMsg] = useState("")

  const VaciarInputs = () => {

    let inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
      input.value = '';
    })
  }



  const setDonacion = () => {
    VaciarInputs();
    try {
      Axios.post(`${props.host}setDatosPago`, {
        nombre: nombre,
        nombreDonador, nombreDonador,
        NumeroTarjeta: NumeroTarjeta,
        fecha: fecha,
        CVV: CVV,
        pago: pago,
        msg: msg
  
      }).then(() => {
        console.log("Datos recibidos con éxito");
      })
      
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>


      <div className="contenedor-DatosTarjeta">
        <div className="ayuda-titulo-cuerpo">
          <h2> ¿¿Quieres salvar el planeta ahora??, también puedes donar: </h2>
        </div>


        <div className="p-preguntas">

          <div className="preguntas">
            <div><label htmlFor="nameTitular">Ingresa el nombre del titular</label></div>
            <div><input type="text" id="nameTitular" placeholder="Nombre:" onChange={(e) => {
              setNombre(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="numeroTar">Ingresa los 16 dígitos de la tarjeta</label></div>
            <div><input type="number" id="numeroTar" placeholder="123456789012345" onChange={(e) => {
              setNumeroTarjeta(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="fecha">ingresa la fecha de vencimiento</label></div>
            <div><input type="month" id="fecha" placeholder="05 de 2026" onChange={(e) => {
              setFecha(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="CVV">Ingresa el código CVV</label></div>
            <div><input type="password" id="CVV" placeholder="123" onChange={(e) => {
              setCVV(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas">
            <div><label htmlFor="nameDonador">Ingresa el nombre de quien hace el donativo</label></div>
            <div><input type="text" id="nameDonador" placeholder="Nombre:" onChange={(e) => {
              setNombreDonador(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas pago">
            <div><label htmlFor="pago">Ingresa La cantidad con la que nos quieres ayudar (en MXN)</label></div>
            <div><input type="number" id="pago" placeholder="100" onChange={(e) => {
              setPago(e.target.value)
            }} /></div>
          </div>

          <div className="preguntas pago">
            <div><label htmlFor="msg">Ingresa un mensaje, este aparecerá el la tabla de posiciones </label></div>
            <div><input type="text" id="msg" placeholder="max 100 caracteres" onChange={(e) => {
              setMsg(e.target.value)
            }} /></div>
          </div>
          <div className="btnFrom"> <button onClick={setDonacion}> Enviar mi contribución </button> </div>


        </div>
      </div>
    </>
  );

}





