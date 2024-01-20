//用户相关的所有请求

import { request } from "@/utils";

//登陆请求
export const loginAPI = (formData) => {
  return request({ url: "/authorizations", method: "POST", data: formData });
};

export const getUserInfoApi = () => {
  return request({ url: "/user/profile", method: "GET" });
};
