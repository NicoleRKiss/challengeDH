let db = require('../database/models');

const movieController = {
    detail: function (req, res) {
        db.Movie.findByPk(req.params.id, {
            include: { association : "genre"}
        })
            .then((movie) => {
                return res.render('detallePeli', { movie });
            })
            .catch(e => console.log(e));
    },
    add: function (req, res) {
        db.Genre.findAll().
        then( function(genres){
            return res.render("crudPeliculas", { genres })
        })
        .catch(e => console.log(e));
    },
    create: function (req, res) {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            releaseDate: req.body.releaseDate,
            genre_id: req.body.genre_id,
        });
        return res.redirect('/');
    },
    edit: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then(function (movies) {
                res.render("editarPeliculas", { movies: movies })
            })
    },
    // MODIFICAR ESTO 
    update: function (req, res) {
        db.Movie.update({
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
    },
    delete: (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    }

}
module.exports = movieController;

