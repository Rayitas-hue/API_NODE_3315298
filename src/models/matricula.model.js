const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Docente = require('./docente.model');
const Curso = require('./curso.model');
const Estudiante = require('./estudiante.model');
const Matricula = sequelize.define('Matricula',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    tablename: 'Matriculas',
    timestamps: true
});

Curso.belongsToMany(Estudiante,{through:Matricula,foreignKey:'curso_id'});
Estudiante.belongsToMany(Curso,{through:Matricula,foreignKey:'estduiante_id'});

module.exports = Matricula;