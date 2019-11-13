"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var aula_1 = require("../controladores/aula");
exports.aulas_router = express_1.Router();
exports.aulas_router.post('/aula', aula_1.postAula);
