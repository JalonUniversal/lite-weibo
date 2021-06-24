/**
 * @description user controller
 * @author JalonUniversal
 */

const { getUserInfo, createUser } = require('../services/user');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const ErrorInfo = require('../model/ErrorInfo');
const doCrypto = require('../utils/crypto');

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

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别 (1男性 2 女性 3保密)
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName);
  if(userInfo) {
    return new ErrorModel(ErrorInfo.registerUserNameNotExistInfo);
  }

  // 注册 service
  try {
    await createUser({
      userName,
      password: doCrypto(password),
      gender
    });
    return new SuccessModel();
  } catch(ex) {
    console.error(ex.message, ex.stack);
    return new ErrorModel(ErrorInfo.registerFailInfo);
  }
}

module.exports = {
  isExist,
  register,
}