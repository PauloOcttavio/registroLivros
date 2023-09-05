require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const sequelize = new Sequelize

sequelize.sync();
console.log("table criada com sucesso");
console.log(process.env.DB_USERNAME)