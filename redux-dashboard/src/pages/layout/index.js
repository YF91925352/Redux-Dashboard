import { request } from "@/utils";
import { useEffect } from "react";

//测试token是否注入成功
export const Layout = () => {
  useEffect(() => {
    request.get("/user/profile");
  }, []);
  return <div>Layout</div>;
};
