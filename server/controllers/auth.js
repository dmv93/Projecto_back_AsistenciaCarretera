const { compare } = require('../helpers/handleBcrypt');
const Usuario = require('../models/Usuario');

const auth = {
  loginCtrl: async (req, res, next) => {
    // debemos encerrarlos en un bloque try catch
    const { usuarioLogin, passwordLogin } = req.body;

    const usuario = await Usuario.findOne({
      where: { email: usuarioLogin },
    });

    if (!usuario) {
      res.status(404);
      res.render('../views/pages/404');
    }
    const checkPassword = await compare(passwordLogin, usuario.contrasena);

    if (checkPassword) {
      //let guardarDatos = { id: usuario.user_id, rol: usuario.rol };
      //console.log(guardarDatos.id);
      //console.log('contraseña correcta');

      res.cookie('nombre', `${usuario.rol}`);
      if (usuario.rol == 'admin') {
        next();
        console.log('Eres admin');
      } else {
        res.status(403);
        // res.send({ error: 'No autorizado' });
        res.render('../views/pages/403');
      }

      res.render('../views/pages/index', { datosGuardados: guardarDatos }); //,{datosGuardados: guardarDatos}
      //res.redirect('/')
    } else {
      console.log('contraseña incorrecta');
      console.log('No eres admin');
    }
  },
};
module.exports = auth;
