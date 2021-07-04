/**
 * @description user controller
 * @author JalonUniversal
 */

const { getUserInfo, createUser, deleteUser, updateUser } = require('../services/user');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const ErrorInfo = require('../model/ErrorInfo');
const doCrypto = require('../utils/crypto');

/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
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
  if (userInfo) {
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
  } catch (ex) {
    console.error(ex.message, ex.stack);
    return new ErrorModel(ErrorInfo.registerFailInfo);
  }
}

/**
 * 登录
 * @param {Object} ctx koa2 ctx
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function login(ctx, userName, password) {
  // 登录成功 ctx.session.userInfo = xxx
  // 获取用户信息
  const userInfo = await getUserInfo(userName, doCrypto(password));
  if (!userInfo) {
    // 登录失败
    return new ErrorModel(ErrorInfo.loginFailInfo)
  }
  // 登录成功
  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo;
  }
  return new SuccessModel()
}

/**
 * 删除当前用户
 * @param {string} userName 用户名
 */
async function deleteCurUser(userName) {
  const result = await deleteUser(userName);
  if (result) {
    return new SuccessModel();
  }
  return new ErrorModel(ErrorInfo.deleteUserFailInfo);
}

/**
 * 修改个人信息
 * @param {Object} ctx koa2 ctx
 * @param {string} nickName 昵称
 * @param {string} city 城市 
 * @param {string} picture 头像
 */
async function changeInfo(ctx, { nickName, city, picture }) {
  const { userName } = ctx.session.userInfo;
  if (!nickName) {
    nickName = userName;
  }

  const result = await updateUser(
    {
      newNickName: nickName,
      newCity: city,
      newPicture: picture
    },
    { userName }
  );
  // 执行成功
  if (result) {
    Object.assign(ctx.session.userInfo, {
      nickName,
      city,
      picture
    });
    return new SuccessModel();
  } else {
    // 返回
    return new ErrorModel(ErrorInfo.changeInfoFailInfo);
  }
}

/**
 * 修改密码
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {string} newPassword 新密码
 */
async function changePassword(userName, password, newPassword) {
  const result = await updateUser(
    { 
      newPassword: doCrypto(newPassword) 
    },
    {
      userName,
      password: doCrypto(password)
    }
  );
  // 执行成功
  if(result) {
    return new SuccessModel();
  }
  // 失败
  return new ErrorModel(ErrorInfo.changePasswordFailInfo);
}

/**
 * 退出登录
 * @param {Object} ctx 
 */
async function logout(ctx) {
  delete ctx.session.userInfo;
  return new SuccessModel();
}

module.exports = {
  isExist,
  register,
  login,
  deleteCurUser,
  changeInfo,
  changePassword,
  logout,
}