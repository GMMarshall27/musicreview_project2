const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER
        , allowNull: false
        , primaryKey: true
        , autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING
        , allowNull: false
    },
    album_id: {
        type: DataTypes.STRING
        , allowNull: false
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;