const handleBlogRouter = (req, res) => {  
  console.log(req.path);
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: '获取博客列表'
    }
  }

  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '获取博客详情'
    }
  }

  if (req.method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新博客详情'
    }
  }

  if (req.method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '创建新博客'
    }
  }
}
module.exports = handleBlogRouter;