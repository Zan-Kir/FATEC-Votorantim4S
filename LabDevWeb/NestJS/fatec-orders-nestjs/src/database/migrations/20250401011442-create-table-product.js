'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('product', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT(14, 2)
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('product');
  },
};

