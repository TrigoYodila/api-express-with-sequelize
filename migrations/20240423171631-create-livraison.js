'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Livraisons', {
      liv_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      date_livraison: {
        type: Sequelize.DATE
      },
      pro_id: {
        type: Sequelize.INTEGER
      },
      fss_id: {
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
    await queryInterface.addConstraint('Livraisons',{
      fields:['pro_id'],
      type:'foreign key',
      name:'pro_id_in_livraison',
      references:{
        table:'Produits',
        field:'pro_id'
      }
    })
    await queryInterface.addConstraint('Livraisons',{
      fields:['fss_id'],
      type:'foreign key',
      name:'fss_id_in_livraison',
      references:{
        table:'Fournisseurs',
        field:'fss_id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Livraisons');
  }
};