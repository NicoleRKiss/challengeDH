module.exports = (sequelize, dataTypes) => {

    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },

        precio: {
            type: dataTypes.INTEGER,
        }
    }

    const config = {
        define : {
            timestamps: true,
            paranoid: true,
        }
      }

    const producto = sequelize.define(alias, cols, config);

    return producto

}
