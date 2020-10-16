const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

module.exports = {
  register: [
    // Email
    body("email")
      .notEmpty()
      .withMessage("El campo email es obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value) => {
        return db.User.findOne({ where: { email: value } }).then(
          user => {
            return user ? Promise.reject("Email ya utilizado") : Promise.resolve();
          }
        )
      })
      .withMessage("Email ya utilizado"),
    // Password
    body("password")
      .notEmpty()
      .withMessage("El campo contraseña es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener al menos 3 carácteres"),
    // Retype password
    body("retype")
      .notEmpty()
      .withMessage("El campo reescribir contraseña es obligatorio")
      .bail()
      .custom((value, { req }) => req.body.password === value)
      .withMessage("Las contraseñas no coinciden"),
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("El campo  email es obligatorio")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({ where: { email: value } }).then(
          user => {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                return Promise.resolve();
              }
            }
            return Promise.reject("Email o contraseña invalidos");
          }
        )
      })
      .withMessage("Email o contraseña inválidos"),
    body("password").notEmpty().withMessage("Campo obligatorio")
  ],
  addToCart: [
    body("quantity")
      .custom((value) => value > 0)
      .withMessage("Debe agregar al menos 1 producto al carrito"),
  ],
  password: [

    body("currentPassword")
      .notEmpty()
      .withMessage("Ingrese su contraseña actual para cambiarla")
      .bail()
      .custom((value, { req }) => {
        return db.User.findByPk(req.session.user.id)
          .then(function (user) {
            if (!bcrypt.compareSync(req.body.currentPassword, user.password)) {
              return Promise.reject('Contraseña invalida')
            }
          })
      }),

    body("newPassword") 
      .notEmpty()
      .withMessage('Ingrese su nueva contraseña')
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener como mínimo 3 caracteres"),

    body("retype")
      .notEmpty()
      .withMessage("El campo reescribir contraseña es obligatorio")
      .bail()
      .custom((value, { req }) => req.body.newPassword === value)
      .withMessage("Las contraseñas no coinciden")
      

  ],

  profile: [

    body("username")
      .notEmpty()
      .withMessage("*Este Campo es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("*El usuario debe tener como mínimo 3 caracteres")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({
          where: {
            username: value
          }
        })
          .then(function (user) {
            if (user) {

              if (user.username != req.session.user.username) {

                return Promise.reject('Usuario existente');
              }
            }
          })
      }),
    body("email")
      .notEmpty()
      .withMessage("*Este campo es obligatorio")
      .bail()
      .isEmail()
      .withMessage("*El campo debe ser un email"),
    body("password")
      .notEmpty()
      .withMessage("Ingrese su contraseña")
      .bail()
      .custom((value, { req }) => {
        return db.User.findByPk(req.session.user.id)
          .then(function (user) {
            if (!bcrypt.compareSync(req.body.password, user.password)) {
              return Promise.reject('Contraseña invalida')
            }
          })
      })
  ]
};

