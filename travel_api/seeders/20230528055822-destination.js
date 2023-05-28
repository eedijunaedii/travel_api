'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Destinations', [
      {
        from_terminal_id: 1,
        to_terminal_id: 3,
        price: 86000,
        mileage: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from_terminal_id: 1,
        to_terminal_id: 2,
        price: 99000,
        mileage: 265,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from_terminal_id: 3,
        to_terminal_id: 2,
        price: 55000,
        mileage: 161,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from_terminal_id: 2,
        to_terminal_id: 1,
        price: 123000,
        mileage: 345,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from_terminal_id: 2,
        to_terminal_id: 3,
        price: 156000,
        mileage: 587,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        from_terminal_id: 3,
        to_terminal_id: 1,
        price: 246000,
        mileage: 786,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Destinations', null, {});
  },
};
