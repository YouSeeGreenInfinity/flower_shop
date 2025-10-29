'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL(10, 2), // Более точное хранение цен
        allowNull: false
      },
      images: {
        type: Sequelize.JSON
      },
      inStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Если категорию удалят, товар останется
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Добавляем индекс для ускорения поиска по категориям
    await queryInterface.addIndex('Products', ['categoryId']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};