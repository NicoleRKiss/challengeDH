let db = require('../database/models');
const sequelize = db.sequelize;


// ESTO ES UN COPY PASTE - FALTA HACER CAMBIOS
const indexController = {

    index: function (req, res) {
        db.Movies.findAll({
        })
            .then(function(movies) {

                res.render("index", { movies: movies });
            })
    },
    index: (req, res) => {
        db.Movies.findAll({
                //  include: ['category']
                include: {
                    all: true,
                    nested: true
                }
            })
            .then(function (results) {
                const MoviesAll = results;
                return res.render("index", {
                    data: MoviesAll
                })
            })
            .catch(e => console.log(e))

    },
}


module.exports = indexController;