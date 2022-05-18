const express = require('express');
const app = express();


const mysql = require('mysql');
const cors = require('cors');


const path = require('path');



app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3000);


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})




const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'hackosean',
})


app.post('/setDatosUsuario',(req, res) => {

    const nombre = req.body.nombre
    const edad = req.body.edad
    const correo = req.body.correo

    db.query("INSERT INTO datoscandidatos (Nombre, Edad, Correo) VALUES (?,?,?)",
    [nombre, edad, correo], (err, result)=>{
        if(err){
            console.log(err);
            console.log("no jalo");
        }else{
            res.send("datos ingresados con éxito");
        }
    })
})


// insercion de los datos para 
app.post('/setDatosPago',(req, res) => {

    const nombre = req.body.nombre
    const nombreDonador = req.body.nombreDonador
    const NumeroTarjeta = req.body.NumeroTarjeta
    const fecha = req.body.fecha
    const CVV = req.body.CVV
    const pago = req.body.pago
    const msg = req.body.msg


    db.query("INSERT INTO datospago (Nombre, NombreDonador, Pago, MSG) VALUES (?, ?, ?, ?)",
    [nombre, nombreDonador, pago, msg], (err, result)=>{
        if(err){
            console.log(err);
            console.log("no jalo");
        }else{
            res.send("datos ingresados con éxito");
        }
    })
    

})


app.post('/getIDonaciones',(req, res) => {
    db.query("SELECT MAX(id) AS id FROM datosPago", (err, result)=>{
        if(err){
            console.log(err);
            console.log("no jalo");
        }else{
            res.send(result);
        }
    });
});



app.post('/getDonaciones',(req, res) => {
    let envio = req.body.envio
    console.log(envio)

    let limite = envio - 20;
    limite++;
    envio++;

    db.query(`SELECT * FROM datospago WHERE id<${envio} AND id>${limite}`, (err, result)=>{
        if(err){
            console.log(err);
            console.log("no jalo");
        }else{
            res.send(result);
        }
    });
});




app.listen(app.get('port'), ()=>{
    console.log('servidor En linea');
}) 