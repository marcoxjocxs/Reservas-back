"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../configuracion/sequelize");
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
exports.crearUsuario = function (req, res) {
    var objUsuario = sequelize_1.Usuario.build(req.body.usuario);
    objUsuario.setSaltYHash(req.body.usuario.usu_pass);
    objUsuario.save().then(function (usuarioCreado) {
        sequelize_1.Usuario.gindNyPk(usuarioCreado.usu_id).then(function (usuarioEncontrado) {
            res.status(201).json({
                message: 'Usuario creado',
                content: sequelize_1.Usuario
            });
        });
    }).catch(function (error) {
        res.status(501).json({
            message: 'Error',
            content: error
        });
    });
};
exports.encontrarUsuarioVyNomOApe = function (req, res) { };
exports.iniciarSesion = function (req, res) { };
