const paginas = {
  home: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      console.log(guardarDatos);
      console.log(typeof guardarDatos);

      res.render('../views/pages/index', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  login: (req, res) => {
    res.render('../views/pages/login');
  },
  misionVision: async (req, res) => {
    res.render('../views/pages/misionVision.pug');
  },
  contacto: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      res.render('../views/pages/contacto', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  coche: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      res.render('../views/pages/coche', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  solicitud: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      res.render('../views/pages/solicitud', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
  tarifas: (req, res) => {
    res.render('../views/pages/tarifas.pug');
  },
  gracias: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    res.render('../views/pages/gracias', {datosGuardados: guardarDatos});
  },
  mapa: async (req, res) => {
    try {
      let guardarDatos = await req.cookies.nombre;
      res.render('../views/pages/mapa', { datosGuardados: guardarDatos });
    } catch (error) {
      console.error(error);
      res.status(500);
      res.render('../views/pages/404');
    }
  },
};
module.exports = paginas;
