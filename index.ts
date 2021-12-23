import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import activityRoutes from "./routes/actividades";
import binnacleRoutes from "./routes/bitacora";
import hiveRoutes from "./routes/colmena";
import yieldRoutes from "./routes/cosecha";
import outgoingsRoutes from "./routes/gastos"
import observationRoutes from "./routes/observacion"
import mongoose, { ConnectOptions } from "mongoose";
import bodyParser from "body-parser";

const server = new Server();

//BODY PARSER
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

//RUTAS DE LA APLICACIÓN
server.app.use('/user', userRoutes);
server.app.use('/activities', activityRoutes);
server.app.use('/binnacle', binnacleRoutes);
server.app.use('/hive', hiveRoutes);
server.app.use('/yield', yieldRoutes);
server.app.use('/outgoings', outgoingsRoutes);
server.app.use('/observation', observationRoutes);

//CONECTAR A BD
const uri = "mongodb+srv://SANDY:hU9JqTTMHwTZ6kKT@beeappbackendbd.alzsj.mongodb.net/beeAppBackendBD?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true},(err)=>{
        if(err)throw err;
        console.log("Base de datos conectada");
    }
)
//LEVANTAR EXPRESS
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})