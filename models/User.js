const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    len: [4, 13],
    isAlphanumeric: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    len: [7],
    },
  },
},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User;