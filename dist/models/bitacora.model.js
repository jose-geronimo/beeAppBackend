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
        type: String
    },
    fecha: {
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_actividad: {
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_productoUtilizado: {
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_cantidad: {
        type: Number
    },
    actividades_gasto: {
        type: Number
    },
    cosecha_tipo: {
        type: String
    },
    cosecha_cantidad: {
        type: Number
    },
    cosecha_fecha: {
        type: String
    },
    gastos_concepto: {
        type: String
    },
    gastos_cantidad: {
        type: Number
    },
    gastos_fecha: {
        type: String
    },
    obervacion_poblacion: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    obervacion_cria: {
        type: String
    },
    obervacion_limpieza: {
        type: String
    },
    obervacion_observaciones: {
        type: String
    },
    obervacion_otra: {
        type: String
    },
    obervacion_proximaRevision: {
        type: String,
        required: [true, 'Obligatorio']
    },
    revision_fecha: {
        type: String
    },
    revision_fechaSigRevision: {
        type: String
    },
    revision_descripcion: {
        type: String
    },
    revision_lugar: {
        type: String
    },
    revision_completado: {
        type: Boolean
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Bitacora = (0, mongoose_1.model)('Bitacora', bitacoraSchema);
