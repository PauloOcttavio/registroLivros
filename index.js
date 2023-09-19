require('dotenv').config();
require('crypto').randomBytes(64).toString('hex')
const routes = require("./rotas.js") ;
const db = require('./src/models/index.js')
const cors = require("cors")
const express = require('express');
const app = express();

app.use(cors());
app.use(function( req, res, next ) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-requested-with, content-type");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "1000000000");
    if ('OPTIONS' == req.method) { res.send(200); } else { next(); } 
});
app.use(express.json());
app.use(routes);

db.sequelize.sync(() => console.log(`Banco de dados conectado: minhaDB`));

app.listen(8000, () => console.log("Servidor iniciado na porta 8000"));