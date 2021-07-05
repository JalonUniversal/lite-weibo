/**
 * @description 博客数据模型
 * @author JalonUniversal
 */
const seq = require('../seq');
const { STRING, INTEGER, TEXT } = require('../types');

// blogs
const Blog = seq.define('blog', {
  userId: {
    type: INTEGER,
    commnet: '用户 ID'
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '微博内容'
  },
  image: {
    type: STRING,
    comment: '图片地址'
  }
});

module.exports = Blog;