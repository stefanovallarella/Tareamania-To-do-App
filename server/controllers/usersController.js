
const { validationResult } = require('express-validator');


const controller = {
    login: (req,res) => {
        console.log(req.body);
        res.send("Login");
    },
    register: (req,res) => {

        let errors = validationResult(req);
        console.log(errors);

        console.log(req.body);
        res.send("Register");
    }

}

module.exports = controller;