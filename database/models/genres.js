'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    name: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
  }, {});
  Genres.associate = function(models) {
    // associations can be defined here
  };
  return Genres;
};