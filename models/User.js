const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('User', {
  userId: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
    len: [4, 13],
    isAlphanumeric: true,
    },
  },
  password: {
    type: Datatypes.STRING,
    allowNull: false,
    validate: {
    len: [7],
    },
  }
})