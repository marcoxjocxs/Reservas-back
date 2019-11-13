"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("../configuracion/sequelize");
var getAulas = function (req, res) {
};
exports.postAula = function (req, res) {
    var objAula = sequelize_1.Aula.build(req.body.aula);
    objAula.save().then(function (aulaCreada) {
        res.status(201).json({
            message: 'ok',
            content: aulaCreada
        });
    }).catch(function (error) {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: error
        });
    });
};
