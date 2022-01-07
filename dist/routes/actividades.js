"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const actividades_model_1 = require("../models/actividades.model");
const activityRoutes = (0, express_1.Router)();
//OBTENER ACTIVIDADES
activityRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    actividades_model_1.Actividades.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA ACTIVIDAD
activityRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const activity = {
        actividad: req.body.actividad,
        productoUtilizado: req.body.productoUtilizado,
        cantidad: req.body.cantidad,
        gasto: req.body.gasto,
        colmena: req.body.colmena
    };
    actividades_model_1.Actividades.create(activity).then(activityDB => {
        res.json({
            ok: true,
            Activity: activityDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
hola;
exports.default = activityRoutes;
