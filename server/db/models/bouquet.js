'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bouquet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bouquet.belongsTo(models.Product, { 
        foreignKey: 'productId',
        as: 'product'  // опционально, для удобства
      });
    }
  }
  Bouquet.init({
    productId: DataTypes.INTEGER,
    size: DataTypes.STRING,
    occasion: DataTypes.STRING,
    flowers: DataTypes.JSON,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Bouquet',
  });
  return Bouquet;
};