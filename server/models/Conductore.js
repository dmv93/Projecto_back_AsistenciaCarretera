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

// const conductor = Conductore({
//   nombre: 'Isacc',
//   apellidos: 'Ortega',
//   telefono: '1234567',
//   id_conductor: '65rt',
// });
//conductor.save();
module.exports = Conductore;
