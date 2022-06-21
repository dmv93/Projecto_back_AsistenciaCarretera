const Solicitud = require('../models/Solicitud');

const solicitudes = {
  solicitudes: (req, res) => {
    res.render('../views/pages/solicitud');
  },
  solicituddone: async (req, res) => {
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
  },


  verSolicitudes: async (req, res) => {
    if (req.cookies.nombre == 'admin') {
      const solicitudesBBDD = await Solicitud.findAll({
        where: { comprobacion: 'pendiente' },
      });
      //console.log(solicitudesBBDD)
      res.render('../views/pages/dashAdmin', { solic: solicitudesBBDD });
    } else {
      res.status(403);
      res.render('../views/pages/403');
    }
  },

  modificarEstado: async (req, res) => {
    if (req.body.action == 'aceptar') {
      await Solicitud.update(
        { comprobacion: 'aceptada' },
        {
          where: {
            id_solicitud: req.body.id,
          },
        });
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
  },
};

module.exports = solicitudes;
