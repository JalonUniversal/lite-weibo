const Sequelize = require('sequelize');
const seq = require('../seq');

// 创建 User 模型 [名字默认加复数] 表名是 users
const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING, 
    comment: '昵称'
  },
  // auto create: createdAt & updatedAt
});

// 创建 BLOG 模型
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT, 
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER, 
    allowNull: false
  },
});

// 外键关联 Blog -> User 建立外键关系
Blog.belongsTo(User, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId',
});
// 外键关联 User -> Blog 建立外键关系
User.hasMany(Blog, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId',
});

module.exports = {
  User,
  Blog,
}