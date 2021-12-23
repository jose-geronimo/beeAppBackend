import { model, Schema, Document } from 'mongoose';

const actividadesSchema: Schema<IActividades> = new Schema({
    actividad:{
        type: String,
        required: [true, 'Obligatorio']
    },
    productoUtilizado:{
        type: String,
        required: [true, 'Obligatorio']
    },
    cantidad:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    gasto:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    colmena:{
        type: Number,
        required: [true, 'Obligatorio']
    }
});

interface IActividades extends Document{
    actividad: string;
    productoUtilizado: string;
    cantidad: number;
    gasto: number;
    colmena: number;
}

export const Actividades = model<IActividades>('Actividades', actividadesSchema);