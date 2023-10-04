const express = require('express');
const usuario = require('./controllers/controllerUsuario');
const livro = require("./controllers/controllerLivro")
const routes = express.Router();


routes.get("/usuario",usuario.findAll);
routes.get("/numerodeusuarios",usuario.countUsuarios);
routes.post("/usuario", usuario.addUsuario);
routes.get("/usuario/:id", usuario.findUsuario);
routes.put("/usuario/:id", usuario.updateUsuario);
routes.delete("/usuario/:id", usuario.deleteUsuario);


routes.get("/livro", livro.findAll);
routes.get("/editora", livro.countEditora);
routes.get("/numerodelivros", livro.countLivro);
routes.post("/livro", livro.addLivro);
routes.post("/autor", livro.addAutor);
routes.get("/livro/:id", livro.findLivro);
routes.put("/livro/:id", livro.updateLivro);
routes.delete("/livro/:id", livro.deleteLivro);



routes.post('/login',usuario.login);
module.exports = routes;