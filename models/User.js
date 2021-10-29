const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

const User = sequelize.define('User', {
  id: {
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
{    hooks: {
  beforeCreate: async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
  }
},

  
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
  }
)

module.exports = User;