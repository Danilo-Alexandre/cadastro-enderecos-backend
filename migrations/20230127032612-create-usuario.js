







'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios",{
      idUsuario: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      nome: {
          type: Sequelize.STRING,
          notNull: true
      },
      email: {
          type: Sequelize.STRING,
          notNull: true
      },
      senha:{
          type: Sequelize.STRING,
          notNull: true
      }
  },{
      tableName:"usuarios",
      timestamps: false
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios")
  }
};

