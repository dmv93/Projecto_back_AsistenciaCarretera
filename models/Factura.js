const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// El esquema
const facturaSchema = new Schema({
  nombre: String,
  apellidos: String,
  cif: String,
  direccion: String,
  fecha: Date,
  trabajorealizado: Boolean,
  importe: Number,
  numerofactura: String,
});
// El modelo
const Factura = model('Factura', facturaSchema);

module.exports = Factura;
