const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Usuario = sequelize.define('Usuario', {
  //atributos da table são definidos aqui
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  primeiroNome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  }

}, {
});

console.log(User === sequelize.models.User); 