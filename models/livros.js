const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Livro = sequelize.define('Livro', {
  //atributos da table são definidos aqui
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano:{
    type: DataTypes.STRING
  },
  editora:{
    type: DataTypes.STRING
  },
  tema:{
    type: DataTypes.STRING
  },
  descricao:{
    type: DataTypes.STRING
  }
}, {
});
//cria a foreign key

console.log(Livro === sequelize.models.Livro); 

(async () => {
  await sequelize.sync();
  // Code here
})();
