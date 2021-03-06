/**
 * @description blog view route config
 * @author JalonUniversal
 */

const router = require('koa-router')();
const { loginRedirect } = require('../../middlewares/loginChecks');

// 首页
router.get('/', loginRedirect, async (ctx, next) => {
  await ctx.render('index');
});

module.exports = router;