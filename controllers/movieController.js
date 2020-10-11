let db = require('../database/models');

const movieController = {
    add: function (req, res) {
        res.render("crudPeliculas")
    },
    create: function (req, res) {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            releaseDate: req.body.releaseDate,
            genre_id: req.body.genre_id,
        });
        res.redirect('/');
    },
    detail: function (req, res) {
        db.Genres.findAll()
            .then((Genres) => {
                db.Movies.findByPk(req.params.id)
                    .then(function (Movies) {
                        // db.Actors.findAll()
                        //     .then((Actors) => {

                        return res.render('detallePeli', {
                            Movies: Movies,
                            Genres,
                            // Actors
                        });
                        // })
                        // .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            })
    },
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    },
    edit: function (req, res) {
        db.Movies.findByPk(req.params.id)
            .then(function (movies) {
                res.render("editarPeliculas", { movies: movies })
            })
    },
    // MODIFICAR ESTO 
    update: function (req, res) {
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            releaseDate: req.body.releaseDate,
            //genre_id:req.body.genre_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    }
}
module.exports = movieController;

