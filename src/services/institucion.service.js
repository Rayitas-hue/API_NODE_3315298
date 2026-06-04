const institucionRepository = require('../repositories/institucion.repository');
const crearInstitucion = async(data) =>{
    return await institucionRepository.crear(data);
};
const listarInstituciones = async() =>{
    return await institucionRepository.listar();
};
const buscarInstitucion = async(id) =>{
    return await institucionRepository.buscarPorId(id);
};
const actualizarInstitucion = async(id,data) =>{
    return await institucionRepository.actualizar(id,data);
};
module.exports = {
    crearInstitucion,
    listarInstituciones,
    buscarInstitucion,
    actualizarInstitucion
};