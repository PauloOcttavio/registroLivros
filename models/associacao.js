'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Associacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Associacao.belongsTo(models.Usuario,{
        foreignKey:'usuarioId',
        onDelete: 'CASCADE'
      })
    }
  }
  Associacao.init({
    associacao: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Associacao',
  });
  return Associacao;
};