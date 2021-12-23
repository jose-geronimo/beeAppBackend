import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import mongoose, { ConnectOptions } from "mongoose";
import bodyParser from "body-parser";

const server = new Server();

//BODY PARSER
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );


//RUTAS DE LA APLICACIÓN
server.app.use('/user', userRoutes);

//CONECTAR A BD
const uri = "mongodb+srv://Jondalar:e9mKFiwdcmSD8262@torostkw.iaq0g.mongodb.net/TorosTKW?retryWrites=true&w=majority";

mongoose.connect(uri, (err) => {
    if (err)
        throw err;
    console.log("Base de datos conectada");
})

//LEVANTAR EXPRESS
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${ server.port}`);
})