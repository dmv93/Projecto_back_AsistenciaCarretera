const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Solicitud = sequelize.define('solicitudes', {
    id_solicitud: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellidos: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nif: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  direccion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reparacion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comprobacion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = Solicitud;
