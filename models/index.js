const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Project };