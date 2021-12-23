import { Router, Request, Response } from "express";
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../classes/token';
import { verificaToken } from '../middlewares/autentication';

const userRoutes = Router();

//LOGIN
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;
    Usuario.findOne({ email: body.email }, (err: any, userDB: any) => {
        if (err) throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario incorrecto'
            });
        }
        if (userDB.compararPassword(body.password)) {
            const tokenUser = Token.getJwtToken({
                _id: userDB._id,
                email: userDB.usuario
            });
            res.json({
                ok: true,
                token: tokenUser
            });
        } else {
            return res.json({
                ok: false,
                mensaje: 'Contraseña inválida'
            });
        }
    });
});

//CREAR USUARIO
userRoutes.post('/new',(req: Request, res: Response) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    };

    Usuario.create(user).then(userDB => {
        res.json({
            ok: true,
            user: userDB
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});

export default userRoutes;