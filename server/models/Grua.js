const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const geocoder = require('../helpers/geocoder');
// El esquema
const gruaSchema = new Schema({
  gruaId: {
    type: String,
    required: [true, 'Por favor introduzca la id de la grúa'],
    unique: true,
    trim: true,
    maxlength: [10, 'menos de 10 caracteres'],
  },
  address: {
    type: String,
    required: [true, 'Por favor, ponga una dirección'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

gruaSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: ' Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  // para no guardar la dirección en la base de datos
  this.address = undefined;
  next();
});
// El modelo
const Grua = model('Grua', gruaSchema);
module.exports = Grua;
