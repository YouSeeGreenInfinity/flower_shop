'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // При удалении пользователя удаляем отзывы
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' // При удалении товара удаляем отзывы
      },
      rating: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
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
    await queryInterface.addIndex('Reviews', ['userId', 'productId']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};