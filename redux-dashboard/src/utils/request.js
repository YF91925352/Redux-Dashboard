//axios的封装
import { router } from "@/router";
import axios from "axios";
import { getToken, removeToken } from "./token";
export const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});
// 添加请求拦截器
request.interceptors.request.use(
  //向config对象中注入token数据
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    //监控401 token失效
    //console.dir(error);
    if (error.response.status === 401) {
      removeToken();
      router.navigate("/login");
      //再次刷新防止页面401报错
      window.location.reload();
    }
    return Promise.reject(error);
  }
);
