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
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Красные розы',
        description: 'Прекрасные красные розы, символ любви и страсти. Свежие цветы из голландских питомников.',
        price: 2500.00,
        images: JSON.stringify([
          'https://example.com/images/red-roses-1.jpg',
          'https://example.com/images/red-roses-2.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 1, // Розы
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Белые хризантемы',
        description: 'Нежные белые хризантемы, символ чистоты и искренности. Идеальны для торжественных мероприятий.',
        price: 1800.00,
        images: JSON.stringify([
          'https://example.com/images/white-chrysanthemums-1.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 2, // Хризантемы
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Фиолетовые тюльпаны',
        description: 'Элегантные фиолетовые тюльпаны с тонким ароматом. Отлично подходят для весенних букетов.',
        price: 1200.00,
        images: JSON.stringify([
          'https://example.com/images/purple-tulips-1.jpg',
          'https://example.com/images/purple-tulips-2.jpg',
          'https://example.com/images/purple-tulips-3.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 3, // Тюльпаны
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Розовые пионы',
        description: 'Пышные розовые пионы - роскошные цветы с нежным ароматом. Хит сезона!',
        price: 3200.00,
        images: JSON.stringify([
          'https://example.com/images/pink-peonies-1.jpg'
        ]),
        inStock: false,
        isAvailable: true,
        categoryId: 4, // Пионы
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Желтые герберы',
        description: 'Солнечные желтые герберы, которые поднимут настроение в любой день. Долго сохраняют свежесть.',
        price: 1500.00,
        images: JSON.stringify([
          'https://example.com/images/yellow-gerberas-1.jpg',
          'https://example.com/images/yellow-gerberas-2.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 5, // Герберы
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Синие орхидеи',
        description: 'Экзотические синие орхидеи редкого сорта. Для особых случаев и ценителей прекрасного.',
        price: 4500.00,
        images: JSON.stringify([
          'https://example.com/images/blue-orchids-1.jpg'
        ]),
        inStock: true,
        isAvailable: false,
        categoryId: 6, // Орхидеи
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Букет "Нежность"',
        description: 'Композиция из белых роз и гипсофилы. Идеален для невесты или романтического свидания.',
        price: 3800.00,
        images: JSON.stringify([
          'https://example.com/images/tenderness-bouquet-1.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 7, // Букеты
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Смешанный букет "Радуга"',
        description: 'Яркий букет из разноцветных тюльпанов, гербер и хризантем. Настоящий взрыв красок!',
        price: 2800.00,
        images: JSON.stringify([
          'https://example.com/images/rainbow-bouquet-1.jpg',
          'https://example.com/images/rainbow-bouquet-2.jpg'
        ]),
        inStock: true,
        isAvailable: true,
        categoryId: 7, // Букеты
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
    await queryInterface.bulkDelete('Products', null, {});
  }
};
