"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colmena = void 0;
const mongoose_1 = require("mongoose");
const colmenaSchema = new mongoose_1.Schema({
    numCaja: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    numColmenaOrigen: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    fechaCreacionColmena: {
        type: String,
        required: [true, 'Obligatorio']
    }
});
exports.Colmena = (0, mongoose_1.model)('Colmena', colmenaSchema);
