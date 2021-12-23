"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const gastos_model_1 = require("../models/gastos.model");
const outgoingsRoutes = (0, express_1.Router)();
//OBTENER BITACORA
outgoingsRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    gastos_model_1.Gastos.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA BITACORA
outgoingsRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const outgoing = {
        concepto: req.body.concepto,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha
    };
    gastos_model_1.Gastos.create(outgoing).then(outgoingDB => {
        res.json({
            ok: true,
            Outgoing: outgoingDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = outgoingsRoutes;
