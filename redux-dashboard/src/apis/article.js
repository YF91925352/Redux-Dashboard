//封装与文章相关的接口
import { request } from "@/utils";
//获取频道列表
export const getChannelAPI = () => {
  return request({ url: "/channels", method: "GET" });
};
//提交文章表单数据
export const createArticleAPI = (data) => {
  request({ url: "/mp/articles?draft=false", method: "POST", data });
};
//获取文章列表
export const getArticleListAPI = (params) => {
  return request({ url: "/mp/articles", method: "GET", params });
};
//删除文章
export const delArticleAPI = (id) => {
  return request({ url: `/mp/articles/${id}`, method: "DELETE" });
};
