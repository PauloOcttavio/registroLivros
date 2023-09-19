require('dotenv').config();
require('crypto').randomBytes(64).toString('hex')
const routes = require("./rotas.js") ;
const db = require('./src/models/index.js')
const cors = require("cors")
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

db.sequelize.sync(() => console.log(`Banco de dados conectado: minhaDB`));

app.listen(8080, () => console.log("Servidor iniciado na porta 8000"));