'use strict';
module.exports = (sequelize, dataTypes) => {

  let alias = "Movie";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: dataTypes.STRING,
    rating: dataTypes.DECIMAL,
    awards: dataTypes.INTEGER,
    releaseDate: dataTypes.DATE,
    length: dataTypes.INTEGER,
    genre_id: dataTypes.INTEGER
  }

  let config = {};

  const movie = sequelize.define(alias, cols, config);
  
  movie.associate = function(models) {
    movie.belongsTo(models.Genre, {
      as: 'genre',
      foreignKey: 'genre_id'
    })
    
  };
  return movie;
};