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

/* Hacemos la conexion a la Base de datos, en caso de que falle nos dará un ERROR y el servidor no iniciará*/
mongoose.connect('mongodb://localhost/posts', function(err, res) {  
  if(err) {
    console.log('ERROR: Base de datos no disponible. ' + err);
  }else{
      console.log("SUCCESS: Conectado a Base de Datos.");
      app.listen(3001, function() {
        console.log("Servidor Node Corriendo en: http://localhost:3001");
      });
  }
});