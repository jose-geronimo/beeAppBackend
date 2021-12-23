import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Actividades } from "../models/actividades.model";

const activityRoutes = Router();

//OBTENER ACTIVIDADES
activityRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Actividades.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA ACTIVIDAD
activityRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const activity = {
        actividad: req.body.actividad,
        productoUtilizado: req.body.productoUtilizado,
        cantidad: req.body.cantidad,
        gasto: req.body.gasto,
        colmena: req.body.colmena
    };
    Actividades.create(activity).then(activityDB => {
        res.json({
            ok: true,
            Activity: activityDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default activityRoutes;