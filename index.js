import dotenv from "dotenv"
import express from "express";
import routes from "./rotas.js";
import * as db from "./src/models/index.cjs";

dotenv.config()
const app = express();

app.use(express.json());
app.use(routes);
db.sync(() => console.log(`Banco de dados conectado: minhaDB`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));