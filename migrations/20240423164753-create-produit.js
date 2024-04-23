'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produits', {
      pro_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      libelle: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.DECIMAL
      },
      cat_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Produits',{
      fields:['cat_id'],
      type:'foreign key',
      name:'cat_id_in_produit',
      references:{
        table:'Categories',
        field:'cat_id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produits');
  }
};