const  express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const { validarJWT } = require('../middlewares/auth.middlewares');
const { esAdminRole } = require('../middlewares/role.middleware');
const { validarCampos } = require('../middlewares/validate.middlewares');
const { crearUsuarioValidator } = require('../validators/usuario.validator');

router.post('/', [
        validarJWT, 
        esAdminRole, 
        crearUsuarioValidator, 
        validarCampos
    ], 
    usuarioController.crear
);
router.get('/', [validarJWT, esAdminRole], usuarioController.listar);
router.delete('/:id',[
    validarJWT,
    esAdminRole
],usuarioController.eliminar);
router.put('/:id',[
    validarJWT,
    esAdminRole
],usuarioController.actualizar);
module.exports = router;