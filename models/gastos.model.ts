import { model, Schema, Document } from 'mongoose';

const gastosSchema: Schema<IGastos> = new Schema({
    concepto:{
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
    }
});

interface IGastos extends Document{
    concepto: string;
    cantidad: number;
    fecha: string;
}

export const Gastos = model<IGastos>('Gastos', gastosSchema);