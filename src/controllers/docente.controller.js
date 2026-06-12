const docenteService = require('../services/docente.service');
const {successResponse,errorResponse} = require('../utils/response');
const crear = async(req,res)=>{
    try{
        const data = await docenteService.crearDocente(req.body);
        return successResponse(res,data,'Institución creada.',201);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const listar = async(req,res)=>{
    try{
        const data = await docenteService.listarDocentes();
        return successResponse(res,data);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const buscar = async(req,res)=>{
    try{
        const id = await docenteService.buscarDocente(req.params.id);
        return successResponse(res,id);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const actualizar = async(req,res)=>{
    try{
        const docente = await docenteService.actualizarDocente(req.params.id,req.body);
        return successResponse(res,docente);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
module.exports = {
    crear,
    listar,
    buscar,
    actualizar
};