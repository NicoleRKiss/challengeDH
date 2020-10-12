const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Middlewares propios

//const json = require('../models');
//const User = json('users');
const db = require('../database/models');
const { nextTick } = require('process');
// const {User}= require('../database/models');
module.exports = {
  register: [
    body('email')
      .isEmail()
      .withMessage('Debes ingresar un email válido')
      .bail()
      .custom((value, { req }) => {
        return db.Users.findOne({
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
      .withMessage('La contraseña debe tener 8 caracteres')
    ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => {
       return db.Users.findOne({
         where:{email: value}
       })
       .then(function(user){
         if(user){
          if(bcrypt.compareSync(req.body.password,user.password)==false){
            return Promise.reject('email o password invalidos');
          }
         }else{
          return Promise.reject('email o password invalidos');
         }
       })
      })
      
  ],
};


