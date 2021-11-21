const axios = require('axios')
const reqData = {token: ''}

function setToken(token) {
  token && (reqData.token = token)
}

function createReq(url, headers = {}) {
  // const source = axios.CancelToken.source();
  const req = axios.create({
    baseURL: url,
    headers: Object.assign(headers, {
      'Accept': 'application/json',
    }),
    // timeout: 10 * 1000,
    validateStatus: () => true,
  });
  // 请求拦截器
  req.interceptors.request.use(
    (config) => {
      token && (config.headers.Authorization = token);
      return config;
    },
    (err) => {
      console.log(err);
      return Promise.resolve(err);
    }
  );

  // 响应拦截器
  req.interceptors.response.use(
    (res) => {
      errHandle(res.status, res.data);
      return res;
    },
    (err) => {
      return Promise.resolve(err);
    }
  );
  return req;
}

const github = createReq('https://api.github.com/');


function errHandle(status, data) {
  switch (status) {
    case 400:
      console.log("请确认数据格式，再次请求");
      break;
    case 401:
      console.log("服务器异常，请联系管理员");
      break;
    case 403:
      // 处理token过期问题
      reqData.token = '';
      break;
    case 404:
      // 处理404
      console.log("服务器异常，请联系管理员")
      break;
    // default: console.log(data)
  }
}

module.exports = {
  setToken,
  github
}