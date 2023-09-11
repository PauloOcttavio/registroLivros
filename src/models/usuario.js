'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Telefone,{
        foreignKey:'usuarioId'
      })
      Usuario.hasMany(models.Email,{
        foreignKey:'usuarioId'
      })
      Usuario.hasMany(models.Associacao,{
        foreignKey:'usuarioId'
      })
    }
  }
  Usuario.init({
    primeiroNome: DataTypes.STRING,
    ultimoNome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });

 module.exports = Usuario
