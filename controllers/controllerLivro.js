const { Sequelize } = require("sequelize");
const sequelize = require('../src/models/index').sequelize;
const Livro = require("../src/models/livro")(sequelize,Sequelize.DataTypes);
const Autor = require("../src/models/autor")(sequelize,Sequelize.DataTypes);
function findAll(req, res) {
  Livro.findAll().then((result) => res.json(result));
}

function findLivro(req, res) {
  Livro.findByPk(req.params.id).then((result) => res.json(result));
}
function countLivro(req,res){
  Livro.count().then((result)=>res.json(result))
}
function countEditora(req,res){
  Livro.findAll({
    attribute: [ 'editora', [sequelize.fn("COUNT", sequelize.col('editora')), "count"]],
    
    group: ['Livro.id','editora']
}).then((result) => res.json(result));
;
}
function addLivro(req, res) {
  Livro.create({
    nome: req.body.nome,
    imagem: req.body.imagem,
    editora: req.body.editora
  }).then((result) => res.json(result));
}
function addAutor(req, res) {
  Livro.create({
    nome: req.body.nome,
    idLivro: req.body.id
  }).then((result) => res.json(result));
}
async function updateLivro(req, res) {
  await Livro.update(
    {
      nome: req.body.nome,
    imagem: req.body.imagem,
    editora: req.body.editora
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Livro.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteLivro(req, res) {
  await Livro.destroy({
    where: {
      id: req.params.id,
    },
  });

  Livro.findAll().then((result) => res.json(result));
}

module.exports ={ findAll, addLivro, addAutor,countLivro, countEditora, findLivro, updateLivro, deleteLivro };
