import { model, Schema, Document } from 'mongoose';

const revisionSchema: Schema<IRevision> = new Schema({
    fecha:{
        type: String,
        required: [true, 'Obligatorio']
    },
    fechaSigRevision:{
        type: String,
        required: [true, 'Obligatorio']
    },
    descripcion:{
        type: String,
        required: [true, 'Obligatorio']
    },
    lugar:{
        type: String,
        required: [true, 'Obligatorio']
    },
    completado:{
        type: Boolean,
        required: [true, 'Obligatorio']
    },
    colmena:{
        type: Number,
        required: [true, 'Obligatorio']
    },
});

interface IRevision extends Document{
    fecha: string;
    fechaSigRevision: string;
    descripcion: string;
    lugar: string;
    completado: boolean;
    colmena: number;
}

export const Revision = model<IRevision>('Revision', revisionSchema);