const docenteRepository = require('../repositories/docente.repository');
const crearDocente = async(data) =>{
    return await docenteRepository.crear(data);
};
const listarDocentes = async() =>{
    return await docenteRepository.listar();
};
const buscarDocente = async(id) =>{
    return await docenteRepository.buscarPorId(id);
};
const actualizarDocente = async(id,data) =>{
    return await docenteRepository.actualizar(id,data);
};
module.exports = {
    crearDocente,
    listarDocentes,
    buscarDocente,
    actualizarDocente
};