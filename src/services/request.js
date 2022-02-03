import axios from "axios";
import { BASE_URL } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use((config) => {
  return config
}, err => {
  console.log(err);
})

// 相应拦截
instance.interceptors.response.use((res) => {
  return res.data
}, err => {
  if(err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break
      case 401:
        console.log("未授权");
        break
      default: 
        console.log("其他错误");
    }
  }
  return err
})

export default instance