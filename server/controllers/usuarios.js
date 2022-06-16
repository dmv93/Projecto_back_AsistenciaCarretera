const Factura = require('../models/Factura');

const usuarios = {
  registro: (req, res) => {
    res.render('../views/pages/registro');
  },
  registrodone: (req, res) => {
    nombre = req.body.nombreRegistro;
    res.send(nombre);
  },
  factura: (request, response) => {
    Factura.find({}).then((factura) => {
      response.json(factura);
    });
  },
};
module.exports = usuarios;
