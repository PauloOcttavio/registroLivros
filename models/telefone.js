'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class Telefone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Telefone.belongsTo(models.Usuario,{
        foreignKey:'usuarioId',
        onDelete: 'CASCADE'
      })
    }
  }
  Telefone.init({
    numeroDeTelefone: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Telefone',
  });
  return Telefone;
};