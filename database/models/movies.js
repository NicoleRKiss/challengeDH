'use strict';
module.exports = (sequelize, dataTypes) => {
  
  let alias = "Movie";
  let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: dataTypes.STRING,
      },
      rating: {
        type: dataTypes.DECIMAL,
      },
      awards: {
        type: dataTypes.INTEGER,
      },
      releaseDate: {
        type: dataTypes.DATE,
      },
      length: {
        type: dataTypes.INTEGER,
      },
      genre_id: {
        type: dataTypes.INTEGER,
      }
  }

  const config = {
    define : {
        timestamps: true,
        paranoid: true,
    }
  }

  const Movie = sequelize.define(alias, cols, config);
  Movie.associate = function(models) {
      // associations can be defined here
        Movie.belongsTo(models.Genre, {
            as: 'generos',
            foreignKey: 'genre_id'
        });
        Movie.belongsToMany(models.Actor, {
            as: 'actores',
            through: "actor_movie",
            foreignKey: 'movie_id',
            otherKey: "actor_id",
            timestamps: false
        })
    };

  return Movie;


  }