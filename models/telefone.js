const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Telefone = sequelize.define('Telefone', {
  //atributos da table são definidos aqui
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
});
//cria a foreign key
Telefone.belongsTo(Usuario,{
    foreignKey: "id_usuario",
    targetKey:"id",
    allowNull: false
})
console.log(Telefone === sequelize.models.Telefone); 