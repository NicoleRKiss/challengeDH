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
        let genres = db.Genre.findAll()
        .then( function(genres){
            return  genres;
        })
        .catch(e => console.log(e));

        let movie = db.Movie.findByPk(req.params.id, {
            include: { association: "genre" }
        })
            .then(function (movie) {
                return movie;
            })
            .catch(e => console.log(e));

        Promise.all([genres, movie]) //Las variables que tienen dentro las promesas
            .then(function([genres, movie]){ //Resultado de las promesas
                return res.render("editarPeliculas", { genres, movie })
            })
            .catch(e => console.log(e));
    },
    // MODIFICAR ESTO 
    update: function (req, res) {
         db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            releaseDate: req.body.releaseDate,
            genre_id: req.body.genre_id,
            }, 
            {
                where: {
                        id: req.params.id
                    }
            })
            .catch(e => console.log(e)); 
            
            return res.redirect("/");
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

