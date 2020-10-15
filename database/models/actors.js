'use strict';
module.exports = (sequelize, dataTypes) => {

  let alias = "Actor";
  let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: dataTypes.STRING,
      },
      last_name: {
        type: dataTypes.STRING,
      },
      rating: {
        type: dataTypes.DECIMAL,
      },
      first_name: {
        type: dataTypes.STRING,
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
    // associations can be defined here
    };
    return Actor;
}
