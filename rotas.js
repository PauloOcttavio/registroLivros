const express = require('express');
const usuario = require('./controllers/controllerUsuario');
const livro = require("./controllers/controllerLivro")
const routes = express.Router();
const jwt = require("jsonwebtoken")

routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
routes.post(
  "/login",
  (req, res) => {
      const { usuario, senha } = req.body;

      if (usuario.findOne({nome:req.body.nome}) && senha === usuario.findSenha({senha:req.body.senha})) {
          
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
router.options('/usuario', cors())
routes.get("/usuario",usuario.findAll);
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

