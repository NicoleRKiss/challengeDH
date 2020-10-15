module.exports = (sequelize, dataTypes) => {

    let alias = "Season";
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
        serie_id: {
            type: dataTypes.INTEGER,
        }    

    }

    const config = {
        define : {
            timestamps: true,
            paranoid: true,
        }
      }

    const season = sequelize.define(alias, cols, config);

    return season

}
