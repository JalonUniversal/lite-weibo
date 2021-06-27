/**
 * @description json schema 验证中间件
 * @author JalonUniversal
 */
const { ErrorModel } = require('../model/ResModel');
const { jsonSchemaFailedInfo } = require('../model/ErrorInfo');

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 * @returns 
 */
function genValidator(validateFn) {
  return async function validator(ctx, next) {
    const data = ctx.request.body
    // 检验
    const error = validateFn(data);
    if(error) {
      // 验证失败
      ctx.body = new ErrorModel(jsonSchemaFailedInfo);
      return
    }
    // 验证成功 继续
    await next();
  }
}

module.exports = {
  genValidator,
}