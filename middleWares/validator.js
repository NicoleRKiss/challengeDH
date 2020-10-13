const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs')

module.exports = {
  register: [
    body('email')
      .isEmail()
      .withMessage('Debes ingresar un email válido')
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({
          where:{email: req.body.email}
        })
        .then(function(user){
          if(user){
            return Promise.reject('usuario ya existente');
          }
        })
       }),
    body('password')
      .notEmpty()
      .withMessage('La contraseña es obligatoria')
    ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("email y password son obligatorio")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({
          where: { email: value }
        })
          .then(function (user) {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password) == false) {
                return Promise.reject('email o password invalidos');
              }
            } else {
              return Promise.reject('email o password invalidos');
            }
          })
      })
    
  ],
};


