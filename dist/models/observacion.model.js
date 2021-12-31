"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observacion = void 0;
const mongoose_1 = require("mongoose");
const observacionSchema = new mongoose_1.Schema({
    poblacion: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    cria: {
        type: String,
        required: [true, 'Obligatorio']
    },
    limpieza: {
        type: String,
        required: [true, 'Obligatorio']
    },
    observaciones: {
        type: String,
        required: [true, 'Obligatorio']
    },
    otra: {
        type: String,
        required: [true, 'Obligatorio']
    },
    proximaRevision: {
        type: String,
        required: [true, 'Obligatorio']
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Observacion = mongoose_1.model('Observacion', observacionSchema);
