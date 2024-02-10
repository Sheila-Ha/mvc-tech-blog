const sequelize = require('../config/jconnection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: user[Math.floor(Math.randon()* users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();