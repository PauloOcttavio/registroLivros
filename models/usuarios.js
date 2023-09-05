
  module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
      id: {
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
    });
  
    Usuario.associate = function (models) {
      Usuario.hasMany(models.item, {
        onDelete: "CASCADE",
      });
    };
  
    return Usuario;
  };