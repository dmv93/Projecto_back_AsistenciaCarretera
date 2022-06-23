const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const graciasSchema = new Schema({
    nombre: String,
    apellidos: String,
    telefono: String,
    correo: String,
    mensaje: String
});

const Gracias = model('Gracia', graciasSchema);

module.exports = Gracias;