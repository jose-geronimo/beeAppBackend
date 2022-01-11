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
    registro_numCaja:{
        type: String
    },
    registro_numColmenaOrigen:{
        type: String
    },
    registro_fechaCreacion:{
        type: String
    },
    actividades_actividad:{
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_productoUtilizado:{
        type: String,
        required: [true, 'Obligatorio']
    },
    actividades_gasto:{
        type: Number
    },
    salud_plagas:{
        type: String
    },
    salud_productoUtilizado:{
        type: Number
    },
    salud_dosisAplicada:{
        type: String
    },
    salud_gasto:{
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
    gastos_prod1:{
        type: String
    },
    gastos_gasto1:{
        type: String
    },
    gastos_prod2:{
        type: String
    },
    gastos_gasto2:{
        type: String
    },
    produccion_tipoCosecha:{
        type: Boolean
    },
    produccion_cantidadCosecha:{
        type: Boolean
    },
    producccion_fechaCosecha:{
        type: Boolean
    }
});

interface IBitacora extends Document{
    responsable: string;
    ubicacion: string;
    numbitacora: number;
    apiario: string;
    fecha: string;
    registro_numCaja: string;
    registro_numColmenaOrigen: string;
    registro_fechaCreacion: string;
    actividades_actividad: string;
    actividades_productoUtilizado: string;
    actividades_gasto: number;
    salud_plagas: string;
    salud_productoUtilizado: string
    salud_dosisAplicada: string;
    salud_gasto: string;
    obervacion_poblacion: number;
    obervacion_cria: string;
    obervacion_limpieza: string;
    obervacion_observaciones: string;
    obervacion_otra: string;
    obervacion_proximaRevision: string;
    gastos_prod1: string;
    gastos_gasto1: string;
    gastos_prod2: string;
    gastos_gasto2: string;
    produccion_tipoCosecha: string;
    produccion_cantidadCosecha: string;
    producccion_fechaCosecha: string;
}

export const Bitacora = model<IBitacora>('Bitacora', bitacoraSchema);