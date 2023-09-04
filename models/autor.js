const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Autor = sequelize.define('Autor', {
  //atributos da table são definidos aqui
  Autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});
//cria a foreign key
Autor.belongsTo(Livros,{
    foreignKey: "id_livro",
    targetKey:"id",
    allowNull:false
})
console.log(Autor === sequelize.models.Autor); 