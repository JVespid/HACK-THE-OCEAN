const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');



app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'prueba',
})

app.post('/insert',(req, res) => {

    const usu = req.body.usu
    const contra = req.body.contra

    db.query("INSERT INTO usuarios (usuario, contra) VALUES (?,?)",
    [usu, contra], (err, result)=>{
        if(err){
            console.log(err);
            console.log("no jalo");
        }else{
            res.send("datos ingresados con exito");
        }
    })
})

app.listen(3001, ()=>{
    console.log('servidor En linea');
})