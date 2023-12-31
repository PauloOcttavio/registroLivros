'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livro.hasMany(models.Autor)
      models.Autor.belongsTo(Livro)
    }
  }
  Livro.init({
    nome: DataTypes.STRING,
    imagem: DataTypes.BLOB,
    editora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};