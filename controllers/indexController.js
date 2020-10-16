let db = require('../database/models');
const sequelize = db.sequelize;


const indexController = {

    index: function (req, res) {
        const user = req.session.user;
        db.Movie.findAll()
            .then(function(movie) {
                //console.log(movies)
                //let movies = resultados[0];
                return res.render("index", { movie: movie, user });
            })
            .catch(function(error){
                console.log(error);
            })
    }
}


module.exports = indexController;