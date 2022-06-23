const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socketIO = require('socket.io');
const http = require('http');

//cargar las variables entorno
dotenv.config({ path: './config/config.env' });

const app = express();

const pug = require('pug');

app.set('view engine', 'pug');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(require('./routes/routes'));
require('./databases/mongo');
require('./databases/mysql');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = socketIO(server);
require('./services/sockets')(io);

server.listen(PORT, () => {
  console.log(
    `Servidor corriendo en modo ${process.env.NODE_ENV} en el puerto ${PORT}`
  );
});
