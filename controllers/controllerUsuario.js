const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");
const sequelize = require('../src/models/index').sequelize;
const Usuario = require("../src/models/usuario")(sequelize,Sequelize.DataTypes);

async function findAll(req, res) {
  await Usuario.findAll().then((result) => res.json(result));
};
function findUsuario(req, res) {
  Usuario.findByPk(req.params.id).then((result) => res.json(result));
};
async function login(req,res){
  const user = await Usuario.findOne({ where : {nome : req.body.nome }});
  if(user){
     const password_valid = await bcrypt.compare(req.body.senha,user.senha);
     if(password_valid){
         token = jwt.sign({ "id" : user.id,"senha" : user.senha,"nome":user.nome },process.env.SECRET);
         res.status(200).json({ token : token });
     } else {
       res.status(400).json({ error : "senha incorreta" });
     }
   
   }else{
     res.status(404).json({ error : "Usuario não existe" });
   }
   
   }
function findOneUsuario(req, res) {
  Usuario.findByPk(req.params.nome).then((result) => res.json(result));
};
function findSenha(req, res) {
  Usuario.findByPk(req.params.senha).then((result) => res.json(result));
};
async function addUsuario(req, res) {
  const salt = await bcrypt.genSalt(10);
  const usuarioExiste =await Usuario.findOne({ where : {nome : req.body.nome }})
  if (!usuarioExiste) {
    await Usuario.create({
    nome: req.body.nome,
    senha: await bcrypt.hash(req.body.senha, salt),
    email: req.body.email,
    telefone: req.body.telefone,
  }).then((result) => res.json(result));
  } else {
    res.status(404).json({erro: "usuario ja existe"})
  }
  }
  

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

module.exports= { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario,login };
