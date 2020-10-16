let db = require('../database/models');
const sequelize = db.sequelize;


const editarPeliculasController = {
    edit: function (req, res) {
        // const user = req.session.user;
        // if (typeof user !== 'undefined' && user.rol === 1) {
            db.Movie.findByPk(req.params.id)
            .then((movie) => {
                db.Genre.findAll() 
                .then ((genre)=> {
                    return res.render("editarPeliculas", { 
                        movie: movie,
                        genre:genre 
                    })
                })
                .catch(function(error){
                    console.log(error);
                })
            })
            .catch(function(error){
                console.log(error);
            })
        // } else {
        //     return res.render('not-found', {
        //         user
        //     });
        // }
    },
// MODIFICAR ESTO 
    update: function (req, res) {
        // const user = req.session.user;
        // if (typeof user !== 'undefined' && user.rol === 1) {
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
        // } else {
        //     return res.render('not-found', {
        //         user
        //     });
        // }

      res.redirect("/");
   }
   

}
module.exports = editarPeliculasController;
