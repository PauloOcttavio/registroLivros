const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Registro = sequelize.define('Registro', {
  //atributos da table são definidos aqui
  Registro: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
});
//cria a foreign key
Registro.belongsTo(Usuario,{
    foreignKey: "id_usuario",
    targetKey:"id",
    allowNull:false
})
Registro.belongsTo(livro,{
    foreignKey: "id_livro",
    targetKey:"id",
    allowNull:false
})
console.log(Registro === sequelize.models.Registro); 
