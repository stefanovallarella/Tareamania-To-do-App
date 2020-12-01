const { check } = require('express-validator');


module.exports = {
    login: [
        check('email')
            .notEmpty().withMessage('Debe ingresar con su email').bail()
            .isEmail().withMessage('Debe ingresar un email válido'),
        check('password')
            .notEmpty().withMessage('Debes ingresar con su contraseña').bail()
            .isLength({ min:6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ],
    register: [
        check('first_name')
            .notEmpty().withMessage('Debe ingresar un nombre').bail()
            .isLength({ min:3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
        check('last_name')
            .notEmpty().withMessage('Debe ingresar su apellido').bail()
            .isLength({ min:3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
        check('email')
            .notEmpty().withMessage('Debe ingresar un email').bail()
            .isEmail().withMessage('Debe ingresar un email válido'),
        check('password')
            .notEmpty({ignore_whitespace:true }).withMessage('La contraseña no puede estar vacía').bail()
            .isLength({ min:6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
        check('repeatedPassword')
            .notEmpty({ignore_whitespace:true }).withMessage('La contraseña no puede estar vacía').bail()
            .isLength({ min:6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ]
}