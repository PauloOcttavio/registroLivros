const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Email = sequelize.define('Email', {
  //atributos da table são definidos aqui
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});
//cria a foreign key
Email.belongsTo(Usuario,{
    foreignKey: "id_usuario",
    targetKey:"id",
    allowNull:false
})
console.log(Email === sequelize.models.Email); 