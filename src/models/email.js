'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');
import Usuario from './usuario';

  
 export default class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Email.init({
    email: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Email',
  });
  Usuario.hasmany(Email)
  Email.belongsTo(Usuario,{
        foreignKey:'usuarioId',
        onDelete: 'CASCADE'
      })
    
      