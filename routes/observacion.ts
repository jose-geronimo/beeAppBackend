import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Observacion } from "../models/observacion.model";

const observationRoutes = Router();

//OBTENER OBSERVACION
observationRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Observacion.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA OBSERVACION
observationRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const observation = {
        poblacion: req.body.poblacion,
        cria: req.body.cria,
        limpieza: req.body.limpieza,
        observaciones: req.body.observaciones,
        otra: req.body.otra,
        proximaRevision: req.body.proximaRevision,
        colmena: req.body.colmena
    };
    Observacion.create(observation).then(observationDB => {
        res.json({
            ok: true,
            Observation: observationDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default observationRoutes;