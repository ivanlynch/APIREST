/* Importamos nuestros módulos */
var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

/* Hacemos la conexion a la Base de datos, en caso de que falle nos dará un ERROR*/
mongoose.connect('mongodb://localhost/posts', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

/* Declaramos nuestro bodyParser y methodOverride */
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());  
app.use(methodOverride());

var models = require('./models/posts')(app, mongoose);
var PostCtrl = require('./controllers/posts');

/* Rutas para cliente */
var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Creando una API Rest!");
});

/* Declaramos que vamos a usar el router */
app.use(router);

/* API Routes */
var posts = express.Router();

posts.route('/posts')
  .get(PostCtrl.findAllPosts)
  .post(PostCtrl.addPosts);

posts.route('/posts/:id')
  .put(PostCtrl.updatePosts)
  .delete(PostCtrl.deletePosts);

app.use('/api', posts);

app.listen(3001, function() {
        console.log("Servidor Node Corriendo en: http://localhost:3001");
});