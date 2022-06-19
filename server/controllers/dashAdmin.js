const Solicitud = require('../models/Solicitud');

const verSolicitudes = {

    verSolicitudes: async (req, res) => {
        const solicitudesBBDD = await Solicitud.findAll({
            where: { comprobacion: "pendiente" },
        });

        //console.log(solicitudesBBDD)
        res.render('../views/pages/dashAdmin', { solic: solicitudesBBDD });
    },
    modificarEstado: async (req, res) => {
        if (req.body.action == "aceptar") {

            await Solicitud.update({ comprobacion: "aceptada" }, {
                where: {
                    id_solicitud: req.body.id
                }
            });
            await res.send('../views/pages/dashAdmin');

            console.log("Hay que aceptar la solicitud")
        } else if (req.body.action == "rechazar") {

            await Solicitud.update({ comprobacion: "rechazada" }, {
                where: {
                    id_solicitud: req.body.id
                }
            });
            await res.send('../views/pages/dashAdmin');
            console.log("Hay que rechazar la solicitud")
        }



    }
}


module.exports = verSolicitudes;


