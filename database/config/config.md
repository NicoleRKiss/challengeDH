//Eliminar el comentario de esta línea. Renombrar el archivo como config.js y cambiar las configuraciones de conexión según los datos de tu máquina.

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "challengeDB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
