"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
//BODY PARSER
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//RUTAS DE LA APLICACIÓN
server.app.use('/user', usuario_1.default);
//CONECTAR A BD
const uri = "mongodb+srv://Jondalar:e9mKFiwdcmSD8262@torostkw.iaq0g.mongodb.net/TorosTKW?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        throw err;
    console.log("Base de datos conectada");
});
//LEVANTAR EXPRESS
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
