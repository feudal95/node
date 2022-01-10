const Sequalize = require('squelize');
const DB = require("../config/config"); //el archivo config.js tiene las propiedades de conexion en formato JSON


const sequelize = new Sequelize(DB.DBNAME, DB.USER, DB.USER, {
    host: DB.HOST,
    dialect: DB.DIALECT
  });
  const db = {};