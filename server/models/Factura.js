const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// El esquema
const facturaSchema = new Schema({
  nombre: String,
  apellidos: String,
  cif: String,
  direccion: String,
  fecha: String,
  trabajorealizado: String,
  importe: String,
  numerofactura: String,
});
// El modelo
const Factura = model('Factura', facturaSchema);

const facture = new Factura({
  nombre: "Anibal",
  apellidos: "Pe",
  cif: "b593934934",
  direccion: "calle habana",
  fecha: "1991/01/01",
  trabajorealizado: "pinchazo",
  importe: "50",
  numerofactura: "1",
})


facture.save()
module.exports = Factura;

