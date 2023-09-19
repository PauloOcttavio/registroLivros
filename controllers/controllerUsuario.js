
const { Sequelize } = require("sequelize");
const sequelize = require('../src/models/index').sequelize;
const Usuario = require("../src/models/usuario")(sequelize,Sequelize.DataTypes);

async function findAll(req, res) {
  await Usuario.findAll().then((result) => res.json(result));
};
function findUsuario(req, res) {
  Usuario.findByPk(req.params.id).then((result) => res.json(result));
};

function findOne(req, res) {
  Usuario.findByPk(req.params.nome).then((result) => res.json(result));
};
function findSenha(req, res) {
  Usuario.findByPk(req.params.senha).then((result) => res.json(result));
};
async function addUsuario(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  await Usuario.create({
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email,
    telefone: req.body.telefone,
  }).then((result) => res.json(result));
};

async function updateUsuario(req, res) {
  await Usuario.update(
    {
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email,
      telefone: req.body.telefone
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Usuario.findByPk(req.params.id).then((result) => res.json(result));
};

async function deleteUsuario(req, res) {
  await Usuario.destroy({
    where: {
      id: req.params.id,
    },
  });

  Usuario.findAll().then((result) => res.json(result));
}

module.exports= { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario };
