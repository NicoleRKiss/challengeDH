let db = require('../database/models');

const indexController = {

    index: function (req, res) {
        db.Movie.findAll()
            .then(function(movies) {
                return res.render("index", { movies: movies });
            })
            .catch( e => console.log(e));
    }
}


module.exports = indexController;