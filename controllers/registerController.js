const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// ACTIVAR SQL// const {user} = require("../database/models");

module.exports = {
  register: function (req, res) { //llega a registro
    return res.render("register");
  },
  processRegister: function (req, res) {  
    const errors = validationResult(req); //constante que tiene la funcion validationResult de express-validator y toma como parametro el req
    if (errors.isEmpty()) {  //
      delete req.body.retype;  //borra la repeticion de contraseña
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      db.User.create({
          email: req.body.email,
          password: req.body.password,
          deletedAt: '2020-10-09 18:18:06',
          rol: 0
      }).then(() => {
        return res.redirect('/');
      })
    } else {
      console.log("Error: " + JSON.stringify(errors.mapped()));
      const user = req.session.user;
      return res.render("register", { errors: errors.mapped(), old: req.body, user});
    }
  },
  login: function (req, res) {
    return res.render("login");
  },
  processLogin: function (req, res) {
    const errors = validationResult(req);

    if(errors.isEmpty()){
      // LOGUEO AL USUARIO ETC
      return db.User.findOne({ where: { email: req.body.email } }).then(
        user => { 
          delete user.password;

          req.session.user = user; // YA ESTÁ EN SESION
    
          if (req.body.remember) { //si toco el campo remember que se encuentra en body 
            // Creo la cookie
    
            res.cookie('email', user.email, { 
              maxAge: 1000 * 60 * 60 * 24 
            }); // guardo solamente el email, donde tenga el email y el tiempo que quedara guardado
    
          }
          return Promise.resolve(user); 
        }).then(() => {return res.redirect('/');})

      

    } else {
        
      // return res.send(errors);

      return res.render("login", { errors: errors.mapped(), old: req.body});
    }



  },
  logout: function(req, res) {
    req.session.destroy();

    if(req.cookies.Email){
      res.clearCookie('Email');
    }

    return res.redirect('/');

}
 

};
