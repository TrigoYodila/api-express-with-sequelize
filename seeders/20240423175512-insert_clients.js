'use strict';

const { DEFAULT_CATEGORIES } = require('../datas/categories')

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

   DEFAULT_CATEGORIES.map(cat => {
      listOfCategories.push({libelle:cat,createdAt:new Date(),updatedAt: new Date()})
   })

   //insert datas
   await queryInterface.bulkInsert('Categories', listOfCategories, {})
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


