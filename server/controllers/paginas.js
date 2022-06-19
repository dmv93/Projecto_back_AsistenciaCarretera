const paginas = {
  home: (req, res) => {
    res.render('../views/pages/index');
  },
  login: (req, res) => {
    res.render('../views/pages/login');
  },
  misionVision: (req, res) => {
    res.render('../views/pages/misionVision.pug');
  },
  contacto: (req, res) => {
    res.render('../views/pages/contacto');
  },
  coche: (req, res) => {
    res.render('../views/pages/coche')
  },
  solicitud: (req, res) => {
    res.render('../views/pages/solicitud');
  },
  tarifas: (req, res) => {
    res.render('../views/pages/tarifas.pug');
  }

};
module.exports = paginas;
