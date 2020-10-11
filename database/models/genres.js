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
    tableName: 'genres'
}

  const Genres = sequelize.define(alias, cols, config);
  Genres.associate = function(models) {
    // associations can be defined here
      Genres.hasMany(models.Movies, {
          as: 'Movies',
          foreignKey: 'genre_id'
      })
  }
  return Genres;

}