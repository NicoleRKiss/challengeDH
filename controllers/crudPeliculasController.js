let db = require('../database/models');
const sequelize = db.sequelize;

const crudPeliculasController = {
    add: function (req, res) {
            res.render("crudPeliculas")
      },
      create: function (req, res) {
            db.Producto.create({
              nombre: req.body.nombre,
              descripcion: req.body.descripcion,
              planId: req.body.planId,
              idiomaId:req.body.idiomaId,
              precio: req.body.precio,
              categoriaId:req.body.categoriaId,
              profesorId:req.body.profesorId
          });
        res.redirect('/');
      }
     
}
module.exports = crudPeliculasController;
