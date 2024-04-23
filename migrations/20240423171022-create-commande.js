'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Commandes', {
      com_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      date_commande: {
        type: Sequelize.DATE
      },
      pro_id: {
        type: Sequelize.INTEGER
      },
      cli_id: {
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
    await queryInterface.addConstraint('Commandes',{
      fields:['pro_id'],
      type:'foreign key',
      name:'pro_id_in_commande',
      references:{
        table:'Produits',
        field:'pro_id'
      }
    })
    await queryInterface.addConstraint('Commandes',{
      fields:['cli_id'],
      type:'foreign key',
      name:'cli_id_in_commande',
      references:{
        table:'Clients',
        field:'cli_id'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Commandes');
  }
};