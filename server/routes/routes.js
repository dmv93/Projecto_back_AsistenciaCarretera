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
const { home, login } = pagina;
router.get('/', home);
router.get('/login', login);
router.post('/login', urlencodedParser, auth.loginCtrl);
router.get('/misionVision', pagina.misionVision);
router.get('/contacto', pagina.contacto);
router.get('/coche', pagina.coche);
router.get('/solicitud', solicitudes.solicitudes);
router.post('/solicitud', urlencodedParser, solicitudes.solicituddone);
router.get('/dashAdmin', solicitudes.verSolicitudes);
router.get('/tarifas', pagina.tarifas);
router.get('/registro', usuarios.registro);
router.post('/registro', urlencodedParser, usuarios.registrodone);
router.get('/factura', usuarios.factura);
router.get('/conductor', staff.conductor);
router.get('/flota', staff.flota);
router.get('/grua', grua.getGrua);
router.post('/grua', urlencodedParser, grua.setGrua);
router.post('/dashboard', solicitudes.modificarEstado);

module.exports = router;
