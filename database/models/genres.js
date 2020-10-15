module.exports = (sequelize, dataTypes) => {

  let alias = "Genre";
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: dataTypes.STRING,
      },

      ranking: {
          type: dataTypes.INTEGER,
      }

  }

  const config = {
    tableName: 'genres',
    define : {
        timestamps: true,
        paranoid: true,
    }
  }

  const Genre = sequelize.define(alias, cols, config);
  Genre.associate = function(models) {
    // associations can be defined here
      Genre.hasMany(models.Movie, {
          as: 'Movie',
          foreignKey: 'genre_id'
      })
  }
  return Genre;

}