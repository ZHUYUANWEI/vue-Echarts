// /**
//  * 引入axios，创建axios实例
//  * 封装axios请求拦截器
//  */
// import axios from 'axios'

// // axios 配置请求头
// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'// 设置
// axios.defaults.withCredentials = false

// // 添加请求拦截器
// axios.interceptors.request.use((config) => {
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

// // 添加响应拦截器 返回状态判断
// axios.interceptors.response.use((response) => {
//     return response
// }, (error) => {
//     return Promise.reject(error)
// })

// // 封装post请求
// export function post (url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 resolve(response.data)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }

// // 封装get请求
// export function get (url) {
//     return new Promise((resolve, reject) => {
//         axios.get(url)
//             .then(response => {
//                 resolve(response.data)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }

// export function getWithParams (url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {params: params})
//             .then(response => {
//                 resolve(response.data)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
