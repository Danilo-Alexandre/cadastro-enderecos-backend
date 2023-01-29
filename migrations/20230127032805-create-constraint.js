'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("enderecos", {
      fields: ["fk_usuario"],
      type:"foreign key",
      name: "usuario",
      references:{
        table: "usuarios",
        field:"idUsuario"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("endereco", "fk_usuario")
  }
};
