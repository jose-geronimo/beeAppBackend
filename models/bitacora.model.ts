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
        type: String
    },
    fecha:{
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_actividad:{
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_productoUtilizado:{
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_cantidad:{
        type: Number
    },
    actividades_gasto:{
        type: Number
    },
    cosecha_tipo:{
        type: String
    },
    cosecha_cantidad:{
        type: Number
    },
    cosecha_fecha:{
        type: String
    },
    gastos_concepto:{
        type: String
    },
    gastos_cantidad:{
        type: Number
    },
    gastos_fecha:{
        type: String
    },
    obervacion_poblacion:{
        type: Number,
        required: [true, 'Obligatorio']
    },
    obervacion_cria:{
        type: String
    },
    obervacion_limpieza:{
        type: String
    },
    obervacion_observaciones:{
        type: String
    },
    obervacion_otra:{
        type: String
    },
    obervacion_proximaRevision:{
        type: String,
        required: [true, 'Obligatorio']
    },
    revision_fecha:{
        type: String
    },
    revision_fechaSigRevision:{
        type: String
    },
    revision_descripcion:{
        type: String
    },
    revision_lugar:{
        type: String
    },
    revision_completado:{
        type: Boolean
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
    actividades_actividad: string;
    actividades_productoUtilizado: string;
    actividades_cantidad: number;
    actividades_gasto: number;
    cosecha_tipo: string;
    cosecha_cantidad: number;
    cosecha_fecha: string;
    gastos_concepto: string;
    gastos_cantidad: number;
    gastos_fecha: string;
    obervacion_poblacion: number;
    obervacion_cria: string;
    obervacion_limpieza: string;
    obervacion_observaciones: string;
    obervacion_otra: string;
    obervacion_proximaRevision: string;
    revision_fecha: string;
    revision_fechaSigRevision: string;
    revision_descripcion: string;
    revision_lugar: string;
    revision_completado: boolean;
    colmena: number;
}

export const Bitacora = model<IBitacora>('Bitacora', bitacoraSchema);