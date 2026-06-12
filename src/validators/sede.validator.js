const { body } = require('express-validator');
const crearSedeValidator = [
    body('nombre').notEmpty().withMessage('Nombre requerido.'),
    body('nit').notEmpty().withMessage('Nit requerido.'),
    body('correo').isEmail().withMessage('Email invalido.'),
    body('direccion').notEmpty().withMessage('Dirección requerida.'),
    body('telefono').isLength({min:10}).withMessage('Telefono requerido.')
];
module.exports = {
    crearSedeValidator
};