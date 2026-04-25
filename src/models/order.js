'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    customerId: DataTypes.INTEGER,
    storeId: DataTypes.INTEGER,
    statusId: DataTypes.STRING,
    totalPrice: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};