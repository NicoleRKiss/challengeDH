module.exports = (sequelize, dataTypes) => {

    let alias = "Serie";
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

    const config = {
        define : {
            timestamps: true,
            paranoid: true,
        }
      }

    const serie = sequelize.define(alias, cols, config);

    return serie

}