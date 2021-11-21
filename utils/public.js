function queryPostData(ctx){
  return new Promise((res) => {
    var postData = ""; 
    // 数据块接收中
    ctx.req.addListener("data", (chunk) => {
      postData += chunk;
    });
    // 数据接收完毕，执行回调函数
    ctx.req.addListener("end", () => {
      res(postData && JSON.parse(postData))
    });
  })
}


module.exports = {
  queryPostData
}