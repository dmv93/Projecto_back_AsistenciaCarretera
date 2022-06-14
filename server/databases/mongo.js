const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/Asis_carretera';

// conexion a MongoDB
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error(err);
  });
