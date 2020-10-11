module.exports = (sequelize, dataTypes) => {

    let alias = "Episode";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING,
        },

        number: {
            type: dataTypes.STRING,
        },

        releaseDate: {
            type: dataTypes.INTEGER,
            
        },
        rating: {
            type: dataTypes.INTEGER,
            
        },
        season_id: {
            type: dataTypes.INTEGER,
        }    

    }
    let config = {}

    const episode = sequelize.define(alias, cols, config);

    return episode;

}
