/**
 * @description user controller
 * @author JalonUniversal
 */

const { getUserInfo } = require('../services/user');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const ErrorInfo = require('../model/ErrorInfo');

/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  if(userInfo) {
    return new SuccessModel(userInfo);
  } else {
    return new ErrorModel(ErrorInfo.registerUserNameNotExistInfo);
  }
}

module.exports = {
  isExist,
}