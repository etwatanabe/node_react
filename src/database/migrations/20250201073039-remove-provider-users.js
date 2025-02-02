"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn("users", "provider");
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.addColumn("users", "provider", {
            type: Sequelize.BOOLEAN,
            default: false,
            allowNull: false,
        });
    },
};
