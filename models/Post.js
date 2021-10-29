const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
})


module.exports = Post;