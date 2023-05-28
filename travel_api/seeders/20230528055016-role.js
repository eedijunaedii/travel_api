'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Roles', [
      {name: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'STAFF', createdAt: new Date(), updatedAt: new Date()},
      {name: 'PM', createdAt: new Date(), updatedAt: new Date()},
      {name: 'ADMIN', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  async down(queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
