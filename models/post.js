'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Define association to User model
      Post.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Title cannot be null
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false, // Content cannot be null
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // User ID cannot be null
    }
  }, {
    sequelize,
    modelName: 'Post',
    underscored: true,
  });

  return Post;
};
