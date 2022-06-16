const Conductore = require('../models/Conductore');
const Flota = require('../models/Flota');

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
module.exports = staff;
