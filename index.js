require('dotenv').config();
const jwt = require("jsonwebtoken")
require('crypto').randomBytes(64).toString('hex')
const routes = require("./rotas.js") ;
const db = require('./src/models/index.js')

const express = require('express');
const app = express();

app.use(express.json());
app.use(routes);
db.sequelize.sync(() => console.log(`Banco de dados conectado: minhaDB`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));