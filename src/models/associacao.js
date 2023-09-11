'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');
import Usuario from './usuario';
  
 export default class Associacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Associacao.init({
    associacao: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Associacao',
  });
  Usuario.hasmany(Associacao)
  Associacao.belongsTo(Usuario,{
        foreignKey:'usuarioId',
        onDelete: 'CASCADE'
      })
   
