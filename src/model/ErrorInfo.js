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
  }
}

module.exports = ErrorInfo;