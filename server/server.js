const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/routes'));
require('./databases/mongo');

app.listen(3000, () => {
  console.log(`Servidor corriendo`);
});
