module.exports = (sequelize, dataTypes) => {

    let alias = "Productos";
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

    const productos = sequelize.define(alias, cols);

    return productos

}
