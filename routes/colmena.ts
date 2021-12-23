import { Response, Request, Router } from "express";
import { verificaToken } from '../middlewares/autentication';
import { Colmena } from "../models/colmena.model";

const hiveRoutes = Router();

//OBTENER COLMENA
hiveRoutes.get('/all', verificaToken, (req: Request, res: Response) => {
    Colmena.find()
        .then(results => {
            res.json({
                results: results
            });
        }).catch(error => console.error(error));
});

//CREAR UNA COLMENA
hiveRoutes.post('/new', verificaToken, (req: Request, res: Response) => {
    const hive = {
        numCaja: req.body.numCaja,
        numColmenaOrigen: req.body.numColmenaOrigen,
        fechaCreacionColmena: req.body.fechaCreacionColmena
    };
    Colmena.create(hive).then(hiveDB => {
        res.json({
            ok: true,
            Hive: hiveDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default hiveRoutes;