const Usuario = require('../models/Usuario');

function isAdmin(req, res, next) {
  if (usuario.rol == 'admin') {
    next();
  } else {
    res
      .status(403)
      .send(
        `Sorry but you are not an admin and you do not have access to route ${req.url}`
      );
  }
  console.log('Este es el que sale: ' + req.body.isAdmin);
}
module.exports = { isAdmin };
