/* Hacemos require de mongoose */
var mongoose = require('mongoose');

/* Le pasamos como parámetro a mongoose el model */
var Posts  = mongoose.model('Posts');

/* /GET - Retorna todos los posts */
exports.findAllPosts = function(req, res) {  
    posts.find(function(err, posts) {
        if(err) res.send(500, err.message);

    console.log('GET /Posts')
        res.status(200).jsonp(posts);
    });
};