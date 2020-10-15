//const json = require("../models");
//const User = json("users");

const db = require('../database/models');

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const loginController ={
    index: function(req,res){
        return res.render('login');
    },
    login: function (req,res){
        return res.render('login');
    },
    processLogin: function (req, res) {
    
        const errors = validationResult(req);
    
        if(errors.isEmpty()){
         
          db.Users.findOne({
            where:{email: req.body.Email}
          })
          .then(function(user){
            req.session.user = user;
          
    
          if (req.body.remember) {
            res.cookie('email', user.Email, { maxAge: 1000 * 60 * 60 * 24 });
          }
    
          return res.redirect('/');
          })
          
          .catch(function(error){
            console.log(error);
          })

          
        } else {
         
          return res.render("login", { errors: errors.mapped()});
        }
    
    },
    logout: function(req, res) {
        req.session.paranoid();
    
        if(req.cookies.Email){
          res.clearCookie('Email');
        }
    
        return res.redirect('/');
    
    }

}
module.exports = loginController;