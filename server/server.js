const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');

app.post('/form', urlencodedParser, (req, res) => {
  
  var sql = "INSERT INTO Usuarios (NULL, nombre, apellidos,  dni, matricula, telefono, email, marca, modelo, fecha,) VALUES ?";
  var values = [
    [req.body.nombreRegistro,
    req.body.apellidosRegistro,
    req.body.dniRegistro,
    req.body.registroMatricula,
    req.body.registroTelefono,
    req.body.mailRegistro,
    req.body.marcaRegistro,
    req.body.modeloRegistro,
    req.body.fechaRegistro],

  ];
  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //console.log('Nombre:', req.body.nombreRegistro, '\nApellidos: ', req.body.apellidosRegistro, '\nEmail: ', req.body.mailRegistro, '\nMarca: ', req.body.marcaRegistro);
  //res.send(req.body);
});

app.listen(3000, () => {
  console.log(`Servidor corriendo`);
});
