const Factura = require('../models/Factura');
const Usuario = require('../models/Usuario');

const usuarios = {
  registro: (req, res) => {
    res.render('../views/pages/registro');
  },
  registrodone: async (req, res) => {
    const anibal = await Usuario.create({
      nombre: req.body.nombreRegistro,
      apellido: 'Perdomo',
      dni: '0423456Y',
      telefono: '1234567',
      email: 'kindg@loco.com',
    });
    console.log(anibal.toJSON());
    // nombre = req.body.nombreRegistro;
    // res.send(nombre);
    // sequelize.sync();
  },
  factura: (request, response) => {
    Factura.find({}).then((factura) => {
      response.json(factura);
    });
  },
};
module.exports = usuarios;
