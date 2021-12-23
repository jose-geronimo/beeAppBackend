import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Gastos } from "../models/gastos.model";

const outgoingsRoutes = Router();

//OBTENER BITACORA
outgoingsRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Gastos.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA BITACORA
outgoingsRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const outgoing = {
        concepto: req.body.concepto,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha
    };
    Gastos.create(outgoing).then(outgoingDB => {
        res.json({
            ok: true,
            Outgoing: outgoingDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default outgoingsRoutes;