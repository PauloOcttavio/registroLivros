const Acesso = sequelize.define('Acesso', {
    //atributos da table são definidos aqui
    acesso: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
  });
  //cria a foreign key
  Acesso.belongsTo(Usuario,{
      foreignKey: "id_usuario",
      targetKey:"id",
      allowNull:false
  })
  console.log(Acesso === sequelize.models.Acesso); 