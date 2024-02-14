const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  //console.log('test1');
  await sequelize.sync({ force: true });
  //console.log('test2');
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random()* users.length)].id,
    });
  }

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();