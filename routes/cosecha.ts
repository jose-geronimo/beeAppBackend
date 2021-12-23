import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Bitacora } from "../models/bitacora.model";
import { Cosecha } from "../models/cosecha.model";

const yieldRoutes = Router();

//OBTENER COSECHA
yieldRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Cosecha.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA COSECHA
yieldRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const cosecha = {
        tipo: req.body.tipo,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
        colmena: req.body.colmena
    };
    Cosecha.create(cosecha).then(yieldDB => {
        res.json({
            ok: true,
            Yield: yieldDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default yieldRoutes;