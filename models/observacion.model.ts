import { model, Schema, Document } from 'mongoose';

const observacionSchema: Schema<IObservacion> = new Schema({
    idObservacion:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    poblacion:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    cria:{
        type: String,
        required: [true, 'Obligatorio']
    },
    limpieza:{
        type: String,
        required: [true, 'Obligatorio']
    },
    observaciones:{
        type: String,
        required: [true, 'Obligatorio']
    },
    otra:{
        type: String,
        required: [true, 'Obligatorio']
    },
    proximaRevision:{
        type: String,
        required: [true, 'Obligatorio']
    },
    colmena:{
        type: Number,
        required: [true, 'Obligatorio']
    }
});

interface IObservacion extends Document{
    idObservacion: number;
    poblacion: number;
    cria: string;
    limpieza: string;
    observaciones: string;
    otra: string;
    proximaRevision: string;
    colmena: Number;
}

export const Observacion = model<IObservacion>('Observacion', observacionSchema);