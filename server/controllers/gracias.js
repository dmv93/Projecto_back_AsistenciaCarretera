const Gracias = require('../models/Gracias')

const gracia = {
    getGracias: async (req, res, next) => {
        const gracias = await Gracias.create(req.body);
        return res.status(200).json({
            success: true,
            data: grua,
          });
    }
}