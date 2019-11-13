"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.reserva_model = function (sequelize) {
    var reserva = sequelize.define('t_reserva', {
        res_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        res_fechIn: {
            type: sequelize_1.DataTypes.DATE,
        },
        res_fechFin: {
            type: sequelize_1.DataTypes.DATE,
        },
        res_est: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        res_observacion: {
            type: sequelize_1.DataTypes.TEXT,
        }
    }, {
        tabla_name: 't_reserva',
        timestamps: false
    });
    return reserva;
};
