'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meet_greet.init({
    meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      event_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      },
      band_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      },
      meet_start_time: {
        allowNull: false,
        type: DataTypes.DATE
      },
      meet_end_time: {
        allowNull: false,
        type: DataTypes.DATE
      },
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};