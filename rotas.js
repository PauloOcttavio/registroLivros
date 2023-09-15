const express = require('express');
const usuario = require('./controllers/controllerUsuario');
const livro = require("./controllers/controllerLivro")
const routes = express.Router();
const { expressjwt: jwt } = require("express-jwt");

routes.post(
  "/login",
  (req, res) => {
      const { usuario, senha } = req.body;

      if (usuario === "marcelo" && senha === "123456") {
          const jwt = require("jsonwebtoken");
          const dadosUsuario = {
              nome: "marcelo",
              email: "teste@gmail.com",
              id: 1
          };
          
          const chavePrivada = "consolelog.com.br";

          jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
              if (err) {
                  res
                      .status(500)
                      .json({ mensagem: "Erro ao gerar o JWT" });

                  return;
              }

              res.set("x-access-token", token);
              res.end();
          });
      } else {
          res.status(401);
          res.end();
      }
  }
);

// ... (código ocultado) ...
routes.get("/usuario",
jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }),
 usuario.findAll);
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

