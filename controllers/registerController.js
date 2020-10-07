const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const { validationResult }= require('express-validator');
const bcryptjs = require ('bcryptjs');
const { check } = require('express-validator');

let db = require('../database/models');
const sequelize = db.sequelize;

const registerController ={
    index: function(req,res){
        return res.render('register');

    },
    create : function(req, res){
        let errors = validationResult(req);
           
// chequear si esto esta okey

           if(errors.isEmpty()){
           delete req.body.retypePassword;
           req.body.password = bcryptjs.hashSync(req.body.password, 10);
           db.Users.create( {
            email: req.body.email,
            password: req.body.password,
            rol:req.body.rol,
           })

        //    let users = fs.readFileSync(path.join(__dirname,'..', 'data', 'users.json'), 'utf-8');
        //     users= JSON.parse(users);
        //    users= [...users, user];
        //    users= JSON.stringify(users, null, ' ');

        //    fs.writeFileSync(path.join(__dirname,'..', 'data', 'users.json'), users);
           
           return res.redirect('/');

        } else {
            return res.render('register', { errors : errors.mapped() });
        }
}
}

module.exports = registerController;