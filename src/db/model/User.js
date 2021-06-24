/**
 * @description 用户数据模型
 * @author JalonUniversal
 */

const seq = require('../seq');
const { STRING, DECIMAL } = require('../types');

// users
const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true,
    commnet: '用户名, 唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    commnet: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    commnet: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    commnet: '性别 (1男性 2 女性 3保密)'
  },
  picture: {
    type: STRING,
    commnet: '头像, 图片地址'
  },
  city: {
    type: STRING,
    commnet: '城市'
  },
});

module.exports = User;