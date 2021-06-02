const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: 'lwh heroman black socks',
    blogList: [
      { id: 1, title: 'weibo-1' },
      { id: 2, title: 'weibo-2' },
      { id: 3, title: 'weibo-3' },
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  ctx.body = {
    userName,
    password
  }
})

module.exports = router
