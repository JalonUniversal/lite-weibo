/**
 * @description 首页 controller
 * @author JalonUniversal
 */
const xss = require('xss');
const ErrorInfo = require('../model/ErrorInfo');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const { createBlog } = require('../services/blog');
/**
 * 创建微博
 * @param {Object} param0 创建微博所需的数据 { userId, content, image }
 */
async function create({ userId, content, image }) {
  try {
    const blog = await createBlog({ 
      userId, 
      content: xss(content), 
      image 
    });
    return new SuccessModel(blog);
  } catch(ex) {
    console.error(ex.message, ex.stack);
    return new ErrorModel(ErrorInfo.createBlogFailInfo);
  }
}

module.exports = {
  create,
}