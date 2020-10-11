'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movie', {
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    awards: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    length: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};