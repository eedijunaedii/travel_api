'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Cars', [
      {
        name: 'TOYOTA FORTUNER',
        license: 'D 1933 BD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'TOYOTA FOXY',
        license: 'B 1927 SB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'HYUNDAI H1',
        license: 'D 1516 DH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ISUZU ELF',
        license: 'B 8736 BA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'NISSAN SERENA',
        license: 'BK 1945 ID',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
