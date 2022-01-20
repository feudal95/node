
const express = require("express");
const morgan = require("morgan");
const fileUpload = require('express-fileupload');
const enrutador = require("./routes/routes");
const db = require('./models/index');

const app = express();

db.sequelize.sync(); //comentar para refresacar

//Para elumunar las tablas o vaciar y aplicar nuevos cambios
/*
db.sequelize.sync({ force: true }). then (() => {

    console.log("Tablas restablecidas");

});
*/
//el servidor js se divide en 
// middleware -> routes -> statics files -> start server


app.use(morgan("dev"));

app.use(express.json( {limit: "50mb" }))
//statics files
app.use(fileUpload());


//routes
app.use("/api/clase/", enrutador);
app.use("/public", express.static(__dirname + "/public"));

/*
app.get('/', (req, res)=>{
res.json({message:'Bienvenido a nuestro servidor'})

});
*/

//start server

app.listen(3000, ()=>{
    console.log("Servidor esta corriendo en el puerto ", 3000);
});