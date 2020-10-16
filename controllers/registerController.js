const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


module.exports = {
  register: function (req, res) { 
    return res.render("register");
  },
  processRegister: function (req, res) {  
    const errors = validationResult(req); 
    if (errors.isEmpty()) {  //
      delete req.body.retype;  
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

      return db.User.findOne({ where: { email: req.body.email } }).then(
        user => { 
          delete user.password;

          req.session.user = user; 
    
          if (req.body.remember) { 
    
            res.cookie('email', user.email, { 
              maxAge: 1000 * 60 * 60 * 24 
            }); 
    
          }
          return Promise.resolve(user); 
        }).then(() => {return res.redirect('/');})

      

    } else {
        
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
