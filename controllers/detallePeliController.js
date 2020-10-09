let db= require('../database/models');
const sequelize = db.sequelize;

const detallePeliController = {

    
    detail: function(req,res){
       
        db.Genres.findAll()
                .then((Genres) => {
                    db.Movies.findByPk(req.params.id)
                    .then(function(Movies){
                    // db.Actors.findAll()
                    //     .then((Actors) => {
            
                            return res.render('detallePeli', {
                                Movies: Movies,
                                Genres,
                                // Actors
                            });
                        // })
                        // .catch(e => console.log(e));
                })
                .catch(e => console.log(e));

        })
        
        
    },
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    },

}

module.exports = detallePeliController;