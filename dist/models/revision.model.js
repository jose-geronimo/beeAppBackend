"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revision = void 0;
const mongoose_1 = require("mongoose");
const revisionSchema = new mongoose_1.Schema({
    fecha: {
        type: String,
        required: [true, 'Obligatorio']
    },
    fechaSigRevision: {
        type: String,
        required: [true, 'Obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'Obligatorio']
    },
    lugar: {
        type: String,
        required: [true, 'Obligatorio']
    },
    completado: {
        type: Boolean,
        required: [true, 'Obligatorio']
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    },
});
exports.Revision = (0, mongoose_1.model)('Revision', revisionSchema);
