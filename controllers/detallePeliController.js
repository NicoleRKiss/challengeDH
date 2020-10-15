let db= require('../database/models');
const sequelize = db.sequelize;

const detallePeliController = {

    
    detail: function(req,res){

        db.Movie.findByPk(req.params.id, {include:[db.Genres]})
                .then(function(Movies){
                    // db.Actors.findAll()
                    //     .then((Actors) => {
                            //return res.send (Movies)
                            return res.render('detallePeli', {
                                Movie: Movie,
                                Genre: Genre,
                                // Actors: Actors
                            });
                        // })
                        // .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
        
    },
    delete: (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    },

}

module.exports = detallePeliController;