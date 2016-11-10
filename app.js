/* Importamos nuestros módulos */
var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

/* Declaramos nuestro bodyParser y methodOverride */
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());  
app.use(methodOverride());

/* Craemos una instancia del express router */
var router = express.Router();

/* Definimos nuestra primera ruta */
router.get('/', function(req, res) {  
   res.send("Creando una API Rest!");
});

/* Decalramos que vamos a usar el router */
app.use(router);

/* Puerto en el que esta escuchando nuestra aplicación */
app.listen(3000, function() {  
  console.log("Servidor Node corriendo en http://localhost:3000");
});