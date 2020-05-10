const express = require("express");
const routes = require("./routes");
const conectarDB = require("./config/db");
const bodyParser = require("body-parser");

//conectar a la base de datos
conectarDB();

//crear el servidor
const app = express();

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas de la app
app.use("/", routes());

//puerto
app.listen(9000, () => {
  console.log("la app funciona en el puerto 9000");
});
