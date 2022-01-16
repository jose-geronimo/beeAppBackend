import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Bitacora } from "../models/bitacora.model";

const binnacleRoutes = Router();

//OBTENER BITACORA
binnacleRoutes.get('/all', (req: Request, res: Response) => {
    Bitacora.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA BITACORA
binnacleRoutes.post('/new', (req: Request, res: Response) => {
    const binnacle = {
        responsable: req.body.responsable,
        ubicacion: req.body.ubicacion,
        numbitacora: req.body.numbitacora,
        apiario: req.body.apiario,
        fecha: req.body.fecha,
        registro_numCaja: req.body.registro_numCaja,
        registro_numColmenaOrigen: req.body.registro_numColmenaOrigen,
        registro_fechaCreacion: req.body.registro_fechaCreacion,
        actividades_actividad: req.body.actividades_actividad,
        actividades_productoUtilizado: req.body.actividades_productoUtilizado,
        actividades_gasto: req.body.actividades_gasto,
        salud_plagas: req.body.salud_plagas,
        salud_productoUtilizado: req.body.salud_productoUtilizado,
        salud_dosisAplicada: req.body.salud_dosisAplicada,
        salud_gasto: req.body.salud_gasto,
        obervacion_poblacion: req.body.obervacion_poblacion,
        obervacion_cria: req.body.obervacion_cria,
        obervacion_limpieza: req.body.obervacion_limpieza,
        obervacion_observaciones: req.body.obervacion_observaciones,
        obervacion_otra: req.body.obervacion_otra,
        obervacion_proximaRevision: req.body.obervacion_proximaRevision,
        gastos_prod1: req.body.gastos_prod1,
        gastos_gasto1: req.body.gastos_gasto1,
        gastos_prod2: req.body.gastos_prod2,
        gastos_gasto2: req.body.gastos_gasto2,
        produccion_tipoCosecha: req.body.produccion_tipoCosecha,
        produccion_cantidadCosecha: req.body.produccion_cantidadCosecha,
        producccion_fechaCosecha: req.body.producccion_fechaCosecha
    };
    Bitacora.create(binnacle).then(binnacleDB => {
        res.json({
            ok: true,
            Activity: binnacleDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});


//OBTENER BITACORA
binnacleRoutes.get('/one/:id', (req: Request, res: Response) => {
    Bitacora.find()
        .then(results => {
            res.json({
                results: req.params.id
            });
        }).catch(error => console.error(error));
});

export default binnacleRoutes;