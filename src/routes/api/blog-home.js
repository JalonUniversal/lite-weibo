/**
 * @description 首页 API 路由
 * @author JalonUniversal
 */

const router = require('koa-router')();
const { create } = require('../../controller/blog-home');
const { loginCheck } = require('../../middlewares/loginChecks');

router.prefix('/api/blog');

// 创建微博
router.post('/create', loginCheck, async (ctx, next) => {
  const { content, image } = ctx.request.body;
  const { id: userId } = ctx.session.userInfo;
  // controller
  ctx.body = await create({ userId, content, image });
});

module.exports = router;