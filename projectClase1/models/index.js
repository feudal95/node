const Sequelize = require('sequelize');
const DB = require("../config/config"); //el archivo config.js tiene las propiedades de conexion en formato JSON


const sequelize = new Sequelize(DB.DBNAME, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.DIALECT,
  });
  const db = {};

  db.Sequalize= Sequelize;
  db.sequelize = sequelize;

  db.community = require('./community')(sequelize, Sequelize);
  db.address = require('./address')(sequelize, Sequelize);
  db.members = require('./members')(sequelize, Sequelize);

  module.exports = db;