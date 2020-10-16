module.exports = (sequelize, dataTypes) => {

    let alias = "User";
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
        deletedAt: {
            type: dataTypes.STRING,
        },

        rol: {
            type: dataTypes.INTEGER,
        }
        

    }

    const config = {
        define : {
            timestamps: true,
            paranoid: true,
        }
      }

    const user = sequelize.define(alias, cols, config);

    return user

}