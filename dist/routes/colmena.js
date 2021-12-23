"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const colmena_model_1 = require("../models/colmena.model");
const hiveRoutes = (0, express_1.Router)();
//OBTENER COLMENA
hiveRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    colmena_model_1.Colmena.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA COLMENA
hiveRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const hive = {
        numCaja: req.body.numCaja,
        numColmenaOrigen: req.body.numColmenaOrigen,
        fechaCreacionColmena: req.body.fechaCreacionColmena
    };
    colmena_model_1.Colmena.create(hive).then(hiveDB => {
        res.json({
            ok: true,
            Hive: hiveDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = hiveRoutes;
