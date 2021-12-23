"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const bitacora_model_1 = require("../models/bitacora.model");
const binnacleRoutes = (0, express_1.Router)();
//OBTENER BITACORA
binnacleRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    bitacora_model_1.Bitacora.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA BITACORA
binnacleRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const binnacle = {
        responsable: req.body.responsable,
        ubicacion: req.body.ubicacion,
        numbitacora: req.body.numbitacora,
        apiario: req.body.apiario,
        fecha: req.body.fecha,
        colmena: req.body.colmena
    };
    bitacora_model_1.Bitacora.create(binnacle).then(binnacleDB => {
        res.json({
            ok: true,
            Activity: binnacleDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = binnacleRoutes;
