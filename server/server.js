const express = require('express');
const cors = ('cors')
const app = express();

const pug = require('pug');
//const prueba = require("./public/script/front"); 

app.set('view engine', 'pug');


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));




app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');

app.listen(3000, () => {
  console.log(`Servidor corriendo`);
});
