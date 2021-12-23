import { model, Schema, Document } from 'mongoose';

const revisionSchema: Schema<IRevision> = new Schema({
    idRevision:{
        type: Number,
        required: [true, 'Obligatorio']
    },
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
    idRevision: number;
    fecha: string;
    fechaSigRevision: string;
    descripcion: string;
    lugar: string;
    completado: boolean;
    colmena: number;
}

export const Revision = model<IRevision>('Revision', revisionSchema);