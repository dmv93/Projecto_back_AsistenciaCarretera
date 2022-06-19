const { compare } = require('../helpers/handleBcrypt');
const Usuario = require('../models/Usuario');

const auth = {
  loginCtrl: async (req, res) => {
    // debemos encerrarlos en un bloque try catch
    const { usuarioLogin, passwordLogin } = req.body;

    const usuario = await Usuario.findOne({
      where: { email: usuarioLogin },
    });


    if (!usuario) {
      res.status(404);
      res.send({ error: 'usuario no encontrado' });
    }
    const checkPassword = await compare(passwordLogin, usuario.contrasena);
    

    if (checkPassword) {
      console.log('contraseña correcta');
      

    } else {
      console.log('contraseña incorrecta');
    }
  },
};
module.exports = auth;
