// @desc Todas las grúas
// @route GET /grua

const Grua = require('../models/Grua');

// @access Public

const grua = {
  getGrua: async (req, res, next) => {
    try {
      const gruas = await Grua.find();
      return res.status(200).json({
        success: true,
        count: gruas.length,
        data: gruas,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  },
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
  },
};

module.exports = grua;
