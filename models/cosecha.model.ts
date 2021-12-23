import { model, Schema, Document } from 'mongoose';

const cosechaSchema: Schema<ICosecha> = new Schema({
    idCosecha:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    tipo:{
        type: String,
        required: [true, 'Obligatorio']
    },
    cantidad:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    fecha:{
        type: String,
        required: [true, 'Obligatorio']
    },
    colmena:{
        type: Number,
        required: [true, 'Obligatorio']
    }
});

interface ICosecha extends Document{
    idCosecha: number;
    tipo: string;
    cantidad: number;
    fecha: string;
    colmena: number;
}

export const Cosecha = model<ICosecha>('Cosecha', cosechaSchema);