const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { user, task, category, status } = require('../database/models');


const controller = {
    login: (req,res) => {
        console.log(req.body);
        res.send("Login");
    },
    register: (req,res) => {

        let errors = validationResult(req);
        let errorsMapped = {};
        let newUser = req.body;
        if(!errors.isEmpty()){
            errorsMapped = errors.mapped();
        }

        if((!!req.body.password || !!req.body.repeatedPassword) && (!!errorsMapped.password && !!errorsMapped.repeatedPassword)){
            if(req.body.password !== req.body.repeatedPassword){
                errorsMapped.password = {
                    msg: 'Las contraseñas no coinciden'
                }
            }
        } 

        if(Object.keys(errorsMapped) < 1){
            // Hasheo Password
            newUser.password = bcrypt.hashSync(req.body.password, 10);
            // Borro password repetida
            delete newUser.repeatedPassword;
            // Creo el user y lo guardo
            user.create(newUser)
                .then(result => {
                    console.log(result);
                    result.save();
                })
            // Borro password
            delete newUser.password;
            // Se lo paso a session para que quede loggeado.
            req.session.userLoggedIn = newUser;
        }

/*         let response = {
            noMatch: errorsMapped.password,
            loggedInEmail: req.session.userLoggedIn.email
        }
        let responseJSON = JSON.stringify(response);
        console.log(responseJSON); */
        res.send("Register");
    }

}

module.exports = controller;