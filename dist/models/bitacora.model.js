"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bitacora = void 0;
const mongoose_1 = require("mongoose");
const bitacoraSchema = new mongoose_1.Schema({
    responsable: {
        type: String,
        required: [true, 'Obligatorio']
    },
    ubicacion: {
        type: String,
        required: [true, 'Obligatorio']
    },
    numbitacora: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    apiario: {
        type: String,
        required: [true, 'Obligatorio']
    },
    fecha: {
        type: String,
        required: [true, 'Obligatorio']
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Bitacora = (0, mongoose_1.model)('Bitacora', bitacoraSchema);
