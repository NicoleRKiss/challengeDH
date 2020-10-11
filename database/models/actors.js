'use strict';
module.exports = (sequelize, dataTypes) => {
  let alias = 'Actor';

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: dataTypes.STRING,
    last_name: dataTypes.STRING,
    rating: dataTypes.DECIMAL,
    favorite_movie_id: dataTypes.INTEGER
  }

  let config = {}

  const actor = sequelize.define(alias, cols, config);
  
  actor.associate = function(models) {
    // associations can be defined here
  };

  return actor;
};