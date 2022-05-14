import React, { useState, onChange } from 'react';

import Axios from 'axios'

function ConexionSubirDatos() {

  const [usu, setusu] = useState("");
  const [contra, setcontra] = useState("");


  const a = () =>{
  Axios.post('http://localhost:3001/insert',{
    usu:usu,
    contra:contra
  }).then(() => {
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


    </div>
  );
}

export default ConexionSubirDatos;
