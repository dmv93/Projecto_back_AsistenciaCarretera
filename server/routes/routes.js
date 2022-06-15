const express = require('express');
const Conductore = require('../models/Conductore');
const Factura = require('../models/Factura');
const Flota = require('../models/Flota');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('../views/pages/index');
});
router.get('/registro', (req, res) => {
  Factura.find({}).then((factura) => {
    let factu = Object.assign({}, factura);

    res.render('../views/pages/registro', { clave: factu });
  });
});
router.get('/login', (req, res) => {
  res.render('../views/pages/login');
});
router.get('/nosotros', (req, res) => {
  res.render('../views/pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('../views/pages/contacto');
});

router.get('/factura', (request, response) => {
  Factura.find({}).then((factura) => {
    response.json(factura);
  });
});
router.get('/conductor', (request, response) => {
  Conductore.find({}).then((conductor) => {
    response.json(conductor);
  });
});
router.get('/flota', (request, response) => {
  Flota.find({}).then((flota) => {
    response.json(flota);
  });
});

module.exports = router;