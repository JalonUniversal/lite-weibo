const { Blog, User } = require('./model');

!(async function() {
  const zhangsan = await User.create({
    userName: 'zhangsan',
    password: '123',
    nickName: '张三'
  });

  console.log('zhangsan: ', zhangsan.dataValues);
  const zhangsanId = zhangsan.dataValues.id;

  const lisi = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: '李四'
  });

  const lisiId = lisi.dataValues.id;

  const blog1 = await Blog.create({
    title: '张三的第一篇微博',
    content: '内容1',
    userId: zhangsanId
  });

  console.log('blog1: ', blog1.dataValues);

  const blog2 = await Blog.create({
    title: '张三的第二篇微博',
    content: '内容2',
    userId: zhangsanId
  });

  const blog3 = await Blog.create({
    title: '李四的第一篇微博',
    content: '内容2',
    userId: lisiId
  });

  const blog4 = await Blog.create({
    title: '李四的第二篇微博',
    content: '内容4',
    userId: lisiId
  });

  console.log('blog3: ', blog3.dataValues);

})();