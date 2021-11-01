const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    }
},
{ sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'Post',
}
);
module.exports = Post;
