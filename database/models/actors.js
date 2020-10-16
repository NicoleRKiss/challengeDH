'use strict';
module.exports = (sequelize, dataTypes) => {

  let alias = "Actor";
  let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: dataTypes.STRING,
      },
      lastName: {
        type: dataTypes.STRING,
      },
      rating: {
        type: dataTypes.DECIMAL,
      },
    
      favorite_movie_id: {
        type: dataTypes.INTEGER
      }
  }

  const config = {
    define : {
        timestamps: true,
        paranoid: true,
    }
  }
  
  const Actor = sequelize.define(alias, cols, config);
    Actor.associate = function(models) {
     Actor.belongsToMany(models.Movie, {
        as: 'peliculas',
        through: "actor_movie",
        foreignKey: 'actor_id',
        otherKey: "movie_id",
        timestamps: false
     })
    };
    return Actor;
}
