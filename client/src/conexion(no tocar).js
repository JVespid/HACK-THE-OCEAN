import React, { useState, onChange } from 'react';

import Axios from 'axios'

function ConexionSubirDatos() {

  const [usu, setusu] = useState("");
  const [contra, setcontra] = useState("");
  const [p, setP] = useState("hola");

  const [datosServidor, setDatosServidor] = useState([]);

  const getDatos = ()=>{

    Axios.post('http://localhost:3001/get',{
      usu:usu,
      contra:contra
    }).then((response) => {
      setDatosServidor(response.data)

      console.log(datosServidor)

    })

  }

  const a = () =>{
  Axios.post('http://localhost:3001/set',{
    usu:usu,
    contra:contra

  }).then((response) => {
    setDatosServidor(response.data)

    console.log(datosServidor)

    console.log("exitoso")
  })

  }

  return (
    <div className="Conexion">

      <input type="text" placeholder="usuario" onChange={(e)=>{
        setusu(e.target.value);
      }}/>
      <input type="text" placeholder="contraseña" onChange={(e)=>{
        setcontra(e.target.value);
      }}/>
      <button onClick = {a}> enviar</button>

      <button onClick = {getDatos}> obtener</button>


    </div>
  );
}

export default ConexionSubirDatos;
