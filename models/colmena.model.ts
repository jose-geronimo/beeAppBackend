import { model, Schema, Document } from 'mongoose';

const colmenaSchema: Schema<IColmena> = new Schema({
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
    numCaja: number;
    numColmenaOrigen: number;
    fechaCreacionColmena: string;
}

export const Colmena = model<IColmena>('Colmena', colmenaSchema);