'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [
      { 
        id: 1, 
        name: 'Розы', 
        slug: 'roses', 
        description: 'Королева цветов', 
        image: '/images/categories/roses.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 2, 
        name: 'Хризантемы', 
        slug: 'chrysanthemums', 
        description: 'Осенние цветы', 
        image: '/images/categories/chrysanthemums.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 3, 
        name: 'Тюльпаны', 
        slug: 'tulips', 
        description: 'Весенние цветы', 
        image: '/images/categories/tulips.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 4, 
        name: 'Пионы', 
        slug: 'peonies', 
        description: 'Пышные и ароматные', 
        image: '/images/categories/peonies.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 5, 
        name: 'Герберы', 
        slug: 'gerberas', 
        description: 'Солнечные цветы', 
        image: '/images/categories/gerberas.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 6, 
        name: 'Орхидеи', 
        slug: 'orchids', 
        description: 'Экзотические цветы', 
        image: '/images/categories/orchids.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        id: 7, 
        name: 'Букеты', 
        slug: 'bouquets', 
        description: 'Готовые композиции', 
        image: '/images/categories/bouquets.jpg',
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};