/* Hacemos require de mongoose */
var mongoose = require('mongoose');

/* Le pasamos como parámetro a mongoose el model */
var Posts  = mongoose.model('Posts');

/* /GET - Retorna todos los posts */
exports.findAllPosts = function(req, res) {  
    Posts.find(function(err, Posts) {

        if(err) res.send(500, err.message);
        console.log('GET /Posts')
            res.status(200).jsonp(Posts);
        });
};

/* /POST - Hacemos un insert a la coleccion Posts */
exports.addPosts = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var Post = new Posts({
        title:    req.body.title,
        updated:  req.body.updated,
        country:  req.body.country,
        commentary: req.body.commentary
    });

    Post.save(function(err, Posts) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(Posts);
    });
};

/* /PUT - Hacemos el update de un registro existente */
exports.updatePosts = function(req, res) {  
    Posts.findById(req.params.id, function(err, Posts) {
        Posts.title   = req.body.petId;
        Posts.updated    = req.body.updated;
        Posts.country = req.body.country;
        Posts.commentary = req.body.commentary;

        Posts.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(Posts);
        });
    });
};

/* /DELETE - Elimina un Post en base a su ID */
exports.deletePosts = function(req, res) {  
    Posts.findById(req.params.id, function(err, Posts) {
        Posts.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};