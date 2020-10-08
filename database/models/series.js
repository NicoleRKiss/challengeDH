module.exports = (sequelize, dataTypes) => {

    let alias = "Series";
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
            type: dataTypes.INTEGER,
        },

        releaseDate: {
            type: dataTypes.DATE,
            
        },
        endDate: {
            type: dataTypes.DATE,
            
        },
        genre_id: {
            type: dataTypes.INTEGER,
        }    

    }

    const series = sequelize.define(alias, cols);

    return series

}