"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gastos = void 0;
const mongoose_1 = require("mongoose");
const gastosSchema = new mongoose_1.Schema({
    idGastos: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    concepto: {
        type: String,
        required: [true, 'Obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    fecha: {
        type: String,
        required: [true, 'Obligatorio']
    }
});
exports.Gastos = (0, mongoose_1.model)('Gastos', gastosSchema);
