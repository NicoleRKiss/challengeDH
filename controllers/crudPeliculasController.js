let db = require('../database/models');
const sequelize = db.sequelize;

const crudController = {
    add: function (req, res) {
      const user = req.session.user;
      if (typeof user !== 'undefined' && user.rol === 1) {
          db.Genre.findAll()
            .then ((genre) => {
              return res.render("crudPeliculas", {
                genre
              })
            .catch(function(error){
              console.log(error);
            })
          }); 
        } else {
          return res.render('not-found', {
              user
          });
      }
      },
    create: function (req, res) {
      const user = req.session.user;
      if (typeof user !== 'undefined' && user.rol === 1) {
          db.Movie.create({
              title: req.body.title,
              rating: req.body.rating,
              awards: req.body.awards,
              length:req.body.length,
              releaseDate: req.body.releaseDate,
              genre_id:req.body.genreid,
          });
        } else {
          return res.render('not-found', {
              user
          });
      }
        res.redirect('/');
      },
      
     
}
module.exports = crudController;

