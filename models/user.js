'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define association to Post model
      User.hasMany(models.Post, { foreignKey: 'userId' });
    }
  }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, // First name cannot be null
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false, // Last name cannot be null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Email cannot be null
      unique: true, // Email must be unique
      validate: {
        isEmail: true, // Validate email format
      },
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });

  return User;
};
