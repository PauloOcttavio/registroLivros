'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('registros',{
      fields: ["livroId"],
      type: 'foreign key',
      name: "livro-associacao",
      references: {
        table: 'Livros',
        field: 'id'
      }
    });
    queryInterface.addConstraint('registros',{
      fields: ["usuarioId"],
      type: 'foreign key',
      name: "usuarioassociacao",
      references: {
        table: 'Usuarios',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
