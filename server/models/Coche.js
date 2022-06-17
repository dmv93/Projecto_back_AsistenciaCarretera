const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');

const Coche = sequelize.define('coches', {
    id_coches: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  matricula: {
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
  fecha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    foreignKey: true
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = Coche;

