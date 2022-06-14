const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');

app.listen(3000, () => {
  console.log(`Servidor corriendo`);
});
