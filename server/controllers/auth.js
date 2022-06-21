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
      let guardarDatos = {id: usuario.user_id, rol: usuario.rol}
      console.log(guardarDatos.id);
      console.log('contraseña correcta');
      res.render('../views/pages/index',{datosGuardados: guardarDatos})//,{datosGuardados: guardarDatos}
      //res.redirect('/')
      

    } else {
      console.log('contraseña incorrecta');
    }
  },
};
module.exports = auth;
