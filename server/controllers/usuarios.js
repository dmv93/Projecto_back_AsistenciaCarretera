const Factura = require('../models/Factura');
const Usuario = require('../models/Usuario');
const Coche = require('../models/Coche');



const usuarios = {
  registro: (req, res) => {
    res.render('../views/pages/registro');
  },
  registrodone: async (req, res) => {


      var dni=false
      var numero = req.body.dniRegistro.slice(0, req.body.dniRegistro.length - 1);
      var letra_dni = req.body.dniRegistro[8].toUpperCase();
      var resto = numero % 23;
      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      //var encontrado = letras[resto];
      if (letras[resto] == letra_dni) {
        dni=true
      }//34567765F
        
    if ((req.body.nombreRegistro.match(/^[a-z ,.'-]+$/i))
      && (req.body.apellidosRegistro.match(/^[a-z ,.'-]+$/i))
      && (req.body.dniRegistro.match(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/))
      && (req.body.telefonoRegistro.match(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/))
      && (req.body.mailRegistro.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/))
      && dni) {
      const anibal = await Usuario.create({
        nombre: req.body.nombreRegistro,
        apellido: req.body.apellidosRegistro,
        dni: req.body.dniRegistro,
        telefono: req.body.telefonoRegistro,
        email: req.body.mailRegistro,
      });
      console.log(anibal.toJSON().user_id);
      const car = await Coche.create({
        matricula: req.body.matriculaRegistro,
        marca: req.body.marcaRegistro,
        modelo: req.body.modeloRegistro,
        fecha: req.body.fechaRegistro,
        fk_user_id: anibal.toJSON().user_id,
      });
      console.log(anibal.toJSON());
      console.log(car.toJSON());
      // nombre = req.body.nombreRegistro;
      // res.send(nombre);
      // sequelize.sync();
    } else {
      console.log("Datos invalidos")
    }


  },
  factura: (request, response) => {
    Factura.find({}).then((factura) => {
      response.json(factura);
    });
  },
};
module.exports = usuarios;
