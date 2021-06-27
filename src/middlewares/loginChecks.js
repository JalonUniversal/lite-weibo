/**
 * @description json schema 验证中间件
 * @author JalonUniversal
 */

const { ErrorModel } = require('../model/ResModel');
const { loginCheckFailInfo } = require('../model/ErrorInfo');

/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
  if(ctx.session && ctx.session.userInfo) {
    await next();
    return;
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo);
}

/**
 * 页面 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginRedirect(ctx, next) {
  if(ctx.session && ctx.session.userInfo) {
    await next();
    return;
  }
  // 未登录
  const curUrl = ctx.url;
  ctx.redirect('/login?url=' + encodeURIComponent(curUrl));
}

module.exports = {
  loginCheck,
  loginRedirect,
}