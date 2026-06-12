const Docente = require('../models/docente.model.js');
const crear = async (data) => {
  return await Docente.create(data);

};

const listar = async () => {
  return await Docente.findAll();

};

const buscarPorId = async (id) => {
  return await Docente.findByPk(id);

};

const actualizar = async (id, data) => {
  return await Docente.update(data, { where: { id } });
};

module.exports = {
  crear,
  listar,
  buscarPorId,
  actualizar
};
