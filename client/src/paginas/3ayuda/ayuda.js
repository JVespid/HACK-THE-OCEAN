import React, { useState } from 'react';
import Axios from 'axios'

var iterador = 0;

export default function Ayuda(props) {
  
  iterador = 0;


  const host = 'http://localhost:3001/';

  return (
    <>

      <div className="ayuda-container">



        <div className="contenedor-ultimasDonaciones">
          <TablaDonaciones host={host} />

        </div>

        <hr></hr>


        <div className="contenedor-DatosUsuario">
          <DatosUsuario host={host} />

        </div>

        <hr></hr>

        <div className="contenedor-DatasTarjeta">
          <DatosTarjetas host={host} />
        </div>

      </div>

    </>
  );
}








//----------------------------------------------------------------Parte BackEnd

function TablaDonaciones(props) {

  const [datos, setDatos] = useState([])
  const [i,setI] = useState(0)


  const ObtencionLista = () => {
    Axios.post(`${props.host}getIDonaciones`, {

    }).then(response => {
      Axios.post(`${props.host}getDonaciones`, {
        envio:response.data[0].id

      }).then(response => {
        if (i === 0) {
          setDatos(response.data)
          setI(1)
        }
      })

    })
  }

  const iterador = ()=>{
    setI(0);
  }

      ObtencionLista();


  return (
    <>

      <div className="contenedor-datos">

        <div className="datos-titulo">
          <h2>Gracias por sus donaciones</h2>
        </div>

        <div className="">

          {datos.map((val, key) => {
            return <div className="datos">
              <ul className="ul-datos">
                <li className="li-datos"><p className="p-datos">Nombre del donador</p> {val.NombreDonador}</li>
                <li className="li-datos"><p className="p-datos">Donación echa</p> {val.Pago}</li>
                <li className="li-datos"><p className="p-datos"></p> {val.MSG}</li>
              </ul>

            </div>
          })}

        </div>
        <button onClick={iterador}>Actualizar</button>
      </div>

    </>

  )

}

function DatosUsuario(props) {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0)
  const [correo, setCorreo] = useState("")

  const setDatos = () => {

    console.log(nombre + " " + edad + " " + correo + " ")

    Axios.post(`${props.host}setDatosUsuario`, {

      nombre: nombre,
      edad: edad,
      correo: correo

    }).then(() => {

      console.log("Datos recibidos con éxito");
    })
  }

  return (
    <>

      <div className="preguntas">

        <div className="preguntas">
          <label htmlFor="nombre">Ingresa tu nombre</label>
          <input type="text" id="nombre" placeholder="Nombre completo:" onChange={(e) => {
            setNombre(e.target.value)
          }} />
        </div>

        <div className="preguntas">
          <label htmlFor="edad">Ingresa tu edad</label>
          <input type="number" id="edad" placeholder="18:" onChange={(e) => {
            setEdad(e.target.value)
          }} />
        </div>

        <div className="preguntas">
          <label htmlFor="corre">Ingresa tu Correo Electrónico</label>
          <input type="mail" id="corre" placeholder="ejemplo@corporacion.com" onChange={(e) => {
            setCorreo(e.target.value)
          }} />
        </div>

        <button onClick={setDatos}> Enviar mis Datos Para Ayudar </button>


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

  const setDonacion = () => {

    console.log(props.host)
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

  }

  return (
    <>

      <div className="preguntas">
        <label htmlFor="nameTitular">Ingresa el nombre del titular</label>
        <input type="text" id="nameTitular" placeholder="Nombre:" onChange={(e) => {
          setNombre(e.target.value)
        }} />
      </div>

      <div className="preguntas">
        <label htmlFor="numeroTar">Ingresa los 16 dígitos de la tarjeta</label>
        <input type="number" id="numeroTar" placeholder="123456789012345" onChange={(e) => {
          setNumeroTarjeta(e.target.value)
        }} />
      </div>

      <div className="preguntas">
        <label htmlFor="fecha">ingresa la fecha de vencimiento</label>
        <input type="month" id="fecha" placeholder="05 de 2026" onChange={(e) => {
          setFecha(e.target.value)
        }} />
      </div>

      <div className="preguntas">
        <label htmlFor="CVV">Ingresa el código CVV</label>
        <input type="password" id="CVV" placeholder="123" onChange={(e) => {
          setCVV(e.target.value)
        }} />
      </div>

      <div className="preguntas">
        <label htmlFor="nameDonador">Ingresa el nombre de quien hace el donativo</label>
        <input type="text" id="nameDonador" placeholder="Nombre:" onChange={(e) => {
          setNombreDonador(e.target.value)
        }} />
      </div>

      <div className="preguntas pago">
        <label htmlFor="pago">Ingresa La cantidad con la que nos quieres ayudar (en MXN)</label>
        <input type="number" id="pago" placeholder="100" onChange={(e) => {
          setPago(e.target.value)
        }} />
      </div>

      <div className="preguntas pago">
        <label htmlFor="msg">Ingresa un mensaje, este aparecerá el la tabla de posiciones </label>
        <input type="text" id="msg" placeholder="max 100 caracteres" onChange={(e) => {
          setMsg(e.target.value)
        }} />
      </div>

      <button onClick={setDonacion}> Enviar mi contribución </button>

    </>
  );

}





