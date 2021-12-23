"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const cosecha_model_1 = require("../models/cosecha.model");
const yieldRoutes = (0, express_1.Router)();
//OBTENER COSECHA
yieldRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    cosecha_model_1.Cosecha.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA COSECHA
yieldRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const cosecha = {
        tipo: req.body.tipo,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
        colmena: req.body.colmena
    };
    cosecha_model_1.Cosecha.create(cosecha).then(yieldDB => {
        res.json({
            ok: true,
            Yield: yieldDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = yieldRoutes;
