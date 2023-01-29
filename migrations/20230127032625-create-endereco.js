'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("enderecos", {
      idEndereco: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      fk_usuario: {
          type: Sequelize.INTEGER,
          notNull: true,
      },
      rua: {
          type: Sequelize.STRING,
          notNull: true
      },
      numero: {
          type: Sequelize.INTEGER,
          notNull: true
      },

      bairro: {
          type: Sequelize.STRING,
          notNull: true
      },

      cidade:{
          type: Sequelize.STRING,
          notNull: true
      },

      estado: {
          type: Sequelize.STRING,
          notNull: true
      },
      complemento: Sequelize.STRING

  },{
      tableName:"enderecos",
      timestamps: false
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("enderecos")
  }
};
