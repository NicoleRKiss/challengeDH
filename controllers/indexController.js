let db = require('../database/models');

const indexController = {

    index: function (req, res) {
        db.Movie.findAll()
            .then(function(movies) {
                //console.log(movies)
                //let movies = resultados[0];
                res.render("index", { movies: movies });
            })
    }
}


module.exports = indexController;