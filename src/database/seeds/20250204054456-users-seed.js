'use strict';

const bcrypt = require ("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("12345678", 8);


    await queryInterface.bulkInsert("users", [
        {
            name: "Fulano",
            email: "fulano@email.com",
            password_hash: hashedPassword,
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: "Cicrano",
            email: "cicrano@email.com",
            password_hash: hashedPassword,
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: "Beltrano",
            email: "beltrano@email.com",
            password_hash: hashedPassword,
            created_at: new Date(),
            updated_at: new Date(),
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
