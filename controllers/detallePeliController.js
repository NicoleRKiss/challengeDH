let db= require('../database/models');
const sequelize = db.sequelize;

const detallePeliController = {

    
    detail: function(req,res){
        const user = req.session.user;
        db.Movie.findByPk(req.params.id, {
            include: [
            {association: "generos"},
            {association: "actores"}
            ]})
            .then((Movie) => {
                return res.render('detallePeli',{
                            Movie, user
                        });
           
    
}) .catch(e => console.log(e));
        // db.Movie.findByPk(req.params.id)
        //     .then (Movie => {
        //         db.Genre.findAll({
        //           include: [{association:'generos'}]
        //         }).then((Genre)=> {
        //             return res.render('detallePeli',{
        //                 Movie,
        //                 Genre
        //             });

        //         }).catch(e => console.log(e));
                
        //     }).catch(e => console.log(e));

        // db.Movie.findByPk(req.params.id, {include:[db.Genre]})
        //         .then(function(Movie){
             
        //                     return res.render('detallePeli', {
        //                         Movie: Movie,
        //                         Genre: Genre,
                              
        //                     });
                    
        //         })
        //         .catch(e => console.log(e));
        
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