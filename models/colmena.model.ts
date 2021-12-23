import { model, Schema, Document } from 'mongoose';

const colmenaSchema: Schema<IColmena> = new Schema({
    idColmena:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    numCaja:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    numColmenaOrigen:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    fechaCreacionColmena:{
        type: String,
        required: [true, 'Obligatorio']
    }
});

interface IColmena extends Document{
    idColmena: number;
    numCaja: number;
    numColmenaOrigen: number;
    fechaCreacionColmena: string;
}

export const Colmena = model<IColmena>('Colmena', colmenaSchema);