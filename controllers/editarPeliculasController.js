let db = require('../database/models');
const sequelize = db.sequelize;

// ESTO ES UN COPY PASTE - FALTA HACER CAMBIOS

const editarPeliculasController = {
    edit: function (req, res) {
        db.Movie.findByPk(req.params.id)
        .then(function (movie) {
            res.render("editarPeliculas", { movie: movie })
        })
        .catch(function(error){
            console.log(error);
        })
    },
// MODIFICAR ESTO 
    update: function (req, res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length:req.body.length,
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
module.exports = editarPeliculasController;
