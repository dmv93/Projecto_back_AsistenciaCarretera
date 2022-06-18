const Factura = require('../models/Factura');
const Usuario = require('../models/Usuario');
const pdfFactura = require('../services/pdf_fact');
const { encrypt } = require('../helpers/handleBcrypt');

const usuarios = {
  registro: (req, res) => {
    res.render('../views/pages/registro');
  },
  registrodone: async (req, res) => {
    const { nombreRegistro, mailRegistro } = req.body;
    const passwordHash = await encrypt(mailRegistro);
    const usuario = await Usuario.create({
      nombre: nombreRegistro,
      apellido: 'Perdomo',
      dni: '0423456Y',
      telefono: '1234567',
      email: passwordHash,
    });
    // console.log(anibal.toJSON());
    // nombre = req.body.nombreRegistro;
    // res.send(nombre);
    // sequelize.sync();
  },
  factura: (req, res) => {
    const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment;filename=factura.pdf',
    });
    pdfFactura.crearPDF(
      (elem) => stream.write(elem),
      () => stream.end()
    );
    // Factura.find({}).then((factura) => {
    //   response.json(factura);
    // });
  },
};
module.exports = usuarios;
