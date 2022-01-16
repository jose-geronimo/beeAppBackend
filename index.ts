import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import binnacleRoutes from "./routes/bitacora";
import mongoose, { ConnectOptions } from "mongoose";
import bodyParser from "body-parser";

const server = new Server();
const cors = require('cors');

//CORS
server.app.all("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.app.use(cors());

//BODY PARSER
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

//RUTAS DE LA APLICACIÓN
server.app.use('/user', userRoutes);
server.app.use('/binnacle', binnacleRoutes);


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