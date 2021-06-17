/**
 * @description json test
 * @augments JalonUniversal
 */

const server = require('./server');

test('json 接口返回数据 格式正确', async () => {
  const res = await server.get('/json');
  expect(res.body).toEqual({
    title: 'koa2 json'
  })
  expect(res.body.title).toEqual('koa2 json')
})