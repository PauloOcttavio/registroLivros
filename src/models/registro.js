'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Registro.belongsTo(models.Livro)
      models.Livro.hasOne(Registro)
      Registro.belongsTo(models.Usuario)
      models.Usuario.hasOne(Registro)
    }
  }
  registro.init({
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'registro',
  });
  return Registro;
};