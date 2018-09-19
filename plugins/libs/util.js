import axios from 'axios'
// import VueCookies from 'vue-cookie'
// import store from '../store'

let util = {}

// const ajaxUrl = process.env.NODE_ENV === 'development' ? 'http://xxx.xxx.xxx.xxx:(port)' : 'http://xxx.xxx.xxx.xxx:(port)'
const ajaxUrl = process.env.NODE_ENV === 'development' ? 'https://jsonplaceholder.typicode.com' : 'https://jsonplaceholder.typicode.com';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})
util.baseURL = util.ajax.defaults.baseURL
// 请求拦截
util.ajax.interceptors.request.use((config) => {
  let token = true
 // let token = store.state.user.token || JSON.parse(VueCookies.get('token')) || ''
  if (token) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
   // config.headers.Authorization = `Bearer ${token}`
    return config
  }
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截
util.ajax.interceptors.response.use((response) => {
  /*if (true !== response.data.isOk) {
    // 如果响应失败

    if (response.data.err.code == '-2' || response.data.err.code == '-1' || response.data.err.code == '-22') {
      // 判断状态码
    } else {

    }
    return Promise.reject(response)
  }*/
  return response
}, (err) => {
  if (err.response) {
    // 过滤请求响应的错误信息
  }
  return Promise.reject(err.response)
})

export default util
