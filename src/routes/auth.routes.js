const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {registerValidator} = require('../validators/auth.validator');
const {validarCampos} = require('../middlewares/validate.middlewares');

router.post(
    '/registro',
    registerValidator,
    validarCampos,
    authController.registro
);
router.post(
    '/login',
    authController.login
);
module.exports = router;