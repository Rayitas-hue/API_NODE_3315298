const Usuario = require('../models/usuario.model');
const {encriptarPassowrd} = require('../utils/bcrypt');

const crearUsuario = async (data) =>{
    const existeCorreo = await Usuario.frindOne({where: {correo: data.correo}});
    if(existeCorreo){
        throw new Error('Este correo ya esta asignado a un usuario.');
    }
    data.password = await encriptarPassowrd(data.password);
    return await Usuario.create(data);
};

const listarUsuarios = async () =>{
    return await Usuario.findAll({
        attributes:{exclude: ['password']}
    });
};

module.exports = {
    crearUsuario,
    listarUsuarios
};