const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// El esquema
const conductoreSchema = new Schema({
  nombre: String,
  apellidos: String,
  telefono: String,
  id_conductor: String,
});
// El modelo
const Conductore = model('Conductore', conductoreSchema);

module.exports = Conductore;
