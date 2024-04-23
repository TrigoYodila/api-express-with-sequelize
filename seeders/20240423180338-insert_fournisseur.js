'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Fournisseurs', [
      {libelle:'Marsavco', adresse:'Kinshasa Gombe',createdAt:new Date(),updatedAt: new Date()},
      {libelle:'Beltexco', adresse:'Gombe Kinshasa',createdAt:new Date(),updatedAt: new Date()},
      { libelle:'Socimex', adresse:'Kalamu',createdAt:new Date(),updatedAt: new Date()}
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * 
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


