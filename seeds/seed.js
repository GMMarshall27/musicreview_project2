const sequelize = require('../config/connection');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const testUser = require('./test.json');

const fakeNews = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(testUser, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

fakeNews();