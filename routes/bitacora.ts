import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Bitacora } from "../models/bitacora.model";

const binnacleRoutes = Router();

//OBTENER BITACORA
binnacleRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Bitacora.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA BITACORA
binnacleRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const binnacle = {
        responsable: req.body.responsable,
        ubicacion: req.body.ubicacion,
        numbitacora: req.body.numbitacora,
        apiario: req.body.apiario,
        fecha: req.body.fecha,
        actividades_actividad: req.body.actividades_actividad,
        actividades_productoUtilizado: req.body.actividades_productoUtilizado,
        actividades_cantidad: req.body.actividades_cantidad,
        actividades_gasto: req.body.actividades_gasto,
        cosecha_tipo: req.body.cosecha_tipo,
        cosecha_cantidad: req.body.cosecha_cantidad,
        cosecha_fecha: req.body.cosecha_fecha,
        gastos_concepto: req.body.gastos_concepto,
        gastos_cantidad: req.body.gastos_cantidad,
        gastos_fecha: req.body.gastos_fecha,
        obervacion_poblacion: req.body.obervacion_poblacion,
        obervacion_cria: req.body.obervacion_cria,
        obervacion_limpieza: req.body.obervacion_limpieza,
        obervacion_observaciones: req.body.obervacion_observaciones,
        obervacion_otra: req.body.obervacion_otra,
        obervacion_proximaRevision: req.body.obervacion_proximaRevision,
        revision_fecha: req.body.revision_fecha,
        revision_fechaSigRevision: req.body.revision_fechaSigRevision,
        revision_descripcion: req.body.revision_descripcion,
        revision_lugar: req.body.revision_lugar,
        revision_completado: req.body.revision_completado,
        colmena: req.body.colmena
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

export default binnacleRoutes;