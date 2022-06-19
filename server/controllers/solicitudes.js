const Solicitud = require('../models/Solicitud');

const solicitudes = {
    solicitudes: (req, res) => {
        res.render('../views/pages/solicitud');
    },
    solicituddone: async (req, res) => {
        const {
            inputNombre,
            inputApellidos,
            inputNif,
            inputTelefono,
            inputMarca,
            inputModelo,
            direccion,
            inputInicidencia,
            inputEmail,    
        } = req.body;

        const solicitud = await Solicitud.create({
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
    
    },
    
}


module.exports = solicitudes;
