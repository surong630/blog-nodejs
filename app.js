const http = require('http');
const handleBlogRouter = require('./src/router/blog')
const serverHandle = http.createServer((req, res) => {
  // 设置返回格式json
  res.setHeader('Content-type', 'application/json');
  // 获取path
  const url = req.url;
  const path = url.split('?')[0]
  req.path = path;
  // 处理blog的路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return;
  }

  res.writeHead(404, {'Content-type': 'text/plain'});
  res.write('404 not found\n');
  res.end();
});
serverHandle.listen(8000);