"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actividades = void 0;
const mongoose_1 = require("mongoose");
const actividadesSchema = new mongoose_1.Schema({
    idActividades: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    actividad: {
        type: String,
        required: [true, 'Obligatorio']
    },
    productoUtilizado: {
        type: String,
        required: [true, 'Obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    gasto: {
        type: Number,
        required: [true, 'Obligatorio']
    },
    colmena: {
        type: Number,
        required: [true, 'Obligatorio']
    }
});
exports.Actividades = (0, mongoose_1.model)('Actividades', actividadesSchema);
