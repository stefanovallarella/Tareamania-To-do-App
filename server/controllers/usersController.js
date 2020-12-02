const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { user, task, category, status } = require('../database/models');


const controller = {
    login: (req,res) => {
        let errors = validationResult(req);
        let email = req.body.email;
        let password = req.body.password;
        let remember = req.body.remember;
        console.log(req.body);

        if(errors.isEmpty()){
            
            user.findOne({ 
                attributes: ['id', 'first_name', 'last_name', 'email', 'password'], 
                where: {email},
                include: [task]})
            .then(user => {
                
                console.log(user.email);
               /*  console.log(user.tasks[0]);  */
               /* console.log(user.tasks[0].name); */ 
               /* console.log(user.tasks[0].description);  */

                if (user && bcrypt.compareSync(password, user.password)){
                    let userToLogin = user;
                    if(remember !== undefined && remember !== false){
                        res.cookie('remember', userToLogin.email, {maxAge: 120000000});
                    }
                    req.session.userLoggedIn = userToLogin; 
                    let login = {
                        successLogin: true
                    }
                    return res.send(JSON.stringify(login));                   
                }else{
                    errorLogin = {
                        loginError:'Email o password incorrectas'
                    }
                return res.send(JSON.stringify(errorLogin));

                }
            })
            .catch(error => console.log(error));
        }else{
            let errorsMapped = errors.mapped();
            return res.send(JSON.stringify(errorsMapped));
        }
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

        let respo = {validEmail: true};

        return res.send(JSON.stringify(respo))
    }

}

module.exports = controller;