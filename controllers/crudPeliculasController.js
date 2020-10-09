let db = require('../database/models');
const sequelize = db.sequelize;

const crudController = {
    add: function (req, res) {
            res.render("crudPeliculas")
      },
    create: function (req, res) {
          db.Movies.create({
              title: req.body.title,
              rating: req.body.rating,
              awards: req.body.awards,
              length:req.body.length,
              releaseDate: req.body.releaseDate,
              genre_id:req.body.genre_id,
          });
        res.redirect('/');
      },
      
     
}
module.exports = crudController;

