const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const pagina = require('../controllers/paginas');
const usuarios = require('../controllers/usuarios');
const staff = require('../controllers/staff');
const auth = require('../controllers/auth');
const grua = require('../controllers/grua');

const solicitudes = require('../controllers/solicitudes');
//const verSolicitudes = require('../controllers/dashAdmin');

const router = express.Router();
const { home, login, misionVision, contacto, coche, tarifas } = pagina;
const { registro, registrodone, factura } = usuarios;
const { conductor, flota } = staff;
const { getGrua, setGrua } = grua;

router.get('/', home);
router.get('/login', login);
router.post('/login', urlencodedParser, auth.loginCtrl);
router.get('/misionVision', misionVision);
router.get('/contacto', contacto);
router.get('/coche', coche);
router.get('/solicitud', solicitudes.solicitudes);
router.post('/solicitud', urlencodedParser, solicitudes.solicituddone);
router.get('/tarifas', tarifas);
router.get('/registro', registro);
router.post('/registro', urlencodedParser, registrodone);
router.get('/factura', factura);
router.get('/conductor', conductor);
router.get('/flota', flota);
router.get('/grua', getGrua);
router.post('/grua', urlencodedParser, setGrua);
router.get('/dashAdmin', solicitudes.verSolicitudes);
router.post('/dashboard', solicitudes.modificarEstado);

module.exports = router;
