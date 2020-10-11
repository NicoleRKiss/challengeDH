'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actors = sequelize.define('Actor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    favorite_movie_id: DataTypes.INTEGER
  }, {});
  Actors.associate = function(models) {
    // associations can be defined here
  };
  return Actors;
};