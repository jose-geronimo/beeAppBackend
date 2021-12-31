"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const observacion_model_1 = require("../models/observacion.model");
const observationRoutes = express_1.Router();
//OBTENER OBSERVACION
observationRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    observacion_model_1.Observacion.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA OBSERVACION
observationRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const observation = {
        poblacion: req.body.poblacion,
        cria: req.body.cria,
        limpieza: req.body.limpieza,
        observaciones: req.body.observaciones,
        otra: req.body.otra,
        proximaRevision: req.body.proximaRevision,
        colmena: req.body.colmena
    };
    observacion_model_1.Observacion.create(observation).then(observationDB => {
        res.json({
            ok: true,
            Observation: observationDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = observationRoutes;
