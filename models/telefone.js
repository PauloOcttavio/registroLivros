
module.exports = (sequelize, Sequelize) => {
    const Telefone = sequelize.define("Telefone", {
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true
      },
    });
  
    Telefone.associate = function (models) {
      Telefone.BelongsTo(models.item, {
      });
    };
  
    return Telefone;
  };