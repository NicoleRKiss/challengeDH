let db = require('../database/models');
const sequelize = db.sequelize;

// ESTO ES UN COPY PASTE - FALTA HACER CAMBIOS

const editarPeliculasController = {
    edit: function (req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function (movies) {
            res.render("editarPeliculas", { movies: movies })
        })
    },

    update: function (req, res) {
        db.Movies.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            planId: req.body.planId,
            idiomaId: req.body.idiomaId,
            precio: req.body.precio,
            categoriaId: req.body.categoriaId,
            profesorId: req.body.profesorId
        }, {
            where: {
                id: req.params.id
            }
       })

      res.redirect("/");
   }

}
module.exports = editarPeliculasController;
