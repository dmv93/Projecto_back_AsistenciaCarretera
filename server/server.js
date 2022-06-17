const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');

app.listen(3000, () => {
  console.log(`Servidor corriendo`);
});
