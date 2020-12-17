'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, {
        foreignKey: 'category_id'
      });
      this.belongsTo(models.status, {
        foreignKey: 'status_id'
      });
      this.belongsTo(models.user, {
        foreignKey: 'user_id'
      });


   
    }
  };
  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'task',
  });
  return Task;
};