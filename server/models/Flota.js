const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// El esquema
const flotaSchema = new Schema({
  marca: String,
  modelo: String,
  matricula: String,
  fecha_compra: String,
  ultima_revision: String,
  id_conductor: String,
});
// El modelo
const Flota = model('Flota', flotaSchema);

module.exports = Flota;
