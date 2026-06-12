const sedeService = require('../services/sede.service');
const {successResponse,errorResponse} = require('../utils/response');
const crear = async(req,res)=>{
    try{
        const data = await sedeService.crearSede(req.body);
        return successResponse(res,data,'Institución creada.',201);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const listar = async(req,res)=>{
    try{
        const data = await sedeService.listarSedes();
        return successResponse(res,data);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const buscar = async(req,res)=>{
    try{
        const id = await sedeService.buscarSede(req.params.id);
        return successResponse(res,id);
    }
    catch(error){
        return errorResponse(res,error.message);
    }
};
const actualizar = async(req,res)=>{
    try{
        const sede = await sedeService.actualizarSede(req.params.id,req.body);
        return successResponse(res,sede);
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