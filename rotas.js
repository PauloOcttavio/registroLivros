const express = require('express');
const usuario = require('./controllers/controllerUsuario');
const livro = require("./controllers/controllerLivro")
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});


routes.get("/usuario", usuario.findAll);
routes.post("/usuario", usuario.addUsuario);
routes.get("/usuario/:id", usuario.findUsuario);
routes.put("/usuario/:id", usuario.updateUsuario);
routes.delete("/usuario/:id", usuario.deleteUsuario);


routes.get("/livro", livro.findAll);
routes.post("/livro", livro.addLivro);
routes.get("/livro/:id", livro.findLivro);
routes.put("/livro/:id", livro.updateLivro);
routes.delete("/livro/:id", livro.deleteLivro);

module.exports = routes;

