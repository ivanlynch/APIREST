/* Hacemos Require de Moongose e instanciamos un nuevo Schema */
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

/* Declaramos el Schema */
var postsSchema = new Schema({  
  title:      { type: String },
  updated:    { type: Date, default: Date.now },
  country:    { type: String },
  commentary: { type: String }
});

/* exportamos el Schema */
module.exports = mongoose.model('Posts', postsSchema)