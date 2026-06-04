const Usuario = require('../models/usuario.model');
const {encriptarPassword} = require('../utils/bcrypt');

const crearUsuario = async (data) =>{
    const existeCorreo = await Usuario.findOne({where: {correo: data.correo}});
    if(existeCorreo){
        throw new Error('Este correo ya esta asignado a un usuario.');
    }
    data.password = await encriptarPassword(data.password);
    return await Usuario.create(data);
};

const listarUsuarios = async () =>{
    return await Usuario.findAll({
        attributes:{exclude: ['password']}
    });
};

const desactivarUsuario = async(id) => {
    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        throw new Error('Usuario no encontrado');
    }
    usuario.estado=false;
    await usuario.save();
    return usuario;
};

const actualizarUsuario = async(id,data) => {
    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        throw new Error('Usuario no encontrado.');
    }
    await usuario.update(data);
    return usuario;
};

module.exports = {
    crearUsuario,
    listarUsuarios,
    desactivarUsuario,
    actualizarUsuario
};