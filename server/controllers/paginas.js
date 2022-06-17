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
  solicitud: (req, res) => {
    res.render('../views/pages/solicitud');
  },
};
module.exports = paginas;
