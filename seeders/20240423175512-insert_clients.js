'use strict';

const { defaultCategories } = require('../datas/categories');

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
   const listOfCategories = []

   defaultCategories.map(cat => {
      listOfCategories.push({libelle:cat})
   })

   //insert datas
   await queryInterface.bulkInsert('Categories', listOfCategories)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
