import { model, Schema, Document } from 'mongoose';

const bitacoraSchema: Schema<IBitacora> = new Schema({
    responsable:{
        type: String,
        required: [true, 'Obligatorio']
    },
    ubicacion:{
        type: String,
        required: [true, 'Obligatorio']
    },
    numbitacora:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    apiario:{
        type: String,
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

interface IBitacora extends Document{
    responsable: string;
    ubicacion: string;
    numbitacora: number;
    apiario: string;
    fecha: string;
    colmena: number;
}

export const Bitacora = model<IBitacora>('Bitacora', bitacoraSchema);