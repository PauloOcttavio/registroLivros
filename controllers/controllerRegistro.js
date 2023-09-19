const { Sequelize } = require("sequelize");
const sequelize = require('../src/models/index').sequelize;
const Registro = require("../src/models/registro")(sequelize,Sequelize.DataTypes);

function findAll(req, res) {
  Registro.findAll().then((result) => res.json(result));
}

function findRegistro(req, res) {
  Registro.findByPk(req.params.id).then((result) => res.json(result));
}

function addRegistro(req, res) {
  Registro.create({
    nome: req.body.nome,
    email: req.body.email,
  }).then((result) => res.json(result));
}

async function updateRegistro(req, res) {
  await Registro.update(
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

  Registro.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteRegistro(req, res) {
  await Registro.destroy({
    where: {
      id: req.params.id,
    },
  });

  Registro.findAll().then((result) => res.json(result));
}

module.exports ={ findAll, addRegistro, findRegistro, updateRegistro, deleteRegistro };
