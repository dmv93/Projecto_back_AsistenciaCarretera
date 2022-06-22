/**
 * @function function registrodone()
 * @description Utilizamos para poder registrar a los usuarios nuevos y hacemos comprobaciones
 * @property {String} dniRegistro DNI de la persona
 * @property {String} nombreRegistro Nombre del usuario
 * @property {String} apellidosRegistro Apellido del usuario
 * @property {String} telefonoRegistro Teléfono del usuario
 * @property {String}mailRegistro Mail del usuario
 * @property {String} passRegistro Contraseña
 * @property {String} matriculaRegistro Matrícula del vehículo
 * @property {String} marcaRegistro Marca del coche
 * @property {String} modeloRegistro Modelo del coche
 * @property {String} fechaRegistro Fecha de compra 
 */

 registrodone: async (req, res) => {
    const {
      dniRegistro,
      nombreRegistro,
      apellidosRegistro,
      telefonoRegistro,
      mailRegistro,
      passRegistro,
      matriculaRegistro,
      marcaRegistro,
      modeloRegistro,
      fechaRegistro,
    } = req.body;
    const passwordHash = await encrypt(passRegistro);
    var dni = false;
    var numero = dniRegistro.slice(0, dniRegistro.length - 1);
    var letra_dni = dniRegistro[8].toUpperCase();
    var resto = numero % 23;
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T',];
    if (letras[resto] == letra_dni) {
      dni = true;
    } //34567765F

    if (
      nombreRegistro.match(/^[a-z ,.'-]+$/i) &&
      apellidosRegistro.match(/^[a-z ,.'-]+$/i) &&
      dniRegistro.match(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/) &&
      telefonoRegistro.match(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/) &&
      mailRegistro.match(
        /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/
      ) &&
      dni
    ) {
      const usuario = await Usuario.create({
        nombre: nombreRegistro,
        apellido: apellidosRegistro,
        dni: dniRegistro,
        telefono: telefonoRegistro,
        email: mailRegistro,
        contrasena: passwordHash,
        rol: 'user',
      });
      console.log(usuario.toJSON().user_id);
      const car = await Coche.create({
        matricula: matriculaRegistro,
        marca: marcaRegistro,
        modelo: modeloRegistro,
        fecha: fechaRegistro,
        fk_user_id: usuario.toJSON().user_id,
      });
      // console.log(usuario.toJSON());
      // console.log(car.toJSON());
      // nombre = req.body.nombreRegistro;
      // res.send(nombre);
      // sequelize.sync();
    } else {
      console.log('Datos invalidos');
    }
  }


  /**
   * @function conductor
   * @description Busca en la BBDD un conductor y nos lo devuelve al igual que la flota
   * @param {request} request
   * @param {response }response
   * @return Conductor en formato JSON
   */
  const staff = {
    conductor: (request, response) => {
      Conductore.find({}).then((conductor) => {
        response.json(conductor);
      });
    },
    flota: (request, response) => {
      Flota.find({}).then((flota) => {
        response.json(flota);
      });
    },
  };


  /**
   * 
   * @description Crea las solitudes de los usuarios, tiene un await
   * @function solicitud
   * @param {String} nombre input nombre
   * @param {String }apellido input apellido
   * @param {String }email input email 
   * @param {String }nif input nif
   * @param {String }telefono input telefono
   * @param {String }marca input marca
   * @param {String }modelo input modelo
   * @param {String }direccion input direccion
   * @param {String }reparacion input reparacion
   * @param {String }comprobacion Valor por defecto pendiente
   */

   solicitud = Solicitud.create({
    nombre: inputNombre,
    apellidos: inputApellidos,
    email: inputEmail,
    nif: inputNif,
    telefono: inputTelefono,
    marca: inputMarca,
    modelo: inputModelo,
    direccion: direccion,
    reparacion: inputInicidencia,
    comprobacion: "pendiente",
});



/**
 * @function setGrua
 * @description Con esto comprobamos si una grua existe
 * @const {String} grua Await del body
 * @return {String} Un 200 porque todo sale bien
 */

setGrua: async (req, res, next) => {
    try {
      const grua = await Grua.create(req.body);
      return res.status(200).json({
        success: true,
        data: grua,
      });
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(400).json({ error: 'Esta grúa ya existe' });
      }
      res.status(500).json({ error: 'Error en el servidor' });
    }
  }


/**
 * @function comprobarUsuario
 * @description Comprobamos si el usuario existe
 * @return Un render a la pagina 404
 */

  if (!usuario) {
    res.status(404);
    res.render('../views/pages/404');
  }