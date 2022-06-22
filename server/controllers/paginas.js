const paginas = {
  home: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    console.log(guardarDatos)
    console.log(typeof guardarDatos)

    res.render('../views/pages/index', {datosGuardados: guardarDatos});
    
  },
  login: (req, res) => {
    res.render('../views/pages/login');
  },
  misionVision: async (req, res) => {
    res.render('../views/pages/misionVision.pug');
  },
  contacto: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    res.render('../views/pages/contacto', {datosGuardados: guardarDatos});
  },
  coche: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    res.render('../views/pages/coche', {datosGuardados: guardarDatos});
  },
  solicitud: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    res.render('../views/pages/solicitud', {datosGuardados: guardarDatos});
  },
  tarifas: (req, res) => {
    res.render('../views/pages/tarifas.pug');
  },
  gracias: async (req, res) => {
    let guardarDatos = await req.cookies.nombre;
    res.render('../views/pages/gracias', {datosGuardados: guardarDatos});
  },
};
module.exports = paginas;
