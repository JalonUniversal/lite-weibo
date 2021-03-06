/**
 * @description user 数据格式校验
 * @author JalonUniversal
 */

const validate = require('./_validate');

// 检验规则
const USER_SCHEMA = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      pattern: '^[a-zA-Z][a-zA-Z0-9_]+$', // 字母开头， 字母数字下划线
      maxLength: 255,
      minLength: 2
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    nickName: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    picture: {
      type: 'string',
      maxLength: 255
    },
    city: {
      type: 'string',
      maxLength: 255,
      minLength: 2
    },
    gender: {
      type: 'number',
      minimum: 1,
      maximum: 3
    }
  }
}

/**
 * 检验用户数据格式
 * @param {Object} data 待检验的数据
 */

function userValidate(data = {}) {
  return validate(USER_SCHEMA, data);
}

module.exports = userValidate