/**
 * @description 存储配置
 * @author JalonUniversal
 */
const { isProd } = require('../utils/env');

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
}

const MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'koa2-weibo-db'
}

if(isProd) {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }

  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'koa2-weibo-db'
  }
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF,
}