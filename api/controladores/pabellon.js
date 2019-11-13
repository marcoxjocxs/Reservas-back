"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("./../configuracion/sequelize");
var sequelize_2 = require("../configuracion/sequelize");
exports.GetPabellon = function (req, res) {
    sequelize_1.Pabellon.findAll().then(function (objpabellones) {
        res.status(200).json({
            message: 'ok',
            content: objpabellones
        });
    });
};
exports.PostPabellon = function (req, res) {
    if (!req.body.pab_nom) {
        res.status(400).json({
            ok: false,
            mensaje: "No se recibieron todos los campos en el request"
        });
        return;
    }
    var objPabellon = sequelize_1.Pabellon.build(req.body);
    objPabellon.save().then(function (objPabellonCreado) {
        res.status(201).json({
            ok: true,
            contenido: objPabellonCreado,
            mensaje: "Pabellon creado correctamente"
        });
    }).catch(function (error) {
        res.status(500).json({
            ok: false,
            mensaje: "Error interno en el servidor",
            contenido: error
        });
    });
};
exports.GetPabellonesById = function (req, res) {
    sequelize_1.Pabellon.findByPk(req.params.id).then(function (objPabellon) {
        if (objPabellon) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPabellon
            });
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el pabellon'
            });
        }
    });
};
exports.updatePabellon = function (req, res) {
    sequelize_1.Pabellon.update({
        pab_nom: req.body.pabellon.pab_nom
    }, {
        where: {
            pab_id: req.body.pabellon.pab_id
        }
    }).then(function (pabActualizada) {
        sequelize_1.Pabellon.findByPk(pabActualizada[0]).then(function (objpabellon) {
            res.status(200).json({
                message: 'ok',
                content: objpabellon
            });
        });
    }).catch(function (error) {
        res.status(501).json({
            message: 'error',
            content: error
        });
    });
};
exports.getAulasXPabellones = function (req, res) {
    sequelize_1.Pabellon.findAll({
        include: [{
                model: sequelize_2.Aula
            }]
    }).then(function (resultado) {
        res.status(200).json({
            message: 'ok',
            content: resultado
        });
    });
};
exports.getAulasByPabellonId = function (req, res) {
    sequelize_1.Pabellon.findAll({
        where: {
            pab_id: req.params.id
        },
        include: [{
                model: sequelize_2.Aula,
                include: [{
                        model: sequelize_2.TipoAula
                    }]
            }]
    }).then(function (resultado) {
        res.status(200).json({
            message: 'ok',
            content: resultado
        });
    });
};
