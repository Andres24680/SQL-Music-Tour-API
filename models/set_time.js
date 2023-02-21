'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      event_id: {
        type: DataTypes.SMALLINT
      },
      stage_id: {
        type: DataTypes.SMALLINT
      },
      band_id: {
        type: DataTypes.SMALLINT
      },
      start_time: {
        type: DataTypes.DATE
      },
      end_time: {
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'set_time',
  });
  return set_time;
};