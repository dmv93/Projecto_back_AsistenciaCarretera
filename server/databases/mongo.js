const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/Asis_carretera';
//const connectionString =
// 'mongodb+srv://dima:dimaCastro2022@cluster0.c9dlfbd.mongodb.net/asistencia?retryWrites=true&w=majority';
// conexion a MongoDB
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Conexión con MongoDB establecida');
  })
  .catch((err) => {
    console.error(err);
  });
