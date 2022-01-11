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
    registro_numCaja: {
        type: String
    },
    registro_numColmenaOrigen: {
        type: String
    },
    registro_fechaCreacion: {
        type: String
    },
    actividades_actividad: {
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_productoUtilizado: {
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_gasto: {
        type: Number
    },
    salud_plagas: {
        type: String
    },
    salud_productoUtilizado: {
        type: Number
    },
    salud_dosisAplicada: {
        type: String
    },
    salud_gasto: {
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
    gastos_prod1: {
        type: String
    },
    gastos_gasto1: {
        type: String
    },
    gastos_prod2: {
        type: String
    },
    gastos_gasto2: {
        type: String
    },
    produccion_tipoCosecha: {
        type: Boolean
    },
    produccion_cantidadCosecha: {
        type: Boolean
    },
    producccion_fechaCosecha: {
        type: Boolean
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Bitacora = (0, mongoose_1.model)('Bitacora', bitacoraSchema);
