"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentication_1 = require("../middlewares/autentication");
const revision_model_1 = require("../models/revision.model");
const reviewRoutes = (0, express_1.Router)();
//OBTENER REVISIONES
reviewRoutes.get('/all', autentication_1.verificaToken, (req, res) => {
    revision_model_1.Revision.find()
        .then(results => {
        res.json({
            results: results
        });
    }).catch(error => console.error(error));
});
//CREAR UNA REVISION
reviewRoutes.post('/new', autentication_1.verificaToken, (req, res) => {
    const review = {
        fecha: req.body.fecha,
        fechaSigRevision: req.body.fechaSigRevision,
        descripcion: req.body.descripcion,
        lugar: req.body.lugar,
        completado: req.body.completado,
        colmena: req.body.colmena
    };
    revision_model_1.Revision.create(review).then(reviewDB => {
        res.json({
            ok: true,
            Review: reviewDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = reviewRoutes;
