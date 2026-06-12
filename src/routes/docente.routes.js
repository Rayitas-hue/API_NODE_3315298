const  express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docente.controller');
const { validarJWT } = require('../middlewares/auth.middlewares');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middlewares');
const { crearDocenteValidator } = require('../validators/docente.validator');

router.post('/', [
        validarJWT, 
        esAdminRole, 
        crearDocenteValidator, 
        validarCampos],docenteController.crear
);

router.get('/', [validarJWT, esAdminRole], docenteController.listar);

router.get('/:id',[
    validarJWT,
    esAdminRole
],docenteController.buscar);

router.put('/:id',[
    validarJWT,
    esAdminRole
],docenteController.actualizar);
module.exports = router;