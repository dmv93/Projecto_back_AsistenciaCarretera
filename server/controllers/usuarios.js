const Factura = require('../models/Factura');
const Usuario = require('../models/Usuario');

const pdfFactura = require('../services/pdf_fact');
const { encrypt } = require('../helpers/handleBcrypt');
const Coche = require('../models/Coche');

const usuarios = {
  registro: (req, res) => {
    res.render('../views/pages/registro');
  },
  registrodone: async (req, res) => {
    const {
      dniRegistro,
      nombreRegistro,
      apellidosRegistro,
      telefonoRegistro,
      mailRegistro,
      passRegistro,
      matriculaRegistro,
      marcaRegistro,
      modeloRegistro,
      fechaRegistro,
    } = req.body;
    const passwordHash = await encrypt(passRegistro);
    var dni = false;
    var numero = dniRegistro.slice(0, dniRegistro.length - 1);
    var letra_dni = dniRegistro[8].toUpperCase();
    var resto = numero % 23;
    var letras = [
      'T',
      'R',
      'W',
      'A',
      'G',
      'M',
      'Y',
      'F',
      'P',
      'D',
      'X',
      'B',
      'N',
      'J',
      'Z',
      'S',
      'Q',
      'V',
      'H',
      'L',
      'C',
      'K',
      'E',
      'T',
    ];
    if (letras[resto] == letra_dni) {
      dni = true;
    } //34567765F

    if (
      nombreRegistro.match(/^[a-z ,.'-]+$/i) &&
      apellidosRegistro.match(/^[a-z ,.'-]+$/i) &&
      dniRegistro.match(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/) &&
      telefonoRegistro.match(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/) &&
      mailRegistro.match(
        /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
      ) &&
      dni
    ) {
      const usuario = await Usuario.create({
        nombre: nombreRegistro,
        apellido: apellidosRegistro,
        dni: dniRegistro,
        telefono: telefonoRegistro,
        email: mailRegistro,
        contrasena: passwordHash,
        rol: 'user',
      });
      console.log(usuario.toJSON().user_id);
      const car = await Coche.create({
        matricula: matriculaRegistro,
        marca: marcaRegistro,
        modelo: modeloRegistro,
        fecha: fechaRegistro,
        fk_user_id: usuario.toJSON().user_id,
      });
      // console.log(usuario.toJSON());
      // console.log(car.toJSON());
      // nombre = req.body.nombreRegistro;
      // res.send(nombre);
      // sequelize.sync();
      res.render('../views/pages/login');
    } else {
      console.log('Datos invalidos');
    }
    res.render('../views/pages/registro');
  },
  factura: async (req, res) => {
    const usuario = await Usuario.findOne({
      where: { nombre: req.cookies.nombreUsuario },
    });

    const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment;filename=factura.pdf',
    });
    pdfFactura.crearPDF(
      (elem) => stream.write(elem),
      () => stream.end(),
      `${usuario.nombre} ${usuario.apellido} con Dni: ${usuario.dni}`,
      '85'
    );
  },
};
module.exports = usuarios;
