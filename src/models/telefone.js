'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Usuario = require('./usuario');

  
 export default class Telefone extends Model {
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
 Telefone.belongsTo(Usuario);

 Usuario.hasMany(Telefone,{
    foreignKey:'usuarioId'
 });
   