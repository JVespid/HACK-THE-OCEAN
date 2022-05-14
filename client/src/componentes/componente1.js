
import react from 'react';
const imgName = require.context('./../../public/assets/img',true,/\.png\.jpg\.ajpg$/)

function NuevoCompoennete(propiedades){

    const flecha = () =>{

    }

    return(

        <>

        <div ClassName="clase1"> {propiedades.valor}</div>
        
        </>
    )

}

export default NuevoCompoennete;