import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Actividades } from "../models/actividades.model";
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