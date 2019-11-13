"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var crypto = require('crypto');
exports.usuario_model = function (sequelize) {
    var usuario = sequelize.define('t_usuario', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        usu_ape: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT,
        }
    }, {
        tabla_name: 't_usuario',
        timestamps: false
    });
    usuario.prototype.setSaltYHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    return usuario;
};
