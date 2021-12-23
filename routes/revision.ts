import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Revision } from "../models/revision.model";

const reviewRoutes = Router();

//OBTENER REVISIONES
reviewRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Revision.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA REVISION
reviewRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const review = {
        fecha: req.body.fecha,
        fechaSigRevision: req.body.fechaSigRevision,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar,
        completado: req.body.completado,
        colmena: req.body.colmena
    };
    Revision.create(review).then(reviewDB => {
        res.json({
            ok: true,
            Review: reviewDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default reviewRoutes;