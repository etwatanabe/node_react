'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("contacts", [
        {
            name: "Fulano",
            email: "fulano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
            customer_id: 1,
        },
        {
            name: "Cicrano",
            email: "cicrano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
            customer_id: 2,
        },
        {
            name: "Beltrano",
            email: "beltrano@email.com",
            created_at: new Date(),
            updated_at: new Date(),
            customer_id: 3,
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("contacts", null, {});
  }
};
