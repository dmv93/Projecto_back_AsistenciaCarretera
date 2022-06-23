const Solicitud = require('../models/Solicitud');
const Grua = require('../models/Grua');
const solicitudes = {
  solicitu: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      res.render('../views/pages/solicitud', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  solicituddone: async (req, res) => {
    try {
      const {
        inputNombre,
        inputApellidos,
        inputNif,
        inputTelefono,
        inputMarca,
        inputModelo,
        direccion,
        inputInicidencia,
        inputEmail,
      } = req.body;

      var dni = false;
      var numero = inputNif.slice(0, inputNif.length - 1);
      var letra_dni = inputNif[8].toUpperCase();
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
        inputNombre.match(/^[a-z ,.'-]+$/i) &&
        inputApellidos.match(/^[a-z ,.'-]+$/i) &&
        inputNif.match(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/) &&
        inputTelefono.match(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/) &&
        inputEmail.match(
          /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
        ) &&
        dni
      ) {
        const solicitud = await Solicitud.create({
          nombre: inputNombre,
          apellidos: inputApellidos,
          email: inputEmail,
          nif: inputNif,
          telefono: inputTelefono,
          marca: inputMarca,
          modelo: inputModelo,
          direccion: direccion,
          reparacion: inputInicidencia,
          comprobacion: 'pendiente',
        });
      } else {
        console.log('Datos invalidos');
      }

    },  
}
        let guardarDatos = await req.cookies.nombre;
        res.render('../views/pages/index', { datosGuardados: guardarDatos });
      } else {
        console.log('Datos invalidos');
      }
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  verSolicitudes: async (req, res) => {
    try {
      if (req.cookies.nombre == 'admin') {
        let guardarDatos = await req.cookies.nombre;
        const solicitudesBBDD = await Solicitud.findAll({
          where: { comprobacion: 'pendiente' },
        });
        //console.log(solicitudesBBDD)
        res.render('../views/pages/dashAdmin', {
          solic: solicitudesBBDD,
          datosGuardados: guardarDatos,
        });
      } else {
        res.status(403);
        res.render('../views/pages/403');
      }
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  modificarEstado: async (req, res) => {
    try {
      console.log(req);
      if (req.body.action == 'aceptar') {
        await Solicitud.update(
          { comprobacion: 'aceptada' },
          {
            where: {
              id_solicitud: req.body.id,
            },
          }
        );
        await res.send('../views/pages/dashAdmin');

        console.log('Hay que aceptar la solicitud');
      } else if (req.body.action == 'rechazar') {
        await Solicitud.update(
          { comprobacion: 'rechazada' },
          {
            where: {
              id_solicitud: req.body.id,
            },
          }
        );
        await res.send('../views/pages/dashAdmin');
        console.log('Hay que rechazar la solicitud');
      }
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
};


module.exports = solicitudes;
