const { Router } = require('express');
const { Product, Category } = require('../db/models'); // Убедись, что путь к моделям правильный

const cvetiRouter = Router();

// GET /api/catalog/cveti/ - получить список всех цветов
cvetiRouter.get('/', async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Pragma', 'no-cache');
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['id', 'name', 'slug'] // Выбираем только нужные поля категории
        }
      ],
      attributes: [
        'id', 
        'name', 
        'description', 
        'price', 
        'images', 
        'inStock', 
        'isAvailable',
        'createdAt'
      ],
      order: [['createdAt', 'DESC']] // Сортировка по новизне
    });

    res.json({
      success: true,
      data: products,
      count: products.length
    });

  } catch (error) {
    console.error('Ошибка при получении списка цветов:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера при получении списка цветов',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/catalog/cveti/:id - получить один цветок по ID
cvetiRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          attributes: ['id', 'name', 'slug']
        }
      ]
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Цветок не найден'
      });
    }

    res.json({
      success: true,
      data: product
    });

  } catch (error) {
    console.error('Ошибка при получении цветка:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера при получении цветка',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = cvetiRouter;
