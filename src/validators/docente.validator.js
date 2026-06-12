const { body } = require('express-validator');
const crearDocenteValidator = [
    body('especialidad').notEmpty().withMessage('Especialidad requerida.'),
    body('profesion').notEmpty().withMessage('Profesión requerida.')
];
module.exports = {
    crearDocenteValidator
};