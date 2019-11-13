"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aula_1 = require("./../modelos/aula");
var pabellon_1 = require("./../modelos/pabellon");
var tipoAula_1 = require("../modelos/tipoAula");
var reserva_1 = require("../modelos/reserva");
var usuario_1 = require("../modelos/usuario");
var Sequelize = require("sequelize");
exports.conexion = new Sequelize('XD6YOljUha', 'XD6YOljUha', 'lh9SnETRZ1', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-06:00',
    // configuración para lectura de fechas en la base de datos
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
//export const conexion2= new Sequelize('mysql://root:root@localhost:3306/aulas');
exports.Pabellon = pabellon_1.pabellon_model(exports.conexion);
exports.Aula = aula_1.aula_model(exports.conexion);
exports.TipoAula = tipoAula_1.tipoaula_model(exports.conexion);
exports.Usuario = usuario_1.usuario_model(exports.conexion);
exports.Reserva = reserva_1.reserva_model(exports.conexion);
exports.Pabellon.hasMany(exports.Aula, { foreignKey: "pab_id" });
exports.Aula.belongsTo(exports.Pabellon, { foreignKey: "pab_id" });
exports.Aula.hasMany(exports.Reserva, { foreignKey: 'aula_id' });
exports.Reserva.belongsTo(exports.Aula, { foreignKey: 'aula_id' });
exports.Usuario.hasMany(exports.Reserva, { foreignKey: 'usu_id' });
exports.Reserva.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.TipoAula.hasMany(exports.Aula, { foreignKey: 'taula_id' });
exports.Aula.belongsTo(exports.TipoAula, { foreignKey: 'taula_id' });
