"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("./../configuracion/sequelize");
var express_1 = __importDefault(require("express"));
var pabellon_1 = require("../rutas/pabellon");
var body_parser_1 = __importDefault(require("body-parser"));
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = __importStar(require("./../apidocs/swagger.json"));
var Aulas_1 = require("../rutas/Aulas");
var Usuario_1 = require("../rutas/Usuario");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        // obtener el puerto que nos asignará heroku
        // o establer por defecto el puerto 3000
        this.puerto = process.env.PORT || 3000;
        this.configurarBodyParser();
        this.configurarRutas();
    }
    Server.prototype.configurarBodyParser = function () {
        this.app.use(body_parser_1.default.json());
    };
    Server.prototype.configurarRutas = function () {
        // configurando una ruta por defecto o de prueba
        this.app.get('/', function (req, res) {
            res.status(200).send("BIENVENIDO AL SERVIDOR");
        });
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/api', pabellon_1.pabellon_router);
        this.app.use('/api', Aulas_1.aulas_router);
        this.app.use('/api', Usuario_1.usuario_router);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.puerto, function () {
            console.log("Servidor OK en el puerto " + _this.puerto);
            // force:true, elimina todas las tablas y las crea nuevamente
            // force:false, si las tablas no existen en la base de datos
            // las crea. Si las tablas ya existían en la base de datos
            // sólo crea las nuevas tablas en caso de que hubieran
            sequelize_1.conexion.sync({ force: false }).then(function () {
                console.log("Base de datos creada correctamente");
            });
        });
    };
    return Server;
}());
exports.Server = Server;
