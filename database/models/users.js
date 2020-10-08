module.exports = (sequelize, dataTypes) => {

    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: dataTypes.STRING,
        },

        password: {
            type: dataTypes.STRING,
        },

        rol: {
            type: dataTypes.INTEGER,
            
        }  

    }

    const users = sequelize.define(alias, cols);

    return users

}