"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.tipoaula_model = function (sequelize) {
    var tipoAula = sequelize.define('t_TipoAula', {
        taula_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        taula_descripcion: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tabla_name: 't_TipoAula',
        timestamps: false
    });
    return tipoAula;
};
