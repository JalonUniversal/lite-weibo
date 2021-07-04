/**
 * @description 失败信息集合 包括 errno 和 message
 * @author JalonUniversal
 */

const ErrorInfo = {
  // 用户名已存在
  registerUserNameNotExistInfo: {
    errno: 10001,
    message: '用户名已存在'
  },
  // 注册失败
  registerFailInfo: {
    errno: 10002,
    message: '注册失败, 请重试'
  },
  jsonSchemaFailedInfo: {
    errno: 10003,
    message: '参数格式错误, 请重试'
  },
  // 登录失败
  loginFailInfo: {
    errno: 10004,
    message: '登录失败, 用户名或密码错误'
  },
  // 未登录
  loginCheckFailInfo: {
    errno: 10005,
    message: '您尚未登录'
  },
  // 修改密码失败
  changePasswordFailInfo: {
    errno: 10006,
    message: '修改密码失败'
  },
  // 上传文件过大
  uploadFileSizeFailInfo: {
    errno: 100007,
    message: '上传文件尺寸过大'
  },
  // 修改基本信息失败
  changeInfoFailInfo: {
    errno: 100008,
    message: '修改基本信息失败'
  },
  // 删除用户失败
  deleteUserFailInfo: {
    errno: 100010,
    message: '删除用户失败'
  }
}

module.exports = ErrorInfo;