"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const actividades_1 = __importDefault(require("./routes/actividades"));
const bitacora_1 = __importDefault(require("./routes/bitacora"));
const colmena_1 = __importDefault(require("./routes/colmena"));
const cosecha_1 = __importDefault(require("./routes/cosecha"));
const gastos_1 = __importDefault(require("./routes/gastos"));
const observacion_1 = __importDefault(require("./routes/observacion"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
//BODY PARSER
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//RUTAS DE LA APLICACIÓN
server.app.use('/user', usuario_1.default);
server.app.use('/activities', actividades_1.default);
server.app.use('/binnacle', bitacora_1.default);
server.app.use('/hive', colmena_1.default);
server.app.use('/yield', cosecha_1.default);
server.app.use('/outgoings', gastos_1.default);
server.app.use('/observation', observacion_1.default);
//CONECTAR A BD
const uri = "mongodb+srv://SANDY:hU9JqTTMHwTZ6kKT@beeappbackendbd.alzsj.mongodb.net/beeAppBackendBD?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log("Base de datos conectada");
});
//LEVANTAR EXPRESS
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
