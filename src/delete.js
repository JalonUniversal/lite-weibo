const { User, Blog } = require('./model');

!(async function() {

  // 删除一条博客
  // const deleteBlogRes = await Blog.destroy({
  //   where: {
  //     id: 4
  //   }
  // });

  // console.log('deleteBlogRes...', deleteBlogRes > 0);

  // 删除一个用户
  const deleteUserRes = await User.destroy({
    where: {
      id: 1
    }
  });
  console.log('deleteUserRes...', deleteUserRes > 0);

})();