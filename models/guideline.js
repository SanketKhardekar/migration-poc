"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class guideline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  guideline.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "guideline",
      underscored: true,
    }
  );
  return guideline;
};
