
const Usuario =require("../src/models/usuario");

function findAll(req, res) {
  Usuario.findAll().then((result) => res.json(result));
}

function findUsuario(req, res) {
  Usuario.findByPk(req.params.id).then((result) => res.json(result));
}

function addUsuario(req, res) {
  Usuario.create({
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email,
    telefone: req.body.telefone,
  }).then((result) => res.json(result));
}

async function updateUsuario(req, res) {
  await Usuario.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Usuario.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUsuario(req, res) {
  await Usuario.destroy({
    where: {
      id: req.params.id,
    },
  });

  Usuario.findAll().then((result) => res.json(result));
}

export default { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario };
