import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema: Schema<IUsuario> = new Schema({
    email:{
        type: String,
        unique: true,
        required: [true, 'El usuario es requerido']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es requerida']
    },
});

usuarioSchema.method('compararPassword', function( password: string = ''): boolean {

    if (  bcrypt.compareSync( password, this.password ) ) {
        return true;
    } else {
        return false;
    }

});

interface IUsuario extends Document{
    email: string;
    password: string;
    compararPassword(password:string):boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);