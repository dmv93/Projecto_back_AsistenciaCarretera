const express = require('express');
const Conductore = require('../models/Conductore');
const Factura = require('../models/Factura');
const Flota = require('../models/Flota');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bievenido a mi app');
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
