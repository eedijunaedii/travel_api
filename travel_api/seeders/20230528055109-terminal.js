'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Terminals', [
      {name: 'PULO GADUNG', createdAt: new Date(), updatedAt: new Date()},
      {name: 'LEUWI PANJANG', createdAt: new Date(), updatedAt: new Date()},
      {name: 'CICAHEUM', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Terminals', null, {});
  },
};
