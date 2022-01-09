
const express = require("express");
const morgan = require("morgan");
const enrutador = require("./routes/routes");

const app = express();

//el servidor js se divide en 
// middleware -> routes -> statics files -> start server


app.use(morgan("dev"));

app.use(express.json( {limit: "50mb" }))

//routes
app.use("/api/clase/", enrutador)
/*
app.get('/', (req, res)=>{
res.json({message:'Bienvenido a nuestro servidor'})

});
*/



//statics files



//start server

app.listen(3000, ()=>{
    console.log("Servidor esta corriendo en el puerto ", 3000);
});