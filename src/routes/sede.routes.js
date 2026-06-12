const  express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sede.controller');
const { validarJWT } = require('../middlewares/auth.middlewares');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middlewares');
const { crearSedeValidator } = require('../validators/sede.validator');

router.post('/', [
        validarJWT, 
        esAdminRole, 
        crearSedeValidator, 
        validarCampos],sedeController.crear
);

router.get('/', [validarJWT, esAdminRole], sedeController.listar);

router.get('/:id',[
    validarJWT,
    esAdminRole
],sedeController.buscar);

router.put('/:id',[
    validarJWT,
    esAdminRole
],sedeController.actualizar);
module.exports = router;