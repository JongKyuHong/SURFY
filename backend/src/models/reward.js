'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reward.belongsTo(models['survey'],{foreignKey:"fk_surveys"});
      // models.survey.hasMany(models['roulette_result'],{foreignKey:'fk_rewards'});
    }
  }
  reward.init({
    probability: DataTypes.DOUBLE,
    reward: DataTypes.STRING,
    remain: DataTypes.INTEGER,
    cnt: DataTypes.INTEGER,
    fk_surveys: DataTypes.INTEGER,
    need_phone:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'reward',
  });
  return reward;
};