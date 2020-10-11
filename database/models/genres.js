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

  const config = {}

  const genre = sequelize.define(alias, cols, config);

  genre.associate = function(models) {
    // associations can be defined here
      genre.hasMany(models.Movie, {
          as: 'movies',
          foreignKey: 'genre_id'
      })
  }

  return genre;

}