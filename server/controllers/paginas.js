const paginas = {
  home: (req, res) => {
    res.render('../views/pages/index');
  },
  login: (req, res) => {
    res.render('../views/pages/login');
  },
  nosotros: (req, res) => {
    res.render('../views/pages/nosotros');
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
    res.render('../views/pages/tarifas');
  }

};
module.exports = paginas;
