'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("customers", [
        {
            name: "Fulano",
            email: "fulano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: "Cicrano",
            email: "cicrano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: "Beltrano",
            email: "beltrano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("customers", null, {});
  }
};
