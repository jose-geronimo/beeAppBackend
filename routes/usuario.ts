import { Router, Request, Response } from "express";
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../classes/token';
import { verificaToken } from '../middlewares/autentication';

const userRoutes = Router();

userRoutes.post('/prueba', (req: Request, res: Response)=>{
    const user = {
        email   : req.body.email,
        password: req.body.password
    }
    res.json({
        ok: true,
        mensaje: 'Operación exitosa',
        user
    })
})

//LOGIN
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;
    Usuario.findOne({ usuario: body.username }, (err: any, userDB: any) => {
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
                usuario: userDB.usuario,
                nombre: userDB.nombre,
                apellido: userDB.apellido,
                direccion: userDB.direccion,
                telefono: userDB.telefono
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

export default userRoutes;