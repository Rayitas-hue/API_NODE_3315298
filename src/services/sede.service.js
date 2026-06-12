const sedeRepository = require('../repositories/sede.repository');
const crearSede = async(data) =>{
    return await sedeRepository.crear(data);
};
const listarSedes = async() =>{
    return await sedeRepository.listar();
};
const buscarSede = async(id) =>{
    return await sedeRepository.buscarPorId(id);
};
const actualizarSede = async(id,data) =>{
    return await sedeRepository.actualizar(id,data);
};
module.exports = {
    crearSede,
    listarSedes,
    buscarSede,
    actualizarSede
};