"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosecha = void 0;
const mongoose_1 = require("mongoose");
const cosechaSchema = new mongoose_1.Schema({
    tipo: {
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
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Cosecha = mongoose_1.model('Cosecha', cosechaSchema);
