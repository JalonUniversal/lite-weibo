const Sequelize = require('sequelize');

const conf = {
  host: 'localhost',
  dialect: 'mysql'
};

conf.pool = {
  max: 5, // 连接池中最大的连接数量
  min: 0, // 最小
  idle: 10000, // 如果一个连接池 10s 之内没有被使用，则释放
}

const seq = new Sequelize('koa2-weibo-db', 'root', 'root', conf);

module.exports = seq;