const { body } = require('express-validator');
const crearUsuarioValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre requerido'),
    body('apellido')
    .notEmpty()
    .withMessage('Apellido requerido'),    
    body('correo')
    .isEmail()
    .withMessage('Correo invalido'),    
    body('password')
    .isLength({min: 8})
    .withMessage('Password mínimo 8 caracteres')    
];
module.exports = { crearUsuarioValidator };