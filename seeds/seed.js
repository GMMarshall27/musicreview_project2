const sequelize = require('../config/connection');
const User = require('../models/user');

const testUser = require('./test.json');

const fakeNews = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(testUser, {
    returning: true,
  });

  process.exit(0);
};

fakeNews();