const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Usuario = sequelize.define('usuarios', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dni: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rol: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = Usuario;
